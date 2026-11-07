<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6696"></a>

# Module `pill_editor_core::scene_workflow`

Source: `editor\pill_editor_core\src\scene_workflow.rs:1`

The open scene: its path, guid and unsaved marker, and the file operations
behind New, Open, Save and Save As.
The editor's open scene: which `.scene` the world came from, whether it
changed since the last save, and the file operations behind New, Open, Save
and Save As.

## Responsibilities

- [`SceneSession`]: the open scene's path and guid, and the unsaved marker
  every undoable command sets. A world resource, so reloading the editor
  shell keeps the open document.
- [`new_scene`], [`open_scene`], [`write_scene`]: the scene commands behind
  New, Open and Save. Open and Save go through the engine's
  [`import_scene_document`], [`load_scene`] and [`save_scene`].

## Design

The engine owns serialization; this module owns the document's *identity* -
the path it was read from and the guid written into it. Save needs that
identity, and the scene title is built from it. Opening or starting a new
scene replaces the world, so the command history and the selection go with
it. The history's steps and the selection both name entities that the
previous document owned.

## Module contents

### Structs
- [`OpenScene`](struct.OpenScene.md#rustdoc-item-6617) — Which `.scene` file the editor's world came from: its path and its guid.
- [`SceneSession`](struct.SceneSession.md#rustdoc-item-6657) — The editor's document state: the scene file that is open and the unsaved

### Functions
- [`clear_world`](fn.clear_world.md#rustdoc-item-6698) — Destroy every entity and return how many there were. A destroy that fails
- [`default_save_path`](fn.default_save_path.md#rustdoc-item-6702) — The path a Save As defaults to: the open scene's path, or
- [`existing_guid`](fn.existing_guid.md#rustdoc-item-6695) — The guid the scene file at `path` already carries, or `None` when it cannot
- [`fresh_guid`](fn.fresh_guid.md#rustdoc-item-6697) — A fresh guid for a scene file that does not exist yet.
- [`is_document_command`](fn.is_document_command.md#rustdoc-item-6700) — Whether `command` changes which scene document is open. The scene commands
- [`mark_dirty`](fn.mark_dirty.md#rustdoc-item-6689) — Mark the document as changed since it was last saved or opened.
- [`new_scene`](fn.new_scene.md#rustdoc-item-6690) — Start an empty scene: every entity is removed, no file is open, and the
- [`open_scene`](fn.open_scene.md#rustdoc-item-6691) — Open the scene at `path`, replacing the world's entities.
- [`reset_document_state`](fn.reset_document_state.md#rustdoc-item-6699) — Forget the selection and the recorded history. Both name entities that
- [`scene_file_name`](fn.scene_file_name.md#rustdoc-item-6701) — Add the `.scene` extension to `requested_name` when it has none.
- [`write_scene`](fn.write_scene.md#rustdoc-item-6694) — Write the world to the open scene, or to `path` for a save-as.
