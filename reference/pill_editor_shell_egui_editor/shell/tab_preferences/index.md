<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-568"></a>

# Module `pill_editor_shell_egui_editor::shell::tab_preferences`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\tab_preferences.rs:1`

The [`tab_preferences`](#rustdoc-item-568) module: the preferences tab: the editor-wide rows and the project's gizmo state.
The Preferences tab: the editor-wide preference rows and the project's
gizmo rows.

## Responsibilities

- `preferences_tab`: draws the editor-wide rows, then the project's name,
  its remembered and active gizmo settings, and the buttons that change the
  gizmo. The rows' text is kept in the session's draft: Save sends it as one
  batch, and a cancel drops it.

## Design

The globs below are absolute paths. A generated patch crate copies this
file's top-level `use` lines into a crate of its own, where a `super::`
path would have nothing to point at.

## Module contents

### Functions
- [`preferences_tab`](fn.preferences_tab.md#rustdoc-item-566) — Draws the Preferences tab: the editor-wide rows, then the project's name,
