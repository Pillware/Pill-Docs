<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-248"></a>

# Module `pill_master_renderer_data::assets`

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\assets\mod.rs:1`

The drawable assets - meshes, textures, shaders, materials, passes - and the
builders that create them.
Game-facing renderer assets stored in the world's `AssetManager`.

## Responsibilities

- Own the asset types a project draws from - [`Mesh`](mesh/struct.Mesh.md#rustdoc-item-314), [`Texture`](texture/struct.Texture.md#rustdoc-item-2),
  [`Shader`](shader/struct.Shader.md#rustdoc-item-92), [`Material`](material/struct.Material.md#rustdoc-item-100), [`RenderPass`](render_pass/struct.RenderPass.md#rustdoc-item-93), [`RenderingPipeline`](rendering_pipeline/struct.RenderingPipeline.md#rustdoc-item-435) - and
  re-export them flat, so a game names them without their submodule.
- Carry each type's builder and binding declarations: [`MaterialBuilder`](material/struct.MaterialBuilder.md#rustdoc-item-99),
  [`ShaderBuilder`](shader/struct.ShaderBuilder.md#rustdoc-item-959), the parameter and texture slot types, and the helpers
  that key slot lists by the names they carry.
- Register every asset type behind `dyn Asset`, the bound every
  `AssetManager` method asks for, so the store holds as many of each as a
  game wants.
- Provide [`asset_key`], which packs a handle's index and generation into
  the `u64` the renderer's caches use as their key.

## Design

Each asset type is plain data plus a declaration. A game builds it, the
`AssetManager` owns it, and the renderer reads it while building a frame.
The GPU side - caches, pipelines and bind groups - lives in the GPU module
(`pill_master_renderer`), which links this crate. [`asset_key`] puts a
handle's generation above its index, so one `u64` tells a cache which asset
is meant and which version of it a resource was built from.

## Module contents

### Modules
- [`material`](material/index.md#rustdoc-item-161) — Material assets connecting shaders, textures, and uniform parameters.
- [`mesh`](mesh/index.md#rustdoc-item-324) — Mesh assets: the vertices and indices the renderer draws, and the decoders
- [`render_pass`](render_pass/index.md#rustdoc-item-544) — A render pass, described as data instead of as code.
- [`rendering_pipeline`](rendering_pipeline/index.md#rustdoc-item-726) — An ordered list of passes, as one asset.
- [`shader`](shader/index.md#rustdoc-item-1008) — Shader assets and their material binding declarations.
- [`texture`](texture/index.md#rustdoc-item-1176) — Texture assets: the texels the renderer uploads, and how they are read.

### Functions
- [`asset_key`](fn.asset_key.md#rustdoc-item-1308) — Turns a typed asset handle into the key the renderer's caches use.

## Re-exports

- `pub use pill_renderer_api::frame::CullMode;`
- `pub use pill_renderer_api::frame::MaterialParameter;`
- `pub use pill_renderer_api::frame::PassKind;`
- `pub use pill_renderer_api::frame::PassTarget;`
- [`pub use material::Material;`](material/struct.Material.md#rustdoc-item-100)
- [`pub use material::MaterialBuilder;`](material/struct.MaterialBuilder.md#rustdoc-item-99)
- [`pub use material::MaterialDocument;`](material/struct.MaterialDocument.md#rustdoc-item-149)
- [`pub use material::MaterialTexture;`](material/struct.MaterialTexture.md#rustdoc-item-3)
- [`pub use mesh::Mesh;`](mesh/struct.Mesh.md#rustdoc-item-314)
- [`pub use mesh::MeshImportSettings;`](mesh/struct.MeshImportSettings.md#rustdoc-item-323)
- [`pub use mesh::MeshVertex;`](mesh/struct.MeshVertex.md#rustdoc-item-254)
- [`pub use render_pass::RenderPass;`](render_pass/struct.RenderPass.md#rustdoc-item-93)
- [`pub use render_pass::RenderPassDocument;`](render_pass/struct.RenderPassDocument.md#rustdoc-item-495)
- [`pub use rendering_pipeline::PipelinePass;`](rendering_pipeline/struct.PipelinePass.md#rustdoc-item-547)
- [`pub use rendering_pipeline::PipelinePassDocument;`](rendering_pipeline/struct.PipelinePassDocument.md#rustdoc-item-651)
- [`pub use rendering_pipeline::RenderingPipeline;`](rendering_pipeline/struct.RenderingPipeline.md#rustdoc-item-435)
- [`pub use rendering_pipeline::RenderingPipelineDocument;`](rendering_pipeline/struct.RenderingPipelineDocument.md#rustdoc-item-643)
- [`pub use shader::slots_by_name;`](shader/fn.slots_by_name.md#rustdoc-item-948)
- [`pub use shader::SlotName;`](shader/trait.SlotName.md#rustdoc-item-832)
- [`pub use shader::Shader;`](shader/struct.Shader.md#rustdoc-item-92)
- [`pub use shader::ShaderBuilder;`](shader/struct.ShaderBuilder.md#rustdoc-item-959)
- [`pub use shader::ShaderImportSettings;`](shader/struct.ShaderImportSettings.md#rustdoc-item-1001)
- [`pub use shader::ShaderParameterSlot;`](shader/struct.ShaderParameterSlot.md#rustdoc-item-780)
- [`pub use shader::ShaderParameterType;`](shader/enum.ShaderParameterType.md#rustdoc-item-730)
- [`pub use shader::ShaderTextureKind;`](shader/enum.ShaderTextureKind.md#rustdoc-item-839)
- [`pub use shader::ShaderTextureSlot;`](shader/struct.ShaderTextureSlot.md#rustdoc-item-895)
- [`pub use texture::cube_face_direction;`](texture/fn.cube_face_direction.md#rustdoc-item-1270)
- [`pub use texture::equirect_uv;`](texture/fn.equirect_uv.md#rustdoc-item-1114)
- [`pub use texture::load_shipped_texture;`](texture/fn.load_shipped_texture.md#rustdoc-item-1272)
- [`pub use texture::project_equirect_to_cubemap;`](texture/fn.project_equirect_to_cubemap.md#rustdoc-item-1116)
- [`pub use texture::Texture;`](texture/struct.Texture.md#rustdoc-item-2)
- [`pub use texture::TextureImportSettings;`](texture/struct.TextureImportSettings.md#rustdoc-item-1220)
- [`pub use texture::TextureType;`](texture/enum.TextureType.md#rustdoc-item-838)
- [`pub use texture::DEFAULT_COLOR_TEXTURE;`](texture/constant.DEFAULT_COLOR_TEXTURE.md#rustdoc-item-1110)
- [`pub use texture::DEFAULT_NORMAL_TEXTURE;`](texture/constant.DEFAULT_NORMAL_TEXTURE.md#rustdoc-item-1111)
