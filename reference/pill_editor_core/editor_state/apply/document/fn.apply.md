<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2392"></a>

# Function `pill_editor_core::editor_state::apply::document::apply`

```rust
pub(in editor_state::apply) fn apply(engine: &mut pill_engine::Engine, command: &EditorCommand) -> Result<command::CommandOutcome, String>;
```

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\document.rs:43`

Applies one document command.

## Errors

Returns a message naming the command and the reason when:

- the preferences file cannot be read or written, a key name is empty, or
  a dotted key's parent already holds a value that is not a JSON object;
- a scene cannot be imported, written or read back, or no guid can be read
  or made for it;
- a save finds no open scene, or the engine has no asset directory,
  registered asset types or `AssetManager` to write with.

## Panics

Panics when `command` belongs to another family; `EditorCommand::apply_one`
routes only document commands here.
