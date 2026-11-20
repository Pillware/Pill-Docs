<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2276"></a>

# Function `pill_development_host::hot_patch::routes::resolve_patch_address`

```rust
pub(in hot_patch) fn resolve_patch_address(library: &libloading::Library) -> Result<usize, String>;
```

Visibility: `{'restricted': {'parent': 2042, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:612`

Asks a loaded prologue patch where its replacement body lives.

## Errors

Fails when the patch exports no address symbol, or reports a null address.
