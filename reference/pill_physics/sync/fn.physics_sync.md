<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-837"></a>

# Function `pill_physics::sync::physics_sync`

```rust
pub fn physics_sync(time: pill_engine::Res<'_, pill_engine::Time>, manager: pill_engine::ResMut<'_, crate::manager::PhysicsManager>, events: pill_engine::ResMut<'_, crate::events::PhysicsEvents>, bodies: pill_engine::Query<'_, (pill_engine::Entity, &crate::components::RigidBodyComponent, &crate::components::ColliderComponent, &mut pill_engine::TransformComponent)>) -> Result<(), pill_engine::SystemError>;
```

Source: `extensions\pill_physics\pill_physics\src\sync.rs:40`

Advances the simulation by one frame and moves its results into the
entities.

An entity is simulated while it carries both a
[`RigidBodyComponent`](../components/struct.RigidBodyComponent.md#rustdoc-item-208) and a [`ColliderComponent`](../components/struct.ColliderComponent.md#rustdoc-item-277): a body with nothing to
collide with has no contact to resolve, so it is not a body this module
runs.

## Errors

Returns [`SystemError::MissingResource`] when the physics manager or the
engine clock is absent, which only happens in a world this module was not
registered in.
