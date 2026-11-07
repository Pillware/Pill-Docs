<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9108"></a>

# Trait `pill_engine_core::world::ComponentInserter`

```rust
pub(in world) trait ComponentInserter { ... }
```

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\mod.rs:1510`

Type-erased way to push one component value into storage.

`EntityBuilder` boxes one `ComponentInserter` for each `.with(...)` call.
That way the concrete component type is captured, and the builder itself
does not have to be generic over every component type.

## Required and provided items

<a id="rustdoc-item-9106"></a>

### `insert`

```rust
fn insert(self: Box<Self>, storage: &mut ComponentColumns);
```

Push the captured component value into the given storage.

<a id="rustdoc-item-9107"></a>

### `component_id`

```rust
fn component_id(self: &Self) -> ComponentId;
```

Return the [`ComponentId`](../component/enum.ComponentId.md#rustdoc-item-83) of the captured component type.
