<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-379"></a>

# Constant `pill_editor_shell_egui_editor::shell::views::SCENE_RECT_OVERSHOOT`

```rust
pub const SCENE_RECT_OVERSHOOT: f32 = 16.0;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\views.rs:28`

How far, in logical points, the scene rectangle extends past the measured
tab body. The body's padding and outline sit inside the tab, so the child
window must cover them too; otherwise whatever is behind shows around the
viewport's edge.
