<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2"></a>

# Module `pill_input::gamepads`

Source: `frontends\pill_input\src\gamepads.rs:1`

Gamepads: polled into input events, with rumble played on request.
Polls gamepads into input events and plays the rumble the systems ask for.

## Responsibilities

- Own the process's [`GamepadContext`] and give each gamepad a
  [`PlayerId`] slot when it connects ([`Gamepads::poll`]).
- Translate the library's buttons and axes into the engine's.
- Play the rumble the systems ask for, keeping each effect alive while it
  runs ([`Gamepads::play_rumble`]).

## Design

A gamepad is not a window event. The `gilrs` library (imported as
`gamepad_library`) reads gamepads from the operating system by itself. A
frontend asks for the changes once per frame, before it runs the frame, and
pushes them like any other input.

Slots are given out in connection order, the lowest free one first. A fifth
gamepad is ignored until a slot frees.

Dropping an `Effect` stops it, so a rumble that is playing must be kept
alive until its duration has passed. That deadline also covers a gamepad
that never reports completion (some XInput pads).

## Module contents

### Structs
- [`ActiveRumble`](struct.ActiveRumble.md#rustdoc-item-9) — A rumble effect that is still playing.
- [`Gamepads`](struct.Gamepads.md#rustdoc-item-86) — The gamepads, their player slots and the rumble playing on them.

### Functions
- [`gamepad_axis`](fn.gamepad_axis.md#rustdoc-item-132) — Returns the engine's axis for a library axis, or `None` when the engine
- [`gamepad_button`](fn.gamepad_button.md#rustdoc-item-130) — Returns the engine's button for a library button, or `None` when the engine
- [`rumble_effect`](fn.rumble_effect.md#rustdoc-item-128) — Builds a two-motor rumble effect for `request` on `gamepad_id`.
