<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3883"></a>

# Enum `pill_engine_core::ecs::query::iter::WorkPlan`

```rust
pub(in ecs::query::iter) enum WorkPlan { ... }
```

Visibility: `{'restricted': {'parent': 3816, 'path': '::ecs::query::iter'}}` · Source: `engine\pill_engine_core\src\ecs\query\iter.rs:808`

How one parallel dispatch runs, decided once per `for_each`.

## Variants

<a id="rustdoc-item-3914"></a>

### `Sequential`

```rust
Sequential
```

Below the parallel threshold: walk the rows on the calling thread.

<a id="rustdoc-item-3916"></a>

### `Parallel`

```rust
Parallel
```

Split the rows into flat slices and run the groups on the pool.

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
