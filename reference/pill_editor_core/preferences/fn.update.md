<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6383"></a>

# Function `pill_editor_core::preferences::update`

```rust
pub fn update<impl FnOnce(&mut Map<String, Value>) -> Result<(), String>: FnOnce(&mut serde_json::Map<String, serde_json::Value>) -> Result<(), String>>(directory: &std::path::Path, edit: impl FnOnce(&mut serde_json::Map<String, serde_json::Value>) -> Result<(), String>) -> Result<(), String>;
```

Source: `editor\pill_editor_core\src\preferences.rs:437`

Reads the preferences document, applies the edit and writes it back.

Use this when a caller updates only the keys it owns. The rest of the
document is left alone. A document that cannot be read stops the edit
instead of being replaced by one holding only the caller's keys.

## Errors

Returns the read's or the write's message, or the edit's own error when it
refuses.
