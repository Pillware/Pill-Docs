<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3082"></a>

# Function `pill_master_renderer::ui::renderer::create_srgb_texture`

```rust
pub(in ui::renderer) fn create_srgb_texture(device: &wgpu::Device, label: &str, texture_size: (u32, u32)) -> wgpu::Texture;
```

Visibility: `{'restricted': {'parent': 2958, 'path': '::ui::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\ui\renderer.rs:573`

Creates an `Rgba8UnormSrgb` texture of `texture_size` texels that the shader
can sample and the queue can write. Sampling an sRGB texture decodes it to
linear light, which is what the shader expects.
