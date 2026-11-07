<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5802"></a>

# Struct `pill_engine_core::input::Input`

```rust
pub struct Input;
```

Source: `engine\pill_engine_core\src\input.rs:662`

Keyboard, mouse and gamepad state for the current frame.

The engine inserts this resource automatically, and a project never
constructs one. Read it from any system:

```no_run
# use pill_engine::*;
fn jump(input: Res<Input>) {
    let Some(input) = input.get() else { return };
    if input.key_pressed(KeyCode::Space)
        || input.gamepad_button_pressed(PlayerId::Player1, GamepadButton::A)
    {
        // Start the jump.
    }
}
```

Every value describes the frame being processed and stays fixed for the
whole frame. Headless runs never receive events, so nothing is held,
nothing accumulates, and there is no cursor.

## Fields

<a id="rustdoc-item-6003"></a>

### `keys_held`

```rust
keys_held: KeySet
```

Keys down at the start of the frame.

<a id="rustdoc-item-6004"></a>

### `keys_pressed`

```rust
keys_pressed: KeySet
```

Keys that went down since the previous frame.

<a id="rustdoc-item-6005"></a>

### `keys_released`

```rust
keys_released: KeySet
```

Keys that came up since the previous frame.

<a id="rustdoc-item-6006"></a>

### `mouse_held`

```rust
mouse_held: u8
```

[`MouseButton`](enum.MouseButton.md#rustdoc-item-5531) bits down at the start of the frame.

<a id="rustdoc-item-6007"></a>

### `mouse_pressed`

```rust
mouse_pressed: u8
```

Mouse button bits that went down since the previous frame.

<a id="rustdoc-item-6008"></a>

### `mouse_released`

```rust
mouse_released: u8
```

Mouse button bits that came up since the previous frame.

<a id="rustdoc-item-6009"></a>

### `cursor_position`

```rust
cursor_position: Option<pill_core::math::Vector2f>
```

The latest cursor position over the game, or `None` when it is not
over it.

<a id="rustdoc-item-6010"></a>

### `modifiers`

```rust
modifiers: Modifiers
```

The modifier keys' state, as last reported.

<a id="rustdoc-item-6011"></a>

### `text_entered`

```rust
text_entered: String
```

Text committed since the previous frame: typed characters and IME
commits, in order.

<a id="rustdoc-item-6012"></a>

### `ime_preedit`

```rust
ime_preedit: Option<String>
```

The IME's active composition text, while a composition is in progress.

<a id="rustdoc-item-6014"></a>

### `ime_cursor`

```rust
ime_cursor: Option<(usize, usize)>
```

The composing cursor range within [`Self::ime_preedit`](#rustdoc-item-6013), as byte
offsets, when the platform reports one.

<a id="rustdoc-item-6015"></a>

### `mouse_delta`

```rust
mouse_delta: pill_core::math::Vector2f
```

Mouse motion accumulated since the previous frame.

<a id="rustdoc-item-6016"></a>

### `scroll_lines`

```rust
scroll_lines: pill_core::math::Vector2f
```

Line scrolling accumulated since the previous frame.

<a id="rustdoc-item-6017"></a>

### `scroll_pixels`

```rust
scroll_pixels: pill_core::math::Vector2f
```

Pixel scrolling accumulated since the previous frame.

<a id="rustdoc-item-6018"></a>

### `gamepads`

```rust
gamepads: [GamepadState; 4]
```

One state per [`PlayerId`](enum.PlayerId.md#rustdoc-item-5243).

<a id="rustdoc-item-6019"></a>

### `pending_events`

```rust
pending_events: Vec<InputEvent>
```

Events queued since the previous frame, applied at the next one.

<a id="rustdoc-item-6020"></a>

### `rumble_requests`

```rust
rumble_requests: Vec<RumbleRequest>
```

Rumble requests not yet taken by the frontend.

## Associated functions and methods

<a id="rustdoc-item-6021"></a>

### `new`

```rust
pub fn new() -> Self;
```

Input with nothing held and no gamepad connected.

<a id="rustdoc-item-6022"></a>

### `key_held`

```rust
pub fn key_held(self: &Self, key: KeyCode) -> bool;
```

Whether `key` is down this frame.

<a id="rustdoc-item-6023"></a>

### `key_pressed`

```rust
pub fn key_pressed(self: &Self, key: KeyCode) -> bool;
```

Whether `key` went down since the previous frame.

<a id="rustdoc-item-6024"></a>

### `key_released`

```rust
pub fn key_released(self: &Self, key: KeyCode) -> bool;
```

Whether `key` came up since the previous frame.

<a id="rustdoc-item-6025"></a>

### `keys_held`

```rust
pub fn keys_held(self: &Self) -> impl Iterator<Item = _> + '_;
```

Every key down this frame.

<a id="rustdoc-item-6026"></a>

### `keys_pressed`

```rust
pub fn keys_pressed(self: &Self) -> impl Iterator<Item = _> + '_;
```

Every key that went down since the previous frame.

<a id="rustdoc-item-6027"></a>

### `keys_released`

```rust
pub fn keys_released(self: &Self) -> impl Iterator<Item = _> + '_;
```

Every key that came up since the previous frame.

<a id="rustdoc-item-6028"></a>

### `modifiers`

```rust
pub fn modifiers(self: &Self) -> Modifiers;
```

The modifier keys' state.

<a id="rustdoc-item-6029"></a>

### `text_entered`

```rust
pub fn text_entered(self: &Self) -> &str;
```

Text committed since the previous frame: typed characters and IME
commits, in order.

<a id="rustdoc-item-6013"></a>

### `ime_preedit`

```rust
pub fn ime_preedit(self: &Self) -> Option<&str>;
```

The IME's active composition text, or `None` while not composing.

<a id="rustdoc-item-6030"></a>

### `ime_cursor`

```rust
pub fn ime_cursor(self: &Self) -> Option<(usize, usize)>;
```

The composing cursor range within [`Self::ime_preedit`](#rustdoc-item-6013), as byte
offsets, when the platform reports one.

<a id="rustdoc-item-6031"></a>

### `mouse_button_held`

```rust
pub fn mouse_button_held(self: &Self, button: MouseButton) -> bool;
```

Whether `button` is down this frame.

<a id="rustdoc-item-6032"></a>

### `mouse_button_pressed`

```rust
pub fn mouse_button_pressed(self: &Self, button: MouseButton) -> bool;
```

Whether `button` went down since the previous frame.

<a id="rustdoc-item-6033"></a>

### `mouse_button_released`

```rust
pub fn mouse_button_released(self: &Self, button: MouseButton) -> bool;
```

Whether `button` came up since the previous frame.

<a id="rustdoc-item-6034"></a>

### `cursor_position`

```rust
pub fn cursor_position(self: &Self) -> Option<Vector2f>;
```

The cursor position in physical pixels from the top-left corner of the
game's area, or `None` while the cursor is elsewhere.

<a id="rustdoc-item-6035"></a>

### `mouse_delta`

```rust
pub fn mouse_delta(self: &Self) -> Vector2f;
```

Mouse movement since the previous frame, in the frontend's raw units.
The platform reports device motion without scaling it.

Motion keeps arriving when the cursor reaches the window border, so this
is the value to use for mouse-look.

<a id="rustdoc-item-6036"></a>

### `scroll_lines`

```rust
pub fn scroll_lines(self: &Self) -> Vector2f;
```

Wheel lines scrolled since the previous frame; positive `y` is up.

<a id="rustdoc-item-6037"></a>

### `scroll_pixels`

```rust
pub fn scroll_pixels(self: &Self) -> Vector2f;
```

Touchpad pixels scrolled since the previous frame; positive `y` is up.

<a id="rustdoc-item-6038"></a>

### `gamepad_connected`

```rust
pub fn gamepad_connected(self: &Self, player: PlayerId) -> bool;
```

Whether `player` has a gamepad connected.

<a id="rustdoc-item-6039"></a>

### `connected_gamepads`

```rust
pub fn connected_gamepads(self: &Self) -> impl Iterator<Item = _> + '_;
```

Every player with a gamepad connected.

<a id="rustdoc-item-6040"></a>

### `gamepad_button_held`

```rust
pub fn gamepad_button_held(self: &Self, player: PlayerId, button: GamepadButton) -> bool;
```

Whether `player`'s `button` is down this frame.

<a id="rustdoc-item-6041"></a>

### `gamepad_button_pressed`

```rust
pub fn gamepad_button_pressed(self: &Self, player: PlayerId, button: GamepadButton) -> bool;
```

Whether `player`'s `button` went down since the previous frame.

<a id="rustdoc-item-6042"></a>

### `gamepad_button_released`

```rust
pub fn gamepad_button_released(self: &Self, player: PlayerId, button: GamepadButton) -> bool;
```

Whether `player`'s `button` came up since the previous frame.

<a id="rustdoc-item-6043"></a>

### `gamepad_axis`

```rust
pub fn gamepad_axis(self: &Self, player: PlayerId, axis: GamepadAxis) -> f32;
```

`player`'s `axis`, after the deadzone; zero without a gamepad.

<a id="rustdoc-item-6044"></a>

### `request_rumble`

```rust
pub fn request_rumble(self: &mut Self, player: PlayerId, weak: f32, strong: f32, duration: Duration);
```

Ask the frontend to rumble `player`'s gamepad.

Both strengths are clamped to `0.0..=1.0`. The frontend that owns the
gamepads plays the request after the frame. It is ignored when no such
frontend exists (headless, the browser) or when the gamepad cannot
rumble.

<a id="rustdoc-item-6045"></a>

### `take_rumble_requests`

```rust
pub fn take_rumble_requests(self: &mut Self) -> Vec<RumbleRequest>;
```

Take every rumble request queued so far. This is the frontend's half of
[`Self::request_rumble`](#rustdoc-item-6044).

<a id="rustdoc-item-6046"></a>

### `push_event`

```rust
pub fn push_event(self: &mut Self, event: InputEvent);
```

Queue `event` for the next frame.

Frontends call this between frames, through
[`Engine::push_input_event`](../engine/struct.Engine.md#rustdoc-item-4307). A
system may also queue events to simulate input. Either way, the events
take effect on the next frame.

<a id="rustdoc-item-6047"></a>

### `begin_frame`

```rust
pub(crate) fn begin_frame(self: &mut Self);
```

Start a frame: forget the previous frame's edges, motion and committed
text, then apply every queued event in order.

Called by the engine at the top of each frame, before systems run.

<a id="rustdoc-item-6048"></a>

### `apply_event`

```rust
pub(in input) fn apply_event(self: &mut Self, event: InputEvent);
```

Apply one event to the current frame's state.

<a id="rustdoc-item-6049"></a>

### `apply_key`

```rust
pub(in input) fn apply_key(self: &mut Self, key: KeyCode, state: ButtonState);
```

Apply a key change.

A press of a held key is the operating system's repeat, so nothing
changes. A release of a key that is not held changes nothing either; it
may already have been released by [`InputEvent::FocusLost`](enum.InputEvent.md#rustdoc-item-5823).

<a id="rustdoc-item-6050"></a>

### `apply_mouse_button`

```rust
pub(in input) fn apply_mouse_button(self: &mut Self, button: MouseButton, state: ButtonState);
```

Apply a mouse button change, with the same rules as [`Self::apply_key`](#rustdoc-item-6049).

<a id="rustdoc-item-6051"></a>

### `release_keyboard_and_mouse`

```rust
pub(in input) fn release_keyboard_and_mouse(self: &mut Self);
```

Release every held key and mouse button, reporting each as released.

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
- `Debug`
- `Default`
- `Resource`
