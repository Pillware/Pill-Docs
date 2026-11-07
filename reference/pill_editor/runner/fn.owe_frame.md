<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1219"></a>

# Function `pill_editor::runner::owe_frame`

```rust
pub(in runner) fn owe_frame(editor_window: &editor_window::EditorWindow, wake_timer: &mut WakeTimer, event_loop: &winit::event_loop::ActiveEventLoop);
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:651`

Ask for one frame now: clear the wake timer, request a redraw, and leave
the loop waiting for whatever asks next.

This is the only place that says what asking for a frame means.
`window_event` asks in two spots - once for a dropped file, which returns
early, and once at the end for everything else - and both come here, so the
rule changes in one place.
