<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-629"></a>

# Function `pill_csharp_bridge::backend::shipped_or_baked`

```rust
pub(in backend) fn shipped_or_baked(workspace_root: &std::path::Path, baked_relative_dir: &str, file_name: &str) -> std::path::PathBuf;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:547`

Resolves one managed artifact (a runtime assembly, its `runtimeconfig.json`,
or the project assembly / AOT library) shipped next to the host executable,
falling back to the source-tree location the generated bundle baked in.

A shipping bundle is self-contained: every managed file the host needs is
copied into the same dated output folder as the executable, so a shipped
build prefers `current_exe()`'s directory and runs on any machine with no
engine source tree present. A developer run straight from `cargo run` has no
such files next to its binary, so the `workspace_root`-relative path is the
fallback it ends up using.
