<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2093"></a>

# Function `pill_master_renderer::renderer::depth_attachment`

```rust
pub(in renderer) fn depth_attachment(view: &wgpu::TextureView, clear: bool) -> wgpu::RenderPassDepthStencilAttachment<'_>;
```

Visibility: `{'restricted': {'parent': 1890, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\renderer.rs:1578`

The depth attachment a geometry pass writes, or a skybox reads.

A pass that opens the frame's targets clears it to the far plane, so the
oldest geometry is drawn wherever nothing has written yet; every later pass
keeps what is there.
