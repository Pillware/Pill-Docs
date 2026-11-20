<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-148"></a>

# Function `pill_physics_editor::rotate`

```rust
pub(crate) fn rotate(rotation: [f32; 4], vector: pill_core::math::Vector3f) -> pill_core::math::Vector3f;
```

Visibility: `crate` · Source: `extensions\pill_physics\modules\editor\src\pill_physics_editor.rs:346`

Turns `vector` by the unit quaternion `rotation`, `x y z w` order.
