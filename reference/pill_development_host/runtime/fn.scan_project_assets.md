<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4110"></a>

# Function `pill_development_host::runtime::scan_project_assets`

```rust
pub(in runtime) fn scan_project_assets(engine: &mut pill_engine::Engine, asset_directory: &std::path::Path);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1329`

Import every known source under `asset_directory` through the world's
import registry, writing missing metadata files, and log what it did.

A failed asset is logged and skipped rather than failing the startup. The
scan is a convenience on top of the project's own loading code, which
reports its own errors for the assets it actually needs.
