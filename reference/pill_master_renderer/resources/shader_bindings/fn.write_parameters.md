<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2850"></a>

# Function `pill_master_renderer::resources::shader_bindings::write_parameters`

```rust
pub(crate) fn write_parameters(queue: &wgpu::Queue, buffer: &wgpu::Buffer, parameter_slots: &indexmap::IndexMap<String, crate::assets::ShaderParameterSlot>, parameters: &std::collections::BTreeMap<String, pill_renderer_api::frame::MaterialParameter>);
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\shader_bindings.rs:64`

Packs the parameter values of a material or a pass into the uniform buffer
its shader reads.

Reads the shader's slots in declaration order and writes one 16-byte region
per slot, so each value is placed by the name the shader gave its uniform,
not by its position in the map. A slot with no value packs as zero, and so
does a value stored under that name with a different type, so a partly
filled material still draws.
