<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-190"></a>

# Function `pill_development_host::analytics::read_cargo_deps`

```rust
pub(crate) fn read_cargo_deps(workspace_root: &std::path::Path, crate_name: &str) -> Vec<String>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:616`

Read a crate's direct dependencies from its fingerprint JSON.

Cargo writes
`<artifact directory>/.fingerprint/<crate>-<hash>/lib-<crate>.json` for
every compiled library, whose `deps` array names each direct dependency.
Returns an empty vector when the fingerprint is missing (for example before
the first build of a fresh workspace).
