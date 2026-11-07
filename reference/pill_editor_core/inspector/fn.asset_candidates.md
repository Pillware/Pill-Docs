<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4980"></a>

# Function `pill_editor_core::inspector::asset_candidates`

```rust
pub fn asset_candidates<'a>(listing: &'a [crate::editor_state::AssetListing], asset_type: Option<&str>) -> Vec<&'a crate::editor_state::AssetListing>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1088`

The listing's files of a field's type, in listing order.

This is the file half of what an asset row's picker offers;
[`picker_candidates`](fn.picker_candidates.md#rustdoc-item-4978) adds the store's own assets.
