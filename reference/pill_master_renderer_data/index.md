<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1720"></a>

# pill_master_renderer_data API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

The master renderer's data: the assets, components and pipeline choice a
game draws with, and no graphics stack behind any of it.

## Responsibilities

- Define the assets a project draws from ([`Mesh`](assets/mesh/struct.Mesh.md#rustdoc-item-314), [`Texture`](assets/texture/struct.Texture.md#rustdoc-item-2), [`Shader`](assets/shader/struct.Shader.md#rustdoc-item-92),
  [`Material`](assets/material/struct.Material.md#rustdoc-item-100), [`RenderPass`](assets/render_pass/struct.RenderPass.md#rustdoc-item-93), [`RenderingPipeline`](assets/rendering_pipeline/struct.RenderingPipeline.md#rustdoc-item-435)) and the [`components`](components/index.md#rustdoc-item-1366)
  that place them in the world.
- Define this renderer's pipelines and their shaders ([`config`](config/index.md#rustdoc-item-1481)), and the
  resource a game selects one in ([`RenderingManager`](rendering_manager/struct.RenderingManager.md#rustdoc-item-1633)).
- Register all of it with an engine through [`register`](fn.register.md#rustdoc-item-1475), and install the
  default pipeline.

## Design

This crate never depends on wgpu or winit. It is one of the master
renderer's two crates: this one holds the data, `pill_master_renderer` holds
the GPU code and is the only renderer crate that links the graphics stack.
That split lets a headless build store a game's cameras, meshes and lights
without linking a renderer, and lets the GPU module be reloaded without
registering any data of its own.

This crate builds on `pill_renderer_api`, the contract every renderer
shares: the backend trait, the frame, the pass vocabulary and the camera.
The types a game needs from it are re-exported here.

The shader sources live at the crate root (`shader_sources/`), not under
`src/`, so a shader edit is not a Rust source edit. The [`shader_hot_reload`](shader_hot_reload/index.md#rustdoc-item-1679)
module handles live reload in native development builds: the development
host re-cooks an edited source and hands the result to that module's export.

## Module contents

### Modules
- [`assets`](assets/index.md#rustdoc-item-248) — The drawable assets - meshes, textures, shaders, materials, passes - and the
- [`color_space`](color_space/index.md#rustdoc-item-1311) — The sRGB transfer curve the importer and the GPU module share.
- [`components`](components/index.md#rustdoc-item-1366) — The world-side draw components and [`register_components`].
- [`config`](config/index.md#rustdoc-item-1481) — Bind group indices, the instance batch size, and the pipelines the renderer ships.
- [`rendering_manager`](rendering_manager/index.md#rustdoc-item-1635) — The resource a game sets its pipeline in.
- [`shader_hot_reload`](shader_hot_reload/index.md#rustdoc-item-1679) — Development shader reload: puts the WGSL the host re-cooked into the shader

### Functions
- [`declare_crate_roots`](fn.declare_crate_roots.md#rustdoc-item-1717) — Declares the read-only roots this crate ships, from its own directory.
- [`init`](fn.init.md#rustdoc-item-1716) — The artifact's one-time entry point.
- [`install_default_pbr_pipeline`](fn.install_default_pbr_pipeline.md#rustdoc-item-1718) — Installs [`config::pbr_pipeline`] and points the manager at it.
- [`register`](fn.register.md#rustdoc-item-1475) — Registers the renderer's components, asset types and resources with an

### Constants
- [`MODULE_NAME`](constant.MODULE_NAME.md#rustdoc-item-1714) — The name the host knows this module by, which is its crate name.

## Re-exports

- `pub use pill_engine::AssetLoader;`
- `pub use pill_renderer_api::frame::CullMode;`
- `pub use pill_renderer_api::frame::MaterialParameter;`
- `pub use pill_renderer_api::frame::PassKind;`
- `pub use pill_renderer_api::frame::PassTarget;`
- `pub use pill_renderer_api::frame::RenderFrame;`
- [`pub use assets::load_shipped_texture;`](assets/texture/fn.load_shipped_texture.md#rustdoc-item-1272)
- [`pub use assets::Material;`](assets/material/struct.Material.md#rustdoc-item-100)
- [`pub use assets::MaterialBuilder;`](assets/material/struct.MaterialBuilder.md#rustdoc-item-99)
- [`pub use assets::MaterialDocument;`](assets/material/struct.MaterialDocument.md#rustdoc-item-149)
- [`pub use assets::MaterialTexture;`](assets/material/struct.MaterialTexture.md#rustdoc-item-3)
- [`pub use assets::Mesh;`](assets/mesh/struct.Mesh.md#rustdoc-item-314)
- [`pub use assets::MeshImportSettings;`](assets/mesh/struct.MeshImportSettings.md#rustdoc-item-323)
- [`pub use assets::MeshVertex;`](assets/mesh/struct.MeshVertex.md#rustdoc-item-254)
- [`pub use assets::PipelinePass;`](assets/rendering_pipeline/struct.PipelinePass.md#rustdoc-item-547)
- [`pub use assets::PipelinePassDocument;`](assets/rendering_pipeline/struct.PipelinePassDocument.md#rustdoc-item-651)
- [`pub use assets::RenderPass;`](assets/render_pass/struct.RenderPass.md#rustdoc-item-93)
- [`pub use assets::RenderPassDocument;`](assets/render_pass/struct.RenderPassDocument.md#rustdoc-item-495)
- [`pub use assets::RenderingPipeline;`](assets/rendering_pipeline/struct.RenderingPipeline.md#rustdoc-item-435)
- [`pub use assets::RenderingPipelineDocument;`](assets/rendering_pipeline/struct.RenderingPipelineDocument.md#rustdoc-item-643)
- [`pub use assets::Shader;`](assets/shader/struct.Shader.md#rustdoc-item-92)
- [`pub use assets::ShaderBuilder;`](assets/shader/struct.ShaderBuilder.md#rustdoc-item-959)
- [`pub use assets::ShaderImportSettings;`](assets/shader/struct.ShaderImportSettings.md#rustdoc-item-1001)
- [`pub use assets::ShaderParameterSlot;`](assets/shader/struct.ShaderParameterSlot.md#rustdoc-item-780)
- [`pub use assets::ShaderParameterType;`](assets/shader/enum.ShaderParameterType.md#rustdoc-item-730)
- [`pub use assets::ShaderTextureKind;`](assets/shader/enum.ShaderTextureKind.md#rustdoc-item-839)
- [`pub use assets::ShaderTextureSlot;`](assets/shader/struct.ShaderTextureSlot.md#rustdoc-item-895)
- [`pub use assets::Texture;`](assets/texture/struct.Texture.md#rustdoc-item-2)
- [`pub use assets::TextureImportSettings;`](assets/texture/struct.TextureImportSettings.md#rustdoc-item-1220)
- [`pub use assets::TextureType;`](assets/texture/enum.TextureType.md#rustdoc-item-838)
- [`pub use assets::DEFAULT_COLOR_TEXTURE;`](assets/texture/constant.DEFAULT_COLOR_TEXTURE.md#rustdoc-item-1110)
- [`pub use assets::DEFAULT_NORMAL_TEXTURE;`](assets/texture/constant.DEFAULT_NORMAL_TEXTURE.md#rustdoc-item-1111)
- [`pub use rendering_manager::RenderingManager;`](rendering_manager/struct.RenderingManager.md#rustdoc-item-1633)
- [`pub use components;`](components/index.md#rustdoc-item-1366)
