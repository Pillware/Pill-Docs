<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4978"></a>

# Function `pill_editor_core::inspector::picker_candidates`

```rust
pub fn picker_candidates<'a>(listing: &'a [crate::editor_state::AssetListing], engine_assets: &'a [crate::editor_state::EngineAsset], asset_type: Option<&str>) -> (Vec<&'a crate::editor_state::AssetListing>, Vec<&'a crate::editor_state::EngineAsset>);
```

Source: `editor\pill_editor_core\src\inspector.rs:1058`

The rows a picker offers for `asset_type`.

The listing's files of the type come first, then the store's own assets of
that type - the ones built in code, which a directory walk cannot find.
Both sides compare the type name's last segment, so a module's spelling of
a type and the renderer's agree however each was registered. A field
without a recorded type offers nothing, rather than every asset of every
type.
