<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1491"></a>

# Function `pill_editor::runner::tool_fixture::notes_menu_run`

```rust
pub(in runner::tool_fixture) fn notes_menu_run(_entity: pill_engine_core::Entity, kind: &str, _selected: &[u64], item: &str, _world: &pill_engine_core::World) -> Result<Vec<pill_editor_core::editor_state::EditorCommand>, String>;
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:366`

Runs the notes row.

The row changes nothing: the fixture exists to prove an extension's row
reaches the menu and runs as its own recorded batch, and an empty batch is
the smallest honest one.
