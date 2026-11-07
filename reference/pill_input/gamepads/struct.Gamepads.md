<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-86"></a>

# Struct `pill_input::gamepads::Gamepads`

```rust
pub struct Gamepads;
```

Source: `frontends\pill_input\src\gamepads.rs:55`

The gamepads, their player slots and the rumble playing on them.

## Fields

<a id="rustdoc-item-78"></a>

### `gamepad_context`

```rust
gamepad_context: Option<gamepad_library::Gilrs>
```

The platform's gamepad context, or `None` when the gamepad library
failed to start.

<a id="rustdoc-item-82"></a>

### `slots`

```rust
slots: [Option<gamepad_library::GamepadId>; 4]
```

The gamepad holding each [`PlayerId`] slot.

<a id="rustdoc-item-83"></a>

### `gamepads_connected_at_start`

```rust
gamepads_connected_at_start: Vec<gamepad_library::GamepadId>
```

Gamepads that were connected before the first poll. The first poll
announces them.

<a id="rustdoc-item-85"></a>

### `active_rumble_effects`

```rust
active_rumble_effects: Vec<ActiveRumble>
```

Effects still playing.

## Associated functions and methods

<a id="rustdoc-item-87"></a>

### `new`

```rust
pub fn new() -> Self;
```

Opens the platform's gamepad support.

Never fails. On a platform without gamepad support the result reports
no gamepads, and the reason is logged.

<a id="rustdoc-item-88"></a>

### `poll`

```rust
pub fn poll<impl FnMut(InputEvent): FnMut(InputEvent)>(self: &mut Self, push_input: impl FnMut(InputEvent));
```

Hands every gamepad change since the last poll to `push_input`.

Call it once per frame, before running the frame.

<a id="rustdoc-item-91"></a>

### `play_rumble`

```rust
pub fn play_rumble(self: &mut Self, requests: Vec<RumbleRequest>);
```

Plays every rumble request on the gamepads that support force feedback.

Call it after a frame, with the requests its systems made. A request
for an empty slot or a gamepad without force feedback is dropped, and
so is every request when there is no gamepad context.

<a id="rustdoc-item-93"></a>

### `connect`

```rust
pub(in gamepads) fn connect<impl FnMut(InputEvent): FnMut(InputEvent)>(self: &mut Self, gamepad_id: GamepadId, push_input: &mut impl FnMut(InputEvent));
```

Gives `gamepad_id` the lowest free slot and announces it.

<a id="rustdoc-item-94"></a>

### `disconnect`

```rust
pub(in gamepads) fn disconnect<impl FnMut(InputEvent): FnMut(InputEvent)>(self: &mut Self, gamepad_id: GamepadId, push_input: &mut impl FnMut(InputEvent));
```

Frees `gamepad_id`'s slot and announces it.

<a id="rustdoc-item-95"></a>

### `push_button`

```rust
pub(in gamepads) fn push_button<impl FnMut(InputEvent): FnMut(InputEvent)>(self: &Self, gamepad_id: GamepadId, button: Button, button_state: ButtonState, push_input: &mut impl FnMut(InputEvent));
```

Pushes a button change for a gamepad that holds a slot.

<a id="rustdoc-item-98"></a>

### `push_axis`

```rust
pub(in gamepads) fn push_axis<impl FnMut(InputEvent): FnMut(InputEvent)>(self: &Self, gamepad_id: GamepadId, axis: GamepadAxis, axis_value: f32, push_input: &mut impl FnMut(InputEvent));
```

Pushes an axis change for a gamepad that holds a slot.

<a id="rustdoc-item-100"></a>

### `player_of`

```rust
pub(in gamepads) fn player_of(self: &Self, gamepad_id: GamepadId) -> Option<PlayerId>;
```

Returns the slot `gamepad_id` holds, if any.

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
- `Default`
