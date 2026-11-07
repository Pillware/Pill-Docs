<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-664"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_fields::leaf_values`

```rust
pub fn leaf_values(component: &ComponentView, leaves: &[inspector::RowLeaf]) -> Vec<FieldValue>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_fields.rs:1005`

Returns the current value of each leaf of a grouped row, in the row's own
order. A leaf inside an array value reads that element.
