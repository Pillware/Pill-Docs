<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2398"></a>

# Module `pill_editor_core::editor_state::apply::selection`

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\selection.rs:1`

Applies the selection command family.

These commands change the editor's shared selection, and `ArmEntityPick`
arms the request the next scene click answers.

## Responsibilities

- Apply the selection edits (`SetSelection`, `SelectResource`,
  `RestoreSelection`), each answering with the inverse that puts the
  previous selection back.
- Arm the next scene click (`ArmEntityPick`) without recording anything.

## Design

One `match` over the family's own variants, called from
[`EditorCommand::apply_one`](../../command/enum.EditorCommand.md#rustdoc-item-1112). Every arm for a
selection command ends in a [`CommandOutcome`](../../command/struct.CommandOutcome.md#rustdoc-item-2389): the inverse the history
records, or `plain()` for a command that cannot be undone. A command of
another family hits `unreachable!`.

## Module contents

### Functions
- [`apply`](fn.apply.md#rustdoc-item-2397) — Applies one selection command.
