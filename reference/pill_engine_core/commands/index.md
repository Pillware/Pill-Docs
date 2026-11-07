<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2476"></a>

# Module `pill_engine_core::commands`

Source: `engine\pill_engine_core\src\commands.rs:1`

Deferred command queue for structural ECS mutations.
Deferred command queue for structural ECS mutations.

## Responsibilities

- Provides [`Commands`](struct.Commands.md#rustdoc-item-2621), the handle a system uses to queue structural edits
  without holding `&mut World`: creating and destroying entities, and
  adding and removing components.
- Implements the two-phase frame lifecycle: systems queue commands while
  they run, and the engine applies them after the last system finishes.
- Re-exports [`CommandError`](../error/enum.CommandError.md#rustdoc-item-2568), the failure a queued command reports when the
  flush cannot apply it.
- Provides [`DeferredEntityBuilder`], which collects the components of a new
  entity over several calls and then queues its creation.

## Design

Systems never mutate the world's structure directly. They queue, and the
flush that follows the last system applies each command:

```text
┌─────────────────────────────────────────────────────────────┐
│                        FRAME N                              │
├─────────────────────────────────┬───────────────────────────┤
│      Phase 1: System Execution  │  Phase 2: Command Apply   │
│                                 │                           │
│  ┌──────────┐  ┌──────────┐     │  Commands from Phase 1    │
│  │System A  │  │System B  │     │  are now executed:        │
│  │(parallel)│  │(parallel)│     │                           │
│  └────┬─────┘  └────┬─────┘     │  - Create entities        │
│       │             │           │  - Destroy entities       │
│       ▼             ▼           │  - Add/remove components  │
│  ┌──────────────────────┐       │                           │
│  │   Command Queue      │──────►│  World is now consistent  │
│  │   (deferred ops)     │       │  for next frame           │
│  └──────────────────────┘       │                           │
└─────────────────────────────────┴───────────────────────────┘
```

Queuing instead of applying is what lets systems run in parallel without
locks. It also keeps an archetype's rows fixed while a query iterates them,
because no entity moves to another archetype before the flush.

### Usage Example

```no_run
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Health { current: f32 }
# impl Component for Health {}
fn combat_system(mut query: Query<(&Health, Entity)>, mut commands: Commands) {
    for (health, entity) in query.iter_mut() {
        if health.current <= 0.0 {
            // Queue for destruction - doesn't happen immediately!
            commands.destroy_entity(entity);
        }
    }
}
// After all systems have run, the engine applies the queue and the dead
// entities are actually removed.
```

## Module contents

### Structs
- [`ByteComponentAdder`](struct.ByteComponentAdder.md#rustdoc-item-2474) — Type-erased component adder that writes raw bytes into a native column.
- [`CommandQueue`](struct.CommandQueue.md#rustdoc-item-2570) — The queue of deferred structural edits for one frame.
- [`Commands`](struct.Commands.md#rustdoc-item-2621) — The handle a system uses to queue entity operations for later.
- [`DeferredEntityBuilder`](struct.DeferredEntityBuilder.md#rustdoc-item-2624) — Builds an entity's component list and queues its creation.
- [`TypedComponentAdder`](struct.TypedComponentAdder.md#rustdoc-item-2470) — Typed component adder that knows the concrete type `T`.

### Enums
- [`DeferredCommand`](enum.DeferredCommand.md#rustdoc-item-2477) — A structural edit that waits in the queue for the flush to apply it.

### Traits
- [`ComponentAdder`](trait.ComponentAdder.md#rustdoc-item-2466) — Trait for adding a component with its concrete type preserved.

### Functions
- [`boxed_component_adder`](fn.boxed_component_adder.md#rustdoc-item-2688) — Boxes a component into a type-erased [`ComponentAdder`] that keeps `T`.

## Re-exports

- [`pub use crate::error::CommandError;`](../error/enum.CommandError.md#rustdoc-item-2568)
