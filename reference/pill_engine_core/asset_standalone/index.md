<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2216"></a>

# Module `pill_engine_core::asset_standalone`

Source: `engine\pill_engine_core\src\asset_standalone.rs:1`

Assets stored as their own file in `res`, with no source file.
Assets stored as their own file in `res`, with no source file behind them.

## Responsibilities

- Define what a standalone type provides ([`StandaloneAsset`](trait.StandaloneAsset.md#rustdoc-item-1130)): the
  document written to its file, the one file extension it uses, and how to
  build the asset from that document.
- Load, reload in place and follow a move of a standalone file
  ([`AssetManager::import_standalone`](../asset/struct.AssetManager.md#rustdoc-item-1129) and its siblings). The identity
  rules match a sourced asset's: the asset is named by its path and keyed
  by the guid in its file.
- Write a new standalone file ([`render_standalone`](fn.render_standalone.md#rustdoc-item-2214)), and read or
  normalize its document as JSON for code that does not know its type.

A new standalone file's name is checked by
[`crate::asset_metadata::standalone_file_name`](../asset_metadata/fn.standalone_file_name.md#rustdoc-item-1862), so every editor's create
dialog applies the same rule.

## Design

A material or a render pass is not built from an image or a model; it is
data. Its file therefore starts with the same header a `.meta` file has -
format version, asset type, guid - and holds the asset under `asset`,
where a metadata file holds `settings`:

```json
{
  "format_version": 1,
  "asset_type": "pill_master_renderer::assets::Material",
  "guid": "5d1f0e2b9a8c4d3e7f6a5b4c3d2e1f00",
  "asset": { "shader": "...", "parameters": { "pbr_roughness": { "Scalar": 1.0 } } }
}
```

The guid lives in the file's own header, so a standalone file needs no
`.meta`; a `.meta` file remains the sidecar of a sourced asset. The type
comes from the file's extension (`helmet.material`), as it does for a
sourced asset, so the scan, the watcher and the move-following find its
type the same way.

A document refers to other assets by
[`AssetReference`](../asset_reference/struct.AssetReference.md#rustdoc-item-1302), which is
resolved when the asset is built. A reference to an asset that is not
loaded yet becomes the invalid handle, so a scan imports standalone files
after every sourced one.

## Module contents

### Traits
- [`StandaloneAsset`](trait.StandaloneAsset.md#rustdoc-item-1130) — An asset stored as its own JSON file in `res`, with no source file.

### Functions
- [`asset_name_of`](fn.asset_name_of.md#rustdoc-item-2217) — Returns `path` as an asset name, or the error an import reports for a path
- [`default_standalone_document`](fn.default_standalone_document.md#rustdoc-item-2220) — Returns the document a newly created `T` file holds, as JSON, which is
- [`document_to_json`](fn.document_to_json.md#rustdoc-item-2221) — Returns `document` as JSON, with `path` naming the asset in the error.
- [`normalize_standalone_document`](fn.normalize_standalone_document.md#rustdoc-item-2219) — Reads `document_json` as `T`'s document and returns it as JSON, with
- [`read_standalone`](fn.read_standalone.md#rustdoc-item-2215) — Returns the guid and document of the standalone file at the normalized
- [`render_standalone`](fn.render_standalone.md#rustdoc-item-2214) — Returns the bytes of a standalone file for `T`, holding `guid` and
- [`standalone_document_json`](fn.standalone_document_json.md#rustdoc-item-2218) — Returns the document of the standalone file at `path`, as JSON.

### Constants
- [`STANDALONE_BODY_FIELD`](constant.STANDALONE_BODY_FIELD.md#rustdoc-item-2204) — The header field holding a standalone file's asset.
