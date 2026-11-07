<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-368"></a>

# Function `pill_editor_shell_egui_editor::shell::spline_tool::spline_point_count`

```rust
pub fn spline_point_count(component: &PanelComponentValues) -> usize;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\spline_tool.rs:176`

Returns how many control points the selected spline's rows describe.

The count comes from the rows themselves: every element of the array is
named `control_points[i].<axis>`, so the highest index seen plus one is the
number the panel offers.
