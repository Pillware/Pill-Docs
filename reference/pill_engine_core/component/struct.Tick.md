<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2758"></a>

# Struct `pill_engine_core::component::Tick`

```rust
pub struct Tick;
```

Source: `engine\pill_engine_core\src\component.rs:185`

A counter that says whether a component is new or changed.

The world keeps one counter and increases it once per frame, and also when a
write happens between frames. Each component row carries its own
`ComponentTicks`, which record when the row was added and when it was last
changed. A system later compares those ticks with its own `last_run` tick to
find new or changed rows.

## Fields

<a id="rustdoc-item-2757"></a>

### `0`

```rust
0: u32
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-2759"></a>

### `new`

```rust
pub const fn new(value: u32) -> Self;
```

Constructs a tick with an explicit counter value.

<a id="rustdoc-item-2760"></a>

### `get`

```rust
pub const fn get(self: Self) -> u32;
```

Returns the underlying counter value.

<a id="rustdoc-item-2761"></a>

### `is_newer_than`

```rust
pub fn is_newer_than(self: Self, last_run: Tick, this_run: Tick) -> bool;
```

Returns `true` when this tick is strictly newer than `last_run` and not
in the future relative to `this_run`.

The counter is a `u32` that wraps, so both comparisons use the distance
from the baseline instead of the numbers themselves. A tick written just
after a wrap is *smaller* than the baseline, but only a few ticks ahead
of it. A distance in the upper half of the range means the other
direction. That is how the comparison tells the two directions apart
without knowing where the counter is.

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `PartialOrd`
- `Ord`
- `Hash`
- `Default`
