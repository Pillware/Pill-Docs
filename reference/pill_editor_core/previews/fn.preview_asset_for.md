<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6391"></a>

# Function `pill_editor_core::previews::preview_asset_for`

```rust
pub fn preview_asset_for<'a, impl IntoIterator<Item = &'a AssetListing>: IntoIterator<Item = _>>(asset_listings: impl IntoIterator<Item = _>, listing_key: &str, asset_root: &std::path::Path) -> Option<pill_renderer_api::PreviewAsset>;
```

Source: `editor\pill_editor_core\src\previews.rs:106`

The preview of the listing row that `listing_key` names.

`listing_key` is what the panel names a row by. It is the path for the
project's own tree, prefixed with the extensions root for a module's file.
That way, a module's texture and a project file that share a relative path
cannot be confused.
