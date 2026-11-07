<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1631"></a>

# Function `pill_master_renderer::profiler::gpu_profiling_requested`

```rust
pub(crate) fn gpu_profiling_requested() -> bool;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\profiler.rs:855`

Whether `PILL_GPU_PROFILE` asks for GPU profiling. Off by default: the
queries cost GPU time on every frame that records them.
