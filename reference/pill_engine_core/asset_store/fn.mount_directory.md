<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-727"></a>

# Function `pill_engine_core::asset_store::mount_directory`

```rust
pub fn mount_directory<impl Into<PathBuf>: Into<std::path::PathBuf>>(directory: impl Into<std::path::PathBuf>);
```

Source: `engine\pill_engine_core\src\asset_store.rs:265`

Mount `directory` as the project's asset directory, replacing the previous
one. Searched after every pack.
