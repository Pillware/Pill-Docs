<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2762"></a>

# Function `pill_master_renderer::resources::renderer_shader::check_slot_shape`

```rust
pub(crate) fn check_slot_shape(owner: &str, slot_name: &str, slot_kind: crate::assets::ShaderTextureKind, texture: &crate::resources::RendererTexture) -> crate::error::Result<()>;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\renderer_shader.rs:385`

Checks that `texture` fits a slot of `slot_kind`, and names both when it
does not.

A cubemap bound where a shader reads a 2D image (or the other way round)
would fail wgpu's bind group validation with a message about view
dimensions. This check runs while the names are still known, so the error
can say which slot and which texture.

## Errors

Returns [`RendererError::Other`] when the texture's view shape differs from
the shape the slot declares.
