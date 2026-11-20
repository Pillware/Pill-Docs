<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-958"></a>

# Function `pill_editor_shell::shell::assets_tiles::asset_type_icon`

```rust
pub fn asset_type_icon(asset_type: &str) -> icons::Icon;
```

Source: `editor\pill_editor_shell\src\shell\assets_tiles.rs:356`

Returns the icon for an asset type, matched by its last type-name segment. A
tile of that type and an Inspector asset row both draw it.
