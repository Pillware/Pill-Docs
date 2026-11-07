<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5590"></a>

# Enum `pill_engine_core::input::GamepadButton`

```rust
pub enum GamepadButton { ... }
```

Source: `engine\pill_engine_core\src\input.rs:241`

A gamepad button, named after the Xbox layout.

## Variants

<a id="rustdoc-item-5571"></a>

### `A`

```rust
A
```

The bottom face button (Xbox A, PlayStation Cross).

<a id="rustdoc-item-5572"></a>

### `B`

```rust
B
```

The right face button (Xbox B, PlayStation Circle).

<a id="rustdoc-item-5573"></a>

### `X`

```rust
X
```

The left face button (Xbox X, PlayStation Square).

<a id="rustdoc-item-5574"></a>

### `Y`

```rust
Y
```

The top face button (Xbox Y, PlayStation Triangle).

<a id="rustdoc-item-5575"></a>

### `LeftBumper`

```rust
LeftBumper
```

The left shoulder button.

<a id="rustdoc-item-5576"></a>

### `RightBumper`

```rust
RightBumper
```

The right shoulder button.

<a id="rustdoc-item-5578"></a>

### `LeftTrigger`

```rust
LeftTrigger
```

The left trigger, as a button; its travel is [`GamepadAxis::LeftTrigger`](enum.GamepadAxis.md#rustdoc-item-5577).

<a id="rustdoc-item-5580"></a>

### `RightTrigger`

```rust
RightTrigger
```

The right trigger, as a button; its travel is [`GamepadAxis::RightTrigger`](enum.GamepadAxis.md#rustdoc-item-5579).

<a id="rustdoc-item-5581"></a>

### `Back`

```rust
Back
```

The left menu button (Back, View, Select, Share).

<a id="rustdoc-item-5582"></a>

### `Start`

```rust
Start
```

The right menu button (Start, Menu, Options).

<a id="rustdoc-item-5583"></a>

### `Mode`

```rust
Mode
```

The guide button (Xbox, PlayStation).

<a id="rustdoc-item-5584"></a>

### `LeftStick`

```rust
LeftStick
```

Pressing the left stick in.

<a id="rustdoc-item-5585"></a>

### `RightStick`

```rust
RightStick
```

Pressing the right stick in.

<a id="rustdoc-item-5586"></a>

### `DPadUp`

```rust
DPadUp
```

D-pad up.

<a id="rustdoc-item-5587"></a>

### `DPadDown`

```rust
DPadDown
```

D-pad down.

<a id="rustdoc-item-5588"></a>

### `DPadLeft`

```rust
DPadLeft
```

D-pad left.

<a id="rustdoc-item-5589"></a>

### `DPadRight`

```rust
DPadRight
```

D-pad right.

## Associated functions and methods

<a id="rustdoc-item-5591"></a>

### `bit_mask`

```rust
pub(in input) const fn bit_mask(self: Self) -> u32;
```

This button's bit mask.

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
- `Copy`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
