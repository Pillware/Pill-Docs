<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-374"></a>

# Function `pill_spline::gizmo::draw_spline_gizmo`

```rust
pub fn draw_spline_gizmo(spline: &crate::component::Spline, context: &GizmoContext<'_>, draw: &mut GizmoDraw);
```

Source: `extensions\pill_spline\modules\runtime\src\gizmo.rs:39`

Draws one spline: the curve, its control points and, when the spline stores
them, the tangents each point leaves and arrives along.

The engine's gizmo pass calls this once per entity that carries a
[`Spline`](../component/struct.Spline.md#rustdoc-item-8); the points are in the spline's own space, so the entity's
transform turns them into the place they are drawn.
