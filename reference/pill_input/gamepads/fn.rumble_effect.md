<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-128"></a>

# Function `pill_input::gamepads::rumble_effect`

```rust
pub(in gamepads) fn rumble_effect(gamepad_context: &mut gamepad_library::Gilrs, gamepad_id: gamepad_library::GamepadId, request: &pill_engine::RumbleRequest) -> Result<gamepad_library::ff::Effect, gamepad_library::ff::Error>;
```

Visibility: `{'restricted': {'parent': 2, 'path': '::gamepads'}}` · Source: `frontends\pill_input\src\gamepads.rs:302`

Builds a two-motor rumble effect for `request` on `gamepad_id`.

## Errors

Returns the gamepad library's error when the gamepad refuses the effect.
