<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1164"></a>

# Function `pill_editor_core::clipboard::queue_action`

```rust
pub fn queue_action(clipboard: &mut EditorClipboard, action: ClipboardAction, selection: &crate::editor_state::EditorSelection, snapshot: &crate::editor_state::EditorSnapshot, pending_commands: &mut crate::commands::PendingEditorCommands) -> Option<String>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:330`

Queues one clipboard command from the shell.

A copy writes the selection's payload. A cut writes it and also queues the
delete, as the same recorded step the Entities tab's trash button queues;
that delete is queued even when the selection had no payload to write. A
paste asks the executable to read the clipboard.

Returns a one-line summary of the payload for the caller's log line, or
`None` when a copy or a cut found nothing to write.
