<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1141"></a>

# Constant `pill_editor::runner::EDITOR_FORMAT`

```rust
pub(in runner) const EDITOR_FORMAT: wgpu::TextureFormat = wgpu::TextureFormat::Bgra8UnormSrgb;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:213`

The format the editor draws in. The overlay's swapchain and egui's renderer
must both use it, and it is one the composition swapchains offer.
