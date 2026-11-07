<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2657"></a>

# Module `pill_editor_core::editor_state::command`

Visibility: `{'restricted': {'parent': 2404, 'path': '::editor_state'}}` · Source: `editor\pill_editor_core\src\editor_state\command.rs:1`

The editor's command vocabulary and the metadata the history reads.

## Responsibilities

- List every mutation the editor can queue ([`EditorCommand`](enum.EditorCommand.md#rustdoc-item-1112)). This is the
  one owned type the shell queues and the frame boundary applies.
- Answer what the history asks of a command: whether it records, which
  component and field identifiers it addresses, and which entity handle it
  names ([`EditorCommand::recordable`](enum.EditorCommand.md#rustdoc-item-2513),
  [`EditorCommand::touched_identifiers`](enum.EditorCommand.md#rustdoc-item-2514), [`EditorCommand::remap_entity`](enum.EditorCommand.md#rustdoc-item-2515)).
- Sort each command into the family whose applier module applies it
  ([`CommandFamily`](enum.CommandFamily.md#rustdoc-item-2516), [`EditorCommand::family`](enum.EditorCommand.md#rustdoc-item-2403)).

## Design

The command enum stays in one piece because it is the format of the queue
the shell fills and the executable drains, so its values cross the reload
boundary between the two. Only the applier is split, one module per
[`CommandFamily`](enum.CommandFamily.md#rustdoc-item-2516).

## Module contents

### Structs
- [`CommandOutcome`](struct.CommandOutcome.md#rustdoc-item-2389) — What one applied command hands back to the recording layer.
- [`RecordedApply`](struct.RecordedApply.md#rustdoc-item-2509) — The result of [`EditorCommand::apply_recorded`].

### Enums
- [`CommandFamily`](enum.CommandFamily.md#rustdoc-item-2516) — The family a command belongs to, which is also the applier module that
- [`EditorCommand`](enum.EditorCommand.md#rustdoc-item-1112) — One mutation the editor can queue, applied at the frame boundary.
