<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-158"></a>

# Function `pill_development_host::analytics::inspect_pe`

```rust
pub(crate) fn inspect_pe(path: &std::path::Path) -> Option<PeInspection>;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\analytics.rs:146`

Read a Windows PE file's import and export tables and its image size.

Returns `None` for anything that is not a PE32 or PE32+ image, which
includes every `.so` and `.dylib`. It only reads the file's bytes and uses
no platform-specific API, so it builds and runs everywhere even though PE
is a Windows format. Inside a valid image a damaged table is read only as
far as it parses, so a partial answer is returned instead of a failure.
