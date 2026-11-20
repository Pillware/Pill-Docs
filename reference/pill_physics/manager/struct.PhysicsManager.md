<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-812"></a>

# Struct `pill_physics::manager::PhysicsManager`

```rust
pub struct PhysicsManager;
```

Source: `extensions\pill_physics\modules\runtime\src\manager.rs:121`

The simulation, and the map from entities to the bodies it built for them.

It is a `Rebuild` resource: the rapier world mirrors the entities'
transforms, so putting a copy back at Stop would leave the simulation
describing bodies that no longer exist. Stop leaves it untouched, and the
next Play rebuilds it from the restored components.

## Fields

<a id="rustdoc-item-785"></a>

### `simulation`

```rust
simulation: rapier3d::prelude::PhysicsWorld
```

The rapier world: gravity, settings, bodies, colliders and broad phase.

<a id="rustdoc-item-787"></a>

### `body_handles`

```rust
body_handles: std::collections::HashMap<pill_engine::Entity, rapier3d::prelude::RigidBodyHandle>
```

The body of each simulated entity.

<a id="rustdoc-item-790"></a>

### `collider_handles`

```rust
collider_handles: std::collections::HashMap<pill_engine::Entity, rapier3d::prelude::ColliderHandle>
```

The collider of each simulated entity.

<a id="rustdoc-item-792"></a>

### `collider_owners`

```rust
collider_owners: std::collections::HashMap<rapier3d::prelude::ColliderHandle, pill_engine::Entity>
```

The entity each collider belongs to, for contacts and raycast answers.

<a id="rustdoc-item-793"></a>

### `applied_components`

```rust
applied_components: std::collections::HashMap<pill_engine::Entity, (crate::components::RigidBodyComponent, crate::components::ColliderComponent)>
```

The component values each body was last built from, so an edit to
either component is noticed and the body rebuilt from it.

<a id="rustdoc-item-794"></a>

### `static_colliders`

```rust
static_colliders: std::collections::HashMap<pill_engine::Entity, StaticColliderState>
```

The colliders of entities that carry no rigid body. Their handles are
in `collider_handles` too, so contacts and ray casts name them.

<a id="rustdoc-item-795"></a>

### `written_poses`

```rust
written_poses: std::collections::HashMap<pill_engine::Entity, ([f32; 3], [f32; 4])>
```

The pose last written into each dynamic body's transform. A transform
that no longer holds it was moved by someone else, and the body follows.

<a id="rustdoc-item-796"></a>

### `previous_poses`

```rust
previous_poses: std::collections::HashMap<pill_engine::Entity, ([f32; 3], [f32; 4])>
```

The pose each body held before its last step, which interpolation blends
towards the pose the step produced.

<a id="rustdoc-item-797"></a>

### `accumulator_seconds`

```rust
accumulator_seconds: f32
```

Frame time not yet spent on steps, in seconds.

<a id="rustdoc-item-798"></a>

### `settings`

```rust
settings: crate::settings::PhysicsSettings
```

The document the manager is running with.

<a id="rustdoc-item-800"></a>

### `collision_events`

```rust
collision_events: std::sync::Mutex<std::sync::mpsc::Receiver<rapier3d::prelude::CollisionEvent>>
```

The channel rapier's collision events arrive on.

The receiver sits behind a lock because a resource has to be shared
between threads, and a receiver may only be taken from by one at a time.

<a id="rustdoc-item-804"></a>

### `contact_force_events`

```rust
contact_force_events: std::sync::Mutex<std::sync::mpsc::Receiver<rapier3d::prelude::ContactForceEvent>>
```

The channel rapier's contact-force events arrive on.

<a id="rustdoc-item-806"></a>

### `event_collector`

```rust
event_collector: rapier3d::prelude::ChannelEventCollector
```

The collector handed to every step, which sends those two channels.

<a id="rustdoc-item-808"></a>

### `statistics`

```rust
statistics: PhysicsStatistics
```

What the simulation did since it was created.

<a id="rustdoc-item-810"></a>

### `built_by_image`

```rust
built_by_image: usize
```

The image of this module that built the rapier world, as the address
of one of its functions ([`current_image_marker`](fn.current_image_marker.md#rustdoc-item-809)).

<a id="rustdoc-item-811"></a>

### `built_against_restore_epoch`

```rust
built_against_restore_epoch: u64
```

The world's restore epoch the simulation was built against.

A play session's Stop swaps the edit world back and moves the epoch. The
rapier world then describes entities that no longer exist, and the
restored entity allocator can hand out a handle that matches one the
session used, which would attach a play-time body to a new entity. A
different epoch therefore means the simulation is dropped at once.

## Associated functions and methods

<a id="rustdoc-item-813"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates a manager with world gravity and the default fixed step.

<a id="rustdoc-item-814"></a>

### `simulation`

```rust
pub fn simulation(self: &Self) -> &rapier3d::prelude::PhysicsWorld;
```

The rapier world, for the parts of the crate that query it.

<a id="rustdoc-item-815"></a>

### `body_count`

```rust
pub fn body_count(self: &Self) -> usize;
```

How many bodies the simulation currently holds.

<a id="rustdoc-item-816"></a>

### `has_body`

```rust
pub fn has_body(self: &Self, entity: Entity) -> bool;
```

Whether an entity already has a body.

<a id="rustdoc-item-817"></a>

### `entity_of_collider`

```rust
pub fn entity_of_collider(self: &Self, collider: ColliderHandle) -> Option<Entity>;
```

The entity that owns a collider, if the collider is one of ours.

<a id="rustdoc-item-818"></a>

### `statistics`

```rust
pub fn statistics(self: &Self) -> PhysicsStatistics;
```

What the simulation did since it was created.

<a id="rustdoc-item-819"></a>

### `gravity`

```rust
pub fn gravity(self: &Self) -> [f32; 3];
```

The world gravity the simulation uses, in world units per second
squared.

<a id="rustdoc-item-820"></a>

### `set_gravity`

```rust
pub fn set_gravity(self: &mut Self, gravity: [f32; 3]);
```

Sets the world gravity, in world units per second squared.

The settings keep the value too, so a rebuilt simulation starts from the
tuning this one was given rather than from the default.

<a id="rustdoc-item-821"></a>

### `fixed_timestep`

```rust
pub fn fixed_timestep(self: &Self) -> f32;
```

The length of one simulation step, in seconds.

<a id="rustdoc-item-822"></a>

### `set_fixed_timestep`

```rust
pub fn set_fixed_timestep(self: &mut Self, fixed_timestep: f32, max_substeps: u32);
```

Sets the step length and the most steps one frame may run.

<a id="rustdoc-item-823"></a>

### `interpolation_enabled`

```rust
pub fn interpolation_enabled(self: &Self) -> bool;
```

Whether a drawn pose is blended between the last two steps.

<a id="rustdoc-item-824"></a>

### `set_interpolation`

```rust
pub fn set_interpolation(self: &mut Self, interpolate: bool);
```

Turns the blend between the last two steps on or off.

<a id="rustdoc-item-825"></a>

### `debug_draw_enabled`

```rust
pub fn debug_draw_enabled(self: &Self) -> bool;
```

Whether the colliders are drawn as outlines.

<a id="rustdoc-item-826"></a>

### `set_debug_draw`

```rust
pub fn set_debug_draw(self: &mut Self, debug_draw: bool);
```

Turns the collider outlines on or off.

<a id="rustdoc-item-827"></a>

### `collider_owners`

```rust
pub fn collider_owners(self: &Self) -> impl Iterator<Item = _> + '_;
```

The entity and collider handle of every simulated body.

<a id="rustdoc-item-829"></a>

### `collider_of`

```rust
pub fn collider_of(self: &Self, handle: ColliderHandle) -> Option<&Collider>;
```

A simulated collider, by its handle.

<a id="rustdoc-item-831"></a>

### `drain_events`

```rust
pub fn drain_events(self: &mut Self) -> PhysicsEvents;
```

Empties the two event channels into one frame's worth of events.

An event naming a collider this module did not build is dropped: the
owner map is the only route from a rapier handle back to an entity.

<a id="rustdoc-item-832"></a>

### `pair_of`

```rust
pub fn pair_of(self: &Self, first: ColliderHandle, second: ColliderHandle) -> Option<(Entity, Entity)>;
```

The two entities behind a pair of collider handles, when both are ours.

<a id="rustdoc-item-833"></a>

### `spawn_body`

```rust
pub fn spawn_body(self: &mut Self, entity: Entity, transform: &TransformComponent, body: &RigidBodyComponent, collider: &ColliderComponent);
```

Builds a rapier body and collider for an entity from its components.

The pose comes from the entity's transform, so a body appears where game
code put it. Calling this for an entity that already has a body replaces
the old one.

<a id="rustdoc-item-835"></a>

### `apply_component_edits`

```rust
pub fn apply_component_edits(self: &mut Self, entity: Entity, body: &RigidBodyComponent, collider: &ColliderComponent) -> bool;
```

Carries every edit made to an entity's two components since they were
last applied into its live body and collider, field by field, and
reports whether there was one.

Nothing is rebuilt: the body keeps its handle, its contacts and its
sleep state, and only the edited properties change. A velocity the
simulation wrote into the component last frame is not an edit, because
[`Self::write_back_velocities`](#rustdoc-item-834) records it as applied.

<a id="rustdoc-item-836"></a>

### `has_static_collider`

```rust
pub fn has_static_collider(self: &Self, entity: Entity) -> bool;
```

Whether an entity is simulated as a collider with no rigid body.

<a id="rustdoc-item-837"></a>

### `spawn_static_collider`

```rust
pub fn spawn_static_collider(self: &mut Self, entity: Entity, transform: &TransformComponent, collider: &ColliderComponent);
```

Places an entity's collider in the world with no body behind it, at the
transform's pose: static geometry that bodies hit, or a trigger zone
when the collider is a sensor. An entity that had a body loses it.

<a id="rustdoc-item-838"></a>

### `update_static_collider`

```rust
pub fn update_static_collider(self: &mut Self, entity: Entity, transform: &TransformComponent, collider: &ColliderComponent);
```

Carries a static collider's component edits and its transform's moves
into the rapier collider.

<a id="rustdoc-item-839"></a>

### `despawn_static_collider`

```rust
pub fn despawn_static_collider(self: &mut Self, entity: Entity);
```

Removes an entity's static collider. An entity without one is left
alone.

<a id="rustdoc-item-834"></a>

### `write_back_velocities`

```rust
pub fn write_back_velocities(self: &mut Self, entity: Entity, body: &mut RigidBodyComponent);
```

Copies a dynamic body's current velocities into its component, so the
component shows the speed the body moves at and a rebuilt body starts
at that speed.

The written values are recorded as applied, so the next
[`Self::apply_component_edits`](#rustdoc-item-835) does not mistake them for an edit. A
fixed or kinematic body is left alone: its component's velocities are
what game code set, and rapier does not integrate them.

<a id="rustdoc-item-840"></a>

### `rebuild_if_built_by_another_image`

```rust
pub fn rebuild_if_built_by_another_image(self: &mut Self) -> bool;
```

Rebuilds the rapier world when it was built by an earlier image of this
module, and reports whether it did.

rapier is compiled into this module, and its world holds pointers into
the image that built it: every collider shape is a trait object whose
function table lives in that image. A hot reload keeps this resource,
and the host unloads old images after a couple of generations, so a
world kept across a reload would one day call into freed code. The
module's `register` calls this on every generation, while the previous
image is still loaded, so dropping the old world runs code that is still
there. The bodies come back from the components on the next sync, at
the transforms' poses and the velocities last written into the
components. The settings are kept.

<a id="rustdoc-item-841"></a>

### `clear_if_world_was_restored`

```rust
pub fn clear_if_world_was_restored(self: &mut Self, restore_epoch: u64) -> bool;
```

Drops the rapier world when the world it mirrors was restored.

Returns whether it cleared. Everything the simulation built is released -
bodies, colliders, the entity maps, the remembered poses and the events
of the frame that was interrupted - while the gravity and the settings
document are kept, so the next Play rebuilds from the restored
components with the tuning the project chose.

Clearing at once matters even though nothing steps in edit mode: the
restored allocator can hand out a handle which a body in these maps still
occupies, and the first play frame would then treat that body as the new
entity's.

<a id="rustdoc-item-842"></a>

### `adopt_restore_epoch`

```rust
pub fn adopt_restore_epoch(self: &mut Self, restore_epoch: u64);
```

Records the world's restore epoch as the one this simulation describes.

A manager built during a play session starts from the epoch the session
restored to, so the next frame does not clear a simulation that was built
from the world it is looking at.

<a id="rustdoc-item-843"></a>

### `follow_moved_transform`

```rust
pub fn follow_moved_transform(self: &mut Self, entity: Entity, transform: &TransformComponent);
```

Moves a dynamic body to its transform when something other than the
simulation moved that transform since the last write-back: the editor's
gizmo, an Inspector edit, or game code placing the entity.

The body keeps its velocity and is woken, so it carries on from the new
place. A transform still holding the written pose is left alone.

<a id="rustdoc-item-844"></a>

### `despawn_body`

```rust
pub fn despawn_body(self: &mut Self, entity: Entity);
```

Drops an entity's body and collider. An entity without a body is left
alone.

<a id="rustdoc-item-845"></a>

### `despawn_missing`

```rust
pub fn despawn_missing(self: &mut Self, live_bodies: &HashSet<Entity>, live_static_colliders: &HashSet<Entity>);
```

Drops the bodies of every entity that is not in `live_bodies` and the
static colliders of every entity that is not in `live_static_colliders`,
which is how a despawned or stripped entity leaves the simulation.

<a id="rustdoc-item-847"></a>

### `push_kinematic`

```rust
pub fn push_kinematic(self: &mut Self, entity: Entity, transform: &TransformComponent);
```

Hands a kinematic body the pose its transform was moved to, which the
next step carries it to.

<a id="rustdoc-item-848"></a>

### `write_back`

```rust
pub fn write_back(self: &mut Self, entity: Entity, transform: &mut TransformComponent);
```

Copies a stepped body's pose into an entity's transform.

A body the simulation does not move keeps whatever the transform already
holds, so a fixed or kinematic body is left alone.

<a id="rustdoc-item-849"></a>

### `blend_towards_last_step`

```rust
pub fn blend_towards_last_step(self: &Self, entity: Entity, transform: &mut TransformComponent);
```

Blends a freshly written pose back towards the pose before the last
step, when interpolation is on.

<a id="rustdoc-item-850"></a>

### `step`

```rust
pub fn step(self: &mut Self, delta_seconds: f32) -> u32;
```

Advances the simulation by one frame's time and returns how many fixed
steps ran.

The frame time is added to an accumulator and spent one fixed step at a
time, so the simulation advances at the same rate whatever the frame rate
is. A hitch spends at most
[`MAXIMUM_SUBSTEPS_PER_FRAME`](self) steps and drops the rest instead of
running faster than real time to catch up.

<a id="rustdoc-item-851"></a>

### `remember_poses`

```rust
pub fn remember_poses(self: &mut Self);
```

Records where every body stands, which the next write-back blends from
when interpolation is on.

<a id="rustdoc-item-853"></a>

### `cast_ray`

```rust
pub fn cast_ray(self: &Self, origin: [f32; 3], direction: [f32; 3], max_distance: f32) -> Option<RayHit>;
```

Casts a ray through the simulated colliders and answers with the closest
hit within `max_distance`.

The direction is normalized first, so its length never changes the
answer. A direction of zero length, or a distance that is not positive,
reaches nothing. The ray is solid: starting inside a shape counts as a
hit at distance zero.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `MaybeSync`
- `SupersetOf<SS>`
- `Same`
- `Downcast`
- `DowncastSend`
- `DowncastSync`
- `Resource`
- `Default`
- `SettingsAssetManager`
