<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-225"></a>

# Function `pill_editor_shell_egui_editor::shell::bar::about_window`

```rust
pub fn about_window(context: &egui::Context, mark: &egui::TextureHandle, open: &mut bool, overlay_regions: &mut Vec<ShellRect>);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\bar.rs:279`

Draws the About window: the mark, the editor's name and the shell's version.

While the window is open its rectangle joins the frame's overlay regions,
so a click on it is the UI's and never a scene pick.
