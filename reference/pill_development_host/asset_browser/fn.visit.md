<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4545"></a>

# Function `pill_development_host::asset_browser::visit`

```rust
pub(in asset_browser) fn visit(directory: &std::path::Path, relative: &std::path::Path, depth: usize, visit_entry: &mut dyn FnMut(&std::path::Path, bool, usize));
```

Visibility: `{'restricted': {'parent': 4460, 'path': '::asset_browser'}}` · Source: `hosting\pill_development_host\src\asset_browser.rs:207`

Walks `directory/relative` recursively and calls `visit_entry(relative,
is_directory, depth)` for each folder and file, in the order
[`list_assets`](fn.list_assets.md#rustdoc-item-4543) promises.
