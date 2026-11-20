<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1299"></a>

# Function `pill_master_renderer_data::color_space::linear_to_srgb`

```rust
pub fn linear_to_srgb(linear_channel: f32) -> f32;
```

Source: `extensions\pill_master_renderer\modules\runtime\data\src\color_space.rs:33`

Converts one linear-light channel in `[0, 1]` to its sRGB encoding.

It reverses [`srgb_to_linear`](fn.srgb_to_linear.md#rustdoc-item-1298), up to floating-point rounding.
