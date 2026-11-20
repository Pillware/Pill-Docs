<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1074"></a>

# Function `pill_physics::sync::physics_sync`

```rust
pub fn physics_sync(time: pill_engine::Res<'_, pill_engine::Time>, manager: pill_engine::ResMut<'_, crate::manager::PhysicsManager>, events: pill_engine::ResMut<'_, crate::events::PhysicsEvents>, bodies: pill_engine::Query<'_, (pill_engine::Entity, &mut crate::components::RigidBodyComponent, &crate::components::ColliderComponent, &mut pill_engine::TransformComponent)>, static_colliders: pill_engine::Query<'_, (pill_engine::Entity, &crate::components::ColliderComponent, &pill_engine::TransformComponent), pill_engine::Without<crate::components::RigidBodyComponent>>) -> Result<(), pill_engine::SystemError>;
```

Source: `extensions\pill_physics\modules\runtime\src\sync.rs:47`

Advances the simulation by one frame and moves its results into the
entities.

An entity with both a [`RigidBodyComponent`](../components/struct.RigidBodyComponent.md#rustdoc-item-223) and a [`ColliderComponent`](../components/struct.ColliderComponent.md#rustdoc-item-366) is
a body the simulation moves. An entity with a collider alone is static
geometry - or a trigger zone, when the collider is a sensor - that bodies
hit and that moves only with its transform. A rigid body alone has nothing
to collide with and is not simulated.

## Errors

Returns [`SystemError::MissingResource`] when the physics manager or the
engine clock is absent, which only happens in a world this module was not
registered in.
