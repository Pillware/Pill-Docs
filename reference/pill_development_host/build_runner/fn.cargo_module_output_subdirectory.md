<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-571"></a>

# Function `pill_development_host::build_runner::cargo_module_output_subdirectory`

```rust
pub(in build_runner) fn cargo_module_output_subdirectory() -> String;
```

Visibility: `{'restricted': {'parent': 545, 'path': '::build_runner'}}` · Source: `hosting\pill_development_host\src\build_runner.rs:200`

The directory, relative to the workspace root, where a host-spawned build
writes the artifacts it just compiled.

Every cargo build the host spawns uses a `CARGO_TARGET_DIR` inside the
private module build tree ([`crate::config::MODULE_BUILD_TARGET_DIRECTORY`](../config/constant.MODULE_BUILD_TARGET_DIRECTORY.md#rustdoc-item-3)).
It never writes to the shared `target/<profile>` that the running binary
maps its engine dylibs from: a GUI frontend's module build needs a
different engine variant than the host runs, and rewriting that shared slot
would make cargo delete a DLL the host has loaded. The artifacts are then
copied into the module's private hot-load directory.
