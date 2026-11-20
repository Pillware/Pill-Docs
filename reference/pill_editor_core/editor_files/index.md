<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2394"></a>

# Module `pill_editor_core::editor_files`

Source: `editor\pill_editor_core\src\editor_files.rs:1`

The editor's own state documents on disk, all written the same safe way and
reported through one error type.
Reads, writes and removes the editor's own state documents on disk.

## Responsibilities

- One durability rule for the editor's YAML state files. Create the
  directory, write a temporary file beside the target, then rename it into
  place, so a crash mid-write never leaves a half-written document.
- One error type ([`FileError`]) for every read, write, parse and removal,
  whatever document it belongs to.

## Design

The documents differ - a dock layout, the preferences map, the recovery
snapshot, the keybindings - so the helpers are generic over `serde` and
every function takes a full path. What the documents share is the file
handling, and that is what this module holds.

The text format is the one `pill_engine::asset_document` owns, so an editor
state file is a YAML document in the same dialect as an asset file: one
parser, one writer, one set of refusal messages.

Two policies are stated once instead of per call site:

- **A missing file is empty, not broken.** [`read_yaml`] answers `Ok(None)`
  only for `NotFound`. A document that exists and cannot be read or parsed
  is an error, never a blank slate. Folding it into an empty one would let
  the next save write a file holding only the keys it set, erasing every
  unrelated preference.
- **A rename replaces.** `std::fs::rename` maps to `MoveFileExW` with
  `MOVEFILE_REPLACE_EXISTING` on Windows and to `rename(2)` elsewhere, so it
  replaces an existing target on every platform the editor ships on. The
  two-save tests in `preferences` and `layout::persistence` check it.

## Module contents

### Enums
- [`FileError`](enum.FileError.md#rustdoc-item-2408) — What can go wrong with one of the editor's state files.

### Functions
- [`parse_yaml`](fn.parse_yaml.md#rustdoc-item-2445) — Parses one YAML document from `bytes`, without touching the filesystem.
- [`read_yaml`](fn.read_yaml.md#rustdoc-item-2444) — Reads one YAML document, or `None` when the file does not exist.
- [`remove`](fn.remove.md#rustdoc-item-2448) — Removes one document. A file that is already gone is not an error.
- [`write_bytes`](fn.write_bytes.md#rustdoc-item-2447) — Writes one document's bytes through a temporary file and a rename.
- [`write_yaml`](fn.write_yaml.md#rustdoc-item-2446) — Serializes and writes one YAML document.

### Constants
- [`TEMPORARY_FILE_EXTENSION`](constant.TEMPORARY_FILE_EXTENSION.md#rustdoc-item-2393) — The extension of the temporary file a write creates beside its target.
