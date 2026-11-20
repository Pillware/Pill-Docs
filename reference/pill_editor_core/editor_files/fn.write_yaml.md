<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2446"></a>

# Function `pill_editor_core::editor_files::write_yaml`

```rust
pub fn write_yaml<T: Serialize + ?Sized>(path: &std::path::Path, document: &T) -> Result<(), FileError>;
```

Source: `editor\pill_editor_core\src\editor_files.rs:176`

Serializes and writes one YAML document.

The document goes through the same value tree the reader produces
([`parse_yaml`](fn.parse_yaml.md#rustdoc-item-2445)) before it is written, so a file the editor writes is one it
can read back. Writing a typed structure straight to YAML would encode an
enum as a tag (`!Scene 2`), and the value tree that every reader works in
cannot hold one.

## Errors

Returns [`FileError::Serialize`](enum.FileError.md#rustdoc-item-2404) when the document cannot be serialized and
[`FileError::Write`](enum.FileError.md#rustdoc-item-2407) when the file cannot be replaced.
