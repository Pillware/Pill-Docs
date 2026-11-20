<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2464"></a>

# Function `pill_editor_core::editor_state::apply::world::editor_origin`

```rust
pub(in editor_state::apply::world) fn editor_origin(engine: &pill_engine::Engine, editor_default: pill_engine::ChangeOrigin) -> pill_engine::ChangeOrigin;
```

Visibility: `{'restricted': {'parent': 2466, 'path': '::editor_state::apply::world'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\world.rs:41`

The origin an editor change reports.

An enclosing scope wins: an undo or a redo replays a batch inside a
`HistoryRestore` scope, and the arms it delegates to must not relabel that
as an authored change. With no enclosing scope the editor's own value is
used, which is what a change a person made reports.
