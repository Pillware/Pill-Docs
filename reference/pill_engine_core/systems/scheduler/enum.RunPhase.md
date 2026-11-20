<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5714"></a>

# Enum `pill_engine_core::systems::scheduler::RunPhase`

```rust
pub enum RunPhase { ... }
```

Source: `engine\pill_engine_core\src\systems\scheduler.rs:239`

The phase of the frame a system runs in.

A frame runs the phases in this order: [`PreProject`](#rustdoc-item-10405),
then the first deferred-command flush, then
[`Project`](#rustdoc-item-5711) - the game's own frame work - then the second
flush, then [`PostProject`](#rustdoc-item-5712). The first two phases
dispatch parallel batches; `PostProject` runs on the calling thread, because
it is where presentation systems draw the frame they have just finished
computing.

## Variants

<a id="rustdoc-item-10405"></a>

### `PreProject`

```rust
PreProject
```

Runs before the first command flush, so the commands it queues are
applied before the project phase reads the world.

<a id="rustdoc-item-5711"></a>

### `Project`

```rust
Project
```

The game's own frame work. What a declaration that names no phase gets.

<a id="rustdoc-item-5712"></a>

### `PostProject`

```rust
PostProject
```

Runs after the second command flush, sequentially.

## Associated functions and methods

<a id="rustdoc-item-10406"></a>

### `ALL`

```rust
const ALL: [Self; 3] = _;
```

Every phase a schedule can hold, in frame order.

<a id="rustdoc-item-10407"></a>

### `BATCHED`

```rust
const BATCHED: [Self; 2] = _;
```

The phases that dispatch parallel batches, in frame order.

<a id="rustdoc-item-10408"></a>

### `label`

```rust
pub fn label(self: Self) -> &'static str;
```

The spelling a `run_phase = "..."` declaration uses.

<a id="rustdoc-item-10409"></a>

### `is_batched`

```rust
pub fn is_batched(self: Self) -> bool;
```

Whether the phase's systems run in parallel batches.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Comparable<K>`
- `Debug`
- `Clone`
- `Copy`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `PartialOrd`
- `Ord`
- `Hash`
