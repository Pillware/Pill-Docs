<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8739"></a>

# Function `pill_editor_core::scene_workflow::is_document_command`

```rust
pub fn is_document_command(command: &crate::editor_state::EditorCommand) -> bool;
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:343`

Whether `command` changes which scene document is open. The scene commands
are not undoable edits and never mark the document dirty.
