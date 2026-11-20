<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1682"></a>

# Function `pill_master_renderer::profiler::read_current_timestamp`

```rust
pub(in profiler) fn read_current_timestamp(device: &wgpu::Device, queue: &wgpu::Queue, query_set: &wgpu::QuerySet) -> Option<u64>;
```

Visibility: `{'restricted': {'parent': 1526, 'path': '::profiler'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\profiler.rs:932`

Reads the GPU's clock now, in timestamp ticks.

This writes one timestamp, submits it and waits for its readback, so the
caller stalls. Returns `None` when the device poll or the readback fails.
