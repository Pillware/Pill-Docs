<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6382"></a>

# Function `pill_editor_core::preferences::write_document`

```rust
pub fn write_document(directory: &std::path::Path, document: &serde_json::Map<String, serde_json::Value>) -> Result<(), String>;
```

Source: `editor\pill_editor_core\src\preferences.rs:421`

Writes the document the way the editor writes its state files. The text
goes into a temporary file beside the target, and a rename replaces the
target with it. A missing directory is created first.

## Errors

Returns a message when the document cannot be serialized or the file cannot
be written.
