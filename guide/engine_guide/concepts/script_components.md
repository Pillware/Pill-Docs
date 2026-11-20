# Script components: how they are implemented

## Summary

A script component is an ordinary component plus one entry in the world's script table. `#[script]` reads the `impl ScriptComponent` block at compile time and turns it into a declaration: which lifecycle methods exist, each one's order, and the edit-mode flag. The module's entry point registers every declared script on every load. Registration builds one plain function pointer per implemented lifecycle method, compiled into the declaring module, and stores them under the type's name.

Every update, after the project's ECS systems, the engine runs three passes over the scripts: `on_create` and `on_start` for the components that started existing since the last update, then `on_update` for every script. `on_stop` and `on_destroy` run inside the command flush, just before a queued removal moves the row. A play session adds its own passes at Play and at Stop.

This is the implementation counterpart of [script_components.md](../../user_guide/concepts/script_components.md). Read that first for how to write a script.

## At a glance

| Piece                                                | What it is                                                                                                          | Where                             |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `ScriptComponent`                                    | the trait with the five lifecycle methods, each with a no-op default; requires `Component + ScriptDeclaration`      | `systems/scripting.rs`            |
| `ScriptDeclaration`, `ScriptDeclarationData`         | the compile-time declaration: which lifecycle methods a block defines, their orders, `run_in_edit_mode`             | `systems/scripting.rs`            |
| `ScriptContext`                                      | the view of the world a lifecycle method receives: reads, a mutable component borrow, queued structural changes     | `systems/scripting.rs`            |
| `CreateInfo`, `StartInfo`, `StopInfo`, `DestroyInfo` | why a lifecycle method ran: a cause enum each, plus `mode` and `duplicated_from` for create                         | `systems/scripting.rs`            |
| `#[script]`                                          | reads the block, strips `#[order(n)]`, emits the declaration and an `inventory` descriptor                          | `pill_engine_macros/src/lib.rs`   |
| `PillScriptDescriptor`, `register_all_scripts`       | the per-module collection and the walk the entry point runs                                                         | `pill_engine/src/declarations.rs` |
| `ScriptRegistration`                                 | one registered type: component id, one adapter and one order per lifecycle method, the edit-mode flag               | `ecs/world/scripting.rs`          |
| `ScriptCreateAdapter` … `ScriptDestroyAdapter`       | the plain `fn` pointer types a registration stores, one per lifecycle method (create, start, update, stop, destroy) | `ecs/world/scripting.rs`          |
| `World::register_script_component::<T>`              | registers the component, builds the adapters, stores the entry by type name                                         | `ecs/world/scripting.rs`          |
| `World::update_scripts`                              | the `on_update` pass                                                                                                | `ecs/world/scripting.rs`          |
| `PendingScriptEvent`                                 | one queued "this component started existing" event: entity, type name, causes                                       | `ecs/world/lifecycle.rs`          |
| `run_script_lifecycle_passes`                        | the `on_create` pass, then the `on_start` pass                                                                      | `ecs/world/lifecycle.rs`          |
| `run_script_removal_passes`                          | `on_stop` and `on_destroy` for one queued removal or destroy                                                        | `ecs/world/lifecycle.rs`          |
| `run_play_stop_script_passes`                        | `on_stop` and `on_destroy` for every script when Stop discards the play world                                       | `ecs/world/lifecycle.rs`          |
| `ChangeOrigin`                                       | who is changing the world right now; becomes the cause a lifecycle method reports                                   | `ecs/world/change_origin.rs`      |

Paths are in `modules/engine/pill_engine_core/src/` unless they name another crate.

```
 Engine::process_frame  (one update)
 ├─ 1  pre_project ECS systems
 ├─ 2  flush ──► queued remove / destroy ─► run_script_removal_passes ─► on_stop (session only), on_destroy
 │               queued create / add ─────► record_script_attachment ─► PendingScriptEvent
 ├─ 3  project ECS systems
 ├─ 4  scripts  (playing and not paused, a single step, or editing)
 │      ├─ run_script_lifecycle_passes ─► on_create pass, then on_start pass (Playing only)
 │      └─ update_scripts ──────────────► on_update, by (order, type name)
 ├─ 5  flush (as in 2)
 └─ 6  post_project ECS systems
```

## Why is the declaration a compile-time attribute?

The engine needs to know which lifecycle methods a type implements without calling them. It skips a type that has no `on_update`, sorts each pass by that lifecycle method's own order, and runs only opted-in scripts while editing. Rust cannot ask at run time whether an `impl` overrode a default method, so `#[script]` reads the answer from the block's syntax.

The attribute is also required, not optional. `ScriptComponent` has `ScriptDeclaration` as a supertrait, and only the attribute implements `ScriptDeclaration`. A block without the attribute therefore fails to compile, with a `#[diagnostic::on_unimplemented]` message that says "add `#[script]` above this implementation". Without that bound, a forgotten attribute would give a script that silently never runs.

### What does `#[script]` emit?

For `#[script(edit_mode)] impl ScriptComponent for Spinner { ... }` the attribute emits:

1. The block itself, with every `#[order(n)]` marker removed, so the trait implementation holds only what the trait declares.
2. A hidden function `__pill_script_register_Spinner(world)` that calls `world.register_script_component::<Spinner>()`.
3. `impl ScriptDeclaration for Spinner`, whose `DECLARATION` constant records which of the five lifecycle methods the block defines, the order of each one (default `0`), and `run_in_edit_mode`.
4. A `PillScriptDescriptor { register }` submitted into the module's `inventory` collection.

The attribute refuses, with a compile error, every shape it cannot honour:

| Refused                                                    | Why                                                  |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| a block that does not implement `ScriptComponent`          | there are no lifecycle methods to read               |
| a generic block (`impl<T> ScriptComponent for Wrapper<T>`) | the engine registers one concrete type               |
| `#[order(n)]` on a method that is not a lifecycle method   | nothing would read it                                |
| two `#[order]` markers on one lifecycle method             | the order would be ambiguous                         |
| an argument other than `edit_mode`                         | it names the argument it accepts instead of guessing |

The macro recognises the trait by the last segment of its path, so `impl pill_engine::ScriptComponent for Spinner` is accepted too. That spelling matters for hot patching (see below).

## How does a declaration become a registration?

Through the module's entry point, on every load. The entry point runs the declarations in a fixed order: components, then `#[system]`s, then scripts (`register_all_scripts`), then resources and asset types, then the module's own `register`. On the first load only, `init` follows.

`register_all_scripts` walks the `PillScriptDescriptor` collection and calls each descriptor's `register` function. The collection lives in the engine core and is shared by every module image in the process, including retired generations that are still loaded. So, as for ECS systems, the walk keeps only the descriptors added after the `DeclarationBaseline` the host counted just before loading this image. The walk's own order does not matter, because every pass sorts by the orders stored in the registration.

`World::register_script_component::<T>()` then does three things:

1. **Registers `T` as an ordinary component.** A script is a component first: it has a bit in the component registry, a column in its archetypes, and the usual persistence and scene behaviour.
2. **Builds one adapter per implemented lifecycle method.** An adapter is a non-capturing closure coerced to a plain `fn` pointer. A lifecycle method the declaration does not implement gets `None`, so no pass ever calls it.
3. **Stores a `ScriptRegistration` under `std::any::type_name::<T>()`,** replacing any entry with that name, and clears the cached update order.

### Why are the adapters plain function pointers?

An adapter has to call `T::on_update` without the engine knowing `T`. The adapter is created inside the generic `register_script_component::<T>` call, so it is compiled into the module that declared the script, not into the engine core. A registration from a new module image therefore points every adapter at the new image's code.

The adapter receives the world and the command queue as raw pointers. The pass that calls it already holds a mutable borrow of the archetype's columns, to hand the adapter `&mut T` for the row, so it cannot also lend out `&mut World`. The pass takes `*mut World` before borrowing the columns, and the adapter builds a `ScriptContext` from the two pointers for one call.

Being a plain `fn` rather than a boxed closure is part of the safety argument. A `fn` has no captured environment, so an adapter has nowhere to keep those pointers after the call returns.

### Why is the table keyed by type name?

The update pass resolves the component's bit from the component registry on every call, rather than storing it at registration. A type that is removed and registered again on another bit is still found, and a hot reload only needs to replace the entry under the same name. The pending event queue (below) stores the same name, which is what lets an event queued before a reload resolve to the new image's adapters.

## How does the `on_update` pass run?

`update_scripts` runs once per update, on the calling thread:

1. Take the cached type order: every registered type that implements `on_update`, sorted by `(on_update order, type name)`. The cache is rebuilt only after a registration clears it.
2. For each type in that order, skip it when the engine is editing and the type did not opt in to edit mode. Resolve its bit, and collect `(entity, archetype, row)` from every archetype whose mask carries the bit.
3. Sort the collected rows by `(archetype id, row)`, so the order is the same from run to run, and call the adapter for each one.

The scripts run one after another rather than in parallel batches. A `ScriptContext` can read and write any component on any entity, so a script has no access record the scheduler could check against another one.

### When does the pass run at all?

`process_frame` runs both script steps (the lifecycle passes and `update_scripts`) when `runs_every_system_this_frame || run_mode == RunMode::Editing`:

| Engine state                 | Scripts step runs? | Which types take part                |
| ---------------------------- | ------------------ | ------------------------------------ |
| playing, not paused          | yes                | every type                           |
| playing, paused              | no                 | –                                    |
| playing, paused, single step | yes, once          | every type                           |
| editing                      | yes                | only types declared with `edit_mode` |

A paused session therefore keeps its pending events until it resumes or steps. The command flushes still run while paused, so `on_stop` and `on_destroy` still run for removals.

## Why can a script not change the world's structure directly?

Because a lifecycle method's `&mut self` points into an archetype column. Adding or removing a component migrates the entity's row to another archetype, and destroying an entity swap-removes it. Either would leave `self` pointing at memory the entity no longer owns.

`ScriptContext` prevents that by never handing out `&mut World`. Its structural methods (`create_entity`, `destroy_entity`, `add_component`, `remove_component`, and `get_commands` for anything else) only push onto the `CommandQueue`. `create_entity` reserves the entity id from the world at once, which allocates a handle but moves no row. The queue is drained by the flush after the scripts step, so no archetype changes shape while a pass walks it, and the `(archetype, row)` list the pass collected stays valid.

### What is the known aliasing hole?

`get_component_mut::<T>(entity)` returns `&mut T` for any entity, including the script's own. If a script asks for its own type on its own entity, that reference and `&mut self` point at the same value. By Rust's rules that is undefined behaviour. The API accepts it because the only thing that could invalidate either reference is a structural change, and the context only queues those. The user guide tells authors to change their own fields through `self` instead.

## How do the `on_create` and `on_start` passes work?

### Recording an attachment

A component can start existing in two places, and both record an event:

- **Entity insert** (`create_entity().with(...).build()`, a queued create): after the entity gets its row, the world calls `record_script_attachment` for every component id in its archetype.
- **Component-add migration** (`add_component`, a queued add, a scene load, which creates bare entities first and attaches their components afterwards): after the row moves to the archetype with the new component, the world records that one id.

`record_script_attachment` looks for a registration whose component id matches. For a script it pushes a `PendingScriptEvent` holding the entity, the type name, the create cause and `duplicated_from` (both read from the current `ChangeOrigin`), and the start cause `SpawnedDuringPlay`. Any other component is ignored.

The event holds handles, not pointers or borrows. It is checked when it is dispatched: the entity must still exist and its archetype must still carry the script's bit. A script removed before the pass runs is skipped, not resurrected.

### Dispatching the events

`run_script_lifecycle_passes` takes the whole queue and runs two passes over it:

1. **The `on_create` pass** keeps the events whose type implements `on_create` and, while editing, opted in to edit mode. It sorts them by `(on_create order, type name, entity id, entity generation)` and calls each adapter with a `CreateInfo` carrying the cause, the current run mode and `duplicated_from`.
2. **The `on_start` pass runs only while playing.** It keeps the events whose type implements `on_start` and that carry a start cause, sorts them the same way by the `on_start` order, and calls each adapter with a `StartInfo`.

Some consequences follow directly from this shape:

- **Every `on_create` of an update runs before any `on_start`,** because the passes are separate and run in that order.
- **Both run before that update's `on_update`,** because `update_scripts` runs after them.
- **While editing, events for scripts that did not opt in are taken and dropped.** Those scripts hear nothing, and Play queues every script again anyway.
- **An attachment made in step 2's flush is dispatched in the same update.** One made in step 5's flush waits for the next update's scripts step.
- **Commands that `on_create`, `on_start` or `on_update` queue** land in the queue that step 5 drains, in the same update.

## How are `on_stop` and `on_destroy` called on a removal?

They run inside the command flush. The executors for a queued component removal and a queued entity destruction call `run_script_removal_passes(entity, only, commands)` before they touch the row. `only` is the removed component's id, or `None` when the whole entity goes.

1. Find the registered script types on the entity's archetype that implement `on_stop` or `on_destroy` (only the `only` type, when one is given).
2. **`on_stop` pass:** only when a play session holds the edit world (`held_entity_storage.is_some()`). Cause `StopCause::Removed`, sorted by `(on_stop order, type name)`.
3. **`on_destroy` pass:** always. The cause comes from the current `ChangeOrigin`, and the pass is sorted by `(on_destroy order, type name)`.

The component is still in place during both calls, so a lifecycle method can read its own fields and its entity's other components.

Three behaviours here differ from the start side, and they are easy to get wrong:

| Behaviour                    | What the code does                                                                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edit-mode gating             | none. `on_destroy` fires for every script type, `edit_mode` or not, including while editing. The test `destroying_an_entity_tells_every_script_on_it` checks this.                                |
| `on_stop` outside the editor | never fires. Only the editor calls `enter_play`, so standalone, shipping and web builds never hold an edit world, and a removal there calls only `on_destroy`.                                    |
| Direct `World` calls         | no lifecycle methods. `World::remove_component`, `World::destroy_entity` and `try_remove_component_by_id` are the tooling path: there is no command queue to give the lifecycle method's context. |

### Where do commands from `on_stop` and `on_destroy` go?

Into the next flush, not the current one. The test `a_lifecycle_method_that_queues_during_a_removal_waits_for_the_next_flush` checks that after one flush the component is gone and the command `on_destroy` queued is still waiting, and that a second flush applies it. In `process_frame`, a removal applied in step 5 therefore has the commands its `on_stop` and `on_destroy` queued applied in the next update's step 2.

## What does a play session do to scripts?

### At Play

`Engine::enter_play` copies the entity storage and the `Restore` resources aside and switches to `RunMode::Playing`. It then calls `queue_scripts_for_play_start`, which **clears** the pending queue and queues every script the world holds, with the create cause `PlayStarted` and the start cause `PlayEntered`.

The queue is cleared first because an event still waiting from before Play is covered by the new entries. Dispatching both would tell a script it was created twice. The result is that the first update of a session looks like a scene load: `on_create`, then `on_start`, then `on_update`, for every script.

### At Stop

`Engine::exit_play` runs these steps, in this order:

1. **`run_play_stop_script_passes`** walks every script in the play world. It runs one `on_stop` pass (`PlayExited`) and then one `on_destroy` pass (`PlayStopRestored`), each sorted by `(order, type name, entity)`. The restore that follows discards those rows without a command, so this is the only place they can be reported.
2. The held entity storage and resources are restored.
3. **The command queue is cleared.** Commands from the last play update, and any the stop passes' lifecycle methods just queued, belong to the discarded world.
4. The run mode goes back to `Editing`, unpaused.
5. **`queue_scripts_for_play_stop_restore`** queues every script in the restored world with the create cause `PlayStopRestored` and no start cause. On the next editing update, the `on_create` pass tells the `edit_mode` scripts. No script starts, because no session has begun.

The editor's end-to-end suite checks this lifecycle against a real project. The `play_mode` area of `devops/tests/test_editor_egui.py` plays the scene test project, removes and re-adds its `LifecycleProbe`, stops, and reads the `[probe] create|start|update|stop|destroy` log lines with their causes.

## How does a lifecycle method know why it ran?

Through `ChangeOrigin`, a field on the world that labels every structural change made while it is set:

| `ChangeOrigin`         | Set by                                       | `CreateCause`      | `DestroyCause`     |
| ---------------------- | -------------------------------------------- | ------------------ | ------------------ |
| `Simulation` (default) | nothing: project code always gets it         | `Spawned`          | `Despawned`        |
| `Authoring`            | the editor applying a recorded command batch | `Authored`         | `Authored`         |
| `HistoryRestore`       | the editor replaying an undo or a redo       | `HistoryRestored`  | `HistoryRestored`  |
| `Duplicate { source }` | a paste or a duplicate                       | `Duplicated`       | `Despawned`        |
| `SceneLoad`            | `load_scene`                                 | `SceneLoaded`      | `SceneUnloaded`    |
| `PlayStopRestore`      | the play session's restore                   | `PlayStopRestored` | `PlayStopRestored` |

`World::with_change_origin` and `Engine::with_change_origin` set the origin for a closure and put the previous one back, so scopes nest. The origin is read when the event is recorded (create) or when the removal pass runs (destroy). That is why the editor wraps both the batch application **and** its flush in one scope: a command queued under `Authoring` must also be executed under `Authoring`.

Keeping the origin as world state, rather than a parameter on every structural call, means the command executors, the eager API and the scene loader all report through one field. The translation to causes lives in the engine core, so a component never sees the editor's own vocabulary. A shipping build never changes the origin, so its scripts only ever see `Spawned` and `Despawned`.

`PlayStarted`, `PlayEntered`, `PlayExited` and `StopCause::Removed` do not come from an origin. The play session and the removal pass set them directly.

## What happens to scripts during a hot reload or a hot patch?

### Hot reload

The arriving image's entry point runs `register_all_scripts` again. Each `register_script_component::<T>` replaces the entry under the same type name, so every adapter now points at the new image. Nothing else changes:

- **No lifecycle method is repeated.** The script components' rows are untouched by the registration, and no event is queued for them. The test `a_re_registration_repeats_neither_create_nor_start` checks that a re-registration only updates.
- **Pending events survive.** They hold the type name, which resolves to the new entry at dispatch time.
- **Component values follow the component rules.** A `persistable` script's rows are migrated when its fields change; see [components.md](components.md) and [hot_reloading.md](../levels/hosting/hot_reloading.md).

The set of lifecycle methods, the orders and the edit-mode flag are read only at registration, so changing any of them needs a reload. `pill_hot_scan` keeps an `#[order(n)]` marker outside the stripped function bodies, so an order edit is classified as structural rather than as a body edit (`an_order_marker_survives_body_stripping`).

### Hot patch

Lifecycle methods have no hot slot. The adapter calls `T::on_update` (and the other lifecycle methods) directly, so an edit to a lifecycle method's body goes through the prologue redirect the host uses for functions without `#[pill_hot]`; see [hot_function_patching.md](../levels/hosting/hot_function_patching.md). That redirect needs the method in the address inventory the crate's build script writes.

The build script names a trait method through the trait's path, from the crate root. When the `impl` sits in a submodule and names `ScriptComponent` through a `use`, the root cannot see that name, so the build script skips the method and prints a `cargo:warning` that it "is not registered for hot patching". A body edit to that lifecycle method then falls back to a reload. Writing the trait's full path in the header (`impl pill_engine::ScriptComponent for Spinner`), or putting the block in the crate root file, makes the lifecycle method patchable.

## Exceptions and limitations

- **A panicking lifecycle method is not caught.** An ECS system in a development build runs through a hot slot that catches panics; the script passes have no such wrapper. A panic in a lifecycle method unwinds out of `process_frame`, in every build.
- **A registration is never removed.** Registering a type name again replaces its entry, but nothing deletes one. A type the arriving image no longer declares keeps its old entry, whose adapters point into the image that registered it.
- **Recording an attachment searches the table.** `record_script_attachment` scans every registration for a matching component id, once per component on each insert and once per add, whenever at least one script type is registered. The cost grows with the number of script types, not the number of scripts.
- **No lifecycle method runs at shutdown.** The engine has no exit pass, so scripts alive when the program exits get neither `on_stop` nor `on_destroy`.

## Where is this in the code?

All paths are in `modules/engine/pill_engine_core/src/` unless noted.

| What                                                                                   | Where                                                                              |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ScriptComponent`, `ScriptContext`, `ScriptDeclaration`, info and cause types          | `systems/scripting.rs`                                                             |
| `#[script]`, `LifecycleMethodOrders`                                                   | `modules/engine/pill_engine_macros/src/lib.rs`                                     |
| `PillScriptDescriptor`, `register_all_scripts`, the declaration baseline               | `modules/engine/pill_engine/src/declarations.rs`                                   |
| The entry point's declaration order                                                    | `modules/engine/pill_engine/src/component_registry.rs`                             |
| `ScriptRegistration`, the adapter types, `register_script_component`, `update_scripts` | `ecs/world/scripting.rs`                                                           |
| `PendingScriptEvent`, the create, start, removal and play-stop passes                  | `ecs/world/lifecycle.rs`                                                           |
| `ChangeOrigin`, `with_change_origin`                                                   | `ecs/world/change_origin.rs`                                                       |
| Recording an attachment on insert                                                      | `ecs/world/mod.rs`                                                                 |
| Recording an attachment on add                                                         | `ecs/world/components.rs`                                                          |
| `on_stop` and `on_destroy` in the command executors                                    | `ecs/commands.rs`                                                                  |
| Where the scripts step runs; `enter_play`, `exit_play`                                 | `engine.rs`                                                                        |
| Unit tests: order, causes, edit mode, removal, play stop                               | `ecs/world/lifecycle_tests.rs`                                                     |
| Integration tests: declarations, registration, declared order                          | `modules/engine/pill_engine/tests/scripts.rs`                                      |
| Compile-fail tests: a missing `#[script]`, a non-script block                          | `modules/engine/pill_engine/src/declarations.rs` (doc tests)                       |
| End-to-end: `LifecycleProbe` and the `play_mode` editor area                           | `devops/tests/projects/scene/src/lib.rs`, `devops/tests/editor_steps_play_mode.py` |
