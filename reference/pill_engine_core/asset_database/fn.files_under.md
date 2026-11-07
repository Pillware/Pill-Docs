<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1301"></a>

# Function `pill_engine_core::asset_database::files_under`

```rust
pub(in asset_database) fn files_under(root: &std::path::Path) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 1241, 'path': '::asset_database'}}` · Source: `engine\pill_engine_core\src\asset_database.rs:349`

Every file under `root` as a `/`-separated relative path, sorted, with
`.meta` files and dot-files left out. A directory that cannot be read
contributes nothing.
