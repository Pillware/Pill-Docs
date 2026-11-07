<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1790"></a>

# Function `pill_master_renderer::render_queue::compose_render_queue_key`

```rust
pub fn compose_render_queue_key(order: u8, shader: renderer_shader::RendererShaderHandle, material: renderer_material::RendererMaterialHandle, mesh: renderer_mesh::RendererMeshHandle) -> u64;
```

Source: `extensions\pill_master_renderer\pill_master_renderer\src\render_queue.rs:109`

Packs the rendering order of a draw and the resources it binds into one
`u64` that sorts in the order the queue needs. The most significant byte
comes first:

- bits 56-63: the material's rendering order, stored inverted
  (`u8::MAX - order`), so a higher order sorts earlier;
- bits 48-55: the shader's slot index;
- bits 40-47: the slot version the shader handle was issued with;
- bits 32-39: the material's slot index;
- bits 24-31: the slot version the material handle was issued with;
- bits 16-23: the mesh's slot index;
- bits 8-15: the slot version the mesh handle was issued with;
- bits 0-7: unused and always zero.

Because each slot index sits next to its version, a key names one exact
state of each slot.

The key is only ever compared. Every index and version is stored in a
single byte, so a value above 255 keeps only its low byte and can match a
lower value. A key never stands in for the handles a draw binds: those
travel on [`RenderQueueItem`](struct.RenderQueueItem.md#rustdoc-item-139) beside it.
