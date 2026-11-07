<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-335"></a>

# Function `pill_physics::debug_draw::physics_debug_draw`

```rust
pub fn physics_debug_draw(manager: pill_engine::Res<'_, crate::manager::PhysicsManager>, debug_draw: pill_engine::ResMut<'_, pill_engine::DebugDraw>, colliders: pill_engine::Query<'_, (&crate::components::ColliderComponent, &pill_engine::TransformComponent)>) -> Result<(), pill_engine::SystemError>;
```

Source: `extensions\pill_physics\pill_physics\src\debug_draw.rs:34`

Draws the outline of every collider while the settings document asks for it.

## Errors

Returns [`SystemError::MissingResource`] when the physics manager or the
engine's debug collection is absent, which only happens in a world this
module was not registered in.
