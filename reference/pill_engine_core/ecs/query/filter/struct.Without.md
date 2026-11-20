<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3555"></a>

# Struct `pill_engine_core::ecs::query::filter::Without`

```rust
pub struct Without<T: Component>;
```

Source: `engine\pill_engine_core\src\ecs\query\filter.rs:180`

Archetype filter that yields only the rows whose archetype does not
contain `T`.

## Fields

<a id="rustdoc-item-3641"></a>

### `0`

```rust
0: std::marker::PhantomData<T>
```

_No documentation provided._

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
- `QueryFilter`
