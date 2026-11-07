<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-533"></a>

# Module `pill_physics::events`

Source: `extensions\pill_physics\pill_physics\src\events.rs:1`

The three collision events a project reacts to.
What touched what, as plain data game code can act on.

## Responsibilities

- Declares the three event kinds a project reacts to: a contact starting, a
  contact ending, and the force a contact carried.
- Holds one frame's events in [`PhysicsEvents`](struct.PhysicsEvents.md#rustdoc-item-486), which the drain empties at
  the start of the next frame.

## Design

A rapier event names collider handles, which mean nothing outside this crate.
The manager translates each handle into the entity that owns the collider, so
a project never sees a handle and never needs rapier in its dependencies.

## Module contents

### Structs
- [`CollisionStarted`](struct.CollisionStarted.md#rustdoc-item-349) — Two entities began touching.
- [`CollisionStopped`](struct.CollisionStopped.md#rustdoc-item-394) — Two entities stopped touching.
- [`ContactForce`](struct.ContactForce.md#rustdoc-item-441) — The force a contact carried, which is what breaks a crate or triggers a
- [`PhysicsEvents`](struct.PhysicsEvents.md#rustdoc-item-486) — One frame's collisions.
