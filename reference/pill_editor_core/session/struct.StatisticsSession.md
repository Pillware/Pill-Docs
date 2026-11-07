<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7251"></a>

# Struct `pill_editor_core::session::StatisticsSession`

```rust
pub struct StatisticsSession;
```

Source: `editor\pill_editor_core\src\session.rs:281`

The timings the Statistics tab reads.

Written by the shell's own pass, read by the tab: the measurement is the
shell's, so the tab cannot inflate what it reports by drawing itself.

## Fields

<a id="rustdoc-item-7458"></a>

### `tabs`

```rust
tabs: Vec<TabTiming>
```

One entry per tab drawn since the session began, in first-drawn order.

<a id="rustdoc-item-7459"></a>

### `shell_micros`

```rust
shell_micros: f64
```

The whole shell pass's smoothed time, in microseconds.

<a id="rustdoc-item-7460"></a>

### `shell_passes`

```rust
shell_passes: u64
```

Completed shell passes.

<a id="rustdoc-item-7461"></a>

### `frames_per_second`

```rust
frames_per_second: f32
```

The editor's smoothed frame rate, as the shell measured it.

## Associated functions and methods

<a id="rustdoc-item-7462"></a>

### `WEIGHT`

```rust
const WEIGHT: f64 = 0.05;
```

How strongly one pass moves the mean: one twentieth, so the mean
catches up with a real change in about twenty passes.

<a id="rustdoc-item-7464"></a>

### `record`

```rust
pub fn record(self: &mut Self, tab: EditorTab, micros: f64);
```

Fold one tab body's time into its entry.

<a id="rustdoc-item-7465"></a>

### `record_shell`

```rust
pub fn record_shell(self: &mut Self, micros: u64);
```

Fold one whole shell pass's time in.

<a id="rustdoc-item-7466"></a>

### `tab_micros`

```rust
pub fn tab_micros(self: &Self, tab: EditorTab) -> f64;
```

One tab's smoothed time, or zero when it was never drawn.

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
