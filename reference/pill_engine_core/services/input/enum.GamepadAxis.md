<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9463"></a>

# Enum `pill_engine_core::services::input::GamepadAxis`

```rust
pub enum GamepadAxis { ... }
```

Source: `engine\pill_engine_core\src\services\input.rs:291`

A gamepad axis.

Stick axes range over `-1.0..=1.0`, with up and right positive. Trigger axes
range over `0.0..=1.0`.

## Variants

<a id="rustdoc-item-9457"></a>

### `LeftStickX`

```rust
LeftStickX
```

Left stick, horizontal.

<a id="rustdoc-item-9458"></a>

### `LeftStickY`

```rust
LeftStickY
```

Left stick, vertical.

<a id="rustdoc-item-9459"></a>

### `RightStickX`

```rust
RightStickX
```

Right stick, horizontal.

<a id="rustdoc-item-9460"></a>

### `RightStickY`

```rust
RightStickY
```

Right stick, vertical.

<a id="rustdoc-item-9404"></a>

### `LeftTrigger`

```rust
LeftTrigger
```

Left trigger travel.

<a id="rustdoc-item-9406"></a>

### `RightTrigger`

```rust
RightTrigger
```

Right trigger travel.

<a id="rustdoc-item-9461"></a>

### `DPadX`

```rust
DPadX
```

D-pad as an axis, on pads that report it as one.

<a id="rustdoc-item-9462"></a>

### `DPadY`

```rust
DPadY
```

D-pad as an axis, on pads that report it as one.

## Associated functions and methods

<a id="rustdoc-item-9464"></a>

### `COUNT`

```rust
const COUNT: usize = _;
```

Number of axes.

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
- `Copy`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
