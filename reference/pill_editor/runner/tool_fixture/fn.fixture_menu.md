<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1498"></a>

# Function `pill_editor::runner::tool_fixture::fixture_menu`

```rust
pub(in runner::tool_fixture) fn fixture_menu(_entity: pill_engine_core::Entity, kind: &str, selected: &[u64], _world: &pill_engine_core::World, out: &mut Vec<tools::ElementMenuEntry>);
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:438`

The rows the fixture adds to the element context menu.

A suite reads these from `dump elements` and runs one with `element menu`,
which is the same request a click on the row queues.
