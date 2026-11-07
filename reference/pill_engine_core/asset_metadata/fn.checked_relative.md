<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1863"></a>

# Function `pill_engine_core::asset_metadata::checked_relative`

```rust
pub fn checked_relative(path: &str) -> Result<std::path::PathBuf, String>;
```

Source: `engine\pill_engine_core\src\asset_metadata.rs:179`

Checks that `path` stays inside the asset directory and returns it as a
`PathBuf`: relative, without `..`, and not empty.

This is the one check every tool-side asset path goes through, so a path
that would escape the directory is refused before it reaches the file
system.

## Errors

A message when the path is absolute, climbs out with `..`, or is empty.
