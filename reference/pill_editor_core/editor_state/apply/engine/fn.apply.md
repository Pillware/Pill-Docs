<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2395"></a>

# Function `pill_editor_core::editor_state::apply::engine::apply`

```rust
pub(in editor_state::apply) fn apply(engine: &mut pill_engine::Engine, command: &EditorCommand) -> Result<command::CommandOutcome, String>;
```

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\engine.rs:44`

Applies one engine command.

## Errors

Returns a message naming the command and the reason when:

- a system toggle names a registration index that has no system;
- the gizmo state cannot be read back after this function created it;
- the surface cameras cannot be read back after this function created
  them.

## Panics

Panics when `command` belongs to another family; `EditorCommand::apply_one`
routes only engine commands here.
