<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2196"></a>

# Function `pill_development_host::hot_patch::routes::resolve_in`

```rust
pub(in hot_patch) fn resolve_in(library: &libloading::Library, lookup_name: &str) -> Result<(usize, u64), String>;
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:349`

Asks a loaded patch for one function's address and signature hash.

## Errors

Fails when the patch exports no resolver, when `lookup_name` contains an
interior NUL byte, or when the patch does not define that function.
