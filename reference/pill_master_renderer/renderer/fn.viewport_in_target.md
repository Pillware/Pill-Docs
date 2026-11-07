<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2054"></a>

# Function `pill_master_renderer::renderer::viewport_in_target`

```rust
pub(in renderer) fn viewport_in_target(viewport: crate::components::RenderViewport, surface_width: u32, surface_height: u32, target_width: u32, target_height: u32) -> crate::components::RenderViewport;
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:1622`

The frame's viewport expressed in the pixels of one pass's target.

A pass may declare a target the chain scaled - the bloom prefilter writes
half the surface - and wgpu rejects a scissor that leaves the attachment it
is set on. Scaling the rectangle keeps the clip in the same place, because a
scaled target holds the same picture at a different resolution rather than a
different part of it.
