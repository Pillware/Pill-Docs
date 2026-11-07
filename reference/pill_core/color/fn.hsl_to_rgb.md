<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3"></a>

# Function `pill_core::color::hsl_to_rgb`

```rust
pub fn hsl_to_rgb(hue: f32, saturation: f32, lightness: f32) -> (f32, f32, f32);
```

Source: `engine\pill_core\src\color.rs:75`

Converts a hue, saturation and lightness triple (HSL) to an RGB triple.

`hue`, `saturation` and `lightness` are expected in the 0.0-1.0 range, and
every returned channel is in the same range.

## Examples

```
use pill_core::color::hsl_to_rgb;

let color = hsl_to_rgb(0.5, 0.6, 0.5);
assert!(color.0 >= 0.0 && color.0 <= 1.0);
assert!(color.1 >= 0.0 && color.1 <= 1.0);
assert!(color.2 >= 0.0 && color.2 <= 1.0);
```
