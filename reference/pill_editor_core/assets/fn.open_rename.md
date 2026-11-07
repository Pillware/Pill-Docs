<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-165"></a>

# Function `pill_editor_core::assets::open_rename`

```rust
pub fn open_rename(dialog: &mut Option<AssetDialog>, selection: &crate::editor_state::EditorSelection, assets: &[crate::editor_state::AssetListing]);
```

Source: `editor\pill_editor_core\src\assets.rs:271`

Opens the rename dialog for the selected file, with the file's stem already
in the name field.

A folder, or a selection that names no file, gets a warning and no dialog.
