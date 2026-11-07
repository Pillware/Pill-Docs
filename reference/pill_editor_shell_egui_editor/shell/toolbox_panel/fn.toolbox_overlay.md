<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-460"></a>

# Function `pill_editor_shell_egui_editor::shell::toolbox_panel::toolbox_overlay`

```rust
pub fn toolbox_overlay(argument_0: &mut EditorTabViewer<'_>, argument_1: &mut egui::Ui, argument_2: usize);
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\toolbox_panel.rs:34`

Draws the floating toolbox over one scene viewport: the gizmo's tools, its
space, its snapping and the scene grid's switch.

The panel carries the same settings as the viewport menu, always on screen.
A press on the handle along the panel's top drags it. A drag is kept inside
the viewport; a viewport too small to hold the whole panel keeps the
panel's top-left corner at its default spot, so the handle and the upper
rows stay reachable.

The panel floats over the scene's child window, and its rectangle joins the
frame's overlay regions, so a click anywhere on it - a row or the gap
between rows - belongs to the UI and never becomes a scene pick. The
panel's rectangle and every row's rectangle are logged whenever the panel
moves, and the scripted suite clicks the centre of the logged rows.
