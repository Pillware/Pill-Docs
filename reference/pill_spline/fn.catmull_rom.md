<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-238"></a>

# Function `pill_spline::catmull_rom`

```rust
pub fn catmull_rom(before_start: pill_core::math::Vector3f, start: pill_core::math::Vector3f, end: pill_core::math::Vector3f, after_end: pill_core::math::Vector3f, local_t: f32) -> pill_core::math::Vector3f;
```

Source: `extensions\pill_spline\pill_spline\src\pill_spline.rs:386`

Evaluate one Catmull-Rom segment between `start` and `end`.

`before_start` and `after_end` are the neighbouring control points that give
the segment its tangents; `local_t` runs from 0.0 at `start` to 1.0 at `end`.
