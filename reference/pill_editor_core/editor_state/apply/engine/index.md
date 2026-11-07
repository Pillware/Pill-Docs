<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2396"></a>

# Module `pill_editor_core::editor_state::apply::engine`

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\engine.rs:1`

Applies the editor's engine controls: pause and step, the gizmo's tool,
space and snapping, the scene grid's switch, and a system's on/off flag.

## Responsibilities

- Apply those controls, and answer a system toggle with the inverse that
  switches the system back.

## Design

One `match` over this family's commands, called from
[`EditorCommand::apply_one`](../../command/enum.EditorCommand.md#rustdoc-item-1112). A command that changed
something returns a [`CommandOutcome`](../../command/struct.CommandOutcome.md#rustdoc-item-2389): the inverse the undo history
records, or `plain()` when there is nothing to undo. A command from another
family never arrives here; it hits `unreachable!`.

## Module contents

### Functions
- [`apply`](fn.apply.md#rustdoc-item-2395) — Applies one engine command.
