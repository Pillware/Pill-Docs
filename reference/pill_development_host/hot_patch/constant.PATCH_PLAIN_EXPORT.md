<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2353"></a>

# Constant `pill_development_host::hot_patch::PATCH_PLAIN_EXPORT`

```rust
pub(crate) const PATCH_PLAIN_EXPORT: &[u8] = b"pill_patch_resolve_plain";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:118`

Export that reports where a patched plain function lives.

Named from `PATCH_RESOLVER_EXPORT` by the same macro that generates it, and
distinct from the crate's own `pill_hot_resolve_plain` for the same reason.
