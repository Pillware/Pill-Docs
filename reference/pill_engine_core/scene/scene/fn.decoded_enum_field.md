<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8070"></a>

# Function `pill_engine_core::scene::scene::decoded_enum_field`

```rust
pub(in scene::scene) fn decoded_enum_field(tag: &'static str, enum_tag: &crate::component_field::EnumFieldTag, document_value: &serde_json::Value) -> Result<crate::component_field::FieldValue, String>;
```

Visibility: `{'restricted': {'parent': 7827, 'path': '::scene::scene'}}` · Source: `engine\pill_engine_core\src\scene\scene.rs:822`

Decodes an enum field's document value: a variant name, a discriminant, or
the opaque payload a document saved before the enum was declared, whose
bytes are the representation's integer.

## Errors

Returns the reason when the value has none of those shapes, or names a
variant or a discriminant the enum does not declare.
