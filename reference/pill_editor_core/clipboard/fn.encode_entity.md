<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1156"></a>

# Function `pill_editor_core::clipboard::encode_entity`

```rust
pub fn encode_entity(detail: &crate::editor_state::EntityDetail) -> String;
```

Source: `editor\pill_editor_core\src\clipboard.rs:244`

Builds the payload document for one entity's detail: every editable
component, with only the field values a payload can carry.
