<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-396"></a>

# Function `pill_editor_shell_egui_editor::shell::views::scene_badges`

```rust
pub fn scene_badges(viewer: &mut EditorTabViewer<'_>, ui: &mut egui::Ui, view: usize);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\views.rs:178`

Draws one scene view's entity badges: for each point the executable
projected, the entity's component mark (a camera, a light), or a plain dot
when it has neither.

A badge is only the mark, with no chip behind it, on a short blurred drop
shadow in the theme's shadow colour. The shadow keeps the glyph readable
over a busy scene, as a CSS text shadow does. The mark's size is the
`editor.gizmo_icon_size` preference, and the rectangle that picks it grows
with it.

The mark's colour carries the state: a selected entity's uses the theme's
danger colour, and hovering brightens an unselected one. A badge belongs
to the UI: its rectangle joins the frame's overlay regions, so a click on
it selects its entity instead of pressing the scene behind it.
