<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1171"></a>

# Function `pill_editor_core::clipboard::component_field_pairs`

```rust
pub fn component_field_pairs(component: &crate::editor_state::ComponentView) -> Vec<(String, pill_engine::FieldValue)>;
```

Source: `editor\pill_editor_core\src\clipboard.rs:613`

Pairs each field of one component view with its current value.

Every value is kept, including the ones a payload cannot carry. The caller
drops those when it writes the document.
