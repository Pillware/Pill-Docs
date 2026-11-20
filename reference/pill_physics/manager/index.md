<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-697"></a>

# Module `pill_physics::manager`

Source: `extensions\pill_physics\modules\runtime\src\manager.rs:1`

The manager that owns the rapier world.
The manager that owns the rapier world and keeps it in step with the
entities.

## Responsibilities

- Owns the rapier [`PhysicsWorld`]: its gravity, its integration settings and
  every body and collider the module created.
- Translates a [`RigidBodyComponent`](../components/struct.RigidBodyComponent.md#rustdoc-item-223) and a [`ColliderComponent`](../components/struct.ColliderComponent.md#rustdoc-item-366) into a
  rapier body, and a stepped rapier body back into a
  [`TransformComponent`].
- Remembers which entity owns which body, in both directions, so a contact or
  a raycast answer can name the entity.
- Steps the simulation on a fixed timestep, fed by the frame delta.
- Notices an edit made outside the simulation - a component changed in the
  Inspector, a dynamic body's transform moved by the gizmo or by game code -
  and carries it into the live body field by field instead of overwriting
  it.
- Writes a dynamic body's live velocities back into its component.
- Places the collider of an entity that has no rigid body as a static
  collider of its own, which bodies hit and which follows its transform.
- Rebuilds the rapier world when a hot reload brings a new image of this
  module, because the old world points into the old image.

## Design

The manager is the only place rapier is named, apart from the system that
drives it. Entities and components carry plain numbers, so a saved scene, the
editor and a project never need rapier in their own dependencies.

It is a shared resource, so a reload whose layout is unchanged keeps the
value - but not its rapier world when this module itself was reloaded: that
world points into the image that built it, so `register` rebuilds it while
the old image is still loaded. When the layout changed the engine drops the
value instead. Either way the system rebuilds every body from the
components on its next pass, and because the sync writes each dynamic
body's pose and velocities into them, the bodies carry on where they were.

## Module contents

### Structs
- [`PhysicsManager`](struct.PhysicsManager.md#rustdoc-item-812) — The simulation, and the map from entities to the bodies it built for them.
- [`PhysicsStatistics`](struct.PhysicsStatistics.md#rustdoc-item-701) — A running count of what the simulation did, for logs and tests.
- [`StaticColliderState`](struct.StaticColliderState.md#rustdoc-item-748) — What a static collider was last placed from, so an edit or a move is

### Functions
- [`apply_collider_edits`](fn.apply_collider_edits.md#rustdoc-item-907) — Carries every field of `collider` that differs from `applied` into a live
- [`array_from_quaternion`](fn.array_from_quaternion.md#rustdoc-item-918) — Reads a rotation as an `[x, y, z, w]` array.
- [`array_from_vector`](fn.array_from_vector.md#rustdoc-item-916) — Reads a rapier vector as a three-element array.
- [`build_collider`](fn.build_collider.md#rustdoc-item-913) — Builds the rapier collider a component describes.
- [`build_rigid_body`](fn.build_rigid_body.md#rustdoc-item-903) — Builds the rapier body a component pair describes.
- [`collider_center`](fn.collider_center.md#rustdoc-item-908) — Where a collider's centre is in the world: the entity's position plus the
- [`collision_groups_of`](fn.collision_groups_of.md#rustdoc-item-911) — The rapier interaction groups a collider component's group and mask name.
- [`current_image_marker`](fn.current_image_marker.md#rustdoc-item-809) — An address inside this module's image, which differs between two loaded
- [`rigid_body_type_of`](fn.rigid_body_type_of.md#rustdoc-item-901) — The rapier body type a body kind names.
- [`rotation_from_array`](fn.rotation_from_array.md#rustdoc-item-917) — Reads an `[x, y, z, w]` quaternion as a rotation, treating a value that is
- [`shape_of`](fn.shape_of.md#rustdoc-item-905) — The rapier shape a collider component describes. The dimensions read as
- [`static_collider_pose`](fn.static_collider_pose.md#rustdoc-item-909) — The world pose of a collider with no body: the entity's rotation, at
- [`vector_from_array`](fn.vector_from_array.md#rustdoc-item-914) — Reads a three-element array as a rapier vector.

### Constants
- [`DEFAULT_FIXED_TIMESTEP_SECONDS`](constant.DEFAULT_FIXED_TIMESTEP_SECONDS.md#rustdoc-item-694) — The simulation's step length in seconds. Every step advances the world by
- [`DEFAULT_GRAVITY`](constant.DEFAULT_GRAVITY.md#rustdoc-item-693) — Downward acceleration applied to a body with a gravity scale of one, in
- [`MAXIMUM_ACCUMULATED_SECONDS`](constant.MAXIMUM_ACCUMULATED_SECONDS.md#rustdoc-item-696) — The most frame time the accumulator may hold, in seconds.
- [`MAXIMUM_SUBSTEPS_PER_FRAME`](constant.MAXIMUM_SUBSTEPS_PER_FRAME.md#rustdoc-item-695) — The most steps one frame may run, so a long frame cannot spiral into a
