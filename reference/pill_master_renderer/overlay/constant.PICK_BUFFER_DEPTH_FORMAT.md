<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1022"></a>

# Constant `pill_master_renderer::overlay::PICK_BUFFER_DEPTH_FORMAT`

```rust
pub(in overlay) const PICK_BUFFER_DEPTH_FORMAT: wgpu::TextureFormat = RendererTexture::DEPTH_FORMAT;
```

Visibility: `{'restricted': {'parent': 858, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\overlay\mod.rs:76`

Format of the pick buffer's own depth: the same one every depth-tested
pipeline in the module declares.
