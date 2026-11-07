<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-212"></a>

# Function `pill_editor_shell_egui_editor::shell::toasts::draw_toasts`

```rust
pub fn draw_toasts(toasts: &mut ToastSession, frame_index: u64, context: &egui::Context, overlay_regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\toasts.rs:85`

Draws the live toasts and publishes their rectangles.

The shell calls it from inside its egui pass, after the dock: a toast
floats over whatever it covers, and a click on one belongs to the UI.
