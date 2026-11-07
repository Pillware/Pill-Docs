<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-892"></a>

# Type alias `pill_core::math::Matrix3fA`

```rust
pub type Matrix3fA = glam::Mat3A;
```

Source: `engine\pill_core\src\math.rs:42`

A 3x3 matrix of `f32` values whose columns are `Vec3A` values. It does the
same maths as [`Matrix3f`](type.Matrix3f.md#rustdoc-item-890), but it is 16-byte aligned and 48 bytes wide,
so the two memory layouts are not interchangeable.
