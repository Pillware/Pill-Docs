<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2297"></a>

# Module `pill_editor_core::drain`

Source: `editor\pill_editor_core\src\drain.rs:1`

The frame boundary: the pending-command drain, the undo/redo walk and the
history prune a reload needs.
The editor's frame boundary: applies the queued commands, walks the undo
history, and prunes that history after a reload.

## Responsibilities

- Apply the batches the shell and the scripted channel queued
  ([`apply_pending`]). A move or delete carries the shared selection with
  it, and a recorded batch becomes one undo step.
- Walk the history for `editor.undo` and `editor.redo`
  ([`step_history`]). A step is only popped when a command queue exists.
- Drop the history entries the current component registry can no longer
  resolve ([`prune_history`]), at most once per registry change.

## Design

The drain touches only the engine's world resources, so no runner owns it.
The native editor and the browser editor call the same functions at their
own frame boundary, so a change to the command contract is made once.

Everything a caller can observe is a log line. The suites read `engine
commands applied`, `command failed`, `history push` and `history undo`;
the module also logs `history remap` and `history pruned`. Both editors
therefore report an edit the same way.

Nothing here names egui, so the module also works in the browser build,
where there is no window at all.

## Module contents

### Structs
- [`DrainOutcome`](struct.DrainOutcome.md#rustdoc-item-2255) — What one drain changed outside the world.

### Enums
- [`HistoryDirection`](enum.HistoryDirection.md#rustdoc-item-1927) — Which way a history walk goes.
- [`HistoryOutcome`](enum.HistoryOutcome.md#rustdoc-item-2351) — What one history walk did.

### Functions
- [`apply_pending`](fn.apply_pending.md#rustdoc-item-1924) — Applies every queued batch, then prunes a history a reload invalidated.
- [`command_touches_files`](fn.command_touches_files.md#rustdoc-item-2303) — Whether one command changes files on disk.
- [`expand_element_menu`](fn.expand_element_menu.md#rustdoc-item-2300) — Replaces every [`EditorCommand::RunElementMenu`] in `batch` with the
- [`follow_selection`](fn.follow_selection.md#rustdoc-item-2301) — Moves the shared selection with the file a batch moved or deleted.
- [`prune_history`](fn.prune_history.md#rustdoc-item-2390) — Drops the history entries the current component registry cannot resolve.
- [`registry_stamp`](fn.registry_stamp.md#rustdoc-item-2391) — A stamp of the world's component registry: the component names plus every
- [`resolvable_identifiers`](fn.resolvable_identifiers.md#rustdoc-item-2392) — Returns every identifier a history entry may name, as `component` and
- [`step_history`](fn.step_history.md#rustdoc-item-2389) — Pops one history entry and queues its batch, which is applied but never

### Constants
- [`HOOK_ROUNDS_MAX`](constant.HOOK_ROUNDS_MAX.md#rustdoc-item-2296) — How many rounds of callback-queued work one drain applies.
