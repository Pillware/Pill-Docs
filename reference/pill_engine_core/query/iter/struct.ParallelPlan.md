<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6856"></a>

# Struct `pill_engine_core::query::iter::ParallelPlan`

```rust
pub(in query::iter) struct ParallelPlan;
```

Visibility: `{'restricted': {'parent': 6787, 'path': '::query::iter'}}` · Source: `engine\pill_engine_core\src\query\iter.rs:821`

One parallel dispatch's slices and the contiguous groups of them.

## Fields

<a id="rustdoc-item-6910"></a>

### `slices`

```rust
slices: Vec<(usize, usize, usize)>
```

Each slice is an `(archetype index, start row, end row)` range.

<a id="rustdoc-item-6911"></a>

### `groups`

```rust
groups: Vec<(usize, usize)>
```

Each group is `(offset into `slices`, slice count)`; all its slices run
back-to-back on one Rayon task.

<a id="rustdoc-item-6912"></a>

### `total_entities`

```rust
total_entities: usize
```

Every row in every matching archetype, before the row filter.

<a id="rustdoc-item-6913"></a>

### `pool_threads`

```rust
pool_threads: usize
```

Pool size the plan was sized for.

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
