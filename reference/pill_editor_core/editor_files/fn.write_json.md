<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2385"></a>

# Function `pill_editor_core::editor_files::write_json`

```rust
pub fn write_json<T: Serialize>(path: &std::path::Path, document: &T) -> Result<(), FileError>;
```

Source: `editor\pill_editor_core\src\editor_files.rs:151`

Serializes and writes one JSON document.

## Errors

Returns [`FileError::Serialize`](enum.FileError.md#rustdoc-item-2344) when the document cannot be serialized and
[`FileError::Write`](enum.FileError.md#rustdoc-item-2347) when the file cannot be replaced.
