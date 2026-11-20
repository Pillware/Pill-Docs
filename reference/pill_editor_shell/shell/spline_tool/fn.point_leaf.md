<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-377"></a>

# Function `pill_editor_shell::shell::spline_tool::point_leaf`

```rust
pub fn point_leaf(component: &PanelComponentValues, point_index: usize, axis_index: usize) -> Option<&PanelFieldValue>;
```

Source: `editor\pill_editor_shell\src\shell\spline_tool.rs:188`

Returns the field row of one control point's axis, where 0 is x, 1 is y and
2 is z, when the component describes it.
