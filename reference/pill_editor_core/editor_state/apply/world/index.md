<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2466"></a>

# Module `pill_editor_core::editor_state::apply::world`

Visibility: `{'restricted': {'parent': 2451, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\world.rs:1`

The world family's applier.

This module applies the world commands: component fields, array elements,
entity and component lifecycle, resource fields, and the element transforms
a tool writes back.

## Responsibilities

- Apply the world edits and answer each with the inverse that undoes it,
  when one exists.
- Refuse a write the component registry cannot resolve, naming the
  component or field.
- Refuse an element move when no active tool writes element transforms.

## Design

One `match` over the family's own variants, called from
[`EditorCommand::apply_one`](../../command/enum.EditorCommand.md#rustdoc-item-1157). Every successful arm
returns a [`CommandOutcome`](../../command/struct.CommandOutcome.md#rustdoc-item-2450): the inverse the history records, or
`plain()` for a command that cannot be undone.

## Module contents

### Functions
- [`apply`](fn.apply.md#rustdoc-item-2467) — Applies one world command.
- [`editor_origin`](fn.editor_origin.md#rustdoc-item-2464) — The origin an editor change reports.
