<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2205"></a>

# Function `pill_development_host::hot_patch::routes::reset_everywhere`

```rust
pub(in hot_patch) fn reset_everywhere(targets: &[(&str, &crate::native_library::NativeLibrary)], patches: &[LoadedPatch], qualified: &str) -> Result<(), String>;
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:782`

Returns one function to its own body in every image that declares it.

The counterpart of [`install_everywhere`](fn.install_everywhere.md#rustdoc-item-2199) for a rollback to generation zero.
A plain function has one baseline per artifact, so each artifact is asked to
empty its own slot instead of being handed an address from another one.

## Errors

Fails when a copy cannot be reset, and when no copy declares the function.
