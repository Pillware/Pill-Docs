<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2047"></a>

# Function `pill_master_renderer::renderer::create_gpu_profiler`

```rust
pub(in renderer) fn create_gpu_profiler(device: &wgpu::Device, queue: &wgpu::Queue, backend: wgpu::Backend) -> Option<crate::profiler::Profiler>;
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:1513`

The GPU profiler `PILL_GPU_PROFILE` asks for, or `None` when it was not
asked for or the device lacks the features.
