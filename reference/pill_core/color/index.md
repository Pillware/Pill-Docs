<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4"></a>

# Module `pill_core::color`

Source: `engine\pill_core\src\color.rs:1`

Color palettes for debug visualization.
Color palettes for debug visualization.

## Responsibilities

- Provide a fixed palette of visually distinct colors.
- Generate a palette of 100 colors from evenly spaced hues.

## Design

Every color is an `(r, g, b)` triple of `f32` values in the 0.0-1.0
range. The module keeps no state and has no dependencies.

## Module contents

### Functions
- [`generate_color_palette`](fn.generate_color_palette.md#rustdoc-item-1) — Generates 100 colors from evenly spaced hues.
- [`hsl_to_rgb`](fn.hsl_to_rgb.md#rustdoc-item-3) — Converts a hue, saturation and lightness triple (HSL) to an RGB triple.

### Constants
- [`DISTINCT_COLOR_PALETTE`](constant.DISTINCT_COLOR_PALETTE.md#rustdoc-item-0) — A fixed palette of visually distinct RGB colors, for debug rendering.
