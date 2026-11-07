<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7253"></a>

# Struct `pill_editor_core::session::PanelBudget`

```rust
pub struct PanelBudget;
```

Source: `editor\pill_editor_core\src\session.rs:526`

Every module panel's build time.

Written by the shell's own pass; the dock's tab title and the executable's
panels dump read it. The measurement belongs to whoever timed the call, so
a panel cannot inflate its own row by drawing it.

## Fields

<a id="rustdoc-item-7775"></a>

### `entries`

```rust
entries: Vec<PanelTiming>
```

One entry per panel drawn since the session began, in first-drawn order.

## Associated functions and methods

<a id="rustdoc-item-7776"></a>

### `WEIGHT`

```rust
const WEIGHT: f32 = 0.05;
```

How strongly one pass moves the mean, the same weight the statistics
use.

<a id="rustdoc-item-7777"></a>

### `record`

```rust
pub fn record(self: &mut Self, slot: u16, micros: f32) -> bool;
```

Record one panel body's build time; returns whether this pass is the
one that reports an overshoot.

The mean is smoothed, but the overshoot count is not: a panel that
sits just over budget every frame is slow, and a panel that is fast
again resets the count, so only a sustained overshoot warns.

<a id="rustdoc-item-7778"></a>

### `get`

```rust
pub fn get(self: &Self, slot: u16) -> Option<&PanelTiming>;
```

The timing of one slot, when it has been timed.

<a id="rustdoc-item-7779"></a>

### `is_slow`

```rust
pub fn is_slow(self: &Self, slot: u16) -> bool;
```

Whether the slot's panel has been reported as over budget. It stays
true for the session, and the dock's tab title adds `(slow)` from it.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
