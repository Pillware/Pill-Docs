<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1144"></a>

# Function `pill_editor::runner::create_window_overlay`

```rust
pub(in runner) fn create_window_overlay(instance: &wgpu::Instance, adapter: &wgpu::Adapter, device: &wgpu::Device, window: std::sync::Arc<winit::window::Window>, size: (u32, u32)) -> Option<crate::overlay::OverlaySurface>;
```

Visibility: `{'restricted': {'parent': 483, 'path': '::runner'}}` · Source: `editor\pill_editor\src\runner\mod.rs:271`

Build the window-surface overlay, logging the refusal that stops it.
