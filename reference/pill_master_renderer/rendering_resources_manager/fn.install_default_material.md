<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2141"></a>

# Function `pill_master_renderer::rendering_resources_manager::install_default_material`

```rust
pub(in rendering_resources_manager) fn install_default_material(state: &mut crate::renderer::State) -> crate::error::Result<(renderer_shader::RendererShaderHandle, renderer_material::RendererMaterialHandle)>;
```

Visibility: `{'restricted': {'parent': 2056, 'path': '::rendering_resources_manager'}}` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\rendering_resources_manager.rs:697`

Builds the built-in lit shader and a material from it, and returns both.

The material is what an instance draws with when its own material never
built. The shader is what a material draws with when it names none or names
one that is not loaded. The two are built together and kept as one pair.

The WGSL is the shipped pipeline's own text rather than a copy: the vertex
stage comes from `shader_sources/common_shaders/default_vertex.wgsl` and the
fragment from `shader_sources/simple_pipeline/shaders/default_lit_fragment.wgsl`.
`simple_pipeline` names the same shader with the same declared slots, so a
material written for this fallback draws there without being rebuilt.

## Errors

Returns a [`RendererError`](crate::RendererError) when wgpu refuses the
built-in shader's pipeline or the material's bind groups. Both point at this
fallback rather than at a project's own asset.
