<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1633"></a>

# Function `pill_master_renderer::profiler::warn_readback`

```rust
pub(in profiler) fn warn_readback(measurement: &str);
```

Visibility: `{'restricted': {'parent': 1480, 'path': '::profiler'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\profiler.rs:868`

Reports that one kind of measurement never arrived, so a profiling run
explains why it has no numbers instead of staying silent.
