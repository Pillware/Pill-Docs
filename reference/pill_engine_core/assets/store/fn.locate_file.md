<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1967"></a>

# Function `pill_engine_core::assets::store::locate_file`

```rust
pub fn locate_file(path: &std::path::Path) -> Option<std::path::PathBuf>;
```

Source: `engine\pill_engine_core\src\assets\store.rs:651`

The filesystem path the asset at `path` resolves to, or `None` when the
asset is packed only or missing.

Resolves exactly as [`read`](fn.read.md#rustdoc-item-1387) does after the packs: as is when absolute,
else below the mounted directory, the module roots and the development
fallbacks.
