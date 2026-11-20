<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2092"></a>

# Function `pill_master_renderer::renderer::write_gpu_timestamp`

```rust
pub(in renderer) fn write_gpu_timestamp(profiler: &mut Option<crate::profiler::Profiler>, encoder: &mut wgpu::CommandEncoder, label: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 1890, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\renderer.rs:1562`

Writes a GPU timestamp named `label` between passes, when profiling.
Returns whether one was written.
