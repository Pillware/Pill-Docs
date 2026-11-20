<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-894"></a>

# Function `pill_editor_shell::shell::inspector_settings::reference_path`

```rust
pub fn reference_path<'a>(field: &AssetReferenceField, assets: &'a [AssetListing]) -> Option<&'a str>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:950`

Returns the listing path of the asset a reference names, when the listing
holds it: the row a picker marks as the current choice.
