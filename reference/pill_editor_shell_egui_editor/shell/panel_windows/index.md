<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-330"></a>

# Module `pill_editor_shell_egui_editor::shell::panel_windows`

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\panel_windows.rs:1`

The [`panel_windows`] module: the windows and modals module panels ask the
shell for.
The windows that module panels ask the shell to show.

## Responsibilities

- [`panel_windows`]: draw every open panel window. Each window calls the
  draw function of the panel that opened it and passes the window's id, so
  a panel's dialog body and its tab body are the same code.
- Answer a modal with Enter or Escape, or with its Apply and Cancel
  buttons, and leave the answer for the panel.
- Close the windows of a module whose panels are gone, on every pass, so a
  window is never drawn through a draw function from an image that has
  unloaded.
- Publish each non-modal window's rectangle into the frame's overlay
  regions, so a click on a window belongs to the UI and is never a scene
  pick. A modal needs no rectangle: it takes those clicks itself.

## Design

The shell owns the window (its position, its lifetime, its modality) and
the panel owns the content. The windows live in [`PanelWindowSession`], a
session resource, so a shell reload keeps them open. A window closes when
the user closes it, when a modal is answered, when the owning module
unloads and its panels are gone, or when a new window opens past
[`PANEL_WINDOWS_MAX`]. A panel that wants a closed window back asks for it
again on its next draw.

## Module contents

### Structs
- [`PanelFeed`](struct.PanelFeed.md#rustdoc-item-253) — The data a module panel reads while it draws, collected once per pass.

### Functions
- [`panel_windows`](fn.panel_windows.md#rustdoc-item-329) — Draw every open panel window.
