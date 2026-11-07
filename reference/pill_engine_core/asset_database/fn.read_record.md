<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1294"></a>

# Function `pill_engine_core::asset_database::read_record`

```rust
pub(in asset_database) fn read_record(root: &std::path::Path, relative_path: &str, registry: &crate::asset_import_registry::ImportRegistry) -> Option<AssetRecord>;
```

Visibility: `{'restricted': {'parent': 1241, 'path': '::asset_database'}}` · Source: `engine\pill_engine_core\src\asset_database.rs:285`

Builds the record for `relative_path` under `root`, or returns `None` when
it has no readable header.

The header is read from the file itself when its type is standalone, and
from its `.meta` otherwise.
