<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-496"></a>

# Function `pill_physics::debug_draw::draw_collider_outline`

```rust
pub fn draw_collider_outline(collider: &crate::components::ColliderComponent, context: &pill_engine::GizmoContext<'_>, draw: &mut pill_engine::GizmoDraw);
```

Source: `extensions\pill_physics\modules\runtime\src\debug_draw.rs:39`

Draws the outline of one collider while the settings document asks for it.

The engine's gizmo pass calls this once per entity that carries a
[`ColliderComponent`](../components/struct.ColliderComponent.md#rustdoc-item-366); the shape is drawn at the collider's offset, turned
with the entity.
