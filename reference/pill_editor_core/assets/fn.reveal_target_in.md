<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-182"></a>

# Function `pill_editor_core::assets::reveal_target_in`

```rust
pub fn reveal_target_in(asset_root: &std::path::Path, module_roots: &[(String, std::path::PathBuf)], path: &str) -> Result<std::path::PathBuf, String>;
```

Source: `editor\pill_editor_core\src\assets.rs:653`

Returns the absolute path a reveal opens, for a key that may name an
extension's resource.

A key under the extensions root (`extensions/<module>/<path>`) resolves
below that module's own directory, because a module's resources do not live
under the project's asset directory. Every other key resolves the way
[`reveal_target`](fn.reveal_target.md#rustdoc-item-181) does. A module that is no longer loaded is refused with a
message, so a stale row never opens a folder of some other tree.

## Errors

Returns a message naming the refusal when the module is not loaded, when the
path is absolute or climbs out of the module's roots, or when no root holds
the file. The executable logs the message instead of opening anything.
