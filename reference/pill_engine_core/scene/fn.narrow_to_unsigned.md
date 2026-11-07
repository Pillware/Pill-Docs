<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7963"></a>

# Function `pill_engine_core::scene::narrow_to_unsigned`

```rust
pub(in scene) fn narrow_to_unsigned<T: TryFrom<u64>>(tag: &'static str, document_value: &serde_json::Value) -> Result<T, String>;
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:724`

A whole number narrowed to an unsigned field's own type, refusing a
negative one and one that does not fit.
