<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5970"></a>

# Struct `pill_engine_core::systems::scheduler::SystemScheduler`

```rust
pub struct SystemScheduler;
```

Source: `engine\pill_engine_core\src\systems\scheduler.rs:346`

The conflict matrices and the parallel batches, one graph per batched phase.

The graphs depend only on the access patterns they were built from, and the
batches depend only on the matrices. Both are rebuilt together by
[`ensure_execution_graph`](#rustdoc-item-9964) after
[`invalidate`](#rustdoc-item-10488), so a single flag says whether
the graphs are current and no caller has to work that out.

Each phase gets its own graph rather than one graph over every system: a
phase's systems never run beside another phase's, so a conflict across
phases must not cost a batch inside either of them.

## Fields

<a id="rustdoc-item-10485"></a>

### `pre_project`

```rust
pre_project: PhaseGraph
```

The graph of systems that run before the first command flush.

<a id="rustdoc-item-10486"></a>

### `project`

```rust
project: PhaseGraph
```

The graph of the game's own frame work.

<a id="rustdoc-item-10487"></a>

### `needs_rebuild`

```rust
needs_rebuild: bool
```

Whether the matrices and the graphs are older than the current system
set.

Starts true: a fresh scheduler has built nothing yet.

## Associated functions and methods

<a id="rustdoc-item-10489"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty scheduler that builds its first graphs on demand.

<a id="rustdoc-item-10488"></a>

### `invalidate`

```rust
pub fn invalidate(self: &mut Self);
```

Marks the conflict matrices and the batches stale.

Registrations and removals call this. Removing every system calls
[`clear`](#rustdoc-item-10490) instead, which marks the graphs stale
the same way. The rebuild itself happens once, in
[`ensure_execution_graph`](#rustdoc-item-9964),
so a module that registers many systems in its `init` pays for one
rebuild, not one per registration.

Enabled state is not conflict data: a disabled system stays in the batch
it was given and is skipped at dispatch.

<a id="rustdoc-item-10491"></a>

### `ensure_execution_graphs`

```rust
pub fn ensure_execution_graphs<'a, impl Iterator<Item = (&'a SystemAccess, RunPhase)>: Iterator<Item = _>>(self: &mut Self, accesses: impl Iterator<Item = _>);
```

Rebuilds the conflict matrices and the execution graphs when they are
stale.

`accesses` must yield every registered system's access pattern with its
phase, in registration order, and its length must be the number of
registered systems, because the graph's indices are positions in that
list. The call does nothing when nothing was invalidated since the last
build.

Within a phase, a system's batch is one past the latest batch of the
systems registered before it that it conflicts with, and zero when there
is none. Because a conflicting predecessor always sits in a strictly
earlier batch, no batch can hold two systems that conflict, and a later
system can never run before an earlier one it conflicts with -
registration order is the only ordering signal the engine offers (there
is no `before`/`after`), and this keeps it. Filling batches first-fit
instead would let a later system join an earlier batch than a
conflicting predecessor whenever a third system happened to separate
them.

<a id="rustdoc-item-9964"></a>

### `ensure_execution_graph`

```rust
pub fn ensure_execution_graph<'a, impl ExactSizeIterator<Item = &'a SystemAccess>: ExactSizeIterator<Item = _>>(self: &mut Self, accesses: impl ExactSizeIterator<Item = _>);
```

Rebuilds the graphs with every system in the project phase.

The form for a caller whose systems all run in the phase a bare
registration puts them in; [`ensure_execution_graphs`] is the
phase-aware one.

[`ensure_execution_graphs`]: #rustdoc-item-10491

<a id="rustdoc-item-10493"></a>

### `execution_graph_of`

```rust
pub fn execution_graph_of(self: &Self, phase: RunPhase) -> &[Vec<usize>];
```

Returns the batches of system indices that can run in parallel in one
phase.

The result is only current after
[`ensure_execution_graphs`](#rustdoc-item-10491);
the engine calls that before it dispatches a frame. A phase that runs
sequentially has no batches and answers an empty slice.

<a id="rustdoc-item-10494"></a>

### `execution_graph`

```rust
pub fn execution_graph(self: &Self) -> &[Vec<usize>];
```

Returns the project phase's batches, the phase a bare registration puts
a system in.

A caller that schedules other phases uses
[`execution_graph_of`](#rustdoc-item-10493).

<a id="rustdoc-item-10490"></a>

### `clear`

```rust
pub fn clear(self: &mut Self);
```

Clears the conflict matrices and the graphs.

The engine calls this when it removes every system at once. The next
[`ensure_execution_graph`](#rustdoc-item-9964)
rebuilds from whatever is registered then.

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
