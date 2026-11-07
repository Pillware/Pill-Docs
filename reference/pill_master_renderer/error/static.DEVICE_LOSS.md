<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-177"></a>

# Static `pill_master_renderer::error::DEVICE_LOSS`

```rust
pub(in error) static DEVICE_LOSS: std::sync::Mutex<Option<String>> = _;
```

Visibility: `{'restricted': {'parent': 179, 'path': '::error'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\error.rs:46`

The report of the device loss this image has seen, if any.

This is module state rather than a renderer field because the loss arrives
on a driver thread, and the renderer that has to act on it is the one this
image built. A reload gives a fresh image with a fresh static, which is
correct: the replacement renderer creates its own device.
