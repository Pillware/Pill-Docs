<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-538"></a>

# Module `pill_physics::manager`

Source: `extensions\pill_physics\pill_physics\src\manager.rs:1`

The manager that owns the rapier world.
The manager that owns the rapier world and keeps it in step with the
entities.

## Responsibilities

- Owns the rapier [`PhysicsWorld`]: its gravity, its integration settings and
  every body and collider the module created.
- Translates a [`RigidBodyComponent`](../components/struct.RigidBodyComponent.md#rustdoc-item-208) and a [`ColliderComponent`](../components/struct.ColliderComponent.md#rustdoc-item-277) into a
  rapier body, and a stepped rapier body back into a
  [`TransformComponent`].
- Remembers which entity owns which body, in both directions, so a contact or
  a raycast answer can name the entity.
- Steps the simulation on a fixed timestep, fed by the frame delta.

## Design

The manager is the only place rapier is named, apart from the system that
drives it. Entities and components carry plain numbers, so a saved scene, the
editor and a project never need rapier in their own dependencies.

It is a shared resource: a reload whose layout is unchanged keeps the value,
so the bodies keep their pose and velocity across it. When the layout did
change the engine drops the value, and the system rebuilds every body from
the components on its next pass.

## Module contents

### Structs
- [`PhysicsManager`](struct.PhysicsManager.md#rustdoc-item-337) — The simulation, and the map from entities to the bodies it built for them.
- [`PhysicsStatistics`](struct.PhysicsStatistics.md#rustdoc-item-542) — A running count of what the simulation did, for logs and tests.

### Functions
- [`array_from_quaternion`](fn.array_from_quaternion.md#rustdoc-item-689) — Reads a rotation as an `[x, y, z, w]` array.
- [`array_from_vector`](fn.array_from_vector.md#rustdoc-item-687) — Reads a rapier vector as a three-element array.
- [`build_collider`](fn.build_collider.md#rustdoc-item-684) — Builds the rapier collider a component describes.
- [`build_rigid_body`](fn.build_rigid_body.md#rustdoc-item-682) — Builds the rapier body a component pair describes.
- [`rotation_from_array`](fn.rotation_from_array.md#rustdoc-item-688) — Reads an `[x, y, z, w]` quaternion as a rotation, treating a value that is
- [`vector_from_array`](fn.vector_from_array.md#rustdoc-item-685) — Reads a three-element array as a rapier vector.

### Constants
- [`DEFAULT_FIXED_TIMESTEP_SECONDS`](constant.DEFAULT_FIXED_TIMESTEP_SECONDS.md#rustdoc-item-535) — The simulation's step length in seconds. Every step advances the world by
- [`DEFAULT_GRAVITY`](constant.DEFAULT_GRAVITY.md#rustdoc-item-534) — Downward acceleration applied to a body with a gravity scale of one, in
- [`MAXIMUM_ACCUMULATED_SECONDS`](constant.MAXIMUM_ACCUMULATED_SECONDS.md#rustdoc-item-537) — The most frame time the accumulator may hold, in seconds.
- [`MAXIMUM_SUBSTEPS_PER_FRAME`](constant.MAXIMUM_SUBSTEPS_PER_FRAME.md#rustdoc-item-536) — The most steps one frame may run, so a long frame cannot spiral into a
