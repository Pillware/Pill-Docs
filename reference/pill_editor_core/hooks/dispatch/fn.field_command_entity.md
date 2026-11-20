<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5167"></a>

# Function `pill_editor_core::hooks::dispatch::field_command_entity`

```rust
pub(in hooks::dispatch) fn field_command_entity(command: &crate::editor_state::EditorCommand) -> Option<pill_engine::Entity>;
```

Visibility: `{'restricted': {'parent': 5124, 'path': '::hooks::dispatch'}}` · Source: `editor\pill_editor_core\src\hooks\dispatch.rs:527`

The entity one field command targets, or `None` for every other command.
