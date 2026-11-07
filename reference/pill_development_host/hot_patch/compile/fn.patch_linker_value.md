<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1916"></a>

# Function `pill_development_host::hot_patch::compile::patch_linker_value`

```rust
pub(in hot_patch::compile) fn patch_linker_value(codegen_value: &str) -> String;
```

Visibility: `{'restricted': {'parent': 1910, 'path': '::hot_patch::compile'}}` · Source: `hosting\pill_development_host\src\hot_patch\compile.rs:598`

Returns the linker value the patch is built with, given the one cargo
recorded.

Every `-C` value other than `linker=` is returned unchanged, and so is a
`linker=` that already names an LLD.

The workspace asks for `rust-lld` (`modules/.cargo/config.toml`), but the
editor launcher forces `link.exe` for the whole dx session, whose linker
proxy cannot run LLD. The patch is not linked by dx - the host runs `rustc`
itself - so the captured flag does not apply to it.

The choice only affects the ephemeral patch image. Both linkers consume the
same objects and import libraries, and a linker that fails refuses the patch
rather than producing a wrong one.
