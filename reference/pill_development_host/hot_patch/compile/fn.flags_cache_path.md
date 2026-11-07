<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1962"></a>

# Function `pill_development_host::hot_patch::compile::flags_cache_path`

```rust
pub(crate) fn flags_cache_path(workspace_root: &std::path::Path, package: &str) -> std::path::PathBuf;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:544`

Returns where a package's captured flags are cached between processes.

The file lives in the workspace's private build tree, not in the system
temporary directory. The temporary directory is shared by every checkout of
this repository on the machine, so a cache there could be replayed against
another checkout's dependency graph. That is exactly the metadata and
`TypeId` drift the rest of this subsystem prevents. Keying on the workspace
root makes a foreign cache unreachable instead of merely detectable.

Two writers share this path: the fast-patch pipeline, which captures flags
when it needs them, and [`crate::build_runner::run_build_command`](../../build_runner/fn.run_build_command.md#rustdoc-item-761), which
takes the same line out of a build it runs anyway.
