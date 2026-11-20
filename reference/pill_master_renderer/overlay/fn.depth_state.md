<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1492"></a>

# Function `pill_master_renderer::overlay::depth_state`

```rust
pub(in overlay) fn depth_state(format: wgpu::TextureFormat, compare: wgpu::CompareFunction, write: bool) -> wgpu::DepthStencilState;
```

Visibility: `{'restricted': {'parent': 854, 'path': '::overlay'}}` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\overlay\mod.rs:1093`

A depth state that reads `format` with `compare`, writing when `write`.
