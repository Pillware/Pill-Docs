<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7965"></a>

# Function `pill_engine_core::scene::decode_opaque_field`

```rust
pub(in scene) fn decode_opaque_field(tag: &'static str, document_value: &serde_json::Value) -> Option<crate::component_field::FieldValue>;
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:751`

Returns the raw bytes an opaque field was written from, tagged with the
layout's own `'static` tag. A document can therefore never introduce a tag
the layout does not have.
