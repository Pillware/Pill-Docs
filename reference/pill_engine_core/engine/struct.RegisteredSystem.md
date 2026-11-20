<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5730"></a>

# Struct `pill_engine_core::engine::RegisteredSystem`

```rust
pub(in engine) struct RegisteredSystem;
```

Visibility: `{'restricted': {'parent': 5715, 'path': '::engine'}}` · Source: `engine\pill_engine_core\src\engine.rs:154`

One registered system with its runtime bookkeeping.

Holds the system's name, its boxed instance, its access pattern, whether
it is enabled, and the per-frame timing data that the Tracy span and the
utilization metrics read.

## Fields

<a id="rustdoc-item-5713"></a>

### `phase`

```rust
phase: crate::scheduler::RunPhase
```

The phase of the frame this system runs in.

A system in [`RunPhase::Project`](../systems/scheduler/enum.RunPhase.md#rustdoc-item-5711) runs after the first command flush,
and one in [`RunPhase::PostProject`](../systems/scheduler/enum.RunPhase.md#rustdoc-item-5712) after the second, even while the
engine is paused because it opted in to edit mode.

<a id="rustdoc-item-5717"></a>

### `order`

```rust
order: i32
```

Sort key within the phase.

Systems are kept sorted by `(phase, order)` across every registration,
and equal pairs keep the order their artifacts registered them in, so a
number an extension or a project picks orders its systems against every
other artifact's. See [`SystemOptions::order`](struct.SystemOptions.md#rustdoc-item-5716).

<a id="rustdoc-item-5718"></a>

### `edit_mode`

```rust
edit_mode: bool
```

Whether the system also runs in edit mode, and while paused.

A game system leaves this `false`: it runs only while the game is
playing, so the editor's Play and Stop mean something. A system that
keeps the editor itself alive opts in - the renderer, the egui shell,
the debug outlines, the audio loader - because a frozen editor with no
picture would be unusable.

<a id="rustdoc-item-5719"></a>

### `name`

```rust
name: String
```

Name used for registration, debugging, and profiling.

<a id="rustdoc-item-5720"></a>

### `system_owner`

```rust
system_owner: SystemOwner
```

Who registered this system; a hot reload removes systems by owner.

<a id="rustdoc-item-5721"></a>

### `system`

```rust
system: Box<dyn System>
```

Boxed system instance, invoked with the world and command queue.

<a id="rustdoc-item-5723"></a>

### `system_access`

```rust
system_access: crate::scheduler::SystemAccess
```

The components and resources this system touches.

The engine keeps this list here, not in the scheduler, so the two
cannot drift apart: there is only one list, and the scheduler builds
its conflict data from it when it needs it.

<a id="rustdoc-item-5724"></a>

### `last_run_tick`

```rust
last_run_tick: u32
```

World tick at which this system was last executed.

Set as `World::system_last_run` before the system runs, so
change-detection filters (`Changed<T>`, `Added<T>`) inside it see only
the changes made since its previous run.

<a id="rustdoc-item-5725"></a>

### `enabled`

```rust
enabled: bool
```

Whether this system is enabled, and so runs when the frame dispatches
systems.

<a id="rustdoc-item-5726"></a>

### `average_duration`

```rust
average_duration: u64
```

Running average of this system's execution time in nanoseconds,
smoothed over about the last 32 frames. It is shown in the system's
Tracy span as the splitting hint; the parallel iterators keep their own
per-label timing.

<a id="rustdoc-item-5727"></a>

### `last_duration`

```rust
last_duration: u64
```

Execution time in nanoseconds from the most recent frame, used by the
parallel-utilization metrics.

<a id="rustdoc-item-5728"></a>

### `conditions`

```rust
conditions: Vec<SystemCondition>
```

The `run_if` conditions, in declaration order.

Empty for a plain system. A skipped system keeps its place in the
execution graph: the conditions decide whether it runs, never where.

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
