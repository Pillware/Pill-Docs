<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1344"></a>

# Function `pill_development_host::config::find_extension_crate`

```rust
pub(crate) fn find_extension_crate(extensions_root: &std::path::Path, package_name: &str) -> Option<ExtensionCrateLocation>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:2221`

Returns the extension crate whose manifest declares `package_name`, or
`None` when no folder under `extensions_root` holds it.

A crate in a folder named after the package wins, which is what a crate
seeded outside the layout looks like; otherwise the first match in folder
order is returned. Package names are unique across the workspace, so the
real tree has exactly one match.
