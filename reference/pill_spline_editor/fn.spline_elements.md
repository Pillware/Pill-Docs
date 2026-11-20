<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-106"></a>

# Function `pill_spline_editor::spline_elements`

```rust
pub(crate) fn spline_elements(entity: pill_engine::Entity, world: &pill_engine::World, out: &mut Vec<pill_editor_core::tools::ToolElement>);
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:207`

The elements `entity`'s spline has: one per control point and one per
point's out-tangent.

Every place is turned into world space through the entity's transform, so
the editor's handles land where the curve is drawn.
