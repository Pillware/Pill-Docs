<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4168"></a>

# Struct `pill_engine_core::engine::RegisteredSystem`

```rust
pub(in engine) struct RegisteredSystem;
```

Visibility: `{'restricted': {'parent': 4158, 'path': '::engine'}}` · Source: `engine\pill_engine_core\src\engine.rs:137`

One registered system with its runtime bookkeeping.

Holds the system's name, its boxed instance, its access pattern, whether
it is enabled, and the per-frame timing data that the Tracy span and the
utilization metrics read.

## Fields

<a id="rustdoc-item-4157"></a>

### `post_update`

```rust
post_update: bool
```

Whether the system runs in the post-update phase: after the command
flush, and even while the engine is paused.

<a id="rustdoc-item-4159"></a>

### `name`

```rust
name: String
```

Name used for registration, debugging, and profiling.

<a id="rustdoc-item-4160"></a>

### `system_owner`

```rust
system_owner: SystemOwner
```

Who registered this system; a hot reload removes systems by owner.

<a id="rustdoc-item-4161"></a>

### `system`

```rust
system: Box<dyn System>
```

Boxed system instance, invoked with the world and command queue.

<a id="rustdoc-item-4163"></a>

### `system_access`

```rust
system_access: crate::scheduler::SystemAccess
```

The components and resources this system touches.

The engine keeps this list here, not in the scheduler, so the two
cannot drift apart: there is only one list, and the scheduler builds
its conflict data from it when it needs it.

<a id="rustdoc-item-4164"></a>

### `last_run_tick`

```rust
last_run_tick: u32
```

World tick at which this system was last executed.

Set as `World::system_last_run` before the system runs, so
change-detection filters (`Changed<T>`, `Added<T>`) inside it see only
the changes made since its previous run.

<a id="rustdoc-item-4165"></a>

### `enabled`

```rust
enabled: bool
```

Whether this system is enabled, and so runs when the frame dispatches
systems.

<a id="rustdoc-item-4166"></a>

### `average_duration`

```rust
average_duration: u64
```

Running average of this system's execution time in nanoseconds,
smoothed over about the last 32 frames. It is shown in the system's
Tracy span as the splitting hint; the parallel iterators keep their own
per-label timing.

<a id="rustdoc-item-4167"></a>

### `last_duration`

```rust
last_duration: u64
```

Execution time in nanoseconds from the most recent frame, used by the
parallel-utilization metrics.

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
