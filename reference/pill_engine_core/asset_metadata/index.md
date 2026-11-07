<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1859"></a>

# Module `pill_engine_core::asset_metadata`

Source: `engine\pill_engine_core\src\asset_metadata.rs:1`

Metadata files beside an asset's source (`<source_file>.meta`).
Metadata files beside an asset's source, and loading an asset through one.

## Responsibilities

- Name the metadata file of a source asset ([`metadata_path_for`]): the
  source's normalized path with `.meta` appended.
- Define what an asset type needs to be loaded through its metadata
  ([`ImportedAsset`](trait.ImportedAsset.md#rustdoc-item-1117)): import settings and a decoder that takes them.
- Own the import pipeline on [`AssetManager`](../asset/struct.AssetManager.md#rustdoc-item-714): [`AssetManager::import`](../asset/struct.AssetManager.md#rustdoc-item-1114),
  [`AssetManager::reimport`](../asset/struct.AssetManager.md#rustdoc-item-1120), [`AssetManager::ensure_metadata`](../asset/struct.AssetManager.md#rustdoc-item-1124) and
  [`AssetManager::follow_move`](../asset/struct.AssetManager.md#rustdoc-item-1126).
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

The file is JSON with a small header the engine owns and the settings the
asset type owns:

```json
{
  "format_version": 1,
  "asset_type": "pill_master_renderer::assets::Texture",
  "guid": "9c0e4b7a1f2d3e4c5b6a798812345678",
  "settings": { "texture_type": "Normal" }
}
```

An asset loaded this way is named by its normalized path relative to `res`
and keyed by the guid in its metadata. One path is one asset, which is what
a project reload needs when it runs its loading code again. A guid claimed
by a second path (a source copied together with its `.meta`) is refused
rather than silently moved, because the store would otherwise rebind it.

Nothing here stores a function pointer: [`AssetManager::import`](../asset/struct.AssetManager.md#rustdoc-item-1114) is generic,
so each call is compiled into the binary that makes it and a reload has
nothing to re-point. Code that does not know an asset's type goes through
[`ImportRegistry`](../asset_import_registry/struct.ImportRegistry.md#rustdoc-item-1247), which does
store function pointers and handles the reload hazard that comes with them.

## Module contents

### Structs
- [`AssetImport`](struct.AssetImport.md#rustdoc-item-1115) — One request to [`AssetManager::import`].
- [`ImportOutcome`](struct.ImportOutcome.md#rustdoc-item-1116) — The result of a successful [`AssetManager::import`].
- [`MetadataDocument`](struct.MetadataDocument.md#rustdoc-item-2066) — The metadata file as written, holding the engine's header and then the
- [`RawHeader`](struct.RawHeader.md#rustdoc-item-2121) — What a header says, before any caller checks the type it expected.
- [`ReimportOutcome`](struct.ReimportOutcome.md#rustdoc-item-1122) — The result of a successful [`AssetManager::reimport`].
- [`StoredMetadata`](struct.StoredMetadata.md#rustdoc-item-2094) — What a metadata file says, once checked against the asset type.

### Enums
- [`AssetImportError`](enum.AssetImportError.md#rustdoc-item-829) — Why [`AssetManager::import`] did not load an asset.
- [`MetadataPolicy`](enum.MetadataPolicy.md#rustdoc-item-1392) — What [`AssetManager::import`] does when an asset has no metadata file yet.
- [`MetadataSource`](enum.MetadataSource.md#rustdoc-item-1310) — Where an imported asset's guid and settings came from.

### Traits
- [`ImportedAsset`](trait.ImportedAsset.md#rustdoc-item-1117) — An asset built from a source file in `res`, with import settings that can

### Functions
- [`checked_relative`](fn.checked_relative.md#rustdoc-item-1863) — Checks that `path` stays inside the asset directory and returns it as a
- [`display_guid`](fn.display_guid.md#rustdoc-item-2061) — A guid for an error message, or "none".
- [`is_metadata_file`](fn.is_metadata_file.md#rustdoc-item-1858) — Whether `name` is itself a metadata file.
- [`metadata_path_for`](fn.metadata_path_for.md#rustdoc-item-1857) — The metadata file for the source asset at `source_path`, relative to the
- [`normalize_settings_json`](fn.normalize_settings_json.md#rustdoc-item-2150) — Reads `settings_document` as `T`'s import settings and writes it back,
- [`parse_header`](fn.parse_header.md#rustdoc-item-2145) — Check the header every asset file shares and return its guid and the value
- [`parse_metadata`](fn.parse_metadata.md#rustdoc-item-2118) — Parse a metadata file for `T`.
- [`read_header`](fn.read_header.md#rustdoc-item-1295) — Reads the header that a `.meta` sidecar and a standalone asset share, and
- [`render_metadata`](fn.render_metadata.md#rustdoc-item-2148) — Returns the bytes of a metadata file for `T` holding `guid` and `settings`.
- [`same_settings`](fn.same_settings.md#rustdoc-item-2147) — Whether two settings values are the same, compared through their JSON form
- [`settings_json_for`](fn.settings_json_for.md#rustdoc-item-2149) — Returns the import settings `T` would use for the source at `path`, as
- [`settings_to_json`](fn.settings_to_json.md#rustdoc-item-2151) — Returns `settings` as a JSON value, with `path` naming the failure.
- [`standalone_file_name`](fn.standalone_file_name.md#rustdoc-item-1862) — The file name a new asset called `name` gets with `extension`: the name

### Constants
- [`INVALID_CHARACTERS`](constant.INVALID_CHARACTERS.md#rustdoc-item-1861) — Characters Windows refuses in a file name.
- [`METADATA_EXTENSION`](constant.METADATA_EXTENSION.md#rustdoc-item-1855) — The extension every metadata file carries, appended to its source's name.
- [`METADATA_FORMAT_VERSION`](constant.METADATA_FORMAT_VERSION.md#rustdoc-item-1856) — The metadata format version this engine writes, and the newest one it
- [`RESERVED_NAMES`](constant.RESERVED_NAMES.md#rustdoc-item-1860) — Base names Windows refuses, whatever the extension.
