<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-292"></a>

# Function `pill_assets::walk_files`

```rust
pub fn walk_files(directory: &std::path::Path) -> Result<Vec<std::path::PathBuf>, CookError>;
```

Source: `assets\pill_assets\src\lib.rs:386`

Return every file below `directory`, recursively, sorted by path.

A shader `#include`s headers that the rule's own glob does not match, so a
build script reports them to cargo by hand through this function.

## Errors

Returns [`CookError::Io`](enum.CookError.md#rustdoc-item-157) when a directory cannot be read. A directory that
does not exist is not an error and yields nothing.
