<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1271"></a>

# Function `pill_development_host::config::declares_dependency`

```rust
pub(in config) fn declares_dependency(table: &toml_edit::Table, crate_name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1719`

Whether one dependency table declares `crate_name`, directly or as the
`package` of a renamed entry.
