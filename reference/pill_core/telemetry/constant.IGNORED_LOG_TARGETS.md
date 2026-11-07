<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2025"></a>

# Constant `pill_core::telemetry::IGNORED_LOG_TARGETS`

```rust
pub(in telemetry) const IGNORED_LOG_TARGETS: &[&str] = _;
```

Visibility: `{'restricted': {'parent': 1726, 'path': '::telemetry'}}` · Source: `engine\pill_core\src\telemetry.rs:1092`

`log` targets the bridge drops, each with the reason it is noise.

- `wgpu_hal::vulkan::conv`: wgpu warns `Unrecognized present mode
  1000361000` on every surface query when the driver offers
  `VK_PRESENT_MODE_FIFO_LATEST_READY_EXT`, which it does not know yet and
  skips. The module only logs such unknown-value notices.
