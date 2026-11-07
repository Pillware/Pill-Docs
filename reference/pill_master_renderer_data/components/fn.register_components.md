<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1364"></a>

# Function `pill_master_renderer_data::components::register_components`

```rust
pub fn register_components(world: &mut pill_engine::World);
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\components\mod.rs:54`

Registers the renderer's scene components with the world, field layouts
included.

The transform and the camera are registered first, through
[`register_contract_components`](pill_renderer_api::components::register_contract_components).
The mesh renderer and the directional light follow, through the
`__pill_register_*` functions their `PillComponent` derives generate. Those
registrations give the C# mirror codegen and the editor each field's name
and offset. Without one, neither of them can see a field.
