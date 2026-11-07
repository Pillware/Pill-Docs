<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-161"></a>

# Module `pill_assets::asset_move`

Source: `assets\pill_assets\src\asset_move.rs:1`

Moving a source asset and its metadata file as one operation.
Moving a source asset together with its metadata file.

## Responsibilities

- Move a source file and its `<file>.meta` metadata file as one operation
  ([`move_asset`](fn.move_asset.md#rustdoc-item-172)), so the guid stored in the metadata follows the source.
- Refuse a move that would overwrite anything, that asks to move a metadata
  file itself, or whose source does not exist.

## Design

A source moved without its `.meta` loses its guid. The next import writes a
new guid into a new `.meta` file beside it, and every saved reference to the
old guid stops resolving. This is the one supported way to rename an asset.
The editor's asset commands call it instead of moving files themselves.

The source moves first and the metadata second. If the second rename fails,
the first one is undone, so the two files are not left apart on purpose. A
crash between the two renames can still separate them. The dev host's
watcher and the `test_asset_metadata.py` check are what notice that.

## Module contents

### Enums
- [`MoveAssetError`](enum.MoveAssetError.md#rustdoc-item-173) — Why [`move_asset`] did not move anything.

### Functions
- [`metadata_path_of`](fn.metadata_path_of.md#rustdoc-item-199) — Returns the metadata file path of the source at `path`.
- [`move_asset`](fn.move_asset.md#rustdoc-item-172) — Moves the source asset at `source_path` to `target_path`, together with its

### Constants
- [`METADATA_SUFFIX`](constant.METADATA_SUFFIX.md#rustdoc-item-160) — The suffix a metadata file adds to its source's full file name.
