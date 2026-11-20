<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-957"></a>

# Function `pill_editor_shell::shell::assets_tiles::asset_icon`

```rust
pub fn asset_icon(row: &AssetListing) -> icons::Icon;
```

Source: `editor\pill_editor_shell\src\shell\assets_tiles.rs:333`

Returns the icon a row's tile draws: a folder icon, an asset type's icon by
its last type-name segment, or a plain file's icon by its extension.
