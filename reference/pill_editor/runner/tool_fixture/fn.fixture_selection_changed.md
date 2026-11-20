<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1508"></a>

# Function `pill_editor::runner::tool_fixture::fixture_selection_changed`

```rust
pub(in runner::tool_fixture) fn fixture_selection_changed(entity: pill_engine_core::Entity, previous: &[u64], current: &[u64], _world: &pill_engine_core::World);
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:655`

Logs every element-selection change the fixture hears.

The line is the proof that the notification reaches a tool whatever changed
the selection: a click, a marquee, an undo and a command all produce it.
