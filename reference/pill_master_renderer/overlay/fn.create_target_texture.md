<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1451"></a>

# Function `pill_master_renderer::overlay::create_target_texture`

```rust
pub(in overlay) fn create_target_texture(device: &wgpu::Device, label: &str, width: u32, height: u32, format: wgpu::TextureFormat, usage: wgpu::TextureUsages) -> wgpu::Texture;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:1064`

A single-sample 2D texture sized `width` by `height`.
