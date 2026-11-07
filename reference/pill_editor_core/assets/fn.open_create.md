<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-161"></a>

# Function `pill_editor_core::assets::open_create`

```rust
pub fn open_create(dialog: &mut Option<AssetDialog>, selection: &crate::editor_state::EditorSelection, assets: &[crate::editor_state::AssetListing], types: &[crate::editor_state::StandaloneTypeInfo]);
```

Source: `editor\pill_editor_core\src\assets.rs:134`

Opens the create dialog with the first registered standalone type
selected.

The target folder follows the selection: a selected folder is the target, a
selected file's folder is, and with nothing selected it is the root. A
target inside a module's read-only resource tree is refused with a warning,
and the dialog stays closed.
