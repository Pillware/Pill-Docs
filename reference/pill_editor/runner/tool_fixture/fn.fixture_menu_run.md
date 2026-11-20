<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1499"></a>

# Function `pill_editor::runner::tool_fixture::fixture_menu_run`

```rust
pub(in runner::tool_fixture) fn fixture_menu_run(entity: pill_engine_core::Entity, kind: &str, selected: &[u64], item: &str, world: &pill_engine_core::World) -> Result<Vec<pill_editor_core::editor_state::EditorCommand>, String>;
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:465`

Runs one of the fixture's menu rows, answering the commands it means.

The insert row adds a point a spacing past the last one; the reset row
moves every point back onto the layout. Both are plain edits the editor
records, so the row undoes as one step like any other.
