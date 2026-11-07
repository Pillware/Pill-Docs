<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4179"></a>

# Function `pill_editor_core::gizmo::scale_handle_lengths`

```rust
pub fn scale_handle_lengths(reference_length: f32, original_scale: [f32; 3], current_scale: [f32; 3], axis_index: usize) -> [f32; 3];
```

Source: `editor\pill_editor_core\src\gizmo.rs:1011`

Returns the handle length for each axis during a scale drag.

The dragged axis follows the object's scale against its scale at the press.
The other axes keep `reference_length`.

The ratio is clamped to the handle's range. A zero scale at the press, or a
zero scale written by a command in the middle of a drag, gives a ratio that
is not usable; it falls back to `reference_length`, so a degenerate object
still draws a usable handle instead of NaN geometry.
