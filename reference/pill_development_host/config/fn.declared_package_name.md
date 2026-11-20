<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1345"></a>

# Function `pill_development_host::config::declared_package_name`

```rust
pub(in config) fn declared_package_name(directory: &std::path::Path) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2247`

The package name `directory/Cargo.toml` declares, or `None` when the
directory holds no manifest or its manifest declares no package.
