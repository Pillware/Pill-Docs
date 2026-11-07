<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-392"></a>

# Function `pill_editor_shell_egui_editor::shell::views::scene_overlay`

```rust
pub fn scene_overlay(ui: &mut egui::Ui, frames_per_second: f32, overlay_regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\views.rs:109`

Draws a scene tab's overlay chip: the frame counter in the viewport's
top-right corner, painted from the theme.

The editor's composition overlay paints above the scene's child window, so
the counter shows over the viewport. Its rectangle joins the frame's
overlay regions, so a click on it belongs to the UI and is never read as a
scene pick.
