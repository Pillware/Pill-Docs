<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1556"></a>

# Function `pill_editor::runner::listing_shows_asset`

```rust
pub(in runner) fn listing_shows_asset(listing: &[pill_editor_core::editor_state::AssetListing], guid: Option<&str>, name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:4087`

Whether the listing already shows the store asset `name` carries.

One asset is one row: a guid the file declares, or the path the store holds
it under. A code-built asset has neither and keeps its own row.
