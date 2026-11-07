<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-630"></a>

# Struct `pill_development_host::build_runner::BuildProcessTree`

```rust
pub(crate) struct BuildProcessTree;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:912`

A build's whole process tree, on platforms that provide one.

Killing the direct child reaches cargo alone. The rustc and linker
grandchildren survive, keep writing into the shared module build tree, and
can hold cargo's package lock. The next build then blocks for its whole
timeout and is reported as `TimedOut`, which looks like an edit that was
ignored. A Windows job object makes the tree the unit of termination: every
process cargo starts inherits membership, and
`JOB_OBJECT_LIMIT_KILL_ON_JOB_CLOSE` makes the tree die even when the last
handle is closed rather than a termination being requested.

## Fields

<a id="rustdoc-item-629"></a>

### `job`

```rust
job: isize
```

The job object's handle, closed on drop.

## Associated functions and methods

<a id="rustdoc-item-631"></a>

### `create`

```rust
pub(in build_runner) fn create() -> Option<Self>;
```

Creates a job object that kills whatever is still in it when its handle
closes.

Returns `None` when Windows refuses. The caller then kills the direct
child instead, which is what happens on platforms without job objects.

<a id="rustdoc-item-632"></a>

### `join`

```rust
pub(in build_runner) fn join(self: &Self, process_id: u32) -> bool;
```

Adds a freshly spawned process to the job, so the compiler and linker
invocations it starts inherit membership.

A process started before the join would sit outside the tree, which is
why the caller creates the job before spawning and joins immediately
after.

<a id="rustdoc-item-633"></a>

### `terminate`

```rust
pub(in build_runner) fn terminate(self: &Self);
```

Terminates every process still in the job.

<a id="rustdoc-item-634"></a>

### `active_processes`

```rust
pub(in build_runner) fn active_processes(self: &Self) -> u32;
```

Returns how many processes the job still holds.

<a id="rustdoc-item-635"></a>

### `wait_until_empty`

```rust
pub(in build_runner) fn wait_until_empty(self: &Self, deadline: Instant) -> bool;
```

Waits until the job reports no live process or the deadline passes.

Returns whether the tree emptied.

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
- `Drop`
