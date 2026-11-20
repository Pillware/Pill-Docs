<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-401"></a>

# Function `pill_editor_shell::shell::views::scene_body_rect`

```rust
pub fn scene_body_rect(ui: &egui::Ui) -> ShellRect;
```

Source: `editor\pill_editor_shell\src\shell\views.rs:131`

Returns a scene tab's body rectangle in logical points.

This is the tab body itself, not a grown one: how far a view's window may
extend past it depends on what draws above that window, which the frontend
knows and a shell module cannot. A composition overlay paints the UI over
the child window and grows the window to hide the seam; the window surface
has the child above the UI, where any growth covers the tab bar and the
panels beside it.
