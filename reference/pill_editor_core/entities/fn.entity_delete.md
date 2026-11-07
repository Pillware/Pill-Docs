<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3679"></a>

# Function `pill_editor_core::entities::entity_delete`

```rust
pub fn entity_delete(entity: pill_engine::Entity, asset: Option<String>) -> (Vec<crate::editor_state::EditorCommand>, String);
```

Source: `editor\pill_editor_core\src\entities.rs:43`

Returns the recorded delete: clearing the selection and destroying the
entity, as one history step under the `delete entity` label.

`asset` is the selected asset's path. The clear keeps it, so deleting an
entity does not drop the selected file as well. The clear comes first on
purpose: undo runs a step's commands backwards, so the restore runs
first, gives the entity a new handle, and the selection command after it
is moved to that handle (see [`EditorCommand::apply_recorded`](../editor_state/command/enum.EditorCommand.md#rustdoc-item-2402)).
