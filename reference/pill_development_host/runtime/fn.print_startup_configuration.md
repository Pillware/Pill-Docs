<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4225"></a>

# Function `pill_development_host::runtime::print_startup_configuration`

```rust
pub(in runtime) fn print_startup_configuration(workspace_root: &std::path::Path, project_module_config: &crate::ProjectModuleConfig);
```

Visibility: `{'restricted': {'parent': 3859, 'path': '::runtime'}}` · Source: `hosting\pill_development_host\src\runtime.rs:4032`

Print the selected backend before any build output starts streaming.

The backend is logged as its kind, the library it loads and the directory
that library is built into, so the line carries plain values.
