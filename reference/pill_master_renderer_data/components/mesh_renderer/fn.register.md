<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1448"></a>

# Function `pill_master_renderer_data::components::mesh_renderer::register`

```rust
pub(crate) fn register(world: &mut pill_engine::World);
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\components\mesh_renderer.rs:98`

Registers [`MeshRendererComponent`](struct.MeshRendererComponent.md#rustdoc-item-1368) with the world, field layout included.

The derive generates `__pill_register_MeshRendererComponent` as a private
item of this module, so [`crate::components::register_components`](../fn.register_components.md#rustdoc-item-1364) cannot
call it directly and goes through this function instead.
