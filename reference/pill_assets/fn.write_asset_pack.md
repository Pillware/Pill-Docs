<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-294"></a>

# Function `pill_assets::write_asset_pack`

```rust
pub fn write_asset_pack(source: &std::path::Path, pack_path: &std::path::Path) -> Result<Vec<std::path::PathBuf>, CookError>;
```

Source: `assets\pill_assets\src\lib.rs:424`

Write every file below `source` into one asset pack at `pack_path`, and
return the packed files for a build script to report to cargo.

This is a shorthand for [`write_asset_pack_with_roots`](fn.write_asset_pack_with_roots.md#rustdoc-item-293) with no module
roots: a project with no module resources beside it packs only its own
`res`.

## Errors

Returns the same errors as [`write_asset_pack_with_roots`](fn.write_asset_pack_with_roots.md#rustdoc-item-293).
