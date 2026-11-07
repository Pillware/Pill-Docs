<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3820"></a>

# Function `pill_editor_core::gizmo::swap_f32`

```rust
pub(in gizmo) fn swap_f32(field_slot: &mut f32, field_name: &str, field_value: &pill_engine::FieldValue) -> Result<pill_engine::FieldValue, String>;
```

Visibility: `{'restricted': {'parent': 2489, 'path': '::gizmo'}}` · Source: `editor\pill_editor_core\src\gizmo.rs:235`

Swap one `f32` field and hand back its previous value.
