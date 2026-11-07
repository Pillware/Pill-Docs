<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-163"></a>

# Function `pill_editor_core::assets::open_create_scene`

```rust
pub fn open_create_scene(dialog: &mut Option<AssetDialog>, selection: &crate::editor_state::EditorSelection, assets: &[crate::editor_state::AssetListing], types: &[crate::editor_state::StandaloneTypeInfo], kind: CreateKind);
```

Source: `editor\pill_editor_core\src\assets.rs:193`

Opens the create dialog for a scene, with the scene type already chosen.

It is the same window a material or a pass is created in, and the target
folder follows the selection the same way. `kind` says what confirming
writes: an empty scene (the Create menu's row) or the current world (Save
Scene As). Neither touches the world until the queued step runs, so
cancelling leaves the open scene as it was.

A project with no scene type registered gets a warning and no dialog.
