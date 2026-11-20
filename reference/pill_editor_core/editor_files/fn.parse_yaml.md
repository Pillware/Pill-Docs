<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2445"></a>

# Function `pill_editor_core::editor_files::parse_yaml`

```rust
pub fn parse_yaml<T: DeserializeOwned>(bytes: &[u8]) -> Result<T, String>;
```

Source: `editor\pill_editor_core\src\editor_files.rs:158`

Parses one YAML document from `bytes`, without touching the filesystem.

The text-driven counterpart of [`read_yaml`](fn.read_yaml.md#rustdoc-item-2444), for a caller that watches a
file and keeps its bytes instead of its path.

## Errors

Returns the parser's message when the bytes are not YAML, and the
converter's when the document is YAML but not the caller's shape.
