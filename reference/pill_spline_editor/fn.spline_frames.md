<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-110"></a>

# Function `pill_spline_editor::spline_frames`

```rust
pub(crate) fn spline_frames(entity: pill_engine::Entity, selected: &[u64], world: &pill_engine::World, out: &mut Vec<pill_editor_core::tools::CoordinateFrame>);
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:230`

The `Spline` frame: the gizmo's axes follow the tangent of the point the
selection is on, so a drag along X follows the curve instead of the world.
