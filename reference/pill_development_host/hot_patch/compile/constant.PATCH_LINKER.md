<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1917"></a>

# Constant `pill_development_host::hot_patch::compile::PATCH_LINKER`

```rust
pub(in hot_patch::compile) const PATCH_LINKER: &str = "rust-lld";
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:106`

The linker [`patch_linker_value`](fn.patch_linker_value.md#rustdoc-item-1916) uses in place of a recorded linker that
is not LLD.

rustc finds `rust-lld` in the active toolchain's sysroot
(`lib/rustlib/<target>/bin`), so nothing has to be installed and a
toolchain switch is followed. It is also the linker `modules/.cargo/config.toml`
asks every non-dx build for the MSVC target in this repository to use.
