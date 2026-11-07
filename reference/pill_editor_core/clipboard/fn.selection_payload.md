<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1161"></a>

# Function `pill_editor_core::clipboard::selection_payload`

```rust
pub fn selection_payload(selection: &crate::editor_state::EditorSelection, snapshot: &crate::editor_state::EditorSnapshot) -> Option<String>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:301`

Builds the payload text a copy takes from the current selection.

An entity wins over an asset when both slots hold, because a cut deletes
the entity. `None` means the selection holds nothing a copy could write.
