<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-176"></a>

# Function `pill_editor_core::assets::write_meta_selection`

```rust
pub fn write_meta_selection(pending: &mut crate::commands::PendingEditorCommands, selection: &crate::editor_state::EditorSelection, assets: &[crate::editor_state::AssetListing]) -> bool;
```

Source: `editor\pill_editor_core\src\assets.rs:598`

Runs Write Asset Meta: queues the recorded sidecar write for the selected
sourced file and returns whether it queued anything.

The file must have no sidecar and no standalone header yet, because either
one already carries a guid. A selection that names no such file is refused
with a warning, and so is a file in a module's read-only tree. The File
menu's row and the scripted `toolbar meta` line both land here.
