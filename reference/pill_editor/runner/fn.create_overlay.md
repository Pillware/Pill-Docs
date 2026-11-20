<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1591"></a>

# Function `pill_editor::runner::create_overlay`

```rust
pub(in runner) fn create_overlay(event_loop: &winit::event_loop::ActiveEventLoop, no_overlay: bool, instance: &wgpu::Instance, adapter: &wgpu::Adapter, device: &wgpu::Device, window: std::sync::Arc<winit::window::Window>, size: (u32, u32)) -> Option<crate::overlay::OverlaySurface>;
```

Visibility: `{'restricted': {'parent': 539, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:322`

Build the UI surface for the posture the editor starts in.

The overlay that draws the UI above the scene is the normal case and the
window's own surface is the fallback. A refusal is logged once and the
editor keeps running, with the UI on the window surface.
