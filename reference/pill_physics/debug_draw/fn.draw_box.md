<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-342"></a>

# Function `pill_physics::debug_draw::draw_box`

```rust
pub fn draw_box(debug_draw: &mut pill_engine::DebugDraw, transform: &pill_engine::TransformComponent, half_extents: [f32; 3], style: pill_engine::DebugStyle);
```

Source: `extensions\pill_physics\pill_physics\src\debug_draw.rs:84`

Draws the twelve edges of a box that is offset by the entity's pose.
