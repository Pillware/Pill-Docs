<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1268"></a>

# Function `pill_development_host::config::linking_dependency_tables`

```rust
pub(in config) fn linking_dependency_tables(document: &toml_edit::DocumentMut) -> Vec<&toml_edit::Table>;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1695`

Every dependency table in `document`: the three linking tables at the top
level, and the same three under each `[target.<cfg>]` table.
