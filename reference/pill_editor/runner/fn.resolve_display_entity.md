<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1863"></a>

# Function `pill_editor::runner::resolve_display_entity`

```rust
pub(in runner) fn resolve_display_entity(world: &pill_engine_core::World, display: &str) -> Option<pill_engine_core::Entity>;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4231`

Resolve an `NvG` display handle against the live entity table, so a
scripted dump can never address an entity the world does not hold.
