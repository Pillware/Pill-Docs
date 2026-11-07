<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2399"></a>

# Function `pill_editor_core::editor_state::apply::world::apply`

```rust
pub(in editor_state::apply) fn apply(engine: &mut pill_engine::Engine, command: &EditorCommand) -> Result<command::CommandOutcome, String>;
```

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\world.rs:46`

Applies one world command.

## Errors

Returns a message naming the command and the reason when a component name
is unknown or ambiguous, a component has no field layout, a field is
missing or its value is refused, the entity or the entity reference is
gone, the resource or its field is not editable, or the queued world
commands cannot be applied.

## Panics

Panics when `command` belongs to another family; `EditorCommand::apply_one`
routes only world commands here.
