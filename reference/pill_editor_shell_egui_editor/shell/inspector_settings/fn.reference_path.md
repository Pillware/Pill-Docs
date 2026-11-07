<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-814"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::reference_path`

```rust
pub fn reference_path<'a>(field: &AssetReferenceField, assets: &'a [AssetListing]) -> Option<&'a str>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:952`

Returns the listing path of the asset a reference names, when the listing
holds it: the row a picker marks as the current choice.
