<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2270"></a>

# Module `pill_master_renderer::resources`

Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\resources\mod.rs:1`

One module per resource the renderer keeps, re-exported flat so callers
name them without the path.
The renderer's own resources.

## Responsibilities

- One module per resource the renderer keeps - shaders, materials, meshes,
  textures, cameras and the engine parameters. The folder also holds the GPU
  side of a pass, the storage that owns every handle's slot map, and the
  bind-group builder a pass and a material share.
- Define each resource's handle beside the resource itself, so a handle and
  the type it stores are changed together.
- Re-export the resources flat, so the renderer and the `drawers` module
  reach a resource by name rather than by path. The data crate's
  `RenderingManager` - the pipeline a game picks - is re-exported here too.

## Module contents

### Modules
- [`engine_parameters`](engine_parameters/index.md#rustdoc-item-2269) — The engine-wide uniform block a pass may read.
- [`renderer_camera`](renderer_camera/index.md#rustdoc-item-2273) — The camera values the shaders read, and the GPU resources that carry them.
- [`renderer_material`](renderer_material/index.md#rustdoc-item-2412) — What one material becomes on the GPU: the bind groups its draws bind.
- [`renderer_mesh`](renderer_mesh/index.md#rustdoc-item-2496) — The GPU side of a mesh: the vertex and index buffers one uploaded mesh is
- [`renderer_pass`](renderer_pass/index.md#rustdoc-item-2616) — The GPU side of one pass of the chain.
- [`renderer_resource_storage`](renderer_resource_storage/index.md#rustdoc-item-2638) — GPU-side storage for every resource the renderer holds.
- [`renderer_shader`](renderer_shader/index.md#rustdoc-item-2669) — What a shader asset becomes on the GPU: its render pipeline and the
- [`renderer_texture`](renderer_texture/index.md#rustdoc-item-2802) — The GPU textures the renderer samples and renders into.
- [`shader_bindings`](shader_bindings/index.md#rustdoc-item-2889) — The bind groups a shader's declared slots resolve to, built once for each

## Re-exports

- [`pub use engine_parameters::EngineParameters;`](engine_parameters/struct.EngineParameters.md#rustdoc-item-2238)
- [`pub use renderer_camera::RendererCamera;`](renderer_camera/struct.RendererCamera.md#rustdoc-item-26)
- [`pub use renderer_material::RendererMaterial;`](renderer_material/struct.RendererMaterial.md#rustdoc-item-2464)
- [`pub use renderer_mesh::RendererMesh;`](renderer_mesh/struct.RendererMesh.md#rustdoc-item-2544)
- [`pub use renderer_mesh::Vertex;`](renderer_mesh/trait.Vertex.md#rustdoc-item-333)
- [`pub use renderer_pass::RendererPass;`](renderer_pass/struct.RendererPass.md#rustdoc-item-372)
- [`pub use renderer_resource_storage::RendererResourceStorage;`](renderer_resource_storage/struct.RendererResourceStorage.md#rustdoc-item-24)
- [`pub use renderer_shader::RendererShader;`](renderer_shader/struct.RendererShader.md#rustdoc-item-2588)
- [`pub use renderer_shader::UniformGroups;`](renderer_shader/struct.UniformGroups.md#rustdoc-item-2728)
- [`pub use renderer_texture::RendererTexture;`](renderer_texture/struct.RendererTexture.md#rustdoc-item-497)
- `pub use pill_master_renderer_data::RenderingManager;`
