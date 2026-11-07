<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6842"></a>

# Struct `pill_engine_core::query::iter::ParQueryIter`

```rust
pub struct ParQueryIter<'w, Q: QueryTarget, F: QueryFilter = ()>;
```

Source: `engine\pill_engine_core\src\query\iter.rs:262`

Parallel iterator that runs a query's rows on Rayon's thread pool.

Call these before running it:
- `.label("system_name")` names the Tracy zones it creates.
- `.with_batch_size(n)` sets the most rows one work slice holds.
- `.tracked()` makes `for_each` return [`BatchStats`](struct.BatchStats.md#rustdoc-item-6751).

`.for_each` then runs the closure once for every matching row.

## Fields

<a id="rustdoc-item-6833"></a>

### `archetype_ranges`

```rust
archetype_ranges: Vec<super::FilteredArchetypeRange<<Q as >::State, <F as >::State>>
```

_No documentation provided._

<a id="rustdoc-item-6835"></a>

### `min_batch_size`

```rust
min_batch_size: Option<usize>
```

_No documentation provided._

<a id="rustdoc-item-6836"></a>

### `tracked`

```rust
tracked: bool
```

_No documentation provided._

<a id="rustdoc-item-6837"></a>

### `total_components_size`

```rust
total_components_size: usize
```

Sum of all queried component sizes - the per-entity byte cost the
default slice size is derived from.

<a id="rustdoc-item-6838"></a>

### `label`

```rust
label: Option<&'static str>
```

Optional label for Tracy zones - set via `.label("system_name")`.

<a id="rustdoc-item-6839"></a>

### `iterator_timings`

```rust
iterator_timings: std::sync::Arc<std::sync::Mutex<crate::world::IteratorTimings>>
```

How long past runs of each label took. Shared through an `Arc<Mutex<_>>`
with the world, so the scheduler and every iterator read one map.

<a id="rustdoc-item-6841"></a>

### `_phantom`

```rust
_phantom: std::marker::PhantomData<&'w mut (Q, F)>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-6843"></a>

### `new`

```rust
pub(crate) fn new(archetype_ranges: Vec<FilteredArchetypeRange<<Q as >::State, <F as >::State>>, iterator_timings: std::sync::Arc<std::sync::Mutex<crate::world::IteratorTimings>>, total_components_size: usize) -> Self;
```

Constructs a new parallel iterator with default settings: no label, no
tracking, and the default slice size. Used by [`Query::par_iter_mut`].

<a id="rustdoc-item-6844"></a>

### `label`

```rust
pub fn label(self: Self, name: &'static str) -> Self;
```

Attaches a label, usually the system name, used to name this iterator's
Tracy zones.

<a id="rustdoc-item-6846"></a>

### `num_threads`

```rust
pub fn num_threads() -> usize;
```

Returns the number of threads in Rayon's thread pool.

<a id="rustdoc-item-6847"></a>

### `entity_count`

```rust
pub fn entity_count(self: &Self) -> usize;
```

Returns an upper bound on how many rows this iterator will visit.

It adds up every row of every matching archetype, before the row filter
runs, so a filter such as `Changed<T>` can make the real count smaller.

<a id="rustdoc-item-6848"></a>

### `with_batch_size`

```rust
pub fn with_batch_size(self: Self, size: usize) -> Self;
```

Sets the largest number of rows one work slice holds.

Larger slices mean less scheduling overhead; smaller slices balance the
work more evenly. Light work per row (simple arithmetic) suits slices of
1,000 to 10,000 rows, heavy work suits 10 to 100.

The value divides each archetype into slices, so a zero is raised to one:
a size computed from a frame's entity count may come out as zero, and a
division by zero would panic in the middle of that frame.

<a id="rustdoc-item-6849"></a>

### `tracked`

```rust
pub fn tracked(self: Self) -> Self;
```

Turns on batch statistics collection. `for_each` then returns
[`BatchStats`](struct.BatchStats.md#rustdoc-item-6751).

<a id="rustdoc-item-6750"></a>

### `for_each`

```rust
pub fn for_each<Func>(self: Self, f: Func) -> Option<BatchStats> where Func: Fn(<Q as >::Item<'_>) + Send + Sync;
```

Runs the closure once for every matching row, in parallel.

Returns [`BatchStats`](struct.BatchStats.md#rustdoc-item-6751) when `.tracked()` was called, and `None`
otherwise.

<a id="rustdoc-item-6852"></a>

### `plan`

```rust
pub(in query::iter) fn plan(self: &Self, hint_nanoseconds: u64) -> WorkPlan;
```

Decides how one dispatch runs.

The parallel threshold, the slice size and the work-group count are all
decided here and nowhere else. Below `pool threads × MINIMUM_SLICE_SIZE`
rows the work runs on the calling thread. Above it, the rows become flat
slices that are grouped into contiguous ranges, and [`rayon::scope`]
starts every group at once. Both executors run the plan this returns, so
they cannot disagree about the split.

<a id="rustdoc-item-6854"></a>

### `run_sequential`

```rust
pub(in query::iter) fn run_sequential<Func>(self: &Self, f: &Func, total_entities: usize, threshold: usize) -> usize where Func: Fn(<Q as >::Item<'_>);
```

Runs the rows on the calling thread and returns how many rows it visited.

This is the fallback below the parallel threshold. Tracked and untracked
calls both land here, so the rows run the same way whichever result the
caller asked for.

<a id="rustdoc-item-6855"></a>

### `execute_untracked`

```rust
pub(in query::iter) fn execute_untracked<Func>(self: &Self, f: &Func, plan: ParallelPlan) where Func: Fn(<Q as >::Item<'_>) + Send + Sync;
```

Runs the plan [`plan`](#rustdoc-item-6852) produced, without collecting
statistics.

Each slice holds at most `with_batch_size` rows, or else the count
`default_entities_per_slice` returns: `ECS_SLICE_SIZE` overrides it, and
otherwise it stays within 256 to 4096 rows. The slices are grouped into
chunks that [`rayon::scope`] starts all at once, so every thread pulls
work from the shared queue.

<a id="rustdoc-item-6857"></a>

### `execute_tracked`

```rust
pub(in query::iter) fn execute_tracked<Func>(self: &Self, f: &Func, plan: ParallelPlan) -> BatchStats where Func: Fn(<Q as >::Item<'_>) + Send + Sync;
```

Runs the same plan as
[`execute_untracked`](#rustdoc-item-6855) and returns
[`BatchStats`](struct.BatchStats.md#rustdoc-item-6751) describing how the work was spread.

Tracking adds three counters that every work group updates: how many
groups ran, and the smallest and largest group. The caller can use them to
judge how evenly the rows were shared out.

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
- `Send`
- `Sync`
