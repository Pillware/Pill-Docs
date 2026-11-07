<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5120"></a>

# Function `pill_editor_core::inspector::parse_settings_value`

```rust
pub fn parse_settings_value(text: &str, current: &serde_json::Value) -> Result<serde_json::Value, String>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1824`

Parse an edited text back into the JSON kind `current` already holds.

## Errors

A message saying the text is not a boolean, an integer or a number of the
current kind, that a number is not finite, or that the document's kind has
no editor here.
