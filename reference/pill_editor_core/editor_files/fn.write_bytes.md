<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2386"></a>

# Function `pill_editor_core::editor_files::write_bytes`

```rust
pub fn write_bytes(path: &std::path::Path, bytes: &[u8]) -> Result<(), FileError>;
```

Source: `editor\pill_editor_core\src\editor_files.rs:165`

Writes one document's bytes through a temporary file and a rename.

## Errors

Returns [`FileError::Write`](enum.FileError.md#rustdoc-item-2347) naming the directory, the temporary file or
the target, whichever failed.
