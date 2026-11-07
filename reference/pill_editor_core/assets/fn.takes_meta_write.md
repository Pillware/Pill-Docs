<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-177"></a>

# Function `pill_editor_core::assets::takes_meta_write`

```rust
pub(in assets) fn takes_meta_write(row: &crate::editor_state::AssetListing) -> bool;
```

Visibility: `{'restricted': {'parent': 169, 'path': '::assets'}}` · Source: `editor\pill_editor_core\src\assets.rs:540`

Returns whether the row is a file a `.meta` sidecar can be written for,
ignoring whether its tree is read-only.

A folder has no sidecar, a standalone asset carries its own header, and a
file that already has a sidecar needs no second one. This is the per-row
half of [`can_write_meta`](fn.can_write_meta.md#rustdoc-item-175) and of [`write_meta_selection`](fn.write_meta_selection.md#rustdoc-item-176)'s refusal.
