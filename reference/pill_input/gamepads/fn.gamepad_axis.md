<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-132"></a>

# Function `pill_input::gamepads::gamepad_axis`

```rust
pub(in gamepads) fn gamepad_axis(axis: gamepad_library::Axis) -> Option<pill_engine::GamepadAxis>;
```

Visibility: `{'restricted': {'parent': 2, 'path': '::gamepads'}}` · Source: `frontends\pill_input\src\gamepads.rs:363`

Returns the engine's axis for a library axis, or `None` when the engine
does not track it.
