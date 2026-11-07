<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7737"></a>

# Struct `pill_editor_core::session::PanelTiming`

```rust
pub struct PanelTiming;
```

Source: `editor\pill_editor_core\src\session.rs:504`

One panel's build time and how long it has been over budget.

## Fields

<a id="rustdoc-item-7731"></a>

### `slot`

```rust
slot: u16
```

The panel's registry slot.

<a id="rustdoc-item-7732"></a>

### `micros`

```rust
micros: f32
```

The panel body's smoothed build time, in microseconds.

<a id="rustdoc-item-7733"></a>

### `passes`

```rust
passes: u64
```

Passes the panel body was timed.

<a id="rustdoc-item-7734"></a>

### `slow_frames`

```rust
slow_frames: u32
```

Consecutive passes over [`PANEL_BUDGET_MICROS`](constant.PANEL_BUDGET_MICROS.md#rustdoc-item-7227).

<a id="rustdoc-item-7735"></a>

### `warned`

```rust
warned: bool
```

Whether the overshoot was already reported, so one panel warns once.

<a id="rustdoc-item-7736"></a>

### `toasted`

```rust
toasted: bool
```

Whether the warning toast was queued, so a redrawn frame does not
queue it again.

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
