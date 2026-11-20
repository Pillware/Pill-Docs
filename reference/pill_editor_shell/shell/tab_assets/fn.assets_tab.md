<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-906"></a>

# Function `pill_editor_shell::shell::tab_assets::assets_tab`

```rust
pub fn assets_tab(argument_0: &mut egui::Ui, argument_1: &EditorSnapshot, argument_2: &mut ProjectBrowser, argument_3: &mut AssetTileWrites<'_>);
```

Source: `editor\pill_editor_shell\src\shell\tab_assets.rs:53`

Draws the Assets tab: Unity's project panel. A folder tree sits on the
left, and on the right the open folder's path over a grid of tiles. A
count row across the top says how many entries the listing holds. A tile
dragged onto a folder row or a folder tile moves the file into that
folder. A folder's menu, and the strip under the tiles, offer the
container menu: make an asset in that folder, or open the folder in the
file manager. A file's menu renames and deletes it.
