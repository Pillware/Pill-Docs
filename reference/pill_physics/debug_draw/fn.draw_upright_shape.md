<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-500"></a>

# Function `pill_physics::debug_draw::draw_upright_shape`

```rust
pub fn draw_upright_shape(draw: &mut pill_engine::GizmoDraw, transform: &pill_engine::TransformComponent, half_height: f32, radius: f32, rounded_ends: bool);
```

Source: `extensions\pill_physics\modules\runtime\src\debug_draw.rs:101`

Draws a capsule or a cylinder standing on the entity's own y axis: a ring
at each end of the shaft and four lines joining them. With `rounded_ends`
each end also gets two half-circle arcs, at right angles, that outline the
capsule's hemispherical cap.
