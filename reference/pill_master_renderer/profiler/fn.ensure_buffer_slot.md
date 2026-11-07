<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1634"></a>

# Function `pill_master_renderer::profiler::ensure_buffer_slot`

```rust
pub(in profiler) fn ensure_buffer_slot<'a>(device: &wgpu::Device, slot: &'a mut Option<ResolveSlot>, size: u64, label: &str) -> &'a ResolveSlot;
```

Visibility: `{'restricted': {'parent': 1480, 'path': '::profiler'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\profiler.rs:881`

Returns the slot's buffers, creating them when they cannot hold `size`
bytes.

A slot only grows. Once a frame with many queries has asked for a large
buffer, later smaller frames reuse that allocation instead of shrinking it.
