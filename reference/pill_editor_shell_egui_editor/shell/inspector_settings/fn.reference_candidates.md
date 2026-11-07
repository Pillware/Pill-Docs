<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-811"></a>

# Function `pill_editor_shell_egui_editor::shell::inspector_settings::reference_candidates`

```rust
pub fn reference_candidates<'a>(assets: &'a [AssetListing], target: &str) -> Vec<&'a AssetListing>;
```

Source: `extensions\pill_editor_shell_egui\pill_editor_shell_egui_editor\src\shell\inspector_settings.rs:925`

Returns the listing rows a reference's picker offers: the assets whose type
is the one the registry named for the field.

Only the listing's files are returned. [`reference_picker`](fn.reference_picker.md#rustdoc-item-810) adds the store's
own assets beside them.
