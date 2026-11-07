<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2053"></a>

# Function `pill_master_renderer::renderer::covers_target`

```rust
pub(in renderer) fn covers_target(viewport: crate::components::RenderViewport, width: u32, height: u32) -> bool;
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:1611`

Whether a frame's viewport covers every pixel of a `width` by `height` target.

Only a frame that covers the target owns it. One that does not shares the
window with another painter and has to leave the rest of it alone - which is
why every pass is clipped to the frame's rectangle, and why the swapchain
image is opened transparent rather than in [`CLEAR_COLOR`](constant.CLEAR_COLOR.md#rustdoc-item-1848).
