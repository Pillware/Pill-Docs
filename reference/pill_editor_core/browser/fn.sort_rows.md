<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-568"></a>

# Function `pill_editor_core::browser::sort_rows`

```rust
pub(in browser) fn sort_rows(rows: &mut [&crate::editor_state::AssetListing]);
```

Visibility: `{'restricted': {'parent': 569, 'path': '::browser'}}` · Source: `editor\pill_editor_core\src\browser.rs:359`

Sorts rows with folders first, then by name without regard to case.

The name is read from the row's key, not from its path: a module root's row
carries an empty path, so the key is the only place its name exists.
