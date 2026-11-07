<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1"></a>

# Function `pill_core::color::generate_color_palette`

```rust
pub fn generate_color_palette() -> Vec<(f32, f32, f32)>;
```

Source: `engine\pill_core\src\color.rs:51`

Generates 100 colors from evenly spaced hues.

The saturation and lightness stay fixed while the hue advances in 100
equal steps around the circle, so the colors spread evenly.
