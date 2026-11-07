<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2397"></a>

# Function `pill_editor_core::editor_state::apply::selection::apply`

```rust
pub(in editor_state::apply) fn apply(engine: &mut pill_engine::Engine, command: &EditorCommand) -> Result<command::CommandOutcome, String>;
```

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\selection.rs:45`

Applies one selection command.

## Errors

Returns an error message when the selection resource cannot be claimed
after this function inserted it, or when `ArmEntityPick` finds no
`EntityPickRequest` resource in the world.

## Panics

Panics when `command` belongs to another family; `EditorCommand::apply_one`
routes only selection commands here.
