<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-585"></a>

# Function `pill_master_renderer::chain::shader_ranges`

```rust
pub(in chain) fn shader_ranges(render_queue: &[crate::render_queue::RenderQueueItem], shader: renderer_shader::RendererShaderHandle) -> Vec<std::ops::Range<u32>>;
```

Visibility: `{'restricted': {'parent': 534, 'path': '::chain'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:795`

The runs of the queue drawn by `shader`.

The queue is sorted by draw order first and shader second, so one shader's
items are one run per draw order they appear in: usually a single run.
