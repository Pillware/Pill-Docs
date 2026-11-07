<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2"></a>

# Function `pill_project_ui::convert::convert`

```rust
pub fn convert(primitives: &[egui::ClippedPrimitive], list: &mut pill_ui_frame::DrawList) -> usize;
```

Source: `ui\pill_project_ui\src\convert.rs:50`

Appends `primitives` to `list` and returns how many draws they added.

Each mesh becomes one clipped draw: its vertices and indices are copied
in, then a clip and a draw command are recorded around them. An empty mesh
adds nothing, and neither does a paint callback, which is a GPU closure
that a plain draw list cannot carry.
