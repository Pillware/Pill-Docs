<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2408"></a>

# Function `pill_engine_core::asset_store::resolve_file`

```rust
pub(in asset_store) fn resolve_file(path: &std::path::Path) -> Option<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:582`

Find `path` on the filesystem. An absolute path is used as it is. Otherwise
the search runs below the mounted directory, then each module root, then
the development fallbacks.

The fallbacks are off once [`restrict_to_packs`](fn.restrict_to_packs.md#rustdoc-item-2410) has been called, because a
shipped build reads what it was built with. An absolute path, a mounted
directory and the module roots keep working.
