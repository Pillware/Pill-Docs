<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2458"></a>

# Module `pill_editor_core::editor_state::apply::engine`

Visibility: `{'restricted': {'parent': 2451, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\engine.rs:1`

Applies the editor's engine controls: pause and step, the gizmo's tool,
space and snapping, the space cycle through the active tool's frames, the
scene grid's switch, and a system's on/off flag.

## Responsibilities

- Apply those controls, and answer a system toggle with the inverse that
  switches the system back.
- Remember the space a tool was last on, so choosing another tool and
  coming back finds it again.

## Design

One `match` over this family's commands, called from
[`EditorCommand::apply_one`](../../command/enum.EditorCommand.md#rustdoc-item-1157). A command that changed
something returns a [`CommandOutcome`](../../command/struct.CommandOutcome.md#rustdoc-item-2450): the inverse the undo history
records, or `plain()` when there is nothing to undo. A command from another
family never arrives here; it hits `unreachable!`.

## Module contents

### Functions
- [`apply`](fn.apply.md#rustdoc-item-2456) — Applies one engine command.
- [`push_play_refusal_notice`](fn.push_play_refusal_notice.md#rustdoc-item-2457) — Adds one error notice for a refused Play, so the person sees the reason as
- [`remember_active_space`](fn.remember_active_space.md#rustdoc-item-2459) — Records the gizmo's space as the active tool's own choice.
