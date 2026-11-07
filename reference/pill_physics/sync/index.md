<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-839"></a>

# Module `pill_physics::sync`

Source: `extensions\pill_physics\pill_physics\src\sync.rs:1`

The system that steps the simulation each frame.
The system that keeps the rapier world in step with the entities.

## Responsibilities

- Creates a body for every entity that carries both components, and drops
  the body of an entity that no longer does.
- Hands a kinematic body the pose game code moved its transform to.
- Steps the simulation by the frame's time.
- Copies a dynamic body's stepped pose back into the entity's transform.

## Module contents

### Functions
- [`physics_sync`](fn.physics_sync.md#rustdoc-item-837) — Advances the simulation by one frame and moves its results into the
