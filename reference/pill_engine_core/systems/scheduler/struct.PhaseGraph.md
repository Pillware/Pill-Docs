<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10457"></a>

# Struct `pill_engine_core::systems::scheduler::PhaseGraph`

```rust
pub(in systems::scheduler) struct PhaseGraph;
```

Visibility: `{'restricted': {'parent': 10356, 'path': '::systems::scheduler'}}` · Source: `engine\pill_engine_core\src\systems\scheduler.rs:282`

The conflict matrix and the parallel batches of one batched phase.

The matrix depends only on the phase's access patterns, and the batches
depend only on the matrix. Both are rebuilt together, from scratch, by
[`SystemScheduler::ensure_execution_graph`](struct.SystemScheduler.md#rustdoc-item-9964).

## Fields

<a id="rustdoc-item-10455"></a>

### `conflict_matrix`

```rust
conflict_matrix: Vec<Vec<bool>>
```

`conflict_matrix[i][j]` is true when the phase's system `i` conflicts
with its system `j`, both being positions in the phase's own list.
Never edited in place.

<a id="rustdoc-item-10456"></a>

### `batches`

```rust
batches: Vec<Vec<usize>>
```

Batches of indices into the engine's whole system list. No two systems
in one batch conflict, so a batch can run in parallel.

## Associated functions and methods

<a id="rustdoc-item-10458"></a>

### `rebuild`

```rust
pub(in systems::scheduler) fn rebuild(self: &mut Self, accesses: &[&SystemAccess], indices: &[usize]);
```

Rebuilds the matrix and the batches from the phase's access patterns.

`accesses` are the phase's systems in registration order and `indices`
are their positions in the engine's whole system list, so a batch holds
indices the engine can dispatch with directly.

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
- `Default`
