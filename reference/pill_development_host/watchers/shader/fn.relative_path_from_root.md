<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4374"></a>

# Function `pill_development_host::watchers::shader::relative_path_from_root`

```rust
pub(in watchers::shader) fn relative_path_from_root(root: &std::path::Path, path: &std::path::Path) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 4305, 'path': '::watchers::shader'}}` · Source: `hosting\pill_development_host\src\watchers\shader.rs:266`

Returns `path` relative to `root`, using `/` as the separator, in the form
the data crate's shader records use.

Returns `None` when `path` is outside `root`.
