<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1500"></a>

# Function `pill_editor::runner::tool_fixture::fixture_insert`

```rust
pub(in runner::tool_fixture) fn fixture_insert(entity: pill_engine_core::Entity, kind: &str, id: Option<u64>, transform: tools::ElementTransform, world: &mut pill_engine_core::World) -> Option<u64>;
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:539`

Inserts one point into the fixture's storage, under `id` when that id is
free.
