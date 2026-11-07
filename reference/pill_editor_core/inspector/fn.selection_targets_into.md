<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4987"></a>

# Function `pill_editor_core::inspector::selection_targets_into`

```rust
pub fn selection_targets_into(selected_details: &[crate::editor_state::EntityDetail], primary: pill_engine::Entity, component: &str, targets: &mut Vec<pill_engine::Entity>);
```

Source: `editor\pill_editor_core\src\inspector.rs:1186`

[`selection_targets`](fn.selection_targets.md#rustdoc-item-4986), written into a caller's buffer so a redraw reuses
the allocation.
