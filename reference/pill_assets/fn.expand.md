<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-296"></a>

# Function `pill_assets::expand`

```rust
pub(crate) fn expand(root: &std::path::Path, pattern: &str) -> Result<Vec<std::path::PathBuf>, CookError>;
```

Visibility: `crate` · Source: `assets\pill_assets\src\lib.rs:563`

Return the files that match one `directory/*.extension` pattern below
`root`.

## Errors

Returns [`CookError::BadGlob`](enum.CookError.md#rustdoc-item-210) when the pattern has no `*`, and
[`CookError::Io`](enum.CookError.md#rustdoc-item-157) when a directory cannot be read.
