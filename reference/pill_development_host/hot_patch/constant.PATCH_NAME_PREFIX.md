<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2354"></a>

# Constant `pill_development_host::hot_patch::PATCH_NAME_PREFIX`

```rust
pub(in hot_patch) const PATCH_NAME_PREFIX: &str = "pill_patch::";
```

Visibility: `{'restricted': {'parent': 1968, 'path': '::hot_patch'}}` · Source: `hosting\pill_development_host\src\hot_patch\mod.rs:128`

Prefix that separates a patch's registry entry from the crate's own.

It is required. A patch links the project's rlib, which already carries that
crate's `#[pill_hot]` descriptors, so the patch library contains both the
old and the new entry for the same function. Asking for the bare name
returns whichever one the linker put first, which can be the old address
with a matching signature hash: the patch then installs without error and
changes nothing.
