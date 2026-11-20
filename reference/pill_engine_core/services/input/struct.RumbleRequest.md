<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6024"></a>

# Struct `pill_engine_core::services::input::RumbleRequest`

```rust
pub struct RumbleRequest;
```

Source: `engine\pill_engine_core\src\services\input.rs:504`

A request to rumble a player's gamepad, queued by a system for the
frontend to play.

## Fields

<a id="rustdoc-item-9698"></a>

### `player`

```rust
player: PlayerId
```

Whose gamepad.

<a id="rustdoc-item-9699"></a>

### `weak`

```rust
weak: f32
```

High-frequency motor strength, `0.0..=1.0`.

<a id="rustdoc-item-9700"></a>

### `strong`

```rust
strong: f32
```

Low-frequency motor strength, `0.0..=1.0`.

<a id="rustdoc-item-9701"></a>

### `duration`

```rust
duration: std::time::Duration
```

How long to rumble.

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
- `StructuralPartialEq`
- `PartialEq`
