<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3504"></a>

# Struct `pill_engine_core::config::ParallelProcessingConfig`

```rust
pub struct ParallelProcessingConfig;
```

Source: `engine\pill_engine_core\src\config.rs:70`

Zero-sized struct grouping the parallel-iterator constants.

Read a constant as `crate::config::ParallelProcessingConfig::<CONSTANT>`.

## Associated functions and methods

<a id="rustdoc-item-3505"></a>

### `SPLITTING_HINT_WINDOW`

```rust
const SPLITTING_HINT_WINDOW: i64 = 32;
```

Smoothing factor for the moving average of how long a system run or an
iterator loop takes. Each new sample moves the average by `1/32 ≈ 0.031`
of the difference, so the value follows roughly the last 32 samples
instead of copying one slow run.

<a id="rustdoc-item-3506"></a>

### `TARGET_ITERATOR_WORK_GROUP_DURATION`

```rust
const TARGET_ITERATOR_WORK_GROUP_DURATION: u64 = 50_000;
```

Target wall-clock duration of one parallel work group, in nanoseconds.

The iterator chooses its task count by dividing the system's measured
run time by this value, so each task gets roughly this much work. A
larger value means fewer, larger tasks: threads wake up less often, but
the work is split less finely. 50 µs works well because a sleeping
thread needs about 10 µs to wake, so the wake-up cost stays small
beside the work.

<a id="rustdoc-item-3507"></a>

### `WORK_GROUPS_PER_THREAD`

```rust
const WORK_GROUPS_PER_THREAD: usize = 4;
```

Most parallel work groups one pool thread gets.

Giving a long loop more groups than threads keeps it balanced when
threads do not run equally fast (efficiency cores on a hybrid CPU, or
two hyperthreads sharing one core): the faster threads take the groups
the slower ones have not reached yet.

<a id="rustdoc-item-3509"></a>

### `DEFAULT_ITERATOR_SLICE_SIZE`

```rust
const DEFAULT_ITERATOR_SLICE_SIZE: usize = 4096;
```

Default number of entities in one parallel work slice.

A starting value chosen for sequential (streaming) access, not tuned
by measurement: the access pattern and the CPU's prefetching make the
exact number matter little. [`default_entities_per_slice`](fn.default_entities_per_slice.md#rustdoc-item-3508) scales it
down for a query whose components have unusually large rows.

<a id="rustdoc-item-3510"></a>

### `MINIMUM_SLICE_SIZE`

```rust
const MINIMUM_SLICE_SIZE: usize = 256;
```

Minimum entities per thread for a query to run in parallel.

When the total is below `pool threads × MINIMUM_SLICE_SIZE` entities,
the iterator runs the rows on the calling thread, because spawning
Rayon tasks would cost more than the work itself.

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
