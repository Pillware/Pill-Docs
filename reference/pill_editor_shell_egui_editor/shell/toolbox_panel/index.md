<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-461"></a>

# Module `pill_editor_shell_egui_editor::shell::toolbox_panel`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\toolbox_panel.rs:1`

The [`toolbox_panel`](#rustdoc-item-461) module: the floating toolbox over a scene viewport.
The floating toolbox that sits over a scene viewport.

## Responsibilities

- `toolbox_overlay`: one draggable panel per scene viewport, holding the
  gizmo's three tools, its space, its snapping and the scene grid's switch.
  The panel's rectangle and every row's rectangle are logged whenever the
  panel moves.

## Design

The globs below are absolute paths. A generated patch crate replays this
file's top-level `use` lines, so a `super::`-relative glob would not
resolve there.

## Module contents

### Functions
- [`toolbox_overlay`](fn.toolbox_overlay.md#rustdoc-item-460) — Draws the floating toolbox over one scene viewport: the gizmo's tools, its
