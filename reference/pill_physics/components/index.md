<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-268"></a>

# Module `pill_physics::components`

Source: `extensions\pill_physics\pill_physics\src\components.rs:1`

The two components, the body kinds and the collider shapes.
The two components that describe a physics body and its collider.

## Responsibilities

- Declares [`RigidBodyComponent`](struct.RigidBodyComponent.md#rustdoc-item-208), the simulation inputs of one entity.
- Declares [`ColliderComponent`](struct.ColliderComponent.md#rustdoc-item-277), the shape and material of one entity.
- Registers both with the world, field layout included, so the Inspector
  draws real rows and a saved scene restores every value.

## Design

Both components hold plain numbers only: no rapier type appears here, so a
project, a saved scene and the editor never need rapier in their
dependencies. The manager converts these values when it builds a body.

## Module contents

### Structs
- [`ColliderComponent`](struct.ColliderComponent.md#rustdoc-item-277) — The shape an entity occupies in the simulation and how it responds to
- [`RigidBodyComponent`](struct.RigidBodyComponent.md#rustdoc-item-208) — What the simulation needs to know about one body.

### Enums
- [`BodyKind`](enum.BodyKind.md#rustdoc-item-4) — How the simulation is allowed to move a body.
- [`ColliderShape`](enum.ColliderShape.md#rustdoc-item-149) — The shape of a collider, which decides what its dimensions mean.

### Functions
- [`__pill_register_ColliderComponent`](fn.__pill_register_ColliderComponent.md#rustdoc-item-329) — Registers this component into the world; used by the artifact-wide
- [`__pill_register_RigidBodyComponent`](fn.__pill_register_RigidBodyComponent.md#rustdoc-item-266) — Registers this component into the world; used by the artifact-wide
- [`register`](fn.register.md#rustdoc-item-331) — Registers both components with the world, field layout included.
