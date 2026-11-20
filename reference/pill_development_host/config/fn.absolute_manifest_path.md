<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1349"></a>

# Function `pill_development_host::config::absolute_manifest_path`

```rust
pub(in config) fn absolute_manifest_path(project_root: &std::path::Path, path: &str) -> String;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2480`

Resolves one manifest `path` value against the project root and leaves an
already-absolute path as it is.
