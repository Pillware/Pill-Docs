<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5596"></a>

# Struct `pill_engine_core::ecs::world::TypedComponentInserter`

```rust
pub(in ecs::world) struct TypedComponentInserter<T: Component>;
```

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\mod.rs:1620`

The [`ComponentInserter`](trait.ComponentInserter.md#rustdoc-item-5592) implementation that holds one concrete component
type.

## Fields

<a id="rustdoc-item-5597"></a>

### `component`

```rust
component: T
```

The component value to insert when the entity is built.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `ComponentInserter`
