<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-116"></a>

# Function `pill_spline_editor::spline_remove`

```rust
pub(crate) fn spline_remove(entity: pill_engine::Entity, kind: &str, elements: &[u64], world: &mut pill_engine::World) -> usize;
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:321`

Removes control points, answering how many went.

The ids are removed from the highest down, so each index still names the
point it did when the caller collected them.
