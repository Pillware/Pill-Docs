<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-336"></a>

# Module `pill_engine_core::assets::database`

Source: `engine\pill_engine_core\src\assets\database.rs:1`

Every asset of a project by guid and by path, loaded or not.
An index of every asset a project holds, by guid and by path, whether or
not it is loaded: [`AssetDatabase`].

## Responsibilities

- Index each asset in a project's `res` directory by guid and by path, and
  record the type its header names and whether it is standalone
  ([`AssetRecord`]). The index is built from a directory
  ([`AssetDatabase::from_directory`]) or from a shipping pack
  ([`AssetDatabase::from_pack`]).
- Follow edits on disk one path at a time
  ([`AssetDatabase::refresh`]): a new file, a deleted one, and a file
  moved together with its `.meta`.
- Report a guid that two files claim, instead of indexing the asset twice
  ([`AssetDatabase::conflicts`]).

## Design

The [`AssetManager`](../storage/struct.AssetManager.md#rustdoc-item-77) knows which assets are loaded;
this index knows which ones exist. A reference names an asset by guid (see
[`AssetReference`](../reference/struct.AssetReference.md#rustdoc-item-404)), so resolving an asset that is
not loaded yet needs a step from its guid to its path. The import registry
takes that step ([`ImportRegistry::load_by_guid`]).

The identity rules are the importer's (`metadata.rs`): one path is
one asset, and the guid is the one its `.meta` holds (or, for a standalone
file, the one in its own header). A guid that a second path claims is
refused, not moved. The index takes only the identity out of a header -
`format_version`, `asset_type` and `guid` - and never decodes an asset's
settings, so indexing a large project costs one small YAML read per asset.
A source with no `.meta` has no guid yet and is not indexed; the write that
gives it one is a change [`AssetDatabase::refresh`] picks up.

[`ImportRegistry::load_by_guid`]: ../import_registry/struct.ImportRegistry.md#rustdoc-item-405

## Module contents

### Structs
- [`AssetDatabase`](struct.AssetDatabase.md#rustdoc-item-340) — Every asset of a project, indexed by guid and by path; see the module docs.
- [`AssetRecord`](struct.AssetRecord.md#rustdoc-item-246) — One asset the project holds, whether or not it is loaded.
- [`GuidConflict`](struct.GuidConflict.md#rustdoc-item-299) — Two paths that claim one guid. The first path keeps it; the second is not

### Functions
- [`files_under`](fn.files_under.md#rustdoc-item-403) — Every file under `root` as a `/`-separated relative path, sorted, with
- [`is_hidden_path`](fn.is_hidden_path.md#rustdoc-item-401) — Whether any part of `path` is a dot-file or a dot-directory.
- [`is_metadata_path`](fn.is_metadata_path.md#rustdoc-item-400) — Whether `path` names a `.meta` sidecar.
- [`is_standalone`](fn.is_standalone.md#rustdoc-item-399) — Whether the extension of `path` belongs to a standalone type.
- [`read_identity`](fn.read_identity.md#rustdoc-item-398) — Returns the `asset_type` and the `guid` of a header that this engine can
- [`read_record`](fn.read_record.md#rustdoc-item-396) — Builds the record for `relative_path` under `root`, or returns `None` when
- [`to_slash_path`](fn.to_slash_path.md#rustdoc-item-402) — Returns `path` with `/` separators, the form the index uses as a key.
