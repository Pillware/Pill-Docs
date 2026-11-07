<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1366"></a>

# Module `pill_master_renderer_data::components`

Source: `extensions\pill_master_renderer\pill_master_renderer_data\src\components\mod.rs:1`

The world-side draw components and [`register_components`](fn.register_components.md#rustdoc-item-1364).
The components a game places in the world for the master renderer.

## Responsibilities

- Declare this renderer's own components, one per submodule: the mesh
  renderer and the directional light.
- Re-export the scene types every renderer shares - the camera component and
  the viewport rectangle from the renderer contract, the transform component
  from the engine - so a game imports them all from here.
- Register the components with the world through [`register_components`](fn.register_components.md#rustdoc-item-1364),
  field layouts included, for the C# mirror codegen and the editor.

## Design

The component structs are `#[repr(C)]`, which fixes their byte layout for
the C# mirror. They derive `Serialize` and `Deserialize` because the reload
migration reads a stored component through them and writes it back under the
new type. Projects set them and the C# mirror binds their fields: they are
the renderer's public scene contract.

**Every component pins its shared name.** Without the pinned name the
`PillComponent` derive builds one from `module_path!()`, so the identity
follows the module path instead of the type. Moving the component to another
module or crate would then register it as a *different* component, and the
next reload would stop finding the columns a live world already holds for
it. The pinned strings do not spell this module's path; keep them verbatim
instead of deriving a new one.

## Module contents

### Modules
- [`directional_light`](directional_light/index.md#rustdoc-item-1363) — The directional light a scene declares.
- [`mesh_renderer`](mesh_renderer/index.md#rustdoc-item-1369) — The mesh renderer component, and the builder that assembles one.

### Functions
- [`register_components`](fn.register_components.md#rustdoc-item-1364) — Registers the renderer's scene components with the world, field layouts

## Re-exports

- `pub use pill_engine::common_components::TransformComponent;`
- `pub use pill_renderer_api::components::CameraComponent;`
- `pub use pill_renderer_api::components::RenderViewport;`
- [`pub use directional_light::DirectionalLightComponent;`](directional_light/struct.DirectionalLightComponent.md#rustdoc-item-1314)
- [`pub use mesh_renderer::MeshRendererComponent;`](mesh_renderer/struct.MeshRendererComponent.md#rustdoc-item-1368)
- [`pub use mesh_renderer::MeshRendererComponentBuilder;`](mesh_renderer/struct.MeshRendererComponentBuilder.md#rustdoc-item-1370)
