<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-169"></a>

# Module `pill_editor_core::assets`

Source: `editor\pill_editor_core\src\assets.rs:1`

The Assets pipeline: the dialogs' state and the file-command batches the
toolbar, the dialogs and the scripted channel queue.
The Assets pipeline: the state the create and rename dialogs edit, and the
recorded file batches the menus, the dialogs and the scripted channel
queue.

## Responsibilities

- [`AssetDialog`]: the state the create and rename dialogs edit while one
  is open, owned by the session so it survives shell reloads.
- The open, submit and cancel helpers every entry point shares - the
  menus, the dialog windows and the scripted channel - so each action
  takes one path and logs one token set.
- The enablement predicates [`can_delete`] and [`can_write_meta`], and the
  acting functions [`delete_selection`] and [`write_meta_selection`] that
  ask them the same question.
- The file actions that queue one recorded [`EditorCommand`] batch each:
  [`queue_delete`], [`queue_write_meta`] and [`queue_move`].
- [`reveal_target`] and [`reveal_target_in`]: the absolute path a "show in
  the file manager" request opens, refused when it would leave the root.

## Design

The dialogs are egui windows drawn by the shell. File edits are
[`EditorCommand`](../editor_state/command/enum.EditorCommand.md#rustdoc-item-1112)'s asset commands: this module
queues them in [`PendingEditorCommands`], and the frame boundary applies
them and records them in the undo history. Nothing here changes the world
directly. A reveal is the only action that is not a command: it asks the
executable to open a folder, so the shell puts the path in the same queue
as a plain request.

## Module contents

### Enums
- [`AssetDialog`](enum.AssetDialog.md#rustdoc-item-13) — The asset dialog that is open, if any.
- [`CreateKind`](enum.CreateKind.md#rustdoc-item-5) — What a create dialog writes when it is confirmed.

### Functions
- [`can_delete`](fn.can_delete.md#rustdoc-item-178) — Returns whether a file tile's Delete Asset row can act on the selection: a
- [`can_write_meta`](fn.can_write_meta.md#rustdoc-item-175) — Returns whether the File menu's Write Asset Meta row can act on the
- [`cancel`](fn.cancel.md#rustdoc-item-171) — Closes the open dialog, create or rename, and returns whether one was open.
- [`close_dialog`](fn.close_dialog.md#rustdoc-item-185) — Closes the dialog and logs it under `dialog_kind`.
- [`create_collision`](fn.create_collision.md#rustdoc-item-164) — Returns the path a create would write when a file is already there, so the
- [`delete_selection`](fn.delete_selection.md#rustdoc-item-179) — Runs Delete Asset: queues the recorded delete of the selected file and
- [`drop_destination`](fn.drop_destination.md#rustdoc-item-180) — Returns where a file dragged onto `folder` goes: its own name below the
- [`is_read_only_key`](fn.is_read_only_key.md#rustdoc-item-160) — Returns whether `key` names an extension's resource tree: the extensions
- [`open_create`](fn.open_create.md#rustdoc-item-161) — Opens the create dialog with the first registered standalone type
- [`open_create_scene`](fn.open_create_scene.md#rustdoc-item-163) — Opens the create dialog for a scene, with the scene type already chosen.
- [`open_rename`](fn.open_rename.md#rustdoc-item-165) — Opens the rename dialog for the selected file, with the file's stem already
- [`queue_delete`](fn.queue_delete.md#rustdoc-item-172) — Queues the recorded delete of `path`: the file and its `.meta` sidecar.
- [`queue_move`](fn.queue_move.md#rustdoc-item-174) — Queues the recorded move of `from` to `to`.
- [`queue_write_meta`](fn.queue_write_meta.md#rustdoc-item-173) — Queues the recorded `.meta` write for `path`, which gives a sourced file the
- [`reveal_target`](fn.reveal_target.md#rustdoc-item-181) — Returns the absolute path a reveal opens, for a project-relative asset
- [`reveal_target_in`](fn.reveal_target_in.md#rustdoc-item-182) — Returns the absolute path a reveal opens, for a key that may name an
- [`scene_path`](fn.scene_path.md#rustdoc-item-168) — Returns the path a scene create writes: the dialog's folder plus the typed
- [`selected_row`](fn.selected_row.md#rustdoc-item-157) — Returns the selected asset's listing row, or `None` when no asset is
- [`submit_create`](fn.submit_create.md#rustdoc-item-166) — Runs the create dialog's submit button: queues the recorded step and closes
- [`submit_rename`](fn.submit_rename.md#rustdoc-item-170) — Runs the rename dialog's submit button: builds the new path from the typed
- [`takes_meta_write`](fn.takes_meta_write.md#rustdoc-item-177) — Returns whether the row is a file a `.meta` sidecar can be written for,
- [`write_meta_selection`](fn.write_meta_selection.md#rustdoc-item-176) — Runs Write Asset Meta: queues the recorded sidecar write for the selected
