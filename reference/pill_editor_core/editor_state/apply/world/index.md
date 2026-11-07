<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2400"></a>

# Module `pill_editor_core::editor_state::apply::world`

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\world.rs:1`

The world family's applier.

This module applies the world commands: component fields, array elements,
entity and component lifecycle, and resource fields.

## Responsibilities

- Apply the world edits and answer each with the inverse that undoes it,
  when one exists.
- Refuse a write the component registry cannot resolve, naming the
  component or field.

## Design

One `match` over the family's own variants, called from
[`EditorCommand::apply_one`](../../command/enum.EditorCommand.md#rustdoc-item-1112). Every successful arm
returns a [`CommandOutcome`](../../command/struct.CommandOutcome.md#rustdoc-item-2389): the inverse the history records, or
`plain()` for a command that cannot be undone.

## Module contents

### Functions
- [`apply`](fn.apply.md#rustdoc-item-2399) — Applies one world command.
