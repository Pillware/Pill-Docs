<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8469"></a>

# Module `pill_editor_core::systems`

Source: `editor\pill_editor_core\src\systems.rs:1`

The Systems tab's shared logic: row labels, system toggles and the pause
control.
The Systems tab's shared logic: the row and button labels, and the editor
command each control queues.

## Responsibilities

- [`system_row_label`]: the row text `name (owner)`, with `[ambiguous]`
  added when another system has the same name.
- [`system_state_label`] and [`system_toggle`]: the `on`/`off` button text
  and the recorded `SetSystemEnabled` edit it queues, under the history
  label `system {index} on|off`.
- [`pause_button_label`] and [`pause_toggle_command`]: the Pause/Resume
  control. Its button, the View menu's row and the scripted channel all
  read the engine's current pause state and queue the opposite.

## Design

The tab's widgets and the scripted channel call these same helpers. A
state button's click and a scripted `edit system` therefore record the
same undo entry, under the same label. The pause control likewise changes
the same pause flag whichever entry point asked. The commands ride the
shared [`PendingEditorCommands`](../commands/struct.PendingEditorCommands.md#rustdoc-item-167)
queue and apply at the frame boundary like every other editor edit.

## Module contents

### Functions
- [`pause_button_label`](fn.pause_button_label.md#rustdoc-item-8467) — The Pause/Resume button's text for the engine's current pause state.
- [`pause_toggle_command`](fn.pause_toggle_command.md#rustdoc-item-8468) — The pause toggle the Pause/Resume control queues: a `SetPaused` edit that
- [`system_row_label`](fn.system_row_label.md#rustdoc-item-8464) — The row label for one system: `name (owner)`, marked `[ambiguous]` when
- [`system_state_label`](fn.system_state_label.md#rustdoc-item-8465) — The state button's text for a system: `on` or `off`.
- [`system_toggle`](fn.system_toggle.md#rustdoc-item-8466) — The recorded toggle a state button queues: a `SetSystemEnabled` edit
