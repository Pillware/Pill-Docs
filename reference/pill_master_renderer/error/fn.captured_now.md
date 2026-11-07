<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-222"></a>

# Function `pill_master_renderer::error::captured_now`

```rust
pub(crate) fn captured_now<T, impl FnOnce() -> T: FnOnce() -> T>(device: &wgpu::Device, make: impl FnOnce() -> T) -> (T, CapturedErrors);
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\error.rs:163`

Runs `make` with wgpu's errors captured, and blocks until wgpu answers.

Only native development builds get this version. A browser frame cannot
block on an error scope, and only development has to survive a refused
shader edit.
