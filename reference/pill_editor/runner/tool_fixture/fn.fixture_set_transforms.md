<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1513"></a>

# Function `pill_editor::runner::tool_fixture::fixture_set_transforms`

```rust
pub(in runner::tool_fixture) fn fixture_set_transforms(entity: pill_engine_core::Entity, moves: &[tools::ElementMove], world: &mut pill_engine_core::World);
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:733`

Writes the world transforms a drag produced back into the fixture's
storage, as offsets from the entity they belong to.

This is the fixture's whole write-back: the editor hands it finished world
transforms and it decides what that means for its own component, which is
the contract every tool keeps.
