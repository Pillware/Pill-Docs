<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9"></a>

# Struct `pill_input::gamepads::ActiveRumble`

```rust
pub(in gamepads) struct ActiveRumble;
```

Visibility: `{'restricted': {'parent': 2, 'path': '::gamepads'}}` · Source: `frontends\pill_input\src\gamepads.rs:43`

A rumble effect that is still playing.

## Fields

<a id="rustdoc-item-0"></a>

### `gamepad_id`

```rust
gamepad_id: gamepad_library::GamepadId
```

The gamepad it plays on.

<a id="rustdoc-item-3"></a>

### `_effect`

```rust
_effect: gamepad_library::ff::Effect
```

Kept alive while it plays. Dropping it stops the effect.

<a id="rustdoc-item-5"></a>

### `started_at`

```rust
started_at: pill_core::platform::Instant
```

When the effect started playing.

<a id="rustdoc-item-7"></a>

### `play_duration`

```rust
play_duration: std::time::Duration
```

How long the effect plays.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
