<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2151"></a>

# Function `pill_engine_core::asset_metadata::settings_to_json`

```rust
pub(in asset_metadata) fn settings_to_json<T: ImportedAsset>(path: &std::path::Path, settings: &<T as >::ImportSettings) -> crate::asset::AssetLoadResult<serde_json::Value>;
```

Visibility: `{'restricted': {'parent': 1859, 'path': '::asset_metadata'}}` · Source: `engine\pill_engine_core\src\asset_metadata.rs:1073`

Returns `settings` as a JSON value, with `path` naming the failure.

The one serializer behind every entry point that reports a type's settings:
[`settings_json_for`](fn.settings_json_for.md#rustdoc-item-2149) reads them from the metadata file or the defaults,
and [`normalize_settings_json`](fn.normalize_settings_json.md#rustdoc-item-2150) round-trips a read-modify-write. Fields the
type does not declare are dropped by that round-trip, not by this
serializer.
