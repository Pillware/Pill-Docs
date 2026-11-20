<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1215"></a>

# Function `pill_editor_core::clipboard::decode`

```rust
pub fn decode(document_text: &str) -> Result<Payload, String>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:564`

Decodes a payload document.

## Errors

Returns a message when the text is not JSON, when the document's version is
not [`VERSION`](constant.VERSION.md#rustdoc-item-953), when its `kind` member is missing or unknown, or when a
component entry is malformed: no type name, or a field entry that is not a
name and a token.
