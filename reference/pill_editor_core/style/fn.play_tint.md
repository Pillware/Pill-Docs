<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10521"></a>

# Function `pill_editor_core::style::play_tint`

```rust
pub fn play_tint(theme: &pill_ui_theme::Theme, run_mode: pill_engine::RunMode, paused: bool) -> Option<egui::Color32>;
```

Source: `editor\pill_editor_core\src\style.rs:818`

The tint the menu bar and the dock's frame take while a game runs.

`None` while the editor is being edited, so the editor looks as it always
did. A paused session takes the stronger colour: a game that is running but
not moving is the state that surprises people.
