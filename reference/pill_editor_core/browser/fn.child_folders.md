<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-564"></a>

# Function `pill_editor_core::browser::child_folders`

```rust
pub fn child_folders<'a>(assets: &'a [crate::editor_state::AssetListing], folder: &str) -> Vec<&'a crate::editor_state::AssetListing>;
```

Source: `editor\pill_editor_core\src\browser.rs:278`

Returns the direct child folders of `folder`, in the order [`children`](fn.children.md#rustdoc-item-563)
lists them.
