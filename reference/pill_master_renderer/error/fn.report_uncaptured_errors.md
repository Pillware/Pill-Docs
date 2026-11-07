<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-215"></a>

# Function `pill_master_renderer::error::report_uncaptured_errors`

```rust
pub(crate) fn report_uncaptured_errors(device: &wgpu::Device);
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\error.rs:75`

Sends GPU errors that no error scope captured to the log.

wgpu panics on these by default, so one refused pipeline or lost surface
would take the whole process down. With this handler installed, the run
carries on without whatever was refused, and the log says why.
