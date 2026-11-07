<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2742"></a>

# Function `pill_engine_core::common_components::rotation_or_identity`

```rust
pub fn rotation_or_identity(rotation: [f32; 4]) -> [f32; 4];
```

Source: `engine\pill_engine_core\src\common_components.rs:113`

Reads a [`TransformComponent::rotation`](struct.TransformComponent.md#rustdoc-item-2692) value and returns it as a unit
quaternion, or as the identity when it is not usable.

This is the only implementation of the rule the field's documentation
states, so systems, projects and the renderer share it and its tolerance
instead of each writing its own.
