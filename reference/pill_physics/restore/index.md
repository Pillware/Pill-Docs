<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-971"></a>

# Module `pill_physics::restore`

Source: `extensions\pill_physics\modules\runtime\src\restore.rs:1`

The system that drops the simulation when the world it mirrors was
restored.
Drops the simulation when the world it mirrors was restored.

## Responsibilities

- Compares the world's restore epoch with the one the rapier world was
  built against, and clears the simulation when they differ.

## Design

The check is a system of its own rather than a step inside
[`physics_sync`](../sync/index.md#rustdoc-item-970): that system only runs while the game does,
and the simulation has to be dropped on the first edit frame after Stop.
The restored entity allocator can hand out a handle that a play-time body
still occupies, so anything that asks the manager about an entity between
Stop and the next Play must not see the session's bodies.

## Module contents

### Functions
- [`physics_restore`](fn.physics_restore.md#rustdoc-item-965) — Clears the simulation after a play session put the edit world back.
