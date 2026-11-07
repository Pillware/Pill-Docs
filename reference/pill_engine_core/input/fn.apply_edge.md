<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6081"></a>

# Function `pill_engine_core::input::apply_edge`

```rust
pub(in input) fn apply_edge<B: EdgeBits>(held: &mut B, pressed: &mut B, released: &mut B, bit_index: u32, state: ButtonState);
```

Visibility: `{'restricted': {'parent': 4306, 'path': '::input'}}` · Source: `engine\pill_engine_core\src\input.rs:1036`

Applies one button edge.

A press of a bit that is already held is the operating system's repeat, so
nothing changes. A release of a bit that is not held changes nothing either;
[`InputEvent::FocusLost`](enum.InputEvent.md#rustdoc-item-5823) may already have released it. Keys, mouse buttons
and gamepad buttons all come through here, so the rule lives in one place.
