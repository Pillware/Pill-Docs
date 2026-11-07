<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-134"></a>

# Function `pill_input::winit_events::translate_window_event`

```rust
pub fn translate_window_event(event: &winit::event::WindowEvent) -> impl Iterator<Item = _>;
```

Source: `frontends\pill_input\src\winit_events.rs:38`

Returns the input events a window event carries, in the order to apply them.

A window event that carries no input returns nothing, and most events that
carry input return one event. A key that is pressed or repeated and also
types something returns two: the key change first, then the committed text.
