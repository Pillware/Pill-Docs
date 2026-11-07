<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4544"></a>

# Function `pill_development_host::asset_browser::append_root`

```rust
pub(in asset_browser) fn append_root(world: &pill_engine::World, root_label: &str, directory: &std::path::Path, read_only: bool, hidden: &[String], entries: &mut Vec<AssetEntry>);
```

Visibility: `{'restricted': {'parent': 4460, 'path': '::asset_browser'}}` · Source: `hosting\pill_development_host\src\asset_browser.rs:131`

Walks one root and pushes its entries, naming the root and marking whether
the entries are read-only.

`hidden` names the extensions the root leaves out of its tree, such as a
module's cooked output beside its sources. The store still answers those
files by name.
