<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1119"></a>

# Module `pill_editor::runner::windows`

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\windows.rs:1`

The editor's windows: surfaces, child windows, popouts and presentation.

## Responsibilities

- Create and place each scene view's child window and the game view's, and
  keep every renderer surface bound to the window that shows it.
- Create and close the popped-out tab windows, and present each tab's frame
  in its own window.
- Present one editor frame through the overlay, drawing the fallback UI
  while no shell module is loaded.

## Design

A view's window and its renderer surface are handled together, because a
surface only draws into the window it is bound to. Drawing the UI is best
effort: the composition overlay is the normal posture, the window's own
surface is the fallback, and when the platform refuses both, creating the
composition overlay is retried every 120 frames instead of failing.
