<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-877"></a>

# Function `pill_editor_shell_egui_editor::shell::assets_tiles::asset_icon`

```rust
pub fn asset_icon(row: &AssetListing) -> icons::Icon;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\assets_tiles.rs:333`

Returns the icon a row's tile draws: a folder icon, an asset type's icon by
its last type-name segment, or a plain file's icon by its extension.
