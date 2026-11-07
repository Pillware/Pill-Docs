<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2847"></a>

# Function `pill_master_renderer::resources::renderer_texture::texture_failure`

```rust
pub(in resources::renderer_texture) fn texture_failure(name: Option<&str>, stage: &str, detail: String) -> crate::error::RendererError;
```

Visibility: `{'restricted': {'parent': 2764, 'path': '::resources::renderer_texture'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_texture.rs:364`

Turns a captured wgpu failure into an error naming the texture and the
stage of its creation that failed.
