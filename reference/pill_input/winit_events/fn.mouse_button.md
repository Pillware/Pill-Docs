<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-150"></a>

# Function `pill_input::winit_events::mouse_button`

```rust
pub fn mouse_button(button: winit::event::MouseButton) -> Option<pill_engine::MouseButton>;
```

Source: `frontends\pill_input\src\winit_events.rs:169`

Converts winit's mouse button into the engine's, or `None` for a numbered
extra button the engine does not track.
