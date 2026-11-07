<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6380"></a>

# Function `pill_editor_core::preferences::read_document`

```rust
pub fn read_document(directory: &std::path::Path) -> Result<serde_json::Map<String, serde_json::Value>, String>;
```

Source: `editor\pill_editor_core\src\preferences.rs:388`

Reads the preferences document a write will modify.

A missing file is an empty document, so the first save creates it. A file
that exists and cannot be read or parsed is an error instead. Reading it as
empty would let the next save write a file holding only the keys it set,
erasing every unrelated preference.

## Errors

Returns a message naming the file when it cannot be read, is not JSON, or is
not a JSON object.
