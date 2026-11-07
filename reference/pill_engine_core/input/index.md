<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4306"></a>

# Module `pill_engine_core::input`

Source: `engine\pill_engine_core\src\input.rs:1`

Keyboard, mouse and gamepad state maintained by the engine and read through
`Res<Input>`.
Keyboard, mouse and gamepad state for the current frame, maintained by the
engine and readable from any system.

## Responsibilities

- Defines [`Input`](struct.Input.md#rustdoc-item-5802), the engine-owned resource, and the plain-data types a
  frontend feeds it ([`InputEvent`](enum.InputEvent.md#rustdoc-item-4308), [`KeyCode`](enum.KeyCode.md#rustdoc-item-5246), and the gamepad and mouse
  types).
- Tracks what is held this frame, what was pressed or released since the
  previous frame, and the cursor, motion and scroll collected over the
  frame. Also queues rumble requests for the frontend that owns the
  gamepads.

## Design

The engine knows no windowing or gamepad library. A frontend translates its
platform's events (winit, the editor's DOM, gilrs) into [`InputEvent`](enum.InputEvent.md#rustdoc-item-4308)s and
queues them with
[`Engine::push_input_event`](../engine/struct.Engine.md#rustdoc-item-4307). The
engine applies the queue at the top of the next frame, just after it
advances [`Time`](../time/struct.Time.md#rustdoc-item-6083). Both happen there for the same reason:
the scheduler orders systems on its own, without regard to registration
order, so a separate "input system" could run after the systems that read
its data. Applying the queue at the frame start means every system sees the
same input.

The type lives in the engine core, the one shared dylib every artifact
links. A project DLL therefore reads the host's instance through
`Res<Input>` across a reload.

Key codes name physical keys, using the W3C `KeyboardEvent.code` vocabulary
that winit also uses. They do not name the characters a layout produces:
`KeyW` is the key left of `KeyE` on every layout, which is what movement
bindings want. Text arrives separately, through `InputEvent::TextInput`,
`ImeCommit` and `ImePreedit`.

In frame terms, `*_held` was down at the start of the frame, and `*_pressed`
and `*_released` changed since the previous frame. A press and a release
inside one frame report both edges, so a short tap is never lost. Operating
system key repeat reports no new press. Motion, scroll and committed text
add up over the frame. The cursor position, modifier state and IME
composition are the latest reported values.

## Module contents

### Structs
- [`GamepadState`](struct.GamepadState.md#rustdoc-item-5956) — The state of one gamepad slot.
- [`Input`](struct.Input.md#rustdoc-item-5802) — Keyboard, mouse and gamepad state for the current frame.
- [`KeySet`](struct.KeySet.md#rustdoc-item-5906) — One bit per [`KeyCode`].
- [`Modifiers`](struct.Modifiers.md#rustdoc-item-5761) — The modifier keys' state, as the platform reports it.
- [`RumbleRequest`](struct.RumbleRequest.md#rustdoc-item-4310) — A request to rumble a player's gamepad, queued by a system for the

### Enums
- [`ButtonState`](enum.ButtonState.md#rustdoc-item-5489) — Whether a key or button went down or came up.
- [`GamepadAxis`](enum.GamepadAxis.md#rustdoc-item-5635) — A gamepad axis.
- [`GamepadButton`](enum.GamepadButton.md#rustdoc-item-5590) — A gamepad button, named after the Xbox layout.
- [`InputEvent`](enum.InputEvent.md#rustdoc-item-4308) — One input change, as a frontend reports it.
- [`KeyCode`](enum.KeyCode.md#rustdoc-item-5246) — A physical key, named after its position on a US layout.
- [`MouseButton`](enum.MouseButton.md#rustdoc-item-5531) — A mouse button.
- [`PlayerId`](enum.PlayerId.md#rustdoc-item-5243) — The player a gamepad belongs to.
- [`ScrollDelta`](enum.ScrollDelta.md#rustdoc-item-5723) — How far a mouse wheel turned.

### Traits
- [`EdgeBits`](trait.EdgeBits.md#rustdoc-item-5950) — A fixed set of button bits, one bit per button.

### Functions
- [`apply_edge`](fn.apply_edge.md#rustdoc-item-6081) — Applies one button edge.
- [`release_edges`](fn.release_edges.md#rustdoc-item-6082) — Releases every held bit, reporting each as released.

### Constants
- [`GAMEPAD_AXIS_DEADZONE`](constant.GAMEPAD_AXIS_DEADZONE.md#rustdoc-item-5245) — Axis values closer to zero than this read as exactly zero.
- [`GAMEPAD_SLOT_COUNT`](constant.GAMEPAD_SLOT_COUNT.md#rustdoc-item-5244) — Number of gamepads tracked at once, one per [`PlayerId`].
- [`KEY_SET_WORD_COUNT`](constant.KEY_SET_WORD_COUNT.md#rustdoc-item-5247) — Number of 64-bit words in the key bit set. Their 256 bits have room for

### Macros
- [`key_codes`](macro.key_codes.md#rustdoc-item-5251) — Declares [`KeyCode`] with each key's W3C `KeyboardEvent.code` name.
