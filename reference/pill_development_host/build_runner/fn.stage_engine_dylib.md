<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-772"></a>

# Function `pill_development_host::build_runner::stage_engine_dylib`

```rust
pub(in build_runner) fn stage_engine_dylib(workspace_root: &std::path::Path);
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:1702`

Copies the module-world engine dylibs beside the hot-load copies.

Every native module, project and patch imports the engine dylibs
([`crate::native_library::ENGINE_DYLIB_STEMS`](../native_library/constant.ENGINE_DYLIB_STEMS.md#rustdoc-item-771)). The copies a host-spawned
build produces, in the private module build tree, can differ from the ones the
host binary maps from the regular target directory, because a GUI frontend
adds extra features to shared crates. The loader then gives modules their
matching copies. When the copies are identical (a plain CLI host), these
staged files stay unused and the loader keeps the host's single instances.
