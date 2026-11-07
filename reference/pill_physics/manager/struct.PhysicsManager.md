<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-337"></a>

# Struct `pill_physics::manager::PhysicsManager`

```rust
pub struct PhysicsManager;
```

Source: `extensions\pill_physics\pill_physics\src\manager.rs:87`

The simulation, and the map from entities to the bodies it built for them.

## Fields

<a id="rustdoc-item-587"></a>

### `simulation`

```rust
simulation: rapier3d::prelude::PhysicsWorld
```

The rapier world: gravity, settings, bodies, colliders and broad phase.

<a id="rustdoc-item-589"></a>

### `body_handles`

```rust
body_handles: std::collections::HashMap<pill_engine::Entity, rapier3d::prelude::RigidBodyHandle>
```

The body of each simulated entity.

<a id="rustdoc-item-592"></a>

### `collider_handles`

```rust
collider_handles: std::collections::HashMap<pill_engine::Entity, rapier3d::prelude::ColliderHandle>
```

The collider of each simulated entity.

<a id="rustdoc-item-594"></a>

### `collider_owners`

```rust
collider_owners: std::collections::HashMap<rapier3d::prelude::ColliderHandle, pill_engine::Entity>
```

The entity each collider belongs to, for contacts and raycast answers.

<a id="rustdoc-item-595"></a>

### `previous_poses`

```rust
previous_poses: std::collections::HashMap<pill_engine::Entity, ([f32; 3], [f32; 4])>
```

The pose each body held before its last step, which interpolation blends
towards the pose the step produced.

<a id="rustdoc-item-596"></a>

### `accumulator_seconds`

```rust
accumulator_seconds: f32
```

Frame time not yet spent on steps, in seconds.

<a id="rustdoc-item-597"></a>

### `settings`

```rust
settings: crate::settings::PhysicsSettings
```

The document the manager is running with.

<a id="rustdoc-item-599"></a>

### `collision_events`

```rust
collision_events: std::sync::Mutex<std::sync::mpsc::Receiver<rapier3d::prelude::CollisionEvent>>
```

The channel rapier's collision events arrive on.

The receiver sits behind a lock because a resource has to be shared
between threads, and a receiver may only be taken from by one at a time.

<a id="rustdoc-item-603"></a>

### `contact_force_events`

```rust
contact_force_events: std::sync::Mutex<std::sync::mpsc::Receiver<rapier3d::prelude::ContactForceEvent>>
```

The channel rapier's contact-force events arrive on.

<a id="rustdoc-item-605"></a>

### `event_collector`

```rust
event_collector: rapier3d::prelude::ChannelEventCollector
```

The collector handed to every step, which sends those two channels.

<a id="rustdoc-item-607"></a>

### `statistics`

```rust
statistics: PhysicsStatistics
```

What the simulation did since it was created.

## Associated functions and methods

<a id="rustdoc-item-608"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates a manager with world gravity and the default fixed step.

<a id="rustdoc-item-609"></a>

### `simulation`

```rust
pub fn simulation(self: &Self) -> &rapier3d::prelude::PhysicsWorld;
```

The rapier world, for the parts of the crate that query it.

<a id="rustdoc-item-610"></a>

### `body_count`

```rust
pub fn body_count(self: &Self) -> usize;
```

How many bodies the simulation currently holds.

<a id="rustdoc-item-611"></a>

### `has_body`

```rust
pub fn has_body(self: &Self, entity: Entity) -> bool;
```

Whether an entity already has a body.

<a id="rustdoc-item-612"></a>

### `entity_of_collider`

```rust
pub fn entity_of_collider(self: &Self, collider: ColliderHandle) -> Option<Entity>;
```

The entity that owns a collider, if the collider is one of ours.

<a id="rustdoc-item-613"></a>

### `statistics`

```rust
pub fn statistics(self: &Self) -> PhysicsStatistics;
```

What the simulation did since it was created.

<a id="rustdoc-item-614"></a>

### `gravity`

```rust
pub fn gravity(self: &Self) -> [f32; 3];
```

The world gravity the simulation uses, in world units per second
squared.

<a id="rustdoc-item-615"></a>

### `set_gravity`

```rust
pub fn set_gravity(self: &mut Self, gravity: [f32; 3]);
```

Sets the world gravity, in world units per second squared.

<a id="rustdoc-item-616"></a>

### `fixed_timestep`

```rust
pub fn fixed_timestep(self: &Self) -> f32;
```

The length of one simulation step, in seconds.

<a id="rustdoc-item-617"></a>

### `set_fixed_timestep`

```rust
pub fn set_fixed_timestep(self: &mut Self, fixed_timestep: f32, max_substeps: u32);
```

Sets the step length and the most steps one frame may run.

<a id="rustdoc-item-618"></a>

### `interpolation_enabled`

```rust
pub fn interpolation_enabled(self: &Self) -> bool;
```

Whether a drawn pose is blended between the last two steps.

<a id="rustdoc-item-619"></a>

### `set_interpolation`

```rust
pub fn set_interpolation(self: &mut Self, interpolate: bool);
```

Turns the blend between the last two steps on or off.

<a id="rustdoc-item-620"></a>

### `debug_draw_enabled`

```rust
pub fn debug_draw_enabled(self: &Self) -> bool;
```

Whether the colliders are drawn as outlines.

<a id="rustdoc-item-621"></a>

### `set_debug_draw`

```rust
pub fn set_debug_draw(self: &mut Self, debug_draw: bool);
```

Turns the collider outlines on or off.

<a id="rustdoc-item-622"></a>

### `collider_owners`

```rust
pub fn collider_owners(self: &Self) -> impl Iterator<Item = _> + '_;
```

The entity and collider handle of every simulated body.

<a id="rustdoc-item-624"></a>

### `collider_of`

```rust
pub fn collider_of(self: &Self, handle: ColliderHandle) -> Option<&Collider>;
```

A simulated collider, by its handle.

<a id="rustdoc-item-626"></a>

### `drain_events`

```rust
pub fn drain_events(self: &mut Self) -> PhysicsEvents;
```

Empties the two event channels into one frame's worth of events.

An event naming a collider this module did not build is dropped: the
owner map is the only route from a rapier handle back to an entity.

<a id="rustdoc-item-627"></a>

### `pair_of`

```rust
pub fn pair_of(self: &Self, first: ColliderHandle, second: ColliderHandle) -> Option<(Entity, Entity)>;
```

The two entities behind a pair of collider handles, when both are ours.

<a id="rustdoc-item-628"></a>

### `spawn_body`

```rust
pub fn spawn_body(self: &mut Self, entity: Entity, transform: &TransformComponent, body: &RigidBodyComponent, collider: &ColliderComponent);
```

Builds a rapier body and collider for an entity from its components.

The pose comes from the entity's transform, so a body appears where game
code put it. Calling this for an entity that already has a body replaces
the old one.

<a id="rustdoc-item-629"></a>

### `despawn_body`

```rust
pub fn despawn_body(self: &mut Self, entity: Entity);
```

Drops an entity's body and collider. An entity without a body is left
alone.

<a id="rustdoc-item-630"></a>

### `despawn_missing`

```rust
pub fn despawn_missing(self: &mut Self, live_entities: &HashSet<Entity>);
```

Drops the bodies of every entity that is not in the given set, which is
how a despawned or stripped entity leaves the simulation.

<a id="rustdoc-item-632"></a>

### `push_kinematic`

```rust
pub fn push_kinematic(self: &mut Self, entity: Entity, transform: &TransformComponent);
```

Hands a kinematic body the pose its transform was moved to, which the
next step carries it to.

<a id="rustdoc-item-633"></a>

### `write_back`

```rust
pub fn write_back(self: &mut Self, entity: Entity, transform: &mut TransformComponent);
```

Copies a stepped body's pose into an entity's transform.

A body the simulation does not move keeps whatever the transform already
holds, so a fixed or kinematic body is left alone.

<a id="rustdoc-item-634"></a>

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

<a id="rustdoc-item-635"></a>

### `remember_poses`

```rust
pub fn remember_poses(self: &mut Self);
```

Records where every body stands, which the next write-back blends from
when interpolation is on.

<a id="rustdoc-item-637"></a>

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
