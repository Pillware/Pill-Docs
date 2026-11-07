<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1267"></a>

# Function `pill_development_host::config::manifest_depends_on_crate`

```rust
pub(in config) fn manifest_depends_on_crate(manifest: &str, crate_name: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 821, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:1684`

Whether a `Cargo.toml` declares a dependency on `crate_name`.

Reads the document rather than scanning lines: a dependency may be an
inline table, a sub-table, renamed through `package = "..."`, or declared
under a target-specific table.
