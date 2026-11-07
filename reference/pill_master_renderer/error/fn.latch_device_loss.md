<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-219"></a>

# Function `pill_master_renderer::error::latch_device_loss`

```rust
pub(crate) fn latch_device_loss(device: &wgpu::Device);
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\error.rs:103`

Records a lost device, so the frame path can report it.

A lost device accepts every call and draws nothing. Writes, submits and
polls all return success, and no error is raised, so the frame path cannot
see that the picture stopped moving. The callback wgpu fires for the loss is
the only witness, and it runs on a driver thread. This function stores its
message for [`device_loss`](fn.device_loss.md#rustdoc-item-218), which the next frame reads.

Call it beside [`report_uncaptured_errors`](fn.report_uncaptured_errors.md#rustdoc-item-215) when the device is created. It
also clears a loss that an earlier device of this image recorded.
