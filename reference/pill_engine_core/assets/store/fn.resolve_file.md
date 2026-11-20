<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1960"></a>

# Function `pill_engine_core::assets::store::resolve_file`

```rust
pub(in assets::store) fn resolve_file(path: &std::path::Path) -> Option<std::path::PathBuf>;
```

Visibility: `{'restricted': {'parent': 1779, 'path': '::assets::store'}}` · Source: `engine\pill_engine_core\src\assets\store.rs:582`

Find `path` on the filesystem. An absolute path is used as it is. Otherwise
the search runs below the mounted directory, then each module root, then
the development fallbacks.

The fallbacks are off once [`restrict_to_packs`](fn.restrict_to_packs.md#rustdoc-item-1962) has been called, because a
shipped build reads what it was built with. An absolute path, a mounted
directory and the module roots keep working.
