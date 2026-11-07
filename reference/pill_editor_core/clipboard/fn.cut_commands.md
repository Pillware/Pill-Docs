<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1166"></a>

# Function `pill_editor_core::clipboard::cut_commands`

```rust
pub fn cut_commands(selection: &crate::editor_state::EditorSelection) -> Option<(Vec<crate::editor_state::EditorCommand>, String)>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:386`

Builds the recorded step a cut queues: the same delete the Entities tab's
trash button queues.

The step clears the selection and destroys the entity. Undoing it restores
the entity with a new handle and selects that handle. `None` means the
selection has no primary entity, so there is nothing to delete.
