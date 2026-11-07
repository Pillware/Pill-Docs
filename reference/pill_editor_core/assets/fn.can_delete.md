<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-178"></a>

# Function `pill_editor_core::assets::can_delete`

```rust
pub fn can_delete(selection: &crate::editor_state::EditorSelection, assets: &[crate::editor_state::AssetListing]) -> bool;
```

Source: `editor\pill_editor_core\src\assets.rs:556`

Returns whether a file tile's Delete Asset row can act on the selection: a
file, in a tree this editor may write.
