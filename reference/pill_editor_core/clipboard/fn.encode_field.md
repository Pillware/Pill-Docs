<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1159"></a>

# Function `pill_editor_core::clipboard::encode_field`

```rust
pub fn encode_field(component: &str, field: &str, value: &pill_engine::FieldValue) -> Option<String>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:275`

Builds the payload document for one field value, or returns `None` when the
value has no token.
