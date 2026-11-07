<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6381"></a>

# Function `pill_editor_core::preferences::parse_document`

```rust
pub fn parse_document(text: &str) -> Result<serde_json::Map<String, serde_json::Value>, String>;
```

Source: `editor\pill_editor_core\src\preferences.rs:404`

Parses a preferences file's text into its document.

## Errors

Returns a message naming the file when the text is not JSON or is not a JSON
object.
