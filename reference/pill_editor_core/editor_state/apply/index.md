<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2451"></a>

# Module `pill_editor_core::editor_state::apply`

Visibility: `{'restricted': {'parent': 2471, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\apply\mod.rs:1`

Applies a command batch, with one module per command family.

## Responsibilities

- Apply a batch at the frame boundary and collect one message per failure
  ([`EditorCommand::apply`](../command/enum.EditorCommand.md#rustdoc-item-2468), [`EditorCommand::apply_recorded`](../command/enum.EditorCommand.md#rustdoc-item-2469)).
- Route each command to the module that owns its family
  ([`EditorCommand::family`](../command/enum.EditorCommand.md#rustdoc-item-2470)).

## Design

`apply_one` only dispatches: the arms live in `world`, `asset`,
`selection`, `engine` and `document`. Each of those modules has one `match`
over its own family and answers `unreachable!` for any other command, so a
family module never calls another one, and a reviewer opening the asset
commands reads only the asset commands.

## Module contents

### Modules
- [`asset`](asset/index.md#rustdoc-item-2452) — Applies the asset-file command family: every editor command that reads or
- [`document`](document/index.md#rustdoc-item-2455) — Applies the document command family: the scene document commands and the
- [`engine`](engine/index.md#rustdoc-item-2458) — Applies the editor's engine controls: pause and step, the gizmo's tool,
- [`selection`](selection/index.md#rustdoc-item-2463) — Applies the selection command family.
- [`world`](world/index.md#rustdoc-item-2466) — The world family's applier.
