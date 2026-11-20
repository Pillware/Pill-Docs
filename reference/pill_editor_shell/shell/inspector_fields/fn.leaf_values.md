<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-689"></a>

# Function `pill_editor_shell::shell::inspector_fields::leaf_values`

```rust
pub fn leaf_values(component: &ComponentView, leaves: &[inspector::RowLeaf]) -> Vec<FieldValue>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_fields.rs:1056`

Returns the current value of each leaf of a grouped row, in the row's own
order. A leaf inside an array value reads that element.
