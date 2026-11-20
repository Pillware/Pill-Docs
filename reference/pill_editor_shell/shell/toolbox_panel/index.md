<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-472"></a>

# Module `pill_editor_shell::shell::toolbox_panel`

Source: `editor\pill_editor_shell\src\shell\toolbox_panel.rs:1`

The [`toolbox_panel`](#rustdoc-item-472) module: the floating toolbox over a scene viewport.
The floating toolbox that sits over a scene viewport.

## Responsibilities

- `toolbox_overlay`: one draggable panel per scene viewport, holding the
  gizmo's three tools, one row per component tool the selection offers, its
  space, its snapping and the two switches. The panel's rectangle and every
  row's rectangle are logged whenever the panel moves.

## Design

The globs below are absolute paths. A generated patch crate replays this
file's top-level `use` lines, so a `super::`-relative glob would not
resolve there.

## Module contents

### Functions
- [`toolbox_overlay`](fn.toolbox_overlay.md#rustdoc-item-471) — Draws the floating toolbox over one scene viewport: the gizmo's tools, one
