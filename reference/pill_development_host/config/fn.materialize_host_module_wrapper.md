<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-965"></a>

# Function `pill_development_host::config::materialize_host_module_wrapper`

```rust
pub(in config) fn materialize_host_module_wrapper(workspace_root: &std::path::Path, extension: &ExtensionConfig, is_renderer_module: bool) -> Result<(), pill_core::error::ConfigError>;
```

Visibility: `{'restricted': {'parent': 823, 'path': '::config'}}` · Source: `hosting\pill_development_host\src\config.rs:2584`

Writes the wrapper workspace member that builds one extension crate's
loadable artifact.

The wrapper is a generated crate at the configuration's
[`ExtensionConfig::wrapper_directory`](struct.ExtensionConfig.md#rustdoc-item-961) - the `generated/` directory of the
extension folder or the editor folder holding the crate - found by the
workspace glob. Its `cdylib` is the artifact the host loads, staged and
addressed under the extension's own name. The extension stays a plain
library inside it, so one rlib serves the module build and every project
build.

The generated manifest enables every feature the extension declares except
`default`, so its copy matches the copy projects link. The generated
`lib.rs` expands the extension's entry-point macro, and for the renderer
module also its renderer ABI macro, because a crate linked into several
artifacts cannot define the `#[no_mangle]` symbols itself.

## Errors

Returns a [`ConfigError`] when the member directory or either generated
file cannot be written.
