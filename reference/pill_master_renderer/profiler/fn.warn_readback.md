<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1679"></a>

# Function `pill_master_renderer::profiler::warn_readback`

```rust
pub(in profiler) fn warn_readback(measurement: &str);
```

Visibility: `{'restricted': {'parent': 1526, 'path': '::profiler'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\profiler.rs:868`

Reports that one kind of measurement never arrived, so a profiling run
explains why it has no numbers instead of staying silent.
