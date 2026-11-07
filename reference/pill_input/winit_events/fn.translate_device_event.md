<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-147"></a>

# Function `pill_input::winit_events::translate_device_event`

```rust
pub fn translate_device_event(event: &winit::event::DeviceEvent) -> Option<pill_engine::InputEvent>;
```

Source: `frontends\pill_input\src\winit_events.rs:150`

Returns the input event a device event carries: raw mouse motion, or `None`
for any other device event.
