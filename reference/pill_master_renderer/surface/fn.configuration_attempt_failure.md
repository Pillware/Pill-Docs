<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2956"></a>

# Function `pill_master_renderer::surface::configuration_attempt_failure`

```rust
pub(in surface) fn configuration_attempt_failure(probe_outcome: std::result::Result<wgpu::SurfaceTexture, String>, errors: crate::error::CapturedErrors) -> Option<String>;
```

Visibility: `{'restricted': {'parent': 2900, 'path': '::surface'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\surface.rs:670`

Why one configuration attempt failed, or `None` when it succeeded: a
captured error first, else the probe's own failure.
