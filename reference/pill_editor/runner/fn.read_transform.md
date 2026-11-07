<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1420"></a>

# Function `pill_editor::runner::read_transform`

```rust
pub(in runner) fn read_transform(world: &pill_engine_core::World, entity: pill_engine_core::Entity) -> Option<pill_player::TransformComponent>;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:3781`

Read one entity's transform as plain arrays; `None` when the entity is
not alive, carries no transform, or a field does not read back as floats.
