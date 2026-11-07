<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-130"></a>

# Function `pill_input::gamepads::gamepad_button`

```rust
pub(in gamepads) fn gamepad_button(button: gamepad_library::Button) -> Option<pill_engine::GamepadButton>;
```

Visibility: `{'restricted': {'parent': 2, 'path': '::gamepads'}}` · Source: `frontends\pill_input\src\gamepads.rs:338`

Returns the engine's button for a library button, or `None` when the engine
does not track it (the extra `C`/`Z` buttons and unknown ones).

The library names face buttons by position. The engine names them after the
Xbox layout, where X is on the left and Y on top.
