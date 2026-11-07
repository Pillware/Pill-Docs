<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5068"></a>

# Function `pill_editor_core::inspector::selection_write`

```rust
pub fn selection_write(targets: &[pill_engine::Entity], primary: pill_engine::Entity, component: &str, field: &str, current: &pill_engine::FieldValue, value_text: &str) -> Result<RecordedEdit, String>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1448`

One field's write over a selection: the same three cases as
[`field_write`](fn.field_write.md#rustdoc-item-5067), recorded once for the whole set.

## Errors

The message saying why the text does not name a value for this field.
