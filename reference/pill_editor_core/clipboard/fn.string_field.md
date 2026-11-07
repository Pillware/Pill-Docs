<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1176"></a>

# Function `pill_editor_core::clipboard::string_field`

```rust
pub(in clipboard) fn string_field(document: &serde_json::Value, member: &str) -> Result<String, String>;
```

Visibility: `{'restricted': {'parent': 1154, 'path': '::clipboard'}}` · Source: `editor\pill_editor_core\src\clipboard.rs:678`

Reads one required string member of a document.

## Errors

Returns a message naming the member when it is missing or is not a string.
