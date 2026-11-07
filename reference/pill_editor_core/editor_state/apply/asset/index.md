<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2391"></a>

# Module `pill_editor_core::editor_state::apply::asset`

Visibility: `{'restricted': {'parent': 2390, 'path': '::editor_state::apply'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\asset.rs:1`

Applies the asset-file command family: every editor command that reads or
writes a file under the asset directory.

## Responsibilities

- Apply the asset-file commands: import, remove, create, delete, restore,
  move, rename, write a sidecar and change a file's settings.
- Take a failed command's own work back, and name the files a rollback
  could not remove.

## Design

One `match` over the family's own variants, called from
[`EditorCommand::apply_one`](../../command/enum.EditorCommand.md#rustdoc-item-1112). Every arm ends in a
[`CommandOutcome`](../../command/struct.CommandOutcome.md#rustdoc-item-2389): the inverse the history records, or `plain()` when the
command changed nothing and so has nothing to undo.

## Module contents

### Functions
- [`apply`](fn.apply.md#rustdoc-item-2388) — Applies one asset command.
