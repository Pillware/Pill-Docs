<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-164"></a>

# Function `pill_editor_core::assets::create_collision`

```rust
pub fn create_collision(dialog: &AssetDialog, types: &[crate::editor_state::StandaloneTypeInfo], assets: &[crate::editor_state::AssetListing]) -> Option<String>;
```

Source: `editor\pill_editor_core\src\assets.rs:234`

Returns the path a create would write when a file is already there, so the
dialog can ask before it replaces one.

`None` when the dialog is not a create, when its type is missing, when the
name is missing or fails the type's naming rules, or when nothing is in the
way. Only the project's own tree is compared, because that is where the
create writes.
