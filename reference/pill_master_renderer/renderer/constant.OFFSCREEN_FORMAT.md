<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1845"></a>

# Constant `pill_master_renderer::renderer::OFFSCREEN_FORMAT`

```rust
pub(crate) const OFFSCREEN_FORMAT: wgpu::TextureFormat = wgpu::TextureFormat::Rgba16Float;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\renderer.rs:79`

The colour format of every offscreen target a chain declares.

It is half-float rather than the surface's `Unorm` format, because a lit
frame can produce values well above 1.0. A target that cannot hold those
values would clip the picture before a later pass brings it back into
range.
