<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-891"></a>

# Function `pill_editor_shell::shell::inspector_settings::reference_candidates`

```rust
pub fn reference_candidates<'a>(assets: &'a [AssetListing], target: &str) -> Vec<&'a AssetListing>;
```

Source: `editor\pill_editor_shell\src\shell\inspector_settings.rs:923`

Returns the listing rows a reference's picker offers: the assets whose type
is the one the registry named for the field.

Only the listing's files are returned. [`reference_picker`](fn.reference_picker.md#rustdoc-item-890) adds the store's
own assets beside them.
