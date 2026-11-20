<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-970"></a>

# Module `pill_physics::sync`

Source: `extensions\pill_physics\modules\runtime\src\sync.rs:1`

The system that steps the simulation each frame.
The system that keeps the rapier world in step with the entities.

## Responsibilities

- Creates a body for every entity that carries both components, places a
  static collider for every entity that carries a collider alone, and drops
  whichever an entity no longer qualifies for.
- Applies edits to either component to the live body, and moves a dynamic
  body whose transform was moved from outside the simulation.
- Copies a dynamic body's stepped pose and velocities back into the
  entity's transform and rigid body component.
- Hands a kinematic body the pose game code moved its transform to.
- Steps the simulation by the frame's time.

## Module contents

### Functions
- [`physics_sync`](fn.physics_sync.md#rustdoc-item-1074) — Advances the simulation by one frame and moves its results into the
