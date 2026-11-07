<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7964"></a>

# Function `pill_engine_core::scene::narrow_to_f32`

```rust
pub(in scene) fn narrow_to_f32(tag: &'static str, document_value: &serde_json::Value) -> Result<f32, String>;
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:737`

A number narrowed to an `f32`, refusing the one cast that changes its kind:
a finite value whose magnitude exceeds `f32::MAX` becomes `inf`. Rounding
within range is what the type is for, so it is not a refusal.
