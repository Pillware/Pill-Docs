<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7952"></a>

# Function `pill_engine_core::scene::scene::is_set_reference`

```rust
pub(in scene::scene) fn is_set_reference(field_value: &crate::component_field::FieldValue) -> bool;
```

Visibility: `{'restricted': {'parent': 7827, 'path': '::scene::scene'}}` · Source: `engine\pill_engine_core\src\scene\scene.rs:324`

Returns whether `field_value` names an asset or an entity. Only the two
reference variants can.
