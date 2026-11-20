<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1494"></a>

# Function `pill_master_renderer::overlay::create_target_texture`

```rust
pub(in overlay) fn create_target_texture(device: &wgpu::Device, label: &str, width: u32, height: u32, format: wgpu::TextureFormat, usage: wgpu::TextureUsages) -> wgpu::Texture;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:1108`

A single-sample 2D texture sized `width` by `height`.
