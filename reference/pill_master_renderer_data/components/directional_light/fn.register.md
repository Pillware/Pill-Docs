<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1365"></a>

# Function `pill_master_renderer_data::components::directional_light::register`

```rust
pub(crate) fn register(world: &mut pill_engine::World);
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\components\directional_light.rs:69`

Registers [`DirectionalLightComponent`](struct.DirectionalLightComponent.md#rustdoc-item-1314) with the world, together with its
field layout.

The derive generates `__pill_register_DirectionalLightComponent` as a
private item of this module, so
[`crate::components::register_components`](../fn.register_components.md#rustdoc-item-1364) cannot call it by path and calls
this function instead. The layout is what the editor reads to show the
fields and what the C# code generator uses to type them.
