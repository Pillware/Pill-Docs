<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1331"></a>

# Function `pill_editor::runner::scaled_view_rect`

```rust
pub(in runner) fn scaled_view_rect(rect: pill_editor_core::boundary::ShellRect, scale_factor: f32, window_size: (u32, u32)) -> (i32, i32, u32, u32);
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3596`

A shell rectangle in logical points as the child window's own client
pixels: scaled, rounded, kept at least one pixel wide, and clamped inside
the window so a viewport that overhangs an edge never asks for pixels the
window does not have.
