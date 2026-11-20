<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-403"></a>

# Function `pill_engine_core::assets::database::files_under`

```rust
pub(in assets::database) fn files_under(root: &std::path::Path) -> Vec<String>;
```

Visibility: `{'restricted': {'parent': 336, 'path': '::assets::database'}}` · Source: `engine\pill_engine_core\src\assets\database.rs:360`

Every file under `root` as a `/`-separated relative path, sorted, with
`.meta` files and dot-files left out. A directory that cannot be read
contributes nothing.
