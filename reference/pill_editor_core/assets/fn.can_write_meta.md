<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-175"></a>

# Function `pill_editor_core::assets::can_write_meta`

```rust
pub fn can_write_meta(selection: &crate::editor_state::EditorSelection, assets: &[crate::editor_state::AssetListing]) -> bool;
```

Source: `editor\pill_editor_core\src\assets.rs:550`

Returns whether the File menu's Write Asset Meta row can act on the
selection: a sourced file without a sidecar, in a tree this editor may
write.

The menu row and [`write_meta_selection`](fn.write_meta_selection.md#rustdoc-item-176) read this one answer, so a row
the menu enables is never a write that function refuses.
