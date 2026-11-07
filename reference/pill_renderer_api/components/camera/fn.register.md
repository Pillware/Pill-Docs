<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-299"></a>

# Function `pill_renderer_api::components::camera::register`

```rust
pub(crate) fn register(world: &mut pill_engine::World);
```

Visibility: `crate` · Source: `rendering\pill_renderer_api\src\components\camera.rs:87`

Registers [`CameraComponent`](struct.CameraComponent.md#rustdoc-item-241) and its field layout with the world.

The derive creates `__pill_register_CameraComponent` as a private item of
this module, so [`crate::components::register_contract_components`](../fn.register_contract_components.md#rustdoc-item-298) calls it
through this function instead of naming it directly.
