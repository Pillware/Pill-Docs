<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1283"></a>

# Function `pill_development_host::config::for_each_dependency_table_mut`

```rust
pub(in config) fn for_each_dependency_table_mut<impl FnMut(&mut Table): FnMut(&mut toml_edit::Table)>(manifest_table: &mut toml_edit::Table, visit: &mut impl FnMut(&mut toml_edit::Table));
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2096`

Visits every dependency table a generated member must carry: the three
linking tables at the top level and the same three under each
`[target.<cfg>]` table.
