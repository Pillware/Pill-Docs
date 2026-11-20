<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2984"></a>

# Function `pill_master_renderer::surface::requested_present_mode`

```rust
pub(in surface) fn requested_present_mode(available_present_modes: &[wgpu::PresentMode]) -> Option<wgpu::PresentMode>;
```

Visibility: `{'restricted': {'parent': 2937, 'path': '::surface'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\surface.rs:466`

The present mode `PILL_PRESENT_MODE` asks for, when the surface supports
it.

`immediate` presents without waiting, so the picture can tear. `mailbox`
also presents without waiting, but replaces a queued frame instead of
tearing. `fifo` is vsync, and is the default. Returns `None` when the
variable is unset, when it names an unknown mode, and when the surface does
not support the mode it names; both rejections are logged.
