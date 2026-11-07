<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1857"></a>

# Function `pill_engine_core::asset_metadata::metadata_path_for`

```rust
pub fn metadata_path_for(source_path: &std::path::Path) -> Option<std::path::PathBuf>;
```

Source: `engine\pill_engine_core\src\asset_metadata.rs:87`

The metadata file for the source asset at `source_path`, relative to the
project's asset directory, or `None` when `source_path` cannot have one.

The path is normalized the way an asset name is (`/`-separated, `.`
removed, by the same rules as the asset store's pack key), and `.meta` is
appended to the full file name: `textures\helmet.jpg` gives
`textures/helmet.jpg.meta`.

Returns `None` for a path that does not normalize (an absolute path, or one
that climbs out with `..`), and for one that is already a metadata file.
