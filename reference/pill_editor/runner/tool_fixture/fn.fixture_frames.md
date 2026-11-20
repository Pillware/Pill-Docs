<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1515"></a>

# Function `pill_editor::runner::tool_fixture::fixture_frames`

```rust
pub(in runner::tool_fixture) fn fixture_frames(_entity: pill_engine_core::Entity, _selected: &[u64], _world: &pill_engine_core::World, out: &mut Vec<tools::CoordinateFrame>);
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:757`

The one frame the fixture offers, so a suite can prove the space row
reaches a tool's own frame and that a drag in it produces the world delta
the frame implies.
