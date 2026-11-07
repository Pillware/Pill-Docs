<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-216"></a>

# Function `pill_master_renderer::error::latched_device_loss`

```rust
pub(in error) fn latched_device_loss() -> std::sync::MutexGuard<'static, Option<String>>;
```

Visibility: `{'restricted': {'parent': 179, 'path': '::error'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\error.rs:89`

Locks the device loss latch.

A poisoned lock is still used: it holds the last value written, which is all
a reader needs.
