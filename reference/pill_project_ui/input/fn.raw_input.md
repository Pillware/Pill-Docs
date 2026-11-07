<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-166"></a>

# Function `pill_project_ui::input::raw_input`

```rust
pub fn raw_input(frame: &InputFrame, viewport: pill_core::math::Vector2f, scale_factor: f32, time: f64, memory: &mut InputMemory) -> egui::RawInput;
```

Source: `ui\pill_project_ui\src\input.rs:133`

One frame of egui input, built from `frame`.

`viewport` is the UI's logical size in points: the surface's size divided by
`scale_factor`. `scale_factor` is the monitor scale, which turns the engine's
physical pixels into points. `time` is the seconds since the UI started,
which egui uses for its animation clock. `memory` carries the state between
passes - the modifiers and the cursor position reported last time - and this
call updates it.
