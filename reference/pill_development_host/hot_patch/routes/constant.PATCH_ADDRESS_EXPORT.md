<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2086"></a>

# Constant `pill_development_host::hot_patch::routes::PATCH_ADDRESS_EXPORT`

```rust
pub(in hot_patch::routes) const PATCH_ADDRESS_EXPORT: &[u8] = b"pill_patch_address";
```

Visibility: `{'restricted': {'parent': 2087, 'path': '::hot_patch::routes'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:41`

Export a generated prologue patch carries, through which the host finds the
patch's replacement body.

The patch declares this one export rather than a registry: it replaces
exactly one function, so there is nothing to look up by name.
