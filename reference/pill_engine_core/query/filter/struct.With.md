<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6520"></a>

# Struct `pill_engine_core::query::filter::With`

```rust
pub struct With<T: Component>;
```

Source: `engine\pill_engine_core\src\query\filter.rs:157`

Archetype filter that yields only the rows whose archetype contains `T`.

Use it when the query does not need `T`'s data - so `T` does not appear in
the [`QueryTarget`](../target/trait.QueryTarget.md#rustdoc-item-2754) - but iteration should still be
limited to the entities that have it.

## Fields

<a id="rustdoc-item-6587"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `QueryFilter`
