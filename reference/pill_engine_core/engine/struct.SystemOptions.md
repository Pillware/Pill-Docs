<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5911"></a>

# Struct `pill_engine_core::engine::SystemOptions`

```rust
pub struct SystemOptions;
```

Source: `engine\pill_engine_core\src\engine.rs:346`

What a registration asks of the schedule, beside the system itself.

A `#[system]` declaration becomes one of these: the attribute parses it and
the emitted registration passes it to
[`Engine::register_system_with_options`](struct.Engine.md#rustdoc-item-5910). A host that registers a system by
call builds one the same way, so both paths order, phase, gate and condition
their systems identically.

The default is the plain registration: order `0`, the
[`Project`](../systems/scheduler/enum.RunPhase.md#rustdoc-item-5711) phase, a system that runs only while the game
does, and no conditions.

## Fields

<a id="rustdoc-item-5716"></a>

### `order`

```rust
order: i32
```

Sort key within the phase; a lower value runs first.

The engine keeps its systems sorted by `(phase, order)` across every
artifact, so this number orders a system against every other one in its
phase, not only against its own artifact's. Equal values keep
registration order. `AGENTS.md` documents the number range each area
uses.

<a id="rustdoc-item-5908"></a>

### `phase`

```rust
phase: crate::scheduler::RunPhase
```

The phase of the frame the system runs in. Defaults to
[`RunPhase::Project`](../systems/scheduler/enum.RunPhase.md#rustdoc-item-5711).

<a id="rustdoc-item-5826"></a>

### `run_in_edit_mode`

```rust
run_in_edit_mode: bool
```

Whether the system also runs while the editor is editing, and while the
engine is paused.

A game system leaves this `false`. A system the editor itself needs -
the renderer's frame build, the editor shell's pass, a debug overlay -
sets it, because a frozen editor with no picture would be unusable.

<a id="rustdoc-item-5909"></a>

### `conditions`

```rust
conditions: Vec<SystemCondition>
```

The `run_if` conditions; see [`Self::run_if`](#rustdoc-item-4214).

## Associated functions and methods

<a id="rustdoc-item-5912"></a>

### `new`

```rust
pub fn new(phase: RunPhase, order: i32) -> Self;
```

Options for a system in one phase at one order, running only while the
game runs.

<a id="rustdoc-item-5913"></a>

### `with_run_in_edit_mode`

```rust
pub fn with_run_in_edit_mode(self: Self, run_in_edit_mode: bool) -> Self;
```

Marks the system as also running while the editor is editing and while
the engine is paused.

<a id="rustdoc-item-4214"></a>

### `run_if`

```rust
pub fn run_if<C, Input>(self: Self, condition: C) -> Self where C: FnMut(Input) -> bool + Send + 'static, Input: ReadOnlySystemParam + 'static;
```

Adds a `run_if` condition: the system runs only while this returns
`true`.

A condition takes the same parameters a system does, but only the
read-only ones: [`ReadOnlySystemParam`](../systems/system/trait.ReadOnlySystemParam.md#rustdoc-item-4087) is what enforces that, so a
condition taking `ResMut<T>`, `Commands` or a mutable query does not
compile. Its reads join the system's access, so the scheduler never
batches the system beside a writer of what its condition reads.

Every condition of a system must hold. They are evaluated in the order
they were added, and the first false answer skips the system - which
stays in the execution graph, so adding a condition never reshuffles
the batches.

A condition that could write is refused at compile time:

```compile_fail
use pill_engine_core::*;

#[derive(Debug, Default)]
struct Gate {
    open: bool,
}
impl Resource for Gate {}

fn gate_opens(mut gate: ResMut<Gate>) -> bool {
    gate.open = true;
    true
}

// `ResMut<Gate>` is not a `ReadOnlySystemParam`, so this does not
// compile: a condition may decide whether the system runs, never
// change the world it gates.
let options = SystemOptions::default().run_if(gate_opens);
```

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
