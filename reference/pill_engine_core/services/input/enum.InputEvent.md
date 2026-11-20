<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6022"></a>

# Enum `pill_engine_core::services::input::InputEvent`

```rust
pub enum InputEvent { ... }
```

Source: `engine\pill_engine_core\src\services\input.rs:398`

One input change, as a frontend reports it.

Cursor positions and wheel amounts are in physical pixels. A cursor position
is measured from the top-left corner of the area the game is drawn in. Raw
mouse motion has no pixel unit: the platform reports it in the device's own
units and does not scale it.

The text variants carry owned strings, so the enum is not `Copy`. Every
event is still plain data, safe to pass across a module boundary.

## Variants

<a id="rustdoc-item-9631"></a>

### `Key`

```rust
Key
```

A key went down or came up.

<a id="rustdoc-item-9633"></a>

### `KeyRepeat`

```rust
KeyRepeat
```

A held key repeated, as the operating system reports it.

A repeat is not a new press or release. [`Input`](struct.Input.md#rustdoc-item-4322) leaves the held and
edge state alone. Frontends deliver repeats so text fields and
navigation can respond to a held key. A game that ignores this event
sees no change.

<a id="rustdoc-item-9635"></a>

### `ModifiersChanged`

```rust
ModifiersChanged
```

The modifier keys' state changed.

<a id="rustdoc-item-9637"></a>

### `TextInput`

```rust
TextInput
```

Text committed by typing. Usually one character, or a short run for a
key that produces several.

<a id="rustdoc-item-9640"></a>

### `ImePreedit`

```rust
ImePreedit
```

The IME's composition text changed.

An empty `text` means no composition is active.

<a id="rustdoc-item-9642"></a>

### `ImeCommit`

```rust
ImeCommit
```

The IME committed its composition as text.

<a id="rustdoc-item-9645"></a>

### `MouseButton`

```rust
MouseButton
```

A mouse button went down or came up.

<a id="rustdoc-item-9647"></a>

### `CursorMoved`

```rust
CursorMoved
```

The cursor moved over the game.

<a id="rustdoc-item-9648"></a>

### `CursorLeft`

```rust
CursorLeft
```

The cursor left the game's area.

<a id="rustdoc-item-9650"></a>

### `MouseMotion`

```rust
MouseMotion
```

The mouse moved, separately from the cursor. The movement is
unaccelerated where the platform reports it that way, and it continues
when the cursor reaches the window border.

<a id="rustdoc-item-9652"></a>

### `MouseWheel`

```rust
MouseWheel
```

The mouse wheel or touchpad scrolled.

<a id="rustdoc-item-9653"></a>

### `FocusLost`

```rust
FocusLost
```

The game lost keyboard focus. Everything held is released, because the
matching release events will go to another window.

<a id="rustdoc-item-9655"></a>

### `GamepadConnected`

```rust
GamepadConnected
```

A gamepad connected and took a slot.

<a id="rustdoc-item-9657"></a>

### `GamepadDisconnected`

```rust
GamepadDisconnected
```

A gamepad disconnected and freed its slot.

<a id="rustdoc-item-9661"></a>

### `GamepadButton`

```rust
GamepadButton
```

A gamepad button went down or came up.

<a id="rustdoc-item-9665"></a>

### `GamepadAxis`

```rust
GamepadAxis
```

A gamepad axis moved.

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
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
