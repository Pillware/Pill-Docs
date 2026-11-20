<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1339"></a>

# Function `pill_development_host::config::extension_crate_locations`

```rust
pub(crate) fn extension_crate_locations(extensions_root: &std::path::Path) -> Vec<ExtensionCrateLocation>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:2095`

Returns every extension crate under `extensions_root`, in folder order.

A folder holds its extension in `modules/runtime` and its editor part in
`modules/editor`; the master renderer's `modules/runtime` groups two
crates, one per child directory. A crate is a directory holding a
`Cargo.toml` that declares a package name. Folders starting with `_` are
workspace bookkeeping, and `rendering` holds the older renderers no build
uses; neither is read.
