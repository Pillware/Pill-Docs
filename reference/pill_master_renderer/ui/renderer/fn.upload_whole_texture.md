<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3081"></a>

# Function `pill_master_renderer::ui::renderer::upload_whole_texture`

```rust
pub(in ui::renderer) fn upload_whole_texture(queue: &wgpu::Queue, texture: &wgpu::Texture, texture_size: (u32, u32), pixels: &[u8]);
```

Visibility: `{'restricted': {'parent': 2958, 'path': '::ui::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\ui\renderer.rs:543`

Uploads `pixels` as the whole image of the 2D `texture`, which is
`texture_size` texels.
