<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-160"></a>

# Function `pill_editor_core::assets::is_read_only_key`

```rust
pub fn is_read_only_key(assets: &[crate::editor_state::AssetListing], key: &str) -> bool;
```

Source: `editor\pill_editor_core\src\assets.rs:116`

Returns whether `key` names an extension's resource tree: the extensions
root itself, one module's root row, or anything below them.

An extension's resources are listed and inspected, never written. The
create dialog and a folder's menu ask this before they offer to create
something there; the file actions ask the row's own `read_only` flag for
the same reason. Everything under the root counts as read-only whatever
rows the listing happens to hold, so a module that has just loaded or
unloaded still never offers a write.
