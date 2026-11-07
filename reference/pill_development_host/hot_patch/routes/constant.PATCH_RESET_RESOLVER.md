<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2090"></a>

# Constant `pill_development_host::hot_patch::routes::PATCH_RESET_RESOLVER`

```rust
pub(in hot_patch::routes) const PATCH_RESET_RESOLVER: &[u8] = b"pill_patch_resolve_reset";
```

Visibility: `{'restricted': {'parent': 2087, 'path': '::hot_patch::routes'}}` · Source: `hosting\pill_development_host\src\hot_patch\routes.rs:53`

Export through which a generated patch returns its own copy of a function to
the body it was compiled with.
