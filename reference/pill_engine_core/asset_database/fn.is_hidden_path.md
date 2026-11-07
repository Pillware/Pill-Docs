<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1299"></a>

# Function `pill_engine_core::asset_database::is_hidden_path`

```rust
pub(in asset_database) fn is_hidden_path(path: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 1241, 'path': '::asset_database'}}` · Source: `engine\pill_engine_core\src\asset_database.rs:337`

Whether any part of `path` is a dot-file or a dot-directory.

`write_beside` writes a metadata update next to its source as
`.<file>.meta.<pid>-<seq>.tmp`, and a crash can leave one of those files
behind. It holds the asset's own header, so indexing it would take the guid
away from the asset it was written for. `files_under` skips dot-files on
disk, and a pack has to skip them too.
