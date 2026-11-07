<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1259"></a>

# Function `pill_development_host::config::host_cargo_command`

```rust
pub(crate) fn host_cargo_command(packages: &[String]) -> Vec<String>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1542`

Builds the host's cargo command for one or more selected packages.

Every host-spawned build - a single extension wrapper, the native project
member, or the startup batch - assembles its command here. The order -
package selections, `--offline`, the host's profile, the optional timings
flag, the package-qualified hot-patch feature - therefore cannot drift
between a per-module build and the batch. `--offline` avoids the `~/.cargo`
package cache lock rust-analyzer can hold. The profile is explicit because
a release host loading a debug module fails inside `LoadLibrary` on
mismatched crate-metadata hashes.

The engine core's symbol names hash its features. A module built without
`hot_patch` imports names `pill_engine_core.dll` does not export, and its
own `register_system` creates no dispatch slot, so every patch is refused
with "no hot-patchable system registered". The feature is package-qualified
because one invocation may select several packages. The host's other engine
features travel through [`crate::build_runner::apply_cargo_host_overrides`](../build_runner/fn.apply_cargo_host_overrides.md#rustdoc-item-582).
