<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-584"></a>

# Function `pill_master_renderer::chain::unclaimed_ranges`

```rust
pub(in chain) fn unclaimed_ranges(render_queue: &[crate::render_queue::RenderQueueItem], claimed_shaders: &std::collections::HashSet<renderer_shader::RendererShaderHandle>) -> Vec<std::ops::Range<u32>>;
```

Visibility: `{'restricted': {'parent': 534, 'path': '::chain'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:773`

The runs of the queue whose shader no pass in `claimed_shaders` names.

These are the instances that a material queued and no geometry pass draws.
Neighbouring items join one run even when their shaders differ, so a run is a
stretch of the queue, not one shader's items.
