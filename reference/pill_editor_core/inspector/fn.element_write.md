<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4988"></a>

# Function `pill_editor_core::inspector::element_write`

```rust
pub fn element_write(entity: pill_engine::Entity, component: &str, field: &str, current: &pill_engine::FieldValue, index: usize, value_text: &str) -> Result<RecordedEdit, String>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1424`

One array element's write, keyed on the element.

The key names `field[index]`, so two drags on two elements of one array are
two undo steps.

## Errors

A message when the index is outside the array or the text does not parse
against the element's kind.
