<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-145"></a>

# Function `pill_input::winit_events::ime_event`

```rust
pub(in winit_events) fn ime_event(ime: &winit::event::Ime) -> Option<pill_engine::InputEvent>;
```

Visibility: `{'restricted': {'parent': 141, 'path': '::winit_events'}}` · Source: `frontends\pill_input\src\winit_events.rs:137`

Converts an IME change into an input event, or `None` when the IME is
switched on or off.
