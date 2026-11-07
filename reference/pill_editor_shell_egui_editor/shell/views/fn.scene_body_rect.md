<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-391"></a>

# Function `pill_editor_shell_egui_editor::shell::views::scene_body_rect`

```rust
pub fn scene_body_rect(ui: &egui::Ui) -> ShellRect;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\views.rs:98`

Returns a scene tab's body rectangle in logical points, grown by
[`SCENE_RECT_OVERSHOOT`](constant.SCENE_RECT_OVERSHOOT.md#rustdoc-item-379) so the child window also covers the tab body's
padding and outline.
