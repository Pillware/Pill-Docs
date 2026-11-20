<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9417"></a>

# Enum `pill_engine_core::services::input::GamepadButton`

```rust
pub enum GamepadButton { ... }
```

Source: `engine\pill_engine_core\src\services\input.rs:241`

A gamepad button, named after the Xbox layout.

## Variants

<a id="rustdoc-item-9398"></a>

### `A`

```rust
A
```

The bottom face button (Xbox A, PlayStation Cross).

<a id="rustdoc-item-9399"></a>

### `B`

```rust
B
```

The right face button (Xbox B, PlayStation Circle).

<a id="rustdoc-item-9400"></a>

### `X`

```rust
X
```

The left face button (Xbox X, PlayStation Square).

<a id="rustdoc-item-9401"></a>

### `Y`

```rust
Y
```

The top face button (Xbox Y, PlayStation Triangle).

<a id="rustdoc-item-9402"></a>

### `LeftBumper`

```rust
LeftBumper
```

The left shoulder button.

<a id="rustdoc-item-9403"></a>

### `RightBumper`

```rust
RightBumper
```

The right shoulder button.

<a id="rustdoc-item-9405"></a>

### `LeftTrigger`

```rust
LeftTrigger
```

The left trigger, as a button; its travel is [`GamepadAxis::LeftTrigger`](enum.GamepadAxis.md#rustdoc-item-9404).

<a id="rustdoc-item-9407"></a>

### `RightTrigger`

```rust
RightTrigger
```

The right trigger, as a button; its travel is [`GamepadAxis::RightTrigger`](enum.GamepadAxis.md#rustdoc-item-9406).

<a id="rustdoc-item-9408"></a>

### `Back`

```rust
Back
```

The left menu button (Back, View, Select, Share).

<a id="rustdoc-item-9409"></a>

### `Start`

```rust
Start
```

The right menu button (Start, Menu, Options).

<a id="rustdoc-item-9410"></a>

### `Mode`

```rust
Mode
```

The guide button (Xbox, PlayStation).

<a id="rustdoc-item-9411"></a>

### `LeftStick`

```rust
LeftStick
```

Pressing the left stick in.

<a id="rustdoc-item-9412"></a>

### `RightStick`

```rust
RightStick
```

Pressing the right stick in.

<a id="rustdoc-item-9413"></a>

### `DPadUp`

```rust
DPadUp
```

D-pad up.

<a id="rustdoc-item-9414"></a>

### `DPadDown`

```rust
DPadDown
```

D-pad down.

<a id="rustdoc-item-9415"></a>

### `DPadLeft`

```rust
DPadLeft
```

D-pad left.

<a id="rustdoc-item-9416"></a>

### `DPadRight`

```rust
DPadRight
```

D-pad right.

## Associated functions and methods

<a id="rustdoc-item-9418"></a>

### `bit_mask`

```rust
pub(in services::input) const fn bit_mask(self: Self) -> u32;
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
