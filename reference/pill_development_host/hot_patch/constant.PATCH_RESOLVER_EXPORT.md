<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2352"></a>

# Constant `pill_development_host::hot_patch::PATCH_RESOLVER_EXPORT`

```rust
pub(crate) const PATCH_RESOLVER_EXPORT: &[u8] = b"pill_patch_resolve";
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:112`

Export a generated patch carries so the host can find its new function.

Deliberately NOT `pill_hot_resolve`: a patch links the patched crate's rlib
to reach its types, and that rlib already exports that symbol. Two
`#[no_mangle]` definitions of one name in a single artifact is a link error.
