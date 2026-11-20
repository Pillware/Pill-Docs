<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-951"></a>

# Function `pill_editor_core::camera::quaternion_product`

```rust
pub(in camera) fn quaternion_product(left: [f32; 4], right: [f32; 4]) -> [f32; 4];
```

Visibility: `{'restricted': {'parent': 765, 'path': '::camera'}}` · Source: `editor\pill_editor_core\src\camera.rs:259`

The Hamilton product of two `[x, y, z, w]` quaternions: applying the
result turns a vector by `right` first and then by `left`.
