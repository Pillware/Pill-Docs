<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-170"></a>

# Function `pill_editor_core::assets::submit_rename`

```rust
pub fn submit_rename(dialog: &mut Option<AssetDialog>, pending: &mut crate::commands::PendingEditorCommands) -> bool;
```

Source: `editor\pill_editor_core\src\assets.rs:390`

Runs the rename dialog's submit button: builds the new path from the typed
name, queues the recorded move and closes the dialog.

The extension stays with the file unless the typed name already ends with
it. An empty name, or one containing a path separator, warns and leaves the
dialog open.
