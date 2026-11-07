<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2760"></a>

# Function `pill_master_renderer::resources::renderer_shader::slot_view_dimension`

```rust
pub(crate) fn slot_view_dimension(kind: crate::assets::ShaderTextureKind) -> wgpu::TextureViewDimension;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_shader.rs:366`

Returns the view shape a texture slot of `kind` binds: a cube for a cubemap,
a 2D image for every other kind, depth included.
