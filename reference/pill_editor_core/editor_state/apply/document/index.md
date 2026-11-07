<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2394"></a>

# Module `pill_editor_core::editor_state::apply::document`

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\document.rs:1`

Applies the document command family: the scene document commands and the
preferences.

## Responsibilities

- Apply the scene document commands (new, open, save, save as), clearing
  the unsaved marker when one succeeds.
- Apply a preferences change as one read-modify-write of the preferences
  file.

## Design

One `match` over the family's own variants, called from
[`EditorCommand::apply_one`](../../command/enum.EditorCommand.md#rustdoc-item-1112); a command of another
family hits `unreachable!`. Every successful arm answers
[`CommandOutcome::plain()`](../../command/struct.CommandOutcome.md#rustdoc-item-2393), because none of these commands can be undone.

## Module contents

### Functions
- [`apply`](fn.apply.md#rustdoc-item-2392) — Applies one document command.
