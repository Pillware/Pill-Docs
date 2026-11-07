<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-138"></a>

# Function `pill_input::winit_events::key_events`

```rust
pub(in winit_events) fn key_events(key: pill_engine::KeyCode, state: winit::event::ElementState, repeat: bool, text: Option<&str>) -> [Option<pill_engine::InputEvent>; 2];
```

Visibility: `{'restricted': {'parent': 141, 'path': '::winit_events'}}` · Source: `frontends\pill_input\src\winit_events.rs:95`

Returns the events one keyboard input carries: the key change, and the text
the key committed when it typed something printable.

A repeat becomes [`InputEvent::KeyRepeat`], not a new press, and it reports
its text again, which is what a held key in a text field needs. Control-only
text (Enter is `"\r"`, Tab is `"\t"`) is dropped because those keys act,
they do not type. This is separate from [`translate_window_event`](fn.translate_window_event.md#rustdoc-item-134) because a
winit key event cannot be built outside winit, so the tests drive this
function directly.
