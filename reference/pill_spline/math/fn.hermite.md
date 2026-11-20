<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-377"></a>

# Function `pill_spline::math::hermite`

```rust
pub fn hermite(start: pill_core::math::Vector3f, end: pill_core::math::Vector3f, start_tangent: pill_core::math::Vector3f, end_tangent: pill_core::math::Vector3f, local_t: f32) -> pill_core::math::Vector3f;
```

Source: `extensions\pill_spline\modules\runtime\src\math.rs:44`

Evaluate one cubic Hermite segment from `start` to `end`.

`start_tangent` and `end_tangent` are the vectors the segment leaves and
arrives along, the same length unit as the points; `local_t` runs from 0.0
at `start` to 1.0 at `end`.
