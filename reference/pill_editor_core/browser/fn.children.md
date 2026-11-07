<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-563"></a>

# Function `pill_editor_core::browser::children`

```rust
pub fn children<'a>(assets: &'a [crate::editor_state::AssetListing], folder: &str) -> Vec<&'a crate::editor_state::AssetListing>;
```

Source: `editor\pill_editor_core\src\browser.rs:264`

Returns the direct children of `folder`: folders first, then files, each
group in case-insensitive name order. Both panes list rows in this order.

A root's row is never a child, because the panel draws its roots at its own
level. That keeps the project's tree to the project's own content.
