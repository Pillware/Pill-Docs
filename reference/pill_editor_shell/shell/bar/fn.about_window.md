<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-233"></a>

# Function `pill_editor_shell::shell::bar::about_window`

```rust
pub fn about_window(context: &egui::Context, mark: &egui::TextureHandle, open: &mut bool, overlay_regions: &mut Vec<ShellRect>);
```

Source: `editor\pill_editor_shell\src\shell\bar.rs:371`

Draws the About window: the mark, the editor's name and the shell's version.

While the window is open its rectangle joins the frame's overlay regions,
so a click on it is the UI's and never a scene pick.
