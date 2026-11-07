<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1276"></a>

# Function `pill_development_host::config::locate_extension_folder`

```rust
pub(crate) fn locate_extension_folder(extensions_root: &std::path::Path, crate_name: &str) -> Option<String>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1821`

Returns the extension folder under `extensions_root` that holds
`crate_name`, checked as `extensions/<folder>/<crate_name>/Cargo.toml`.

The folder named like the crate is tried first, because most extensions
hold one crate of their own name. Every other folder is then scanned in
name order, because a folder may hold several crates (the master
renderer's folder also holds its data crate). Folders starting with `_`
are workspace bookkeeping, never extensions. Returns `None` when no folder
holds the crate.
