<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7962"></a>

# Function `pill_engine_core::scene::narrow_to_signed`

```rust
pub(in scene) fn narrow_to_signed<T: TryFrom<i64>>(tag: &'static str, document_value: &serde_json::Value) -> Result<T, String>;
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:712`

A whole number narrowed to a signed field's own type.

A value that does not fit is refused, not cast. A cast would wrap 300 into
44 with `as i8`, and leave the world holding a number the document never
said. The report names the refused value.
