<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1282"></a>

# Function `pill_development_host::config::render_manifest_path`

```rust
pub(in config) fn render_manifest_path(path: &std::path::Path) -> String;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2089`

Turns a path into the text stored in a TOML string: lossy, with forward
slashes.
