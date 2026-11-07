<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5069"></a>

# Function `pill_editor_core::inspector::reference_write`

```rust
pub(in inspector) fn reference_write(current: &pill_engine::FieldValue, value_text: &str) -> Option<Result<ReferenceWrite, String>>;
```

Visibility: `{'restricted': {'parent': 4798, 'path': '::inspector'}}` · Source: `editor\pill_editor_core\src\inspector.rs:1361`

The reference `text` names for `current`, or `None` when the field holds a
plain value.

This is the one place that knows how a reference row reads its text, and
[`field_write`](fn.field_write.md#rustdoc-item-5067) and [`selection_write`](fn.selection_write.md#rustdoc-item-5068) both use it. The two differ in how
many entities they write, never in what the text means.

## Errors

The message saying why the text does not name an entity.
