<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5070"></a>

# Function `pill_editor_core::inspector::selection_leaf_edit`

```rust
pub fn selection_leaf_edit(targets: &[pill_engine::Entity], primary: pill_engine::Entity, component: &str, leaves: &[RowLeaf], values: &[pill_engine::FieldValue]) -> (Vec<crate::editor_state::EditorCommand>, String, String);
```

Source: `editor\pill_editor_core\src\inspector.rs:1481`

One recorded batch that writes every leaf of a grouped row, across the whole
selection, as one undo step.

`values` holds one value per leaf, in the row's own order. The label and the
coalesce key both name the first leaf, in the form the rest of the write
path uses for it: `field[index]` for an array element, and `field`
otherwise. So a colour row's picker and its per-channel fields record the
same step for one element, not two names for one edit.
