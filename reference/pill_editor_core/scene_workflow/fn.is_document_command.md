<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6700"></a>

# Function `pill_editor_core::scene_workflow::is_document_command`

```rust
pub fn is_document_command(command: &crate::editor_state::EditorCommand) -> bool;
```

Source: `editor\pill_editor_core\src\scene_workflow.rs:337`

Whether `command` changes which scene document is open. The scene commands
are not undoable edits and never mark the document dirty.
