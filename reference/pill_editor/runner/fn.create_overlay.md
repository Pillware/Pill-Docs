<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1143"></a>

# Function `pill_editor::runner::create_overlay`

```rust
pub(in runner) fn create_overlay(no_overlay: bool, instance: &wgpu::Instance, adapter: &wgpu::Adapter, device: &wgpu::Device, window: std::sync::Arc<winit::window::Window>, size: (u32, u32)) -> Option<crate::overlay::OverlaySurface>;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:234`

Build the UI surface for the posture the editor starts in.

The composition overlay is the normal case and the window's own surface is
the fallback. A refusal is logged once and the editor keeps running, with
the UI on the window surface.
