<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2334"></a>

# Module `pill_editor_core::editor_files`

Source: `editor\pill_editor_core\src\editor_files.rs:1`

The editor's own state documents on disk, all written the same safe way and
reported through one error type.
Reads, writes and removes the editor's own state documents on disk.

## Responsibilities

- One durability rule for the editor's JSON state files. Create the
  directory, write a temporary file beside the target, then rename it into
  place, so a crash mid-write never leaves a half-written document.
- One error type ([`FileError`]) for every read, write, parse and removal,
  whatever document it belongs to.

## Design

The documents differ - a dock layout, the preferences map, the recovery
snapshot, the open scene - so the JSON helpers are generic over `serde`
and every function takes a full path. What the documents share is the file
handling, and that is what this module holds.

Two policies are stated once instead of per call site:

- **A missing file is empty, not broken.** [`read_json`] answers `Ok(None)`
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
- [`FileError`](enum.FileError.md#rustdoc-item-2348) — What can go wrong with one of the editor's state files.

### Functions
- [`read_json`](fn.read_json.md#rustdoc-item-2384) — Reads one JSON document, or `None` when the file does not exist.
- [`remove`](fn.remove.md#rustdoc-item-2387) — Removes one document. A file that is already gone is not an error.
- [`write_bytes`](fn.write_bytes.md#rustdoc-item-2386) — Writes one document's bytes through a temporary file and a rename.
- [`write_json`](fn.write_json.md#rustdoc-item-2385) — Serializes and writes one JSON document.

### Constants
- [`TEMPORARY_FILE_EXTENSION`](constant.TEMPORARY_FILE_EXTENSION.md#rustdoc-item-2333) — The extension of the temporary file a write creates beside its target.
