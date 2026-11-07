<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5067"></a>

# Function `pill_editor_core::inspector::field_write`

```rust
pub fn field_write(entity: pill_engine::Entity, component: &str, field: &str, current: &pill_engine::FieldValue, value_text: &str) -> Result<RecordedEdit, String>;
```

Source: `editor\pill_editor_core\src\inspector.rs:1387`

One field's write, decided in one place.

What a field's text means depends on the value it edits. An asset reference
takes a path, a guid or a store name. An entity reference takes a Hierarchy
label. Any other value takes its own text. Every surface that writes a field
goes through here - the Inspector, the scripted channel and a module panel -
so a new [`FieldValue`] family is one branch rather than five copies, and no
surface can be missing it.

## Errors

The message saying why the text does not name a value for this field.
