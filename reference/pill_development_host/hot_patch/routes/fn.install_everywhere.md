<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2199"></a>

# Function `pill_development_host::hot_patch::routes::install_everywhere`

```rust
pub(in hot_patch) fn install_everywhere(targets: &[(&str, &crate::native_library::NativeLibrary)], patches: &[LoadedPatch], qualified: &str, address: usize, signature: &str, previous: Option<(usize, &str)>) -> Result<usize, String>;
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:501`

Offers one replacement to every loaded image, and reports how many took it.

A crate linked into several artifacts is compiled into each of them, so the
project DLL runs its own embedded copy of a module it depends on. Installing
only into the module's own DLL would leave that copy running the old code,
which is what would otherwise force a cascading project reload.

`previous` is what those copies are running now. If one copy refuses, the
copies already redirected are put back on it. `None` means generation zero,
so each copy belongs on its own body.

## Errors

Fails when a copy refuses the replacement, and when no copy declares the
function at all. The message names the refusing copy and the copies already
redirected.
