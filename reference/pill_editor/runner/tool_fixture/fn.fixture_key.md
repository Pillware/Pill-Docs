<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1507"></a>

# Function `pill_editor::runner::tool_fixture::fixture_key`

```rust
pub(in runner::tool_fixture) fn fixture_key(entity: pill_engine_core::Entity, key: &str, selected: &[u64], world: &pill_engine_core::World) -> tools::KeyResponse;
```

Visibility: `{'restricted': {'parent': 1296, 'path': '::runner::tool_fixture'}}` · Source: `editor\pill_editor\src\runner\tool_fixture.rs:634`

The keys the fixture owns while its element selection is up.

`k` is consumed outright, which is how a suite proves the hook is asked
before the keybindings; `i` answers with the insert the menu row means, so
a key can run the same edit a menu click would.
