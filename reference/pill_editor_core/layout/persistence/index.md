<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7232"></a>

# Module `pill_editor_core::layout::persistence`

Visibility: `{'restricted': {'parent': 7229, 'path': '::layout'}}` · Source: `editor\pill_editor_core\src\layout\persistence.rs:1`

Loading and saving the dock layout, with a schema version.

## Responsibilities

- Load the saved dock, falling back to the default for a document this
  build cannot read.
- Write without destroying the previous file when a save goes wrong.
- Own [`layout_directory`](fn.layout_directory.md#rustdoc-item-7277), where the editor's state files live.

## Design

The document is the whole [`EditorDock`](../dock/struct.EditorDock.md#rustdoc-item-7168) with a schema version field.
Loading upgrades a document the migration list has an entry for and
replaces every other one with the default layout, so a stale or unreadable
file never stops the editor from opening. Writes go through
[`crate::editor_files::write_bytes`](../../editor_files/fn.write_bytes.md#rustdoc-item-2447), which stages a temporary file and
renames it over the target.

## Module contents

### Enums
- [`LayoutError`](enum.LayoutError.md#rustdoc-item-4063) — A saved dock document the layout model refuses.

### Functions
- [`append_beside`](fn.append_beside.md#rustdoc-item-7274) — Append `tab` to the leaf that holds `anchor` (the tab group it is docked
- [`editor_state_directory`](fn.editor_state_directory.md#rustdoc-item-7278) — The per-user directory that editor state belongs in.
- [`layout_directory`](fn.layout_directory.md#rustdoc-item-7277) — The directory the editor keeps its state files in: the dock layout, the
- [`load_from_path`](fn.load_from_path.md#rustdoc-item-7273) — Load the dock document at `path`, falling back to the default on any
- [`load_or_default`](fn.load_or_default.md#rustdoc-item-4111) — Load the saved dock, falling back to the default on any invalid document.
- [`migrate`](fn.migrate.md#rustdoc-item-7272) — Upgrade an older document in place, returning the version it came from;
- [`reset_layout`](fn.reset_layout.md#rustdoc-item-7275) — Log that the document at `path` was replaced, and the reason it was.
- [`save`](fn.save.md#rustdoc-item-4110) — Save `dock` to the layout directory.
- [`save_to_path`](fn.save_to_path.md#rustdoc-item-7276) — Write `dock` as a YAML document at `path`, replacing the file there.

### Constants
- [`APPLICATION_DIRECTORY`](constant.APPLICATION_DIRECTORY.md#rustdoc-item-7231) — The application directory inside the per-user state directory.
- [`LAYOUT_FILE`](constant.LAYOUT_FILE.md#rustdoc-item-7233) — The dock document's file name in the layout directory.
- [`LAYOUT_SCHEMA_VERSION`](constant.LAYOUT_SCHEMA_VERSION.md#rustdoc-item-7230) — The schema of the dock-layout document this build writes and accepts.
