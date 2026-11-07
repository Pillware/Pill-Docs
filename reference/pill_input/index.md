<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-157"></a>

# pill_input API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Input translation shared by the frontends.

## Responsibilities

- Translate winit window and device events into the engine's
  [`InputEvent`](pill_engine::InputEvent)s ([`winit_events`](winit_events/index.md#rustdoc-item-141), feature
  `winit`).
- Own the gamepads: poll them into input events and play the rumble the
  game's systems request ([`gamepads`](gamepads/index.md#rustdoc-item-2), feature `gamepad`, native only).

## Design

The engine defines what input is (`pill_engine::input`) and links no
platform library; `pill_player` does not link winit either. Each frontend
receives its platform's events in its own loop, so the translation lives
here. Every frontend that handles winit events (`pill_standalone`,
`pill_editor`, `pill_web`, `pill_web_editor`) uses this crate instead of
repeating it. Only `pill_standalone` polls gamepads and plays the rumble
its systems request; the others pass window input only.

Frontends forward the translated events through `FrameDriver::push_input`
between frames. A frontend that polls gamepads gives the requests from
`FrameDriver::take_rumble_requests` to [`gamepads::Gamepads::play_rumble`](gamepads/struct.Gamepads.md#rustdoc-item-91)
after the frame.

## Module contents

### Modules
- [`gamepads`](gamepads/index.md#rustdoc-item-2) — Gamepads: polled into input events, with rumble played on request.
- [`winit_events`](winit_events/index.md#rustdoc-item-141) — winit's window and device events as engine input events.
