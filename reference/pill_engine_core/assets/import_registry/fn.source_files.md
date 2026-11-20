<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-941"></a>

# Function `pill_engine_core::assets::import_registry::source_files`

```rust
pub(in assets::import_registry) fn source_files(root: &std::path::Path) -> Vec<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 425, 'path': '::assets::import_registry'}}` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:1321`

Every file under `root`, as paths relative to it, sorted; metadata files
and dot-files left out. An unreadable directory contributes nothing.
