<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-379"></a>

# Function `pill_editor_shell::shell::spline_tool::field_element_index`

```rust
pub fn field_element_index(field_name: &str) -> Option<usize>;
```

Source: `editor\pill_editor_shell\src\shell\spline_tool.rs:218`

Returns the element index a `control_points[i]` row names:
`control_points[3].y` gives 3.

Public because the function inventory names it by path, and that inventory
is included at this crate's root, which cannot name a private function.
