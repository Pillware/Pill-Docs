<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-369"></a>

# Function `pill_editor_shell_egui_editor::shell::spline_tool::point_leaf`

```rust
pub fn point_leaf(component: &PanelComponentValues, point_index: usize, axis_index: usize) -> Option<&PanelFieldValue>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\spline_tool.rs:188`

Returns the field row of one control point's axis, where 0 is x, 1 is y and
2 is z, when the component describes it.
