<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4182"></a>

# Function `pill_editor_core::gizmo::dotted_segments`

```rust
pub fn dotted_segments(start: [f32; 3], end: [f32; 3], dash_length: f32) -> Vec<([f32; 3], [f32; 3])>;
```

Source: `editor\pill_editor_core\src\gizmo.rs:1053`

Builds the dashes of a dotted line from `start` to `end`.

Each dash is `dash_length` long, the gaps between them are the same size,
and the line always ends exactly at `end`.

The caller derives the dash length from the camera distance, so the dots
look the same on screen at any zoom. A very long line is cut to
[`DOTTED_SEGMENTS_MAX`](constant.DOTTED_SEGMENTS_MAX.md#rustdoc-item-4181) dashes instead of building thousands of them.
