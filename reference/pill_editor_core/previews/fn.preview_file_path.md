<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6389"></a>

# Function `pill_editor_core::previews::preview_file_path`

```rust
pub(in previews) fn preview_file_path(listing_row: &crate::editor_state::AssetListing, asset_root: &std::path::Path) -> Option<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 6390, 'path': '::previews'}}` · Source: `editor\pill_editor_core\src\previews.rs:90`

The file a listing row's preview uses: its path below the project's asset
root, or below its own module's directory. A module's resources do not
live in the project at all.

Returns `None` when the row names a module that is not loaded. The
project's tree cannot stand in for it.
