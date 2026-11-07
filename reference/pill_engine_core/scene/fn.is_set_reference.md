<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7851"></a>

# Function `pill_engine_core::scene::is_set_reference`

```rust
pub(in scene) fn is_set_reference(field_value: &crate::component_field::FieldValue) -> bool;
```

Visibility: `{'restricted': {'parent': 7769, 'path': '::scene'}}` · Source: `engine\pill_engine_core\src\scene.rs:291`

Returns whether `field_value` names an asset or an entity. Only the two
reference variants can.
