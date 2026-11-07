<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2388"></a>

# Function `pill_editor_core::editor_state::apply::asset::apply`

```rust
pub(in editor_state::apply) fn apply(engine: &mut pill_engine::Engine, command: &EditorCommand) -> Result<command::CommandOutcome, String>;
```

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\asset.rs:47`

Applies one asset command.

## Errors

A message naming the command and the reason when:

- a path is outside the asset directory, or names a module's resource,
  which the editor may only read;
- a file cannot be read, written, copied, moved or removed, or the file a
  command would write already exists;
- the engine has no asset directory, no registered asset type, no
  `AssetManager`, or no random source for a new guid;
- a written asset does not load, or the file the new settings go into is
  not a JSON object.

A rollback that cannot finish adds the files it left on disk to the
message.

## Panics

Panics when `command` belongs to another family; `EditorCommand::apply_one`
routes only asset commands here.
