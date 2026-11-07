<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-199"></a>

# Function `pill_assets::asset_move::metadata_path_of`

```rust
pub fn metadata_path_of(path: &std::path::Path) -> std::path::PathBuf;
```

Source: `assets\pill_assets\src\asset_move.rs:110`

Returns the metadata file path of the source at `path`.

The name is the source's full file name with `.meta` appended, so
`textures/stone.png` gives `textures/stone.png.meta`.
