<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4266"></a>

# Struct `pill_engine_core::scheduler::SystemScheduler`

```rust
pub struct SystemScheduler;
```

Source: `engine\pill_engine_core\src\scheduler.rs:218`

The conflict matrix and the parallel batches, for the registered systems.

The matrix depends only on the access patterns it was built from, and the
batches depend only on the matrix. Both are rebuilt together by
[`ensure_execution_graph`](#rustdoc-item-8064) after
[`invalidate`](#rustdoc-item-8065), so a single flag says whether
the graph is current and no caller has to work that out.

## Fields

<a id="rustdoc-item-8061"></a>

### `conflict_matrix`

```rust
conflict_matrix: Vec<Vec<bool>>
```

`conflict_matrix[i][j]` is true when system `i` conflicts with system
`j`. Rebuilt from scratch from the access patterns, never edited in
place.

<a id="rustdoc-item-8062"></a>

### `execution_graph`

```rust
execution_graph: Vec<Vec<usize>>
```

Batches of system indices. No two systems in one batch conflict, so a
batch can run in parallel.

<a id="rustdoc-item-8063"></a>

### `needs_rebuild`

```rust
needs_rebuild: bool
```

Whether the matrix and the graph are older than the current system set.

Starts true: a fresh scheduler has built nothing yet.

## Associated functions and methods

<a id="rustdoc-item-8066"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty scheduler that builds its first graph on demand.

<a id="rustdoc-item-8065"></a>

### `invalidate`

```rust
pub fn invalidate(self: &mut Self);
```

Marks the conflict matrix and the batches stale.

Registrations and removals call this. Removing every system calls
[`clear`](#rustdoc-item-8067) instead, which marks the graph stale
the same way. The rebuild itself happens once, in
[`ensure_execution_graph`](#rustdoc-item-8064),
so a module that registers many systems in its `init` pays for one
rebuild, not one per registration.

Enabled state is not conflict data: a disabled system stays in the batch
it was given and is skipped at dispatch.

<a id="rustdoc-item-8064"></a>

### `ensure_execution_graph`

```rust
pub fn ensure_execution_graph<'a, impl ExactSizeIterator<Item = &'a SystemAccess>: ExactSizeIterator<Item = _>>(self: &mut Self, accesses: impl ExactSizeIterator<Item = _>);
```

Rebuilds the conflict matrix and the execution graph when they are
stale.

`accesses` must yield every registered system's access pattern in
registration order, and its length must be the number of registered
systems, because the graph's indices are positions in that list. The
call does nothing when nothing was invalidated since the last build.

Batches are filled first-fit (each system takes the first batch it can
join): a system joins the earliest batch that holds nothing it conflicts
with, and opens a new batch at the end when no batch fits. Registration
order is the only ordering signal the engine offers (there is no
`before`/`after`), so it decides which of two conflicting systems runs
first. A later system can never join a batch that holds a system it
conflicts with.

<a id="rustdoc-item-8069"></a>

### `execution_graph`

```rust
pub fn execution_graph(self: &Self) -> &[Vec<usize>];
```

Returns the batches of system indices that can run in parallel.

The result is only current after
[`ensure_execution_graph`](#rustdoc-item-8064); the
engine calls that before it dispatches a frame.

<a id="rustdoc-item-8067"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Clears the conflict matrix and the graph.

The engine calls this when it removes every system at once. The next
[`ensure_execution_graph`](#rustdoc-item-8064)
rebuilds from whatever is registered then.

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
- `Default`
