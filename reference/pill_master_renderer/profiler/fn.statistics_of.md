<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1681"></a>

# Function `pill_master_renderer::profiler::statistics_of`

```rust
pub(in profiler) fn statistics_of(types: wgpu::PipelineStatisticsTypes, query_values: &[u64]) -> pill_core::profiling::GpuStatistics;
```

Visibility: `{'restricted': {'parent': 1526, 'path': '::profiler'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\profiler.rs:910`

Reads one query's pipeline statistics in the order wgpu writes them: one
value per statistic in `types`, lowest flag first.
