# ECS systems: how they are implemented

## Summary

A module declares an ECS system with `#[system]` on a free function, and its entry point turns each declaration into a `register_system` call. `register_system` turns the function into a boxed `System` and records what its parameters read and write. Every update, the engine groups ECS systems that touch disjoint data into **batches**, runs each batch's ECS systems in parallel on the shared Rayon pool, then applies the queued `Commands`. In development builds every ECS system is called through a **hot slot**, a replaceable function pointer that also catches panics.

This is the implementation counterpart of [concepts/systems.md](../concepts/systems.md). Read that first for how to write and register ECS systems.

## At a glance

| Piece               | What it is                                                                            | Where             |
| ------------------- | ------------------------------------------------------------------------------------- | ----------------- |
| `System`            | trait with one method: `run(&mut World, &mut CommandQueue) -> Result<(), SystemError>` | `system.rs`      |
| `SystemParam`       | a parameter type that can take itself out of the world (`Query`, `Res`, `ResMut`, `Commands`) | `system.rs` |
| `IntoSystem`        | boxes a function into a `System`, plain or through a hot slot                          | `system.rs`       |
| `SystemAccess`      | sets of component and resource ids read and written, plus a "uses `Commands`" flag     | `scheduler.rs`    |
| `SystemScheduler`   | the conflict matrix and the parallel batches                                           | `scheduler.rs`    |
| `RegisteredSystem`  | name, owner, boxed system, access, enabled flag, `last_run` tick, timings             | `engine.rs`       |
| `SystemOwner`       | which module registered the ECS system, so a reload removes only that module's ones    | `engine.rs`       |
| `HotSlot`           | atomic function address + signature hash, for hot patching                             | `hot_patch.rs`    |
| `CommandQueue`      | deferred entity changes, applied after all ECS systems ran                             | `commands.rs`     |

```
 Engine::process_frame  (one update)
 ├─ 1  bump the world tick, advance Time, apply queued Input
 ├─ 2  rebuild the batches if the ECS system list changed
 ├─ 3  run ECS systems:   batch 0 ║ batch 1 ║ batch 2 ...    (each batch in parallel)
 ├─ 4  update C# scripts
 ├─ 5  apply the CommandQueue (create, destroy, add, remove)
 └─ 6  run post-update ECS systems, one after another
```

## How does a function become an ECS system?

Through three traits that work on the function's parameter types.

1. **`SystemParam`** is implemented for `Query<Q, F>`, `Res<T>`, `ResMut<T>`, `Commands` and tuples of up to seven of them. Each implementation has two jobs:
   - `report_access` adds its reads and writes to a `SystemAccess`;
   - `fetch` builds the parameter from `&mut World` and `&mut CommandQueue`.
2. **`SystemParamFunction`** is implemented for any `FnMut` whose arguments are all `SystemParam`s, so the engine can call it with a tuple.
3. **`IntoSystem`** wraps the function in a closure that fetches the parameters, calls the function, and converts its return value (`()` or `Result<(), SystemError>`) into one result type. The closure is boxed as `Box<dyn System>`.

`register_system` calls `Input::report_access` once, boxes the function, and pushes a `RegisteredSystem` tagged with the current `SystemOwner`. It then marks the scheduler as out of date.

## How does `#[system]` reach `register_system`?

A module does not call `register_system` for its own ECS systems. It declares them where they are defined:

```rust
#[system(name = "movement", order = 10)]
fn movement(mut query: Query<(&mut Position, &Velocity)>) { /* ... */ }
```

- The attribute submits a `PillSystemDescriptor` (`name`, `order`, `post_update`, and a `register` function that makes the `register_system` call, so the parameter tuple is inferred where the function is declared) into an `inventory` collection.
- The module's entry point calls `register_all_systems` after the components and before the module's own `register` function, on the first load and on every reload. It sorts this image's descriptors by `(order, name)` and registers them in that order. `inventory` order is link order, not source order, so without the sort the schedule would follow the linker.
- On a reload, the walk keeps only the descriptors **this image** added. The retired generation stays loaded in the graveyard, and its descriptors are still in the collection. The host counts them (a `DeclarationBaseline`) just before it loads the new image, and the walk skips everything before that count (`declarations.rs`).
- `order` sorts one module's ECS systems against each other. It does not move them ahead of another module's, because each module's ECS systems are appended in the order the modules register.
- `post_update` places the ECS system in the post-update stage, after the command flush. `#[pill_hot]` is a separate decision (whether the ECS system can be hot patched) and may sit beside `#[system]`.

`register_system` stays public for code that owns its ECS systems directly: the host, the editor and tests.

## Why can a parameter not be stored or returned?

Because its lifetime is faked.

A `RegisteredSystem` is stored for the whole run, so its parameter types must be `'static`. But a `Query` really borrows the world for one call. `SystemParam::fetch` hides that by transmuting the borrow to `'static`. This is sound only while the parameter is dropped before the call returns:

- never store it in a static, a resource or a component;
- never move it into a thread, task or closure that outlives the call;
- never return it.

`fetch` is an `unsafe fn`, and the closure built by `IntoSystem` is its only caller. The closure drops the parameters when the call ends, so ordinary ECS system code cannot break the rule unless it smuggles the parameter out on purpose.

## What does an ECS system's access record contain?

| Parameter              | Recorded as                                        |
| ---------------------- | -------------------------------------------------- |
| `Query<&T>`            | component read of `T`                              |
| `Query<&mut T>`        | component write of `T`                             |
| `With<T>`, `Changed<T>`, `Added<T>` in a filter | component read of `T`     |
| `Without<T>`           | nothing                                            |
| `Res<T>`               | resource read of `T`                               |
| `ResMut<T>`            | resource write of `T`                              |
| `Commands`             | `uses_commands = true`                             |

A filter that requires a component counts as a read, because it looks at that component's ticks or presence. Without that, a writer of `T` could run in parallel with an ECS system filtering on `Changed<T>`.

## How are batches built?

From an all-pairs conflict check, then a first-fit fill in registration order.

**Conflicts.** `SystemAccess::conflicts_with` says two ECS systems conflict when:

- either one uses `Commands`; or
- one writes a component the other reads or writes; or
- one writes a resource the other reads or writes.

`ensure_execution_graph` compares every pair once (an O(n²) check) and stores the answers in a symmetric matrix. It only runs when the ECS system list changed, not every update.

**Batches.** ECS systems are taken in registration order. Each one joins the **first** existing batch that contains nothing it conflicts with. If no batch fits, it opens a new batch at the end. Batches run one after another; the ECS systems inside one batch run at the same time.

> **Example:** three ECS systems, registered in this order:
>
> | ECS system  | Reads      | Writes     |
> | ----------- | ---------- | ---------- |
> | `apply_input` | –        | `Velocity` |
> | `movement`  | `Velocity` | `Position` |
> | `animate`   | –          | `Sprite`   |
>
> `apply_input` opens batch 0. `movement` reads `Velocity`, which `apply_input` writes, so it opens batch 1. `animate` conflicts with neither and joins batch 0. Result: `[apply_input, animate]`, then `[movement]`.

## Does registration order decide which of two conflicting ECS systems runs first?

Not always. Two conflicting ECS systems never share a batch, but first-fit can place the later one in an **earlier** batch.

The later ECS system skips only the batches it conflicts with. If an earlier batch holds nothing it conflicts with, it joins that batch, even when an ECS system it does conflict with was registered before it and sits in a later batch.

> **Example:** registered in this order:
>
> | ECS system | Reads      | Writes     |
> | ---------- | ---------- | ---------- |
> | `A`        | –          | `Position` |
> | `B`        | `Position` | `Velocity` |
> | `C`        | `Velocity` | `Health`   |
>
> `A` opens batch 0. `B` conflicts with `A` (on `Position`) and opens batch 1. `C` conflicts with `B` (on `Velocity`) but not with `A`, so it joins **batch 0**. The order is `[A, C]`, then `[B]`: `C` reads `Velocity` **before** `B` writes it in this update, although `B` was registered first.
>
> The scheduler's own test `a_three_system_chain_batches_only_the_systems_that_do_not_disagree` (`scheduler.rs:839`) builds exactly this chain and checks the fill `[0, 2], [1]`.

So an ECS system is guaranteed to run after an earlier one it conflicts with only when it also conflicts with something in every batch before that one. When order matters for a chain like this, there are two options:

- give the later ECS system a conflict with each earlier batch. In the example, `C` taking `Query<&Position>` makes it conflict with `A`, so it skips batch 0, skips batch 1 because of `B`, and opens batch 2;
- turn parallel execution off with `Engine::set_parallel_execution(false)`, which runs every ECS system strictly in registration order.

The same applies to an ECS system with `Commands`: it conflicts with everything, so it always gets a batch of its own, but an ECS system registered after it can still join an earlier batch. This rarely matters, because `Commands` only take effect after the update anyway.

## How does a batch run in parallel?

A batch of one ECS system runs directly on the main thread. A larger batch runs on the Rayon pool:

1. On the main thread, while it still holds `&mut World` legally, the engine reserves one change tick per batch member and records each member's `last_run`.
2. It turns `&mut self.world`, `&mut self.queue` and the ECS system list into raw pointers (wrapped in `SendPtrMut` so they can cross threads).
3. Each Rayon task rebuilds `&mut World` from the pointer, installs its reserved ticks in thread-locals (`pill_core::system_ticks`), and calls its ECS system.

Several tasks hold `&mut World` at the same time. That is only sound because the scheduler proved their accesses are disjoint, and because no ECS system in a multi-member batch uses `Commands`, so none of them touches the shared `CommandQueue`. In debug builds, `ResMut` also records each resource it borrows in a mutex-guarded set, so a scheduler bug that hands two ECS systems the same resource is caught.

The Rayon pool is the one in `pill_core.dll/.so`, shared by every module. A module must never build its own pool: its threads would keep running the module's code after a reload unloads it.

## When are commands applied?

After every ECS system and C# script of the update has run, in step 5 of `process_frame`.

`Commands` methods only push a `DeferredCommand` onto the engine's `CommandQueue`. `execute_queued_commands` then drains the queue in submission order and applies each command with the normal `World` functions. Deferring has two benefits:

- archetypes never change while an iterator is walking them, so no row moves under a running query;
- ECS systems in a parallel batch never change the world's structure at the same time.

A command that fails (for example, destroying an entity that is already gone) is collected. By default each failure is logged as `deferred command failed` and the update carries on; with `should_exit_on_error`, `process_frame` returns the errors instead.

**Post-update ECS systems** (`register_post_update_system`) run after the flush, one after another. They see this update's created and destroyed entities, and any `Commands` they queue apply at the end of the **next** update.

## How are errors and panics handled?

| What happens in the ECS system      | `development` feature on (dev default)                         | `development` feature off (shipping) |
| ----------------------------------- | -------------------------------------------------------------- | ---------------------------------- |
| returns `Err(SystemError)`          | recorded in `system_failures`; the update continues            | the same                            |
| panics                              | caught with `catch_unwind`, recorded as a `SystemError`; the update continues | unwinds out of the engine and ends the program |
| a hot-patched body panics three updates in a row (`PANIC_ROLLBACK_FRAMES`) | the host rolls the patch back to the previous version | –                     |

With `development` on, `prepare_system` boxes **every** ECS system through `into_hot_system`, not only the ones marked `#[pill_hot]`. That wrapper is what catches the panic, so the catch does not depend on the attribute.

Failures are drained by the player once per update and reported through a rate limiter, which collapses repeats of the same message so one ECS system failing every update does not flood the log.

## What happens to ECS systems during a hot reload?

The reloading module's ECS systems are removed, and the new generation's **registration** registers them again. A reload does not run the module's `init`: it runs the declarations (components, `#[system]`s, resources, asset types) and then the module's `register` function. `init` runs once, on the first load.

1. The host calls `begin_module_registration(owner)`, so every `register_system` during the module's registration is tagged with that module's `SystemOwner`.
2. Before the new generation registers, `clear_systems_owned_by(owner)` removes that owner's ECS systems and their hot slots. Other modules' ECS systems are untouched.
3. The new registration registers fresh `RegisteredSystem`s, in `(order, name)` order, and they are **appended** to the end of the list.

Two consequences follow:

- **The reloaded module's ECS systems move to the end of the registration order.** Before the reload they might have run before the project's ECS systems; after it, they are placed after them. Batches are rebuilt from the new order on the next update.
- **`Changed<T>` and `Added<T>` see everything once.** A new `RegisteredSystem` starts with `last_run = 0`, so on its first run every row counts as added and changed. An ECS system that reacts to `Changed<T>` runs its reaction for every entity once after each reload.

ECS systems the engine registers for itself use `SystemOwner::ENGINE`. Their code lives in `pill_engine_core.dll/.so`, which is never unloaded, so no reload clears them.

## How does a hot patch replace a function without re-registering it?

Through the hot slot that `into_hot_system` created.

The boxed closure does not call the user's function directly. It reads an address from the slot with one atomic load and calls that. Hot patching (`Engine::hot_patch`) stores a new address, after checking that the new function's **signature hash** (parameter tuple and return type) matches the old one. A mismatch is refused, because the closure was compiled for the old shape.

Unlike a reload, a patch keeps the ECS system's position, its batch, its access record and its `last_run` tick. The world is not touched. The slot is registered under both the display name (`"movement"`) and the function's path, because a patch reports the path and the two often differ.

The patched code lives in a patch DLL that the host never unloads, so an old address stays callable.

## How do pausing and disabling work?

All three controls change flags that the dispatch loop reads; none of them rebuilds the batches.

- `set_systems_paused(true)` skips step 3 of the update. The world tick still advances, scripts still run and commands are still applied.
- `request_single_step` runs step 3 once while paused.
- `enable_system(name)` / `disable_system(name)` flip `RegisteredSystem.enabled`. A disabled ECS system keeps its place in its batch and is skipped at dispatch.
- `set_systems_enabled_for_owner` suspends a whole module. The development host uses it to pause the renderer's GPU module when its data crate's layout changed and the GPU module has not been rebuilt against it yet. A module that registers ECS systems while suspended registers them disabled.

## Where is this in the code?

All paths are in `modules/engine/pill_engine_core/src/` unless noted.

| What                                                             | Where                                               |
| ---------------------------------------------------------------- | --------------------------------------------------- |
| `System`, `SystemParam`, `IntoSystem`, `into_hot_system`         | `system.rs`                                         |
| `SystemAccess`, `conflicts_with`, `ensure_execution_graph`       | `scheduler.rs`                                      |
| `register_system`, `process_frame`, parallel dispatch, owners    | `engine.rs`                                         |
| `#[system]` descriptors, `register_all_systems`, the declaration baseline | `modules/engine/pill_engine/src/declarations.rs` |
| `HotSlot`, signature hashes, panic streaks                       | `hot_patch.rs`                                      |
| `CommandQueue`, `execute_queued_commands`                        | `commands.rs`                                       |
| `SystemError`, `SystemFailure`                                   | `error.rs`                                          |
| Per-thread ticks for parallel batches                            | `modules/engine/pill_core/src/`, `system_ticks`     |
| Failure reporting                                                | `modules/hosting/pill_player/src/runtime.rs`        |
| Clearing and re-registering ECS systems on reload                | `modules/hosting/pill_development_host/src/reload.rs` |
