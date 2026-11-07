<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-166"></a>

# Function `pill_editor_core::assets::submit_create`

```rust
pub fn submit_create(dialog: &mut Option<AssetDialog>, pending: &mut crate::commands::PendingEditorCommands) -> bool;
```

Source: `editor\pill_editor_core\src\assets.rs:304`

Runs the create dialog's submit button: queues the recorded step and closes
the dialog.

A missing type or name warns and leaves the dialog open. What the step is
depends on what the dialog was opened for: a standalone asset's default
document, a new empty scene, or the current world saved as a scene. Every
kind queues commands, so the world and the files change only when they run.
