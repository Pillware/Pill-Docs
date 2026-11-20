<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-112"></a>

# Function `pill_spline_editor::spline_set_transforms`

```rust
pub(crate) fn spline_set_transforms(entity: pill_engine::Entity, moves: &[pill_editor_core::tools::ElementMove], world: &mut pill_engine::World);
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:263`

Writes a drag's world transforms into the spline.

A control point takes the place the drag gave it, measured back into the
spline's own space. A tangent handle sets the vector from its point to where
it was dragged to, and an aligned spline mirrors it onto the point's other
side.
