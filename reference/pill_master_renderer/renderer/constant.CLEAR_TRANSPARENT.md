<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1850"></a>

# Constant `pill_master_renderer::renderer::CLEAR_TRANSPARENT`

```rust
pub(in renderer) const CLEAR_TRANSPARENT: wgpu::Color = _;
```

Visibility: `{'restricted': {'parent': 1847, 'path': '::renderer'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:99`

What a frame leaves outside a viewport that does not cover the whole target.

Zero in every channel, which is transparent in both alpha conventions, so a
frame that draws into only part of a window does not hide whatever else
paints the rest of that window.
