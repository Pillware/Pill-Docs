<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4789"></a>

# Module `pill_engine_core::ecs::world::lifecycle`

Visibility: `{'restricted': {'parent': 4727, 'path': '::ecs::world'}}` · Source: `engine\pill_engine_core\src\ecs\world\lifecycle.rs:1`

The script lifecycle passes: telling a component it started existing, and
telling a script it started running.

## Responsibilities

- Holds the queue of script components that started existing and have not
  been told yet, with the cause each lifecycle method receives.
- Runs the `on_create` pass and then the `on_start` pass, each ordered by its
  own `#[order(n)]` and then by type name and entity.
- Records an attachment at the two places a component can start existing:
  the entity insert and the component-add migration.

## Design

The queue holds handles, never pointers or borrows: an entity, the
registered type's name, and the cause. An entry is validated when it is
called - the entity must still exist and must still carry the type - so a
script removed before its first start is skipped instead of resurrected. A
type name resolves through the registration table at call time, which is
what lets the name outlive a reload: the retired image's lifecycle method
bodies are gone, and the arriving image's registration replaces them.

Both passes run at one point in the frame, before `on_update`, and the
frame's flush follows them. A command a lifecycle method queues therefore
lands in the queue that flush drains, unless the lifecycle method itself
runs inside a removal, which the frame's own flush drives - that case leaves
its commands for the next flush point.

A play session fills the queue itself: every script the edit world holds is
told it started existing when Play is pressed, which is what makes the first
frames of a session look like a scene load.

## Module contents

### Structs
- [`PendingScriptEvent`](struct.PendingScriptEvent.md#rustdoc-item-4764) — One script component waiting for its `on_create` and `on_start` passes.

### Functions
- [`sort_lifecycle_method_calls`](fn.sort_lifecycle_method_calls.md#rustdoc-item-4790) — Sorts `(order, type name, entity)` triples the same way the pending events
- [`sort_pending_events`](fn.sort_pending_events.md#rustdoc-item-4788) — Sorts pending events by lifecycle method order, then type name, then entity.
