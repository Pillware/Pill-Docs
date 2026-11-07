<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1241"></a>

# Module `pill_engine_core::asset_database`

Source: `engine\pill_engine_core\src\asset_database.rs:1`

Every asset of a project by guid and by path, loaded or not.
An index of every asset a project holds, by guid and by path, whether or
not it is loaded: [`AssetDatabase`](struct.AssetDatabase.md#rustdoc-item-1244).

## Responsibilities

- Index each asset in a project's `res` directory by guid and by path, and
  record the type its header names and whether it is standalone
  ([`AssetRecord`](struct.AssetRecord.md#rustdoc-item-1168)). The index is built from a directory
  ([`AssetDatabase::from_directory`](struct.AssetDatabase.md#rustdoc-item-1246)) or from a shipping pack
  ([`AssetDatabase::from_pack`](struct.AssetDatabase.md#rustdoc-item-1248)).
- Follow edits on disk one path at a time
  ([`AssetDatabase::refresh`](struct.AssetDatabase.md#rustdoc-item-1250)): a new file, a deleted one, and a file
  moved together with its `.meta`.
- Report a guid that two files claim, instead of indexing the asset twice
  ([`AssetDatabase::conflicts`](struct.AssetDatabase.md#rustdoc-item-1255)).

## Design

The [`AssetManager`](../asset/struct.AssetManager.md#rustdoc-item-714) knows which assets are loaded;
this index knows which ones exist. A reference names an asset by guid (see
[`AssetReference`](../asset_reference/struct.AssetReference.md#rustdoc-item-1302)), so resolving an asset that is
not loaded yet needs a step from its guid to its path. The import registry
takes that step ([`ImportRegistry::load_by_guid`]).

The identity rules are the importer's (`asset_metadata.rs`): one path is
one asset, and the guid is the one its `.meta` holds (or, for a standalone
file, the one in its own header). A guid that a second path claims is
refused, not moved. The index takes only the identity out of a header -
`format_version`, `asset_type` and `guid` - and never decodes an asset's
settings, so indexing a large project costs one small JSON read per asset.
A source with no `.meta` has no guid yet and is not indexed; the write that
gives it one is a change [`AssetDatabase::refresh`](struct.AssetDatabase.md#rustdoc-item-1250) picks up.

[`ImportRegistry::load_by_guid`]: ../asset_import_registry/struct.ImportRegistry.md#rustdoc-item-1303

## Module contents

### Structs
- [`AssetDatabase`](struct.AssetDatabase.md#rustdoc-item-1244) — Every asset of a project, indexed by guid and by path; see the module docs.
- [`AssetRecord`](struct.AssetRecord.md#rustdoc-item-1168) — One asset the project holds, whether or not it is loaded.
- [`GuidConflict`](struct.GuidConflict.md#rustdoc-item-1205) — Two paths that claim one guid. The first path keeps it; the second is not

### Functions
- [`files_under`](fn.files_under.md#rustdoc-item-1301) — Every file under `root` as a `/`-separated relative path, sorted, with
- [`is_hidden_path`](fn.is_hidden_path.md#rustdoc-item-1299) — Whether any part of `path` is a dot-file or a dot-directory.
- [`is_metadata_path`](fn.is_metadata_path.md#rustdoc-item-1298) — Whether `path` names a `.meta` sidecar.
- [`is_standalone`](fn.is_standalone.md#rustdoc-item-1297) — Whether the extension of `path` belongs to a standalone type.
- [`read_identity`](fn.read_identity.md#rustdoc-item-1296) — Returns the `asset_type` and the `guid` of a header that this engine can
- [`read_record`](fn.read_record.md#rustdoc-item-1294) — Builds the record for `relative_path` under `root`, or returns `None` when
- [`to_slash_path`](fn.to_slash_path.md#rustdoc-item-1300) — Returns `path` with `/` separators, the form the index uses as a key.
