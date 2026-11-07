<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-179"></a>

# Function `pill_editor_core::assets::delete_selection`

```rust
pub fn delete_selection(pending: &mut crate::commands::PendingEditorCommands, selection: &crate::editor_state::EditorSelection, assets: &[crate::editor_state::AssetListing]) -> bool;
```

Source: `editor\pill_editor_core\src\assets.rs:566`

Runs Delete Asset: queues the recorded delete of the selected file and
returns whether it queued anything.

A selection that names no file is refused with a warning, and so is a file
in a module's read-only tree. The file tile's menu and the scripted
`toolbar delete` line both land here, so one rule covers them.
