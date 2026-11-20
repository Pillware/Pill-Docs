<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1354"></a>

# Function `pill_development_host::config::declared_editor_frontend`

```rust
pub(in config) fn declared_editor_frontend(directory: &std::path::Path) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2675`

The editor frontend a crate's manifest tags itself for, if any.

`editor_frontend = "<name>"` under `[package.metadata.pill]`. Text-scanned
rather than parsed, so the host gains no TOML dependency for one string.
