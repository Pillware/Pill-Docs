<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2049"></a>

# Function `pill_master_renderer::renderer::write_gpu_timestamp`

```rust
pub(in renderer) fn write_gpu_timestamp(profiler: &mut Option<crate::profiler::Profiler>, encoder: &mut wgpu::CommandEncoder, label: &str) -> bool;
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:1562`

Writes a GPU timestamp named `label` between passes, when profiling.
Returns whether one was written.
