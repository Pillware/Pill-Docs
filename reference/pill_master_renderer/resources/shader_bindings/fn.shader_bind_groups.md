<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2848"></a>

# Function `pill_master_renderer::resources::shader_bindings::shader_bind_groups`

```rust
pub(crate) fn shader_bind_groups<'views, impl Fn(&str, &ShaderTextureSlot) -> Result<Option<(&'views wgpu::TextureView, &'views wgpu::Sampler)>>: Fn(&str, &crate::assets::ShaderTextureSlot) -> crate::error::Result<Option<(&'views wgpu::TextureView, &'views wgpu::Sampler)>>>(device: &wgpu::Device, queue: &wgpu::Queue, rendering_resource_storage: &crate::resources::RendererResourceStorage, owner_label: &str, shader: &crate::resources::RendererShader, parameters: &std::collections::BTreeMap<String, pill_renderer_api::frame::MaterialParameter>, textures: &[(String, renderer_texture::RendererTextureHandle)], resolve_extra_texture: impl Fn(&str, &crate::assets::ShaderTextureSlot) -> crate::error::Result<Option<(&'views wgpu::TextureView, &'views wgpu::Sampler)>>) -> crate::error::Result<(Option<wgpu::BindGroup>, Option<wgpu::BindGroup>)>;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\resources\shader_bindings.rs:139`

Builds the parameters and textures bind groups a shader reads, for one
material or pass.

`owner_label` names the material or pass being built. It appears in the
debug labels and in every message about a slot, so a refused slot says what
asked for it.

`resolve_extra_texture` is the caller's own source of textures: a pass's
inputs, and nothing for a material. It runs before the textures the material
or pass names, so an input a pass names wins over a texture of the same slot
name.

## Errors

Returns [`RendererError`](crate::RendererError) when a slot cannot be
resolved: a source the caller could not produce, a depth slot with no
source, a texture that is not loaded, or a texture whose view shape does not
match its slot. It also returns it when a shader declares slots but has no
layout for them, and when wgpu refuses a group. Group creation runs under
[`capturing_validation`](../../error/fn.capturing_validation.md#rustdoc-item-223), so a refusal becomes an error instead of reaching
wgpu's uncaptured-error handler; a build that cannot capture errors gets
the handler's log instead.
