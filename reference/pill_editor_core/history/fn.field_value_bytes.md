<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4419"></a>

# Function `pill_editor_core::history::field_value_bytes`

```rust
pub(in history) fn field_value_bytes(field_value: &pill_engine::FieldValue) -> usize;
```

Visibility: `{'restricted': {'parent': 4360, 'path': '::history'}}` · Source: `editor\pill_editor_core\src\history.rs:581`

Returns the bytes one field value holds: a string's length, an array's
elements added up, or a fixed eight for a plain number.
