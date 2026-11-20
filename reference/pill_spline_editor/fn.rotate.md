<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-164"></a>

# Function `pill_spline_editor::rotate`

```rust
pub(crate) fn rotate(rotation: [f32; 4], vector: pill_core::math::Vector3f) -> pill_core::math::Vector3f;
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:565`

Turns `vector` by the unit quaternion `rotation`, `x y z w` order.
