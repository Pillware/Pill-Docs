<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-36"></a>

# pill_test_editor API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The test extension's editor part: the editor API's proving case.

## Responsibilities

- Register one callback per editor event the API has, through the shared
  request queue, so a reload rebinds them instead of doubling them.
- Log what every callback received, under `[test] hook <event>`, which is
  what the editor suite's `editor_api` area reads.
- Read the editor state (the gizmo, the active tool, the shared selection
  and the viewport) from a field callback, and log what it read.
- Prove the before-callback's two verdicts: replace a magic value and refuse
  another.
- Change the editor from callbacks: a follow-up field write inside the step
  being applied, and the shared command builders for a component and a
  selection.

## Design

The crate is an ordinary extension crate with the `_editor` suffix, so only
an editor host loads it, after the `pill_test` crate beside it. It holds no
state of its own: every value it needs is in the world the callback is
handed, and every log line is derived from a payload. That is what lets a
reload replace the image without repeating anything.

Registration goes through [`EditorHookRequests`], never through the
registry: the executable drains the queue, ties each request to this
crate's liveness marker and drops both together, so an unloaded image is
never called. The callbacks are plain functions because the registry holds
a function address, not a closure.

The magic values exist so a suite can name a behaviour with one number: a
write of [`MAGIC_CLAMP`](constant.MAGIC_CLAMP.md#rustdoc-item-2) applies as [`MAGIC_CLAMPED`](constant.MAGIC_CLAMPED.md#rustdoc-item-1), a write of
[`MAGIC_REFUSE`](constant.MAGIC_REFUSE.md#rustdoc-item-3) is refused, and a write of [`MAGIC_FOLLOW_UP`](constant.MAGIC_FOLLOW_UP.md#rustdoc-item-4) makes the
after-callback queue a second write that joins the same undo step.

## Module contents

### Functions
- [`after_every_field_edit`](fn.after_every_field_edit.md#rustdoc-item-13) — Logs the applied field edit, and queues the follow-up a magic value asks
- [`before_every_field_edit`](fn.before_every_field_edit.md#rustdoc-item-8) — Reads the editor state and logs the field edit, replacing or refusing a
- [`init`](fn.init.md#rustdoc-item-34) — The artifact's one-time entry point.
- [`on_asset_edit`](fn.on_asset_edit.md#rustdoc-item-18) — Logs an asset-file edit.
- [`on_component_edit`](fn.on_component_edit.md#rustdoc-item-14) — Logs a component add or remove.
- [`on_element_selection`](fn.on_element_selection.md#rustdoc-item-30) — Logs an element-selection change.
- [`on_entity_edit`](fn.on_entity_edit.md#rustdoc-item-16) — Logs an entity create or destroy.
- [`on_history_edit`](fn.on_history_edit.md#rustdoc-item-20) — Logs a history walk.
- [`on_play_edit`](fn.on_play_edit.md#rustdoc-item-26) — Logs a play or stop.
- [`on_scene_edit`](fn.on_scene_edit.md#rustdoc-item-24) — Logs a scene open or new.
- [`on_selection_changed`](fn.on_selection_changed.md#rustdoc-item-22) — Logs a selection change and attaches the probe component to a bare entity.
- [`on_tool_activated`](fn.on_tool_activated.md#rustdoc-item-28) — Logs an active-tool change.
- [`probe_component_name`](fn.probe_component_name.md#rustdoc-item-6) — The registered name of the component these callbacks answer.
- [`register`](fn.register.md#rustdoc-item-32) — Queues one request per event the editor API has.

### Constants
- [`FOLLOW_UP_COUNT`](constant.FOLLOW_UP_COUNT.md#rustdoc-item-5) — The `processed_frame_count` the follow-up writes.
- [`MAGIC_CLAMP`](constant.MAGIC_CLAMP.md#rustdoc-item-2) — The value the before-callback replaces with [`MAGIC_CLAMPED`].
- [`MAGIC_CLAMPED`](constant.MAGIC_CLAMPED.md#rustdoc-item-1) — The value the before-callback writes instead of [`MAGIC_CLAMP`].
- [`MAGIC_FOLLOW_UP`](constant.MAGIC_FOLLOW_UP.md#rustdoc-item-4) — The value whose after-callback queues a second write in the same step.
- [`MAGIC_REFUSE`](constant.MAGIC_REFUSE.md#rustdoc-item-3) — The value the before-callback refuses.
- [`SOURCE`](constant.SOURCE.md#rustdoc-item-0) — The crate registering the callbacks, which the log lines and the liveness
