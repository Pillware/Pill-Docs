<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3870"></a>

# Struct `pill_engine_core::ecs::world::IteratorTimings`

```rust
pub(crate) struct IteratorTimings;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\ecs\world\mod.rs:119`

Timing data for parallel iterators, grouped by label and shared between
them.

Every label is an owned `String`. A label is usually a string literal from
the module whose system ran the iterator, and the world outlives that
module's DLL. A borrowed `&'static str` stored here would point into memory
that hot reload unmaps, and the next comparison against it would read
memory that is no longer mapped.

## Fields

<a id="rustdoc-item-5034"></a>

### `per_iterator_label_average_duration`

```rust
per_iterator_label_average_duration: std::collections::HashMap<String, u64>
```

Average time in nanoseconds each label's iterator run took, over about
the last 32 frames. Parallel iterators use it as their splitting hint.

<a id="rustdoc-item-5035"></a>

### `visited_iterator_labels`

```rust
visited_iterator_labels: Vec<String>
```

Labels visited in the current frame. Cleared each frame.

<a id="rustdoc-item-5036"></a>

### `visited_duplicated_iterator_labels`

```rust
visited_duplicated_iterator_labels: Vec<String>
```

Labels that appeared more than once in the current frame.

## Associated functions and methods

<a id="rustdoc-item-5037"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty [`IteratorTimings`](#rustdoc-item-3870) with no labels recorded.

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
