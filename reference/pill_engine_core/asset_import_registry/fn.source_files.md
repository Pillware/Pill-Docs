<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1813"></a>

# Function `pill_engine_core::asset_import_registry::source_files`

```rust
pub(in asset_import_registry) fn source_files(root: &std::path::Path) -> Vec<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:1315`

Every file under `root`, as paths relative to it, sorted; metadata files
and dot-files left out. An unreadable directory contributes nothing.
