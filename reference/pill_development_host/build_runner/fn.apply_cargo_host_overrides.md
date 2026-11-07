<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-582"></a>

# Function `pill_development_host::build_runner::apply_cargo_host_overrides`

```rust
pub(crate) fn apply_cargo_host_overrides(command: &mut std::process::Command, workspace_root: &std::path::Path);
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:465`

Applies the environment and argument overrides that every host-spawned
cargo build needs, whichever path starts it.

The full module-reload path and the per-function hot-patch path both run the
module's configured `cargo build`, and both must agree with the running host
binary:

- `CARGO_TARGET_DIR` points into the private module build tree, so cargo
  never has to delete a DLL the host has mapped (see
  [`crate::config::MODULE_BUILD_TARGET_DIRECTORY`](../config/constant.MODULE_BUILD_TARGET_DIRECTORY.md#rustdoc-item-3)).
- The engine features ([`host_engine_features`](fn.host_engine_features.md#rustdoc-item-569)) are passed explicitly. When
  the host was started by the dioxus CLI, or is an editor, they are instead
  reproduced by anchoring the build to the running host's own package: the
  shared dylibs' exported names hash their dependency trees' features, so a
  module built with different features cannot resolve its imports against
  them.
- A profile injected by the launcher (the dioxus CLI's `desktop-dev`) is not
  declared in the module workspaces, so the spawned build defines it as a
  profile that inherits `dev`. The profile name is part of cargo's metadata
  hash. Built-in profiles need no definition.

Only cargo builds take these overrides; `dotnet` module builds ignore them.
