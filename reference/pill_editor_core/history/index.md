<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4360"></a>

# Module `pill_editor_core::history`

Source: `editor\pill_editor_core\src\history.rs:1`

The undo and redo history of editor edits.
Undo and redo history for editor edits.

## Responsibilities

- Own the undo entries, the cursor that says which of them are applied,
  and the redo tail (the entries past the cursor).
- Merge continuous edits of one control, such as a slider drag, into a
  single step while they keep arriving close together.
- Keep the history within the step cap and the memory budget the
  preferences set, dropping the oldest entries first and reporting which
  limit caused the drop.
- Drop entries that name a component type or field a reload removed.

## Design

The history is a world resource, so it survives reloads of the editor
modules that write into it. An engine entry keeps two batches: the
commands that made the edit and the commands that reverse it. Undo pops an
entry and queues its inverse batch through the same frame-boundary
application every edit uses, so an undo reaches the world the same way the
edit did. A restore of a destroyed entity assigns a fresh handle; after it
runs, the remaining entries are moved to that handle with
[`CommandHistory::remap_entity`].

## Module contents

### Structs
- [`CommandHistory`](struct.CommandHistory.md#rustdoc-item-4366) — The editor's undo stack.
- [`HistoryEntry`](struct.HistoryEntry.md#rustdoc-item-4202) — One undoable step.
- [`PushOutcome`](struct.PushOutcome.md#rustdoc-item-4323) — What a push or a limit change did to the history.

### Enums
- [`HistoryEntryKind`](enum.HistoryEntryKind.md#rustdoc-item-4197) — The two kinds of undoable step.
- [`TrimReason`](enum.TrimReason.md#rustdoc-item-4280) — Why the history dropped its oldest entry.

### Functions
- [`estimate_bytes`](fn.estimate_bytes.md#rustdoc-item-4418) — Estimates how many bytes a batch keeps alive.
- [`field_value_bytes`](fn.field_value_bytes.md#rustdoc-item-4419) — Returns the bytes one field value holds: a string's length, an array's
