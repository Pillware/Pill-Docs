<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7961"></a>

# Function `pill_engine_core::scene::decoded_field`

```rust
pub(in scene) fn decoded_field(tag: &'static str, document_value: &serde_json::Value) -> Result<DecodedField, String>;
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:620`

Decodes one document value for the field tagged `tag`.

`Err` carries the reason the value cannot be written, and the load report
prints it next to the field. The reason is a shape the field cannot read,
or a number that does not fit the field's type.
