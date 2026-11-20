<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-896"></a>

# Function `pill_editor_shell::shell::inspector_settings::texture_guid_for`

```rust
pub fn texture_guid_for(assets: &[AssetListing], path: &str) -> Option<String>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:1168`

Returns the guid of the listing row a path names.

The path is a listing row's key, so a module row is found the same way a
project row is. A path the listing does not hold, or a row without a guid,
answers `None`.
