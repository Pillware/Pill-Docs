<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-157"></a>

# Function `pill_editor_core::assets::selected_row`

```rust
pub fn selected_row<'a>(selection: &crate::editor_state::EditorSelection, assets: &'a [crate::editor_state::AssetListing]) -> Option<&'a crate::editor_state::AssetListing>;
```

Source: `editor\pill_editor_core\src\assets.rs:99`

Returns the selected asset's listing row, or `None` when no asset is
selected or the snapshot no longer lists it.
