<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4112"></a>

# Function `pill_development_host::runtime::index_project_assets`

```rust
pub(in runtime) fn index_project_assets(engine: &mut pill_engine::Engine, asset_directory: &std::path::Path);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:1373`

Build the world's [`pill_engine::AssetDatabase`] from the project's asset
directory, replacing any earlier one, and log what it indexed.

A guid two files claim is logged once per file. The second file needs a
guid of its own, which a `.meta` copied along with its source does not
have.
