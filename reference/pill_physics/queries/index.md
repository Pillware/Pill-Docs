<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-734"></a>

# Module `pill_physics::queries`

Source: `extensions\pill_physics\pill_physics\src\queries.rs:1`

Ray queries against the simulated world.
Ray queries against the simulated world.

## Responsibilities

- Declares [`RayHit`](struct.RayHit.md#rustdoc-item-638), what a ray that reached something reports.
- Casts a ray through every simulated collider and answers with the closest
  hit, named as the entity that owns it.

## Design

The cast walks the simulated colliders and tests each shape in world space.
That is exact and linear in the number of bodies, which is the right trade
for picking and line-of-sight checks; a broad-phase walk is a follow-up for a
world with enough bodies to need it.

## Module contents

### Structs
- [`RayHit`](struct.RayHit.md#rustdoc-item-638) — The closest thing a ray reached.

## Re-exports

- [`pub use crate::manager::PhysicsManager;`](../manager/struct.PhysicsManager.md#rustdoc-item-337)
