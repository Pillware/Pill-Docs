<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1311"></a>

# Module `pill_master_renderer_data::color_space`

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\color_space.rs:1`

The sRGB transfer curve the importer and the GPU module share.
Converts colour channels between sRGB and linear light.

sRGB is the encoding images and UI colours are usually stored in. Linear
light keeps each channel proportional to the brightness it represents,
which is the form lighting calculations need.

## Responsibilities

- [`srgb_to_linear`]: decode an sRGB-encoded channel to linear light, the
  way texture import in this crate reads an 8-bit image.
- [`linear_to_srgb`]: encode a linear channel as sRGB. The GPU module uses
  it to prepare a debug label's colour for the UI painter, which expects
  sRGB vertex colours.

## Design

Both directions are plain arithmetic with no GPU involved, so they live in
the data crate and texture import here and the GPU module share one copy.
The UI painter's shader has its own WGSL version of the same curve.

## Module contents

### Functions
- [`linear_to_srgb`](fn.linear_to_srgb.md#rustdoc-item-1310) — Converts one linear-light channel in `[0, 1]` to its sRGB encoding.
- [`srgb_to_linear`](fn.srgb_to_linear.md#rustdoc-item-1309) — Converts one sRGB-encoded channel in `[0, 1]` to linear light.
