<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4989"></a>

# Module `pill_editor_core::hooks::context`

Source: `editor\pill_editor_core\src\hooks\context.rs:1`

What a callback reads and queues while it runs.
What a callback reads and queues while it runs.

## Responsibilities

- Give a callback the world, the shared selection and the cause of the edit
  it answers ([`HookContext`](struct.HookContext.md#rustdoc-item-5075)).
- Hold the commands a callback queues, so they join the batch that is being
  applied ([`HookQueue`]).
- Wrap the editor's own recorded actions as builders, so a callback changes
  the editor the way the UI does instead of assembling commands.
- Collect the notices callbacks post ([`HookNotices`](struct.HookNotices.md#rustdoc-item-4991)) for the executable to
  fold into the editor's toast list.

## Design

The context is borrowed for one call and names no type from the registering
module, so nothing it holds can dangle when that module unloads. A command
queued under [`FieldEditCause::HistoryRestored`](../events/enum.FieldEditCause.md#rustdoc-item-5120) is dropped: the replayed
step already holds its result, and applying it again would double the edit.
Notices are still collected under a replay, because they are feedback about
what the callback saw.

The builders queue the same commands the editor's own rows queue, so a
callback cannot invent an edit the editor has no history for. An edit joins
the step being applied; a control (a tool, a space, snapping) never does,
because a control is not something undo should walk back over.

## Module contents

### Structs
- [`HookContext`](struct.HookContext.md#rustdoc-item-5075) — What a callback reads and queues while it runs.
- [`HookNotice`](struct.HookNotice.md#rustdoc-item-4950) — One notice a callback posted.
- [`HookNotices`](struct.HookNotices.md#rustdoc-item-4991) — The notices this frame's callbacks posted, waiting for the executable.
- [`HookQueue`](struct.HookQueue.md#rustdoc-item-5032) — The commands the callbacks of one drain queued.
