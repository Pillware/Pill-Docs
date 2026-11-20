<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5124"></a>

# Module `pill_editor_core::hooks::dispatch`

Source: `editor\pill_editor_core\src\hooks\dispatch.rs:1`

The frame-boundary dispatcher that runs the callbacks.
Runs the registered callbacks at the frame boundary.

## Responsibilities

- Snapshot the live callbacks before a drain touches the world
  ([`HookSession::new`](struct.HookSession.md#rustdoc-item-5129)).
- Run the before-callbacks over a whole batch
  ([`HookSession::prepare_field_batch`](struct.HookSession.md#rustdoc-item-5132)), applying their replacements and
  dropping the batch on a refusal.
- Run the after-callbacks per applied command
  ([`HookSession::after_field_command`](struct.HookSession.md#rustdoc-item-5133)) and hold the commands they queue.
- Turn what a callback queued outside a command into the batches it needs
  ([`HookSession::take_queued_batches`](struct.HookSession.md#rustdoc-item-5139)).
- Publish the notices the callbacks posted ([`HookNotices`](../context/struct.HookNotices.md#rustdoc-item-4991)).

## Design

The session copies the live callbacks out of the registry up front, so the
world can be borrowed mutably for a callback without borrowing the registry
it came from. Before-callbacks run over the entire batch first, which is
what makes a refusal drop the whole batch instead of leaving part of a
multi-selection edit applied and unrecorded. Follow-ups are applied by the
observed `apply_recorded`, never through the session, so a follow-up cannot
re-enter a callback.

## Module contents

### Structs
- [`HookSession`](struct.HookSession.md#rustdoc-item-2769) — One drain's callbacks, notices and follow-ups.

### Functions
- [`after_view`](fn.after_view.md#rustdoc-item-5172) — The payload an after-callback sees: the applied value and the value the
- [`before_view`](fn.before_view.md#rustdoc-item-5170) — The payload a before-callback sees, or `None` when the command's previous
- [`field_command_entity`](fn.field_command_entity.md#rustdoc-item-5167) — The entity one field command targets, or `None` for every other command.
- [`is_primary`](fn.is_primary.md#rustdoc-item-5169) — Whether `entity` is the selection's primary.
- [`previous_from_inverse`](fn.previous_from_inverse.md#rustdoc-item-5173) — The value one command's inverse puts back.
- [`selection_copy`](fn.selection_copy.md#rustdoc-item-5168) — The shared selection, or a default one when the world has none.
- [`write_replacement`](fn.write_replacement.md#rustdoc-item-5174) — Writes a before-callback's replacement into its command.

### Macros
- [`call_callbacks`](macro.call_callbacks.md#rustdoc-item-5121) — Calls every live callback of one event with one payload.
