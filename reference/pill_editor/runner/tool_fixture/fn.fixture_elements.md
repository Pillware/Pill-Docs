<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1510"></a>

# Function `pill_editor::runner::tool_fixture::fixture_elements`

```rust
pub(in runner::tool_fixture) fn fixture_elements(entity: pill_engine_core::Entity, world: &pill_engine_core::World, out: &mut Vec<tools::ToolElement>);
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:686`

The fixture's elements for `entity`, each placed at its stored offset from
the entity's translation.

An entity with no readable transform reports nothing, which is also the
state a suite sees when it has no entity selected.
