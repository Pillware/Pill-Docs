<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-988"></a>

# Module `pill_engine_core::assets::metadata`

Source: `engine\pill_engine_core\src\assets\metadata.rs:1`

Metadata files beside an asset's source (`<source_file>.meta`).
Metadata files beside an asset's source, and loading an asset through one.

## Responsibilities

- Name the metadata file of a source asset ([`metadata_path_for`]): the
  source's normalized path with `.meta` appended.
- Define what an asset type needs to be loaded through its metadata
  ([`ImportedAsset`]): import settings and a decoder that takes them.
- Own the import pipeline on [`AssetManager`]: [`AssetManager::import`],
  [`AssetManager::reimport`], [`AssetManager::ensure_metadata`] and
  [`AssetManager::follow_move`].
- Hold the file-name rule every editor's create dialog shares
  ([`standalone_file_name`]): which base names and characters Windows
  refuses. It lives here so every editor builds the same name, and a
  standalone asset file is the usual user.
- Hold the path check every tool-side asset path goes through
  ([`checked_relative`]): relative, inside the asset directory, and not
  empty.

## Design

A source file in a project's `res` directory (`textures/helmet.jpg`) can
carry a metadata file beside it. It holds what the source does not say for
itself: the asset's stable guid and its import settings. It never holds
the decoded payload. The metadata name keeps the source's extension
instead of replacing it, so `helmet.png` and `helmet.obj` get different
metadata files, and a `.meta` file is never an asset itself.

The file is YAML with a small header the engine owns and the settings the
asset type owns:

```yaml
format_version: 1
asset_type: pill_master_renderer::Texture
guid: 9c0e4b7a1f2d3e4c5b6a798812345678
settings:
  texture_type: Normal
```

An asset loaded this way is named by its normalized path relative to `res`
and keyed by the guid in its metadata. One path is one asset, which is what
a project reload needs when it runs its loading code again. A guid claimed
by a second path (a source copied together with its `.meta`) is refused
rather than silently moved, because the store would otherwise rebind it.

Nothing here stores a function pointer: [`AssetManager::import`] is generic,
so each call is compiled into the binary that makes it and a reload has
nothing to re-point. Code that does not know an asset's type goes through
[`ImportRegistry`](../import_registry/struct.ImportRegistry.md#rustdoc-item-344), which does
store function pointers and handles the reload hazard that comes with them.

## Module contents

### Structs
- [`AssetImport`](struct.AssetImport.md#rustdoc-item-1039) — One request to [`AssetManager::import`].
- [`ImportOutcome`](struct.ImportOutcome.md#rustdoc-item-103) — The result of a successful [`AssetManager::import`].
- [`MetadataDocument`](struct.MetadataDocument.md#rustdoc-item-1212) — The metadata file as written, holding the engine's header and then the
- [`RawHeader`](struct.RawHeader.md#rustdoc-item-1268) — What a header says, before any caller checks the type it expected.
- [`ReimportOutcome`](struct.ReimportOutcome.md#rustdoc-item-1139) — The result of a successful [`AssetManager::reimport`].
- [`StoredMetadata`](struct.StoredMetadata.md#rustdoc-item-1241) — What a metadata file says, once checked against the asset type.

### Enums
- [`AssetImportError`](enum.AssetImportError.md#rustdoc-item-510) — Why [`AssetManager::import`] did not load an asset.
- [`MetadataPolicy`](enum.MetadataPolicy.md#rustdoc-item-501) — What [`AssetManager::import`] does when an asset has no metadata file yet.
- [`MetadataSource`](enum.MetadataSource.md#rustdoc-item-105) — Where an imported asset's guid and settings came from.

### Traits
- [`ImportedAsset`](trait.ImportedAsset.md#rustdoc-item-94) — An asset built from a source file in `res`, with import settings that can

### Functions
- [`checked_relative`](fn.checked_relative.md#rustdoc-item-992) — Checks that `path` stays inside the asset directory and returns it as a
- [`display_guid`](fn.display_guid.md#rustdoc-item-1207) — A guid for an error message, or "none".
- [`is_metadata_file`](fn.is_metadata_file.md#rustdoc-item-987) — Whether `name` is itself a metadata file.
- [`metadata_path_for`](fn.metadata_path_for.md#rustdoc-item-986) — The metadata file for the source asset at `source_path`, relative to the
- [`normalize_settings_json`](fn.normalize_settings_json.md#rustdoc-item-1298) — Reads `settings_document` as `T`'s import settings and writes it back,
- [`parse_header`](fn.parse_header.md#rustdoc-item-1292) — Check the header every asset file shares and return its guid and the value
- [`parse_metadata`](fn.parse_metadata.md#rustdoc-item-1265) — Parse a metadata file for `T`.
- [`read_header`](fn.read_header.md#rustdoc-item-397) — Reads the header that a `.meta` sidecar and a standalone asset share, and
- [`render_metadata`](fn.render_metadata.md#rustdoc-item-1295) — Returns the bytes of a metadata file for `T` holding `guid` and `settings`.
- [`same_settings`](fn.same_settings.md#rustdoc-item-1294) — Whether two settings values are the same, compared through their JSON form
- [`settings_json_for`](fn.settings_json_for.md#rustdoc-item-1296) — Returns the import settings `T` would use for the source at `path`, as
- [`settings_to_json`](fn.settings_to_json.md#rustdoc-item-1299) — Returns `settings` as a JSON value, with `path` naming the failure.
- [`standalone_file_name`](fn.standalone_file_name.md#rustdoc-item-991) — The file name a new asset called `name` gets with `extension`: the name

### Constants
- [`INVALID_CHARACTERS`](constant.INVALID_CHARACTERS.md#rustdoc-item-990) — Characters Windows refuses in a file name.
- [`METADATA_EXTENSION`](constant.METADATA_EXTENSION.md#rustdoc-item-984) — The extension every metadata file carries, appended to its source's name.
- [`METADATA_FORMAT_VERSION`](constant.METADATA_FORMAT_VERSION.md#rustdoc-item-985) — The metadata format version this engine writes, and the newest one it
- [`RESERVED_NAMES`](constant.RESERVED_NAMES.md#rustdoc-item-989) — Base names Windows refuses, whatever the extension.
