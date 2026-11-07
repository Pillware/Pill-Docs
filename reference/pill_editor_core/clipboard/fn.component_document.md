<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1173"></a>

# Function `pill_editor_core::clipboard::component_document`

```rust
pub(in clipboard) fn component_document(type_name: &str, fields: &[(String, pill_engine::FieldValue)]) -> serde_json::Value;
```

Visibility: `{'restricted': {'parent': 1154, 'path': '::clipboard'}}` · Source: `editor\pill_editor_core\src\clipboard.rs:626`

Builds the JSON object for one component: its type name and its carried
fields, each written as a `[name, token]` pair.
