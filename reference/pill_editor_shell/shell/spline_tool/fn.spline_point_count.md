<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-376"></a>

# Function `pill_editor_shell::shell::spline_tool::spline_point_count`

```rust
pub fn spline_point_count(component: &PanelComponentValues) -> usize;
```

Source: `editor\pill_editor_shell\src\shell\spline_tool.rs:176`

Returns how many control points the selected spline's rows describe.

The count comes from the rows themselves: every element of the array is
named `control_points[i].<axis>`, so the highest index seen plus one is the
number the panel offers.
