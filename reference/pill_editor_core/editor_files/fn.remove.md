<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2448"></a>

# Function `pill_editor_core::editor_files::remove`

```rust
pub fn remove(path: &std::path::Path) -> Result<(), FileError>;
```

Source: `editor\pill_editor_core\src\editor_files.rs:222`

Removes one document. A file that is already gone is not an error.

## Errors

Returns [`FileError::Write`](enum.FileError.md#rustdoc-item-2407) when the file exists and cannot be removed.
