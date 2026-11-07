<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1546"></a>

# Constant `pill_master_renderer_data::config::INSTANCE_BATCH_SIZE`

```rust
pub const INSTANCE_BATCH_SIZE: usize = 10000;
```

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\config\mod.rs:59`

Instances the mesh drawer's instance buffer starts with, and the step it
grows by.

The drawer allocates this many up front. When a frame holds more instances
than that, it reallocates the buffer in whole steps of this size, so one
growth covers a while. The value sets the buffer size, not a limit on how
many instances a frame may draw.
