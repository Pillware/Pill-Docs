<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1350"></a>

# Function `pill_development_host::config::render_manifest_path`

```rust
pub(in config) fn render_manifest_path(path: &std::path::Path) -> String;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2490`

Turns a path into the text stored in a TOML string: lossy, with forward
slashes.
