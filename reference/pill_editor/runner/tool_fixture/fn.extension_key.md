<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1494"></a>

# Function `pill_editor::runner::tool_fixture::extension_key`

```rust
pub(in runner::tool_fixture) fn extension_key(_entity: pill_engine_core::Entity, key: &str, _selected: &[u64], _world: &pill_engine_core::World) -> tools::KeyResponse;
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:412`

What the fixture's extensions make of their shared chord: they take it.

The chain asks them in `order`, so the notes extension's answer is the one
that counts while both are attached; either way the editor logs the same
consumed-key line, which is what a suite reads.
