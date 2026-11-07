<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-587"></a>

# Function `pill_master_renderer::chain::ensure_offscreen_targets`

```rust
pub(in chain) fn ensure_offscreen_targets(device: &wgpu::Device, (width, height): (u32, u32), offscreen_targets: &mut std::collections::HashMap<String, crate::resources::RendererTexture>, chain: &[crate::frame::ResolvedPass]);
```

Visibility: `{'restricted': {'parent': 534, 'path': '::chain'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:841`

Create a target for every offscreen output the chain declares.

The targets are rebuilt when the offscreen layout or the surface size
changes, and every one is sized from the surface. A target that kept an old
size would be sampled at a different scale from the pass that writes it, so
the picture would shrink with the window instead of resizing with it.
