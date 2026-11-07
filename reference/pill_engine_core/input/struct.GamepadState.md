<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5956"></a>

# Struct `pill_engine_core::input::GamepadState`

```rust
pub(in input) struct GamepadState;
```

Visibility: `{'restricted': {'parent': 4306, 'path': '::input'}}` · Source: `engine\pill_engine_core\src\input.rs:545`

The state of one gamepad slot.

## Fields

<a id="rustdoc-item-5951"></a>

### `connected`

```rust
connected: bool
```

Whether a gamepad holds this slot.

<a id="rustdoc-item-5952"></a>

### `buttons_held`

```rust
buttons_held: u32
```

[`GamepadButton`](enum.GamepadButton.md#rustdoc-item-5590) bits down at the start of the frame.

<a id="rustdoc-item-5953"></a>

### `buttons_pressed`

```rust
buttons_pressed: u32
```

Button bits that went down since the previous frame.

<a id="rustdoc-item-5954"></a>

### `buttons_released`

```rust
buttons_released: u32
```

Button bits that came up since the previous frame.

<a id="rustdoc-item-5955"></a>

### `axes`

```rust
axes: [f32; 8]
```

Latest value per [`GamepadAxis`](enum.GamepadAxis.md#rustdoc-item-5635), after the deadzone.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
