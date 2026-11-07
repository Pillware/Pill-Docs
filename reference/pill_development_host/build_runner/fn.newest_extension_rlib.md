<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-773"></a>

# Function `pill_development_host::build_runner::newest_extension_rlib`

```rust
pub(crate) fn newest_extension_rlib(build_directory: &std::path::Path, package_name: &str) -> Option<std::path::PathBuf>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\build_runner.rs:1794`

Returns the newest rlib cargo wrote for `package_name` into
`build_directory`.

A wrapper build compiles the extension as a dependency, so its rlib sits under
the build's `deps` directory. It is either metadata-hashed or in the unhashed
workspace-member slot, whichever this cargo version uses, and some
configurations also leave a copy in the profile root. The host stages the
newest one, which the last build that compiled the crate produced; a patch
links it to reach the module's types. Returns `None` when the build wrote
none, which leaves the per-function fast path idle for that module.
