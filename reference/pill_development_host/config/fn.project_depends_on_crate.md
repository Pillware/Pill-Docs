<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1266"></a>

# Function `pill_development_host::config::project_depends_on_crate`

```rust
pub(crate) fn project_depends_on_crate(workspace_root: &std::path::Path, project: &ProjectModuleConfig, crate_name: &str) -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1660`

Whether the project manifest declares a direct dependency on `crate_name`.

Reads the project's manifest again at runtime because the decision depends
on the module that just changed, which is only known during the frame loop.
A missing or unreadable manifest counts as "no dependency", so a transient
filesystem state can never force the project through an extra reload.
