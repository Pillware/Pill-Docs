<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9112"></a>

# Struct `pill_engine_core::world::TypedComponentInserter`

```rust
pub(in world) struct TypedComponentInserter<T: Component>;
```

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\mod.rs:1519`

The [`ComponentInserter`](trait.ComponentInserter.md#rustdoc-item-9108) implementation that holds one concrete component
type.

## Fields

<a id="rustdoc-item-9113"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `ComponentInserter`
