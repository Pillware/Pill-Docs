<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1846"></a>

# Constant `pill_master_renderer::renderer::GPU_REPORT_INTERVAL`

```rust
pub(in renderer) const GPU_REPORT_INTERVAL: u32 = 120;
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:84`

Frames between two sampled log reports: one from the GPU profiler and one
from the UI pass. Tracy records every frame, but these two logs report a
sample so they stay readable.
