<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9787"></a>

# Struct `pill_engine_core::services::input::GamepadState`

```rust
pub(in services::input) struct GamepadState;
```

Visibility: `{'restricted': {'parent': 6020, 'path': '::services::input'}}` · Source: `engine\pill_engine_core\src\services\input.rs:545`

The state of one gamepad slot.

## Fields

<a id="rustdoc-item-9782"></a>

### `connected`

```rust
connected: bool
```

Whether a gamepad holds this slot.

<a id="rustdoc-item-9783"></a>

### `buttons_held`

```rust
buttons_held: u32
```

[`GamepadButton`](enum.GamepadButton.md#rustdoc-item-9417) bits down at the start of the frame.

<a id="rustdoc-item-9784"></a>

### `buttons_pressed`

```rust
buttons_pressed: u32
```

Button bits that went down since the previous frame.

<a id="rustdoc-item-9785"></a>

### `buttons_released`

```rust
buttons_released: u32
```

Button bits that came up since the previous frame.

<a id="rustdoc-item-9786"></a>

### `axes`

```rust
axes: [f32; 8]
```

Latest value per [`GamepadAxis`](enum.GamepadAxis.md#rustdoc-item-9463), after the deadzone.

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
- `Copy`
- `Clone`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
