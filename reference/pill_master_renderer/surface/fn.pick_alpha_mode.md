<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2952"></a>

# Function `pill_master_renderer::surface::pick_alpha_mode`

```rust
pub(in surface) fn pick_alpha_mode(available_alpha_modes: &[wgpu::CompositeAlphaMode]) -> Option<wgpu::CompositeAlphaMode>;
```

Visibility: `{'restricted': {'parent': 2900, 'path': '::surface'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\surface.rs:539`

The alpha mode to ask a new surface for.

A compositing mode comes first because the editor paints its panels over
the same window the scene viewport lives in. That needs the swapchain image
to carry alpha, which a window created transparent can provide. The
renderer's own shaders write opaque pixels, so a window with nothing to
show through stays opaque either way, and [`configure`](fn.configure.md#rustdoc-item-2910) and
[`configure_first`](fn.configure_first.md#rustdoc-item-2951) fall back to `Opaque` when the compositor refuses.
