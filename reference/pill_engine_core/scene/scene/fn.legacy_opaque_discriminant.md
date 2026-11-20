<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8071"></a>

# Function `pill_engine_core::scene::scene::legacy_opaque_discriminant`

```rust
pub(in scene::scene) fn legacy_opaque_discriminant(enum_tag: &crate::component_field::EnumFieldTag, document_value: &serde_json::Value) -> Option<i64>;
```

Visibility: `{'restricted': {'parent': 7827, 'path': '::scene::scene'}}` · Source: `engine\pill_engine_core\src\scene\scene.rs:855`

The discriminant an opaque `{ "opaque": <hex>, "tag": ... }` payload holds
when its length is the enum representation's size. Bytes are native-endian,
as every row is.
