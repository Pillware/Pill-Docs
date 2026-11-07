<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2384"></a>

# Function `pill_editor_core::editor_files::read_json`

```rust
pub fn read_json<T: DeserializeOwned>(path: &std::path::Path) -> Result<Option<T>, FileError>;
```

Source: `editor\pill_editor_core\src\editor_files.rs:126`

Reads one JSON document, or `None` when the file does not exist.

## Errors

Returns [`FileError::Read`](enum.FileError.md#rustdoc-item-2338) when the file exists and cannot be read, and
[`FileError::Parse`](enum.FileError.md#rustdoc-item-2341) when its text is not the document the caller asked
for.
