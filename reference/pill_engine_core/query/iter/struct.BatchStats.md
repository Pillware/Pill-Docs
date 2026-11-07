<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6751"></a>

# Struct `pill_engine_core::query::iter::BatchStats`

```rust
pub struct BatchStats;
```

Source: `engine\pill_engine_core\src\query\iter.rs:44`

How one parallel iteration spread its work over batches.

[`ParQueryIter::for_each`](struct.ParQueryIter.md#rustdoc-item-6750) returns this when tracking is on, so the caller
can see how Rayon split the rows between its tasks. A run small enough to
stay on the calling thread reports a single batch.

## Fields

<a id="rustdoc-item-6744"></a>

### `num_threads`

```rust
num_threads: usize
```

Number of threads in the Rayon thread pool.

<a id="rustdoc-item-6745"></a>

### `batch_count`

```rust
batch_count: usize
```

Number of batches the iteration was split into.

<a id="rustdoc-item-6746"></a>

### `total_entities`

```rust
total_entities: usize
```

Rows visited in total, counted before the row filter runs.

<a id="rustdoc-item-6747"></a>

### `min_batch_size`

```rust
min_batch_size: usize
```

Size of the smallest batch, in rows.

<a id="rustdoc-item-6748"></a>

### `max_batch_size`

```rust
max_batch_size: usize
```

Size of the largest batch, in rows.

<a id="rustdoc-item-6749"></a>

### `avg_batch_size`

```rust
avg_batch_size: f64
```

Average batch size, `total_entities / batch_count`.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `Default`
- `Display`
