# Commands: how deferred structural changes are implemented

## Summary

`Commands` is a thin handle over the engine's one `CommandQueue`. Each call pushes a `DeferredCommand`, and `execute_queued_commands` drains the queue once per update, after every ECS system and C# script has run, by calling the same `World` functions an eager change uses. A failed command is collected rather than panicking. An ECS system that takes `Commands` conflicts with every other ECS system, so it always runs alone in its batch, which is what makes the single shared queue safe.

This is the implementation counterpart of [guides/commands.md](../../user_guides/concepts/commands.md). Read that first for how to use `Commands`.

## At a glance

| Piece                   | What it is                                                                                   | Where          |
| ----------------------- | -------------------------------------------------------------------------------------------- | -------------- |
| `Commands<'a>`          | the ECS system parameter: `&mut CommandQueue` plus `&mut World` (for reserving entity ids)    | `commands.rs`  |
| `CommandQueue`          | `Vec<DeferredCommand>` in submission order; one per `Engine`                                 | `commands.rs`  |
| `DeferredCommand`       | private enum: `CreateEntity`, `AddComponentToEntity`, `AddDescriptorComponentToEntity`, `RemoveComponentFromEntity`, `DestroyEntity` | `commands.rs` |
| `ComponentAdder`        | trait object that knows a component's id and writes its value into a column                  | `commands.rs`  |
| `TypedComponentAdder<T>`| private adder holding a typed Rust value                                                     | `commands.rs`  |
| `ByteComponentAdder`    | public adder holding raw bytes in a native component's layout (C#, editor, scenes)           | `commands.rs`  |
| `DeferredEntityBuilder` | reserves the entity id at once, collects adders, queues `CreateEntity` on `build()`          | `commands.rs`  |
| `CommandError`          | one failure: entity not found, component already exists or missing, duplicate, write or migration failure | `error.rs` |
| The flush               | `CommandQueue::execute_queued_commands(world, exit_on_error)`                                | `commands.rs`  |

```
 Engine::process_frame  (one update)
 ├─ ECS systems run in batches ──► Commands push DeferredCommand onto the one CommandQueue
 ├─ C# scripts update ───────────► ScriptContext pushes onto the same queue
 ├─ execute_queued_commands ─────► drain in order, apply each with World functions,
 │                                 collect CommandError instead of panicking
 └─ post-update ECS systems ─────► anything they queue waits for the next update's flush
```

## Why are structural changes deferred?

Structural changes are deferred because they move rows between archetypes, and nothing else may be looking at those rows while they move.

Adding or removing a component moves the entity to a different archetype: its row is copied into the destination's columns and swap-removed from the source. Creating and destroying change row counts. If that happened during a query:

- **An iterator over the archetype would skip or repeat rows,** because a swap-remove moves the last row into the removed one's slot.
- **Parallel ECS systems would race.** Batches run on Rayon workers through raw pointers to the world. The scheduler proves that their component and resource access is disjoint, but it cannot prove anything about archetype layout, which every query depends on.

Deferring means the archetype structure is frozen from the first ECS system of the update until the flush. Value writes through `Query<&mut T>` are not deferred, because they never move a row.

**Structural changes therefore happen only while nothing else is running.** The flush runs on one thread, after every parallel batch and every C# script has finished, and it holds `&mut World` for itself. No ECS system, script or query can run during it, so rows can move between archetypes without anyone looking at them. This exclusive moment is the only point in an update where the archetype structure may change.

Without deferral, every ECS system that structurally changes the world would need exclusive access for its whole run, and iteration would need defensive copying.

## How does a `Commands` call become a queued command?

Each `Commands` method pushes one `DeferredCommand` and returns.

| Call                                               | Pushes                                                         |
| -------------------------------------------------- | -------------------------------------------------------------- |
| `create_entity().with(a).with(b).build()`          | `CreateEntity { entity, component_adders: [a, b], descriptor_components: [] }` |
| `add_component_to_entity(entity, c)`               | `AddComponentToEntity { entity, component_adder: c }`          |
| `remove_component_from_entity::<T>(entity)`        | `RemoveComponentFromEntity { entity, component_id: ComponentId::of::<T>() }` |
| `destroy_entity(entity)`                           | `DestroyEntity { entity }`                                     |

A typed value is boxed as a `TypedComponentAdder<T>`. The box keeps `T` alive inside a type-erased `Vec`, and its `add_component_to_storage` later does `column_of_mut::<T>().push(value)`, so the value is moved, never cloned or serialized.

`CommandQueue` has more entry points than `Commands` exposes. These are for callers that hold component ids and bytes instead of Rust types:

- `create_entity(entity, adders)` and `create_mixed_entity(entity, native_adders, descriptor_components)`;
- `add_component_adder_to_entity` (an adder built by `boxed_component_adder` or `ByteComponentAdder::new`);
- `add_descriptor_component_to_entity` (a C# component's bytes);
- `remove_component_by_id`.

The C# bridge, the editor's edit application and the scene loader use these.

## How does `create_entity` return a handle before the entity exists?

The builder reserves the id immediately and queues only the insertion.

`Commands::create_entity` calls `world.allocate_entity()`, which pops the free list (with the stored generation) or takes the next fresh id. The handle is real and unique from that moment: nothing else can be given the same id and generation. But the entity has no row and no entry in `entity_locations`, so `is_entity_valid` returns `false` and no query or lookup sees it until the flush.

This is why `Commands` holds `&mut World` and not only the queue: allocating an id mutates the world's free list.

If the flush refuses the creation before inserting the row (a duplicate component id), it calls `recycle_refused_entity`, which returns the slot to the free list with the generation bumped. Every copy of the refused handle then stays invalid.

## When is the queue flushed?

The queue is flushed once per update, after every ECS system and C# script has run, and before the post-update ECS systems.

In `Engine::process_frame`:

1. the update ECS systems run in their batches;
2. `world.update_scripts(&mut self.command_queue)` runs the C# scripts, which queue into the same queue;
3. `execute_queued_commands(&mut self.world, self.should_exit_on_error)` drains it;
4. `run_systems_sequential(true)` runs the post-update ECS systems one after another.

There is no second flush after step 4. Commands queued by a post-update ECS system stay in the queue and are applied by the **next** update's flush, after that update's own ECS systems have queued theirs.

> **Example:** a post-update ECS system spawns a marker entity in update 10. It is still in the queue when update 11's ECS systems run, so they do not see it. Update 11's flush applies update 11's commands and the marker together. Update 12 is the first in which an ECS system sees it.

## How does the flush apply each command?

`execute_queued_commands` drains the queue in submission order and calls one executor per variant. Each executor reuses the world's normal structural code, so a deferred change obeys exactly the same rules as an eager one.

| Variant                          | Executor does                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `CreateEntity`                   | collects every component id, refuses a repeated id, inserts the row with `insert_entity_with_components` and runs each adder, then writes each descriptor component's bytes |
| `AddComponentToEntity`           | `world.try_add_component_by_id`, the same migration as `World::add_component`                          |
| `AddDescriptorComponentToEntity` | checks the entity is valid and lacks the component, then `world.add_descriptor_component`              |
| `RemoveComponentFromEntity`      | `world.try_remove_component_by_id`; when no component would remain, destroys the entity instead        |
| `DestroyEntity`                  | `world.destroy_entity`; `false` means the entity was already gone                                      |

The flush also stores the command count in `world.commands_executed_this_frame`, for the per-update metrics, and records succeeded and failed counts in the profiler zone.

Because commands apply in order, later commands can depend on earlier ones in the same update: a `CreateEntity` followed by an `AddComponentToEntity` for the same handle works. The reverse order fails, because the entity does not exist yet when the add runs.

## What happens when a command fails?

Each executor appends a `CommandError` instead of panicking, and the flush continues with the next command.

| `CommandError`          | Raised when                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| `EntityNotFound`        | the entity was destroyed earlier (in this flush or before), or its location record is stale  |
| `ComponentAlreadyExists`| adding a component the entity already has                                                    |
| `ComponentNotFound`     | removing a component the entity does not have                                                |
| `DuplicateComponent`    | a creation names one component id twice; the reserved handle is recycled                     |
| `ComponentWriteFailed`  | a column refused the value, or the component type was retired (for example by a reload) after the command was queued |
| `MigrationFailed`       | any other refusal from the world's archetype migration                                       |

What happens next depends on the caller:

- **During an update,** `should_exit_on_error` is `false` by default. Every failure is logged as a `deferred command failed` warning on `engine::ecs` and sent to the profiler's error channel, and the update reports success. With `Engine::set_should_exit_on_error(true)`, `process_frame` returns the collected errors and the caller decides.
- **Outside an update** (the one-shot and transactional helpers below), the errors are always returned, because there is no following update in which to report them.

Two failures are not undone:

- An add that fails during migration is rolled back: the world puts the entity back in its source archetype.
- A creation whose component write fails **after** the row exists cannot be rolled back. The row is already in every other column, so the entity stays live and the failure is reported. The adder must report a refused write and never drop it, because a column left one row short would shift every later row of that component onto the wrong entity.

Panics are avoided on purpose. The flush can run under a C# project's call stack, and a panic there would unwind across the C ABI.

## Why does an ECS system with `Commands` always run alone?

Because one queue and one world are shared by every ECS system in a batch, and `Commands` writes to both.

`SystemParam for Commands` sets `uses_commands = true` in the ECS system's `SystemAccess`. `SystemAccess::conflicts_with` returns `true` whenever either side uses commands, so the scheduler never puts a `Commands` ECS system in a batch with anything else. A batch of size one runs on the calling thread without Rayon.

That rule is what makes the shared state sound:

- the `CommandQueue` is a plain `Vec` with no lock, so two ECS systems pushing at once would race;
- `allocate_entity` mutates the world's free list, which no other parameter type declares as an access.

Parallel workers receive raw pointers to both the world and the queue. Only ECS systems that do not use commands ever run in parallel, so no worker ever writes through the queue pointer.

The cost is lost parallelism: every `Commands` ECS system adds one batch to the update. A per-thread queue merged at the flush would lift this. It is not implemented.

## What do `run_deferred_commands`, `queue_deferred_commands` and `flush_deferred_commands` do?

They let code outside an update produce commands and choose when to apply them.

| Function                          | Behaviour                                                                                 | Used by                                         |
| --------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `run_deferred_commands(f)`        | runs `f(world, queue)`, then flushes with errors returned                                 | one-shot start-up code, tests                   |
| `queue_deferred_commands(f)`      | runs `f(world, queue)` and applies nothing                                                 | callers that commit or roll back as one step    |
| `flush_deferred_commands()`       | applies everything queued so far, errors returned                                         | the commit half                                 |
| `discard_deferred_commands()`     | clears the queue without applying anything                                                | the rollback half                               |

The queue-then-flush pair makes a group of changes all-or-nothing at the queueing stage.

> **Example:** a C# project's start-up runs every managed startup method inside one `queue_deferred_commands` closure. If one method fails, the bridge calls `discard_deferred_commands`, so none of the entities the earlier methods spawned are created. Only when every method succeeds does it call `flush_deferred_commands`.

The editor uses the same pair for one recorded edit. Creating an entity reserves the handle with `world.reserve_entity()`, queues `create_mixed_entity` with that handle, and flushes. The edit's undo can then name the exact handle that was created.

## How do C# and the editor add components they cannot name in Rust?

They queue component **bytes** with an id, instead of a typed value.

- **`ByteComponentAdder`** carries a native component's id and its value as bytes in the native layout. `add_component_to_storage` pushes the bytes into that column. It asserts the id is native storage. The caller checks the size before queueing; the adder does not.
- **Descriptor components** (C# component types) travel as `(ComponentId, Vec<u8>)` pairs in `CreateEntity.descriptor_components` or in `AddDescriptorComponentToEntity`. They are written after the row exists, with `set_descriptor_component_bytes` or `add_descriptor_component`.

These bytes were checked when queued, not when applied. A hot reload can retire a component type between the two. In that case the write finds no storage, and the executor reports `ComponentWriteFailed` instead of panicking.

## What is easy to get wrong?

- **Expecting a change to be visible in the same update.** Nothing an ECS system queues is visible until the flush, not even to the same ECS system later in its loop. A post-update ECS system's commands wait a whole update more.
- **Destroying an entity from two places.** The second `DestroyEntity` reports `EntityNotFound` and logs a warning every update it happens. It is harmless but noisy.
- **Removing the last component.** It destroys the entity, because the world has no empty archetype. A later command for that entity in the same flush then reports `EntityNotFound`.
- **Taking `Commands` without needing it.** It moves the ECS system into a batch of its own.
- **Storing `Commands` or the queue.** `Commands<'static>` is a faked lifetime produced by `SystemParam::fetch`. It is sound only while it is dropped before the ECS system returns; see [systems.md](systems.md#why-can-a-parameter-not-be-stored-or-returned).
- **Confusing it with the editor's commands.** `EditorCommand` and the editor's recorded batches are undoable edits applied by the editor at the update boundary. They use the `CommandQueue` to apply structural changes, but they are a separate layer with their own history.

## Where is this in the code?

| What                                                        | Where                                                                          |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `Commands`, `CommandQueue`, the adders, the builder, the flush | `modules/engine/pill_engine_core/src/commands.rs`                           |
| `CommandError`                                              | `modules/engine/pill_engine_core/src/error.rs`                                 |
| The flush inside the update, `should_exit_on_error`, the helpers | `modules/engine/pill_engine_core/src/engine.rs` (`process_frame`, `run_deferred_commands`, `queue_deferred_commands`, `flush_deferred_commands`, `discard_deferred_commands`) |
| `SystemParam for Commands` and the faked lifetime           | `modules/engine/pill_engine_core/src/system.rs`                                |
| `uses_commands` and the conflict rule                       | `modules/engine/pill_engine_core/src/scheduler.rs`                             |
| Entity id reservation and recycling                         | `modules/engine/pill_engine_core/src/world/mod.rs` (`allocate_entity`, `recycle_refused_entity`) |
| Migration on add and remove                                 | `modules/engine/pill_engine_core/src/world/components.rs` (`try_add_component_by_id`, `try_remove_component_by_id`) |
| The queue from C# scripts                                   | `modules/engine/pill_engine_core/src/scripting.rs`, `modules/csharp/pill_csharp_bridge/src/commands.rs` |
| Transactional start-up for C#                               | `modules/csharp/pill_csharp_bridge/src/backend.rs`                             |
| The editor's structural edits                               | `modules/editor/pill_editor_core/src/editor_state/apply/world.rs`              |
| The scene loader's byte components                          | `modules/engine/pill_engine_core/src/scene.rs`                                 |
| Related pages                                               | [systems.md](systems.md), [entities.md](entities.md), [components.md](components.md) |
