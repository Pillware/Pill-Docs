<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3680"></a>

# Module `pill_editor_core::entities`

Source: `editor\pill_editor_core\src\entities.rs:1`

The Entities tab's shared actions: the create and delete commands, queued
for undo.
The Entities tab's shared actions, used by the menus, the palette, the
Cut command and the scripted channel. They are the recorded steps that
create one empty entity and delete the selected one.

## Responsibilities

- [`entity_create`]: one empty entity, under the `new entity` label.
- [`entity_delete`]: the selection clear and the destroy as one recorded
  step, under the `delete entity` label, so undo restores the entity and
  the selection that pointed at it.

## Design

The callers queue these commands in the shared
[`PendingEditorCommands`](../commands/struct.PendingEditorCommands.md#rustdoc-item-167)
resource, and they apply at the frame boundary like every other editor
edit. A restore gives the entity a new handle. From then on,
[`EditorCommand::apply_recorded`] rewrites the rest of the batch, and
the inverses already collected, to that handle.

## Module contents

### Functions
- [`entity_create`](fn.entity_create.md#rustdoc-item-3678) — Returns the recorded create: one empty entity, with the history label
- [`entity_delete`](fn.entity_delete.md#rustdoc-item-3679) — Returns the recorded delete: clearing the selection and destroying the
