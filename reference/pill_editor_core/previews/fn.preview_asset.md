<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6387"></a>

# Function `pill_editor_core::previews::preview_asset`

```rust
pub fn preview_asset(listing_row: &crate::editor_state::AssetListing, asset_root: &std::path::Path) -> Option<pill_renderer_api::PreviewAsset>;
```

Source: `editor\pill_editor_core\src\previews.rs:62`

The preview a listing row asks for, when its type is a texture, a material
or a mesh.

Returns `None` for every other type.

A texture and a mesh are named by their file, below the root they come
from. A project may load such an asset under a name of its own or not load
it at all, so the file is what the renderer decodes. A material is named by
the guid the listing holds for it.
