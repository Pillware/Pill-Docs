# Rendering

## Summary

Rendering turns your world into a picture. You never draw anything yourself. You describe the scene with components, and after your ECS systems have run each update, the renderer reads those components and draws them.

An entity is drawn when it has a `TransformComponent` and a `MeshRendererComponent`. The world also needs one entity with a `CameraComponent` to look through. Pill's renderer, the **master renderer**, is on in every project by default and starts with a ready-made **PBR pipeline**: lit meshes, an optional sky, bloom, tone mapping and a final colour grade.

## At a glance

| You want...                             | Add or change                                                   |
| --------------------------------------- | --------------------------------------------------------------- |
| an object on screen                     | an entity with `TransformComponent` and `MeshRendererComponent` |
| a point of view                         | an entity with `TransformComponent` and `CameraComponent`       |
| a shape                                 | a `Mesh` asset, from an `.obj` file                             |
| a surface look                          | a `Material` asset, usually a `.material` file                  |
| an image on a surface                   | a `Texture` asset, from a `.png`, `.jpg` or `.hdr` file         |
| a sky                                   | a sky material, passed to `pbr_pipeline::set_skybox`            |
| a different look for the whole picture  | another pipeline, set on the `RenderingManager` resource        |
| your own shading                        | an HLSL shader under `res`, named by a material                 |
| lines and labels while debugging        | the `DebugDraw` resource                                        |

The renderer's types come from the crate `pill_master_renderer_data`. Your project depends on it in its `Cargo.toml`, with `default-features = false`, the same way every example project does.

## What do I need to put something on screen?

You need a camera and at least one drawable entity. Both need a `TransformComponent`, which says where they are, how they are rotated and how they are scaled.

| Component               | What it says                         |
| ----------------------- | ------------------------------------ |
| `TransformComponent`    | where the entity is                  |
| `CameraComponent`       | "look at the world from here"        |
| `MeshRendererComponent` | "draw this mesh with this material"  |

A **mesh** is a shape: its vertices and triangles. A **material** says how the shape looks: which shader colours it, and which colours, numbers and textures that shader reads. Both are [assets](../concepts/assets.md), so the component holds only a handle to each.

> **Example:** this function loads a cube's mesh and material from `res`, then adds a camera and the cube. Call it from your project's `init`.
>
> ```rust
> use std::path::Path;
>
> use pill_engine::*;
> use pill_master_renderer_data::{
>     CameraComponent, Material, Mesh, MeshRendererComponent, TransformComponent,
> };
>
> // Loads the cube's mesh and material, then adds a camera and the cube.
> fn build_scene(world: &mut World) -> Result<(), Box<dyn std::error::Error>> {
>     // The shape and the look, both files under `res`.
>     let cube_mesh = world.load_asset::<Mesh>("models/cube.obj")?;
>     let cube_material = world
>         .get_resource_mut::<AssetManager>()
>         .ok_or("the AssetManager is missing")?
>         .import_standalone::<Material>(Path::new("materials/cube.material"))?
>         .handle;
>
>     // The camera, 5 units along +Z. With no rotation it looks along -Z,
>     // so it sees the origin.
>     world
>         .create_entity()
>         .with(CameraComponent::default())
>         .with(TransformComponent {
>             translation: [0.0, 0.0, 5.0],
>             ..Default::default()
>         })
>         .build()?;
>
>     // The cube, at the origin.
>     world
>         .create_entity()
>         .with(TransformComponent::default())
>         .with(
>             MeshRendererComponent::builder()
>                 .mesh(&cube_mesh)
>                 .material(&cube_material)
>                 .build(),
>         )
>         .build()?;
>     Ok(())
> }
> ```
>
> The `cube` example (`examples/cube/cube_rust`) is this project, complete, with the mesh and material files.

That is all the rendering code a project needs. To move the cube, change its `TransformComponent` in an ECS system. The renderer draws the new position in the same update.

## What happens every update?

Every update has two halves: your code changes the world, then the renderer draws it.

```text
 your ECS systems         the `rendering` ECS system        the renderer
 and scripts        ──►   reads cameras, transforms   ──►   draws every view
 change components        and mesh renderers                and shows the picture
```

- The `rendering` ECS system runs in the `post_project` phase, after your ECS systems and script components. So it always sees the final positions of the update.
- Your project never calls the renderer. Adding, changing and removing components is the whole interface.
- In the editor, rendering also runs while you edit, so the Scene views show your scene before you press Play.

## How does the camera work?

The camera entity's `TransformComponent` places it, and its `CameraComponent` says how it sees. A camera with no rotation looks along -Z. The renderer only draws perspective views.

| Field          | Default  | What it does                                                      |
| -------------- | -------- | ----------------------------------------------------------------- |
| `enabled`      | `true`   | a disabled camera is never used                                   |
| `priority`     | `0`      | when several cameras are enabled, the highest priority wins       |
| `vertical_fov` | `60.0`   | vertical field of view, in degrees                                |
| `near`         | `0.1`    | the closest distance that is drawn, in world units                |
| `far`          | `1000.0` | the furthest distance that is drawn, in world units               |

- **Several cameras:** the window shows the enabled camera with the highest `priority`. When two have the same priority, the one with the lower entity id wins, so the choice does not change from one update to the next.
- **No enabled camera:** nothing is drawn. This is not an error, and the log does not report it as one.
- **A value the renderer cannot use**, such as a field of view of 0 or a far plane in front of the near plane, is replaced with a working default instead of breaking the picture.
- **In the editor**, the Scene views use the editor's own cameras, which are not entities in your world. The Game tab shows your project through your camera, chosen by the rules above.

## What are meshes, textures and materials?

They are the three kinds of asset a drawn entity uses. Each comes from a file in `res`, or from your code.

| Asset      | Files                          | Import settings in its `.meta`                                        |
| ---------- | ------------------------------ | --------------------------------------------------------------------- |
| `Mesh`     | `.obj`                         | `flip_v` and `calculate_tangents`, both `true` by default             |
| `Texture`  | `.png`, `.jpg`, `.jpeg`, `.hdr` | `texture_type`: `Color` (default), `Normal`, `Equirect` or `Cubemap` |
| `Material` | `.material`, written by Pill   | none: the file itself is the asset                                    |

### Which texture type should I use?

The texture type tells the renderer how to read the image. The bytes alone do not say whether they are colours or directions.

- **`Color`** for anything you see as colour: base colour, emissive. Pill converts it from sRGB to linear light before a shader reads it.
- **`Normal`** for normal maps. The values are read exactly as stored. A normal map imported as `Color` is converted like a colour, and its lighting comes out wrong.
- **`Equirect`** and **`Cubemap`** for skies, usually from an `.hdr` file. See [How do I add a sky?](#how-do-i-add-a-sky).

Set the type in the texture's `.meta` file, or choose it when you import the texture for the first time:

```rust
assets.import(
    AssetImport::<Texture>::new("textures/brick_normal.png", MetadataPolicy::CreateIfMissing)
        .with_initial_settings(TextureImportSettings {
            texture_type: TextureType::Normal,
        }),
)?;
```

## How do I make a material for the default pipeline?

Use the PBR shader, and set its four numbers and up to four textures. The default pipeline only draws materials that use this shader.

A material holds:

- the **shader** that colours the surface,
- **parameters**: named numbers and colours the shader reads,
- **textures**: named images the shader reads,
- a **rendering order** (see [Can I control which material draws first?](#can-i-control-which-material-draws-first)).

The PBR shader reads these slots:

| Slot                 | Kind               | What it does                                                                   |
| -------------------- | ------------------ | ------------------------------------------------------------------------------ |
| `pbr_base`           | colour parameter   | the base colour, multiplied with the `base_color` texture                      |
| `pbr_roughness`      | number parameter   | 0 is mirror-smooth, 1 is fully matte; multiplied with the map's green channel  |
| `pbr_metallic`       | number parameter   | 0 is non-metal, 1 is metal; multiplied with the map's blue channel             |
| `pbr_emissive`       | colour parameter   | light the surface gives off, multiplied with the `emissive` texture            |
| `base_color`         | texture (`Color`)  | the surface's colour                                                           |
| `normal`             | texture (`Normal`) | small surface detail for the lighting                                          |
| `metallic_roughness` | texture            | glTF layout: roughness in green, metallic in blue                              |
| `emissive`           | texture (`Color`)  | where and in which colour the surface glows                                    |

A texture slot you leave empty reads a plain white texture (a flat normal for `normal`). So with no textures, each parameter is used as it is.

**A new material glows white.** A `.material` you create in the editor starts with every factor at `1.0` and no textures. With white textures behind them, that is fully metallic, fully rough and emitting white light. For an ordinary surface, set `pbr_metallic` to `0.0` and `pbr_emissive` to black.

An emissive colour brighter than `1.0` makes the surface glow: the bloom pass spreads light around it.

### As a file

A `.material` file is YAML. This is the `cube` example's material:

```yaml
format_version: 1
asset_type: pill_master_renderer::assets::Material
guid: 0000000000000000000000000000c002
asset:
  shader: 8cedb4197c9f26a86708b1cd14399eab   # the PBR shader
  textures: {}
  parameters:
    pbr_base:
      Color: [0.8, 0.8, 0.82]
    pbr_emissive:
      Color: [0.0, 0.0, 0.0]
    pbr_metallic:
      Scalar: 0.0
    pbr_roughness:
      Scalar: 0.35
  rendering_order: 255
```

- `guid` identifies this material. Any 32-digit hex value works if no other asset in the project uses it. The editor writes one for you when it creates the file.
- `shader` and the values under `textures` are guids too: the shader's, and each texture's from its own `.meta` file.

> **Example:** a material with a texture names it by slot and guid:
>
> ```yaml
> textures:
>   base_color: e5563cb06bb16148943b2da7de466e1d   # the guid in grid.png.meta
> ```

**Load textures before the materials that use them.** A material file finds its textures (and its shader) by guid when it loads. A guid whose asset is not loaded yet resolves to nothing: the texture slot falls back to white, and the shader falls back to the renderer's built-in one, which the default pipeline does not draw. The log then says `asset reference resolves to no loaded asset; using the invalid handle`.

### In code

Build the material with `Material::builder` and add it to the `AssetManager`. Always name a shader: a builder that names none uses the built-in shader, which the default pipeline does not draw.

```rust
use pill_master_renderer_data::{config::pbr_pipeline, Material, Shader};

let assets = world
    .get_resource_mut::<AssetManager>()
    .ok_or("the AssetManager is missing")?;
let pbr_shader = assets
    .handle_by_name::<Shader>(pbr_pipeline::SHADER_PATH)
    .ok_or("the PBR shader is not installed")?;
let red = assets.add(
    Material::builder("red")
        .shader(&pbr_shader)
        .color_parameter("pbr_base", [0.8, 0.1, 0.1])
        .scalar_parameter("pbr_roughness", 0.4)
        .scalar_parameter("pbr_metallic", 0.0)
        .color_parameter("pbr_emissive", [0.0, 0.0, 0.0])
        .build(),
);
```

A material created in code has no file and no guid, so a scene cannot save a reference to it. See [Assets](../concepts/assets.md).

To change a material while the project runs, change it through its handle (`assets.get_mut(red)`). Every entity that uses it changes in the same update.

## Why does adding a light not change the picture?

Because the shipped shaders keep their lights inside the shader. The PBR shader lights every surface with three fixed directional lights and a flat ambient term. There are no shadows and no image-based lighting yet.

`DirectionalLightComponent` exists: the editor shows it and scenes save it. But no shipped pass reads it, so it changes nothing you see. The development host warns about it: `entities carry a render component the active renderer does not draw; it has no effect on the picture`.

To light a scene differently today, write your own shader (see [How do I write my own shader?](#how-do-i-write-my-own-shader)).

## How do I add a sky?

Give the default pipeline a **sky material**: a material whose shader is one of the two sky shaders, with a sky texture in its `sky` slot. The sky is drawn only where no mesh was drawn.

1. Import a panorama, usually an `.hdr` file, with the texture type `Equirect`.
2. Write a material that names the equirect sky shader and the texture:

    ```yaml
    format_version: 1
    asset_type: pill_master_renderer::assets::Material
    guid: 7d3e1f0a9b8c4d2e6f1a3b5c7d9e0f12
    asset:
      shader: 5628c9e4d9278fec79998a7adab65bc3   # the equirect sky shader
      textures:
        sky: <the guid in your .hdr file's .meta>
      parameters:
        skybox_tint:
          Color: [1.0, 1.0, 1.0]
        skybox_exposure:
          Scalar: 1.0
        skybox_rotation:
          Scalar: 0.0   # degrees
      rendering_order: 255
    ```

3. Load the texture, then the material, and hand the material to the pipeline:

    ```rust
    use pill_master_renderer_data::{config::pbr_pipeline, Material, Texture, TextureImportSettings, TextureType};

    assets.import(
        AssetImport::<Texture>::new("textures/sky.hdr", MetadataPolicy::CreateIfMissing)
            .with_initial_settings(TextureImportSettings {
                texture_type: TextureType::Equirect,
            }),
    )?;
    let sky = assets
        .import_standalone::<Material>(Path::new("materials/sky.material"))?
        .handle;
    pbr_pipeline::set_skybox(assets, Some(sky))?;
    ```

`pbr_pipeline::set_skybox(assets, None)` turns the sky off again. A texture imported as `Cubemap` works with the cubemap sky shader, `a6dfb611b11dfb57c5039dd8b6fc1a46`.

## How do I change how the whole picture looks?

Choose another **pipeline**. A pipeline is an ordered list of **passes**, and each pass is one drawing step. The `RenderingManager` resource holds the pipeline the renderer runs.

The default PBR pipeline has these passes:

| Pass        | What it does                                                             |
| ----------- | ------------------------------------------------------------------------ |
| opaque      | draws every mesh whose material uses the PBR shader                      |
| skybox      | draws the sky behind the meshes, once you set one                        |
| bloom       | finds the brightest parts of the picture                                 |
| composite   | adds their glow back over the picture                                    |
| tonemap     | brings very bright values into the range a screen can show               |
| lens        | adds film grain, a colour grade and a vignette, and writes the window    |

You can pick one of these pipelines:

| Pipeline           | How to choose it                                    | What you get                                                        |
| ------------------ | --------------------------------------------------- | ------------------------------------------------------------------- |
| PBR (the default)  | nothing to do                                       | lit meshes, bloom, tone mapping, colour grade                        |
| simple             | `simple_pipeline::install`, then `set_pipeline`     | one lit pass straight to the window, no post-processing              |
| built-in           | `RenderingManager::clear()`                         | one pass that draws every material through its own shader            |
| your own           | build `RenderPass` and `RenderingPipeline` assets   | anything; see [How rendering works](../../engine_guide/rendering/rendering.md) |

> **Example:** the `cube_no_editor` example switches to the simple pipeline and builds a material for its shader. The simple shader reads `tint` and `specularity`, and the textures `color` and `normal`, so a PBR material does not fit it.
>
> ```rust
> use pill_master_renderer_data::{config::simple_pipeline, Material, RenderingManager, Shader};
>
> let assets = world
>     .get_resource_mut::<AssetManager>()
>     .ok_or("the AssetManager is missing")?;
> let pipeline = simple_pipeline::install(assets)?;
> let shader = assets
>     .handle_by_name::<Shader>(simple_pipeline::SHADER_PATH)
>     .ok_or("the simple pipeline has no shader")?;
> let material = assets.add(
>     Material::builder("cube")
>         .shader(&shader)
>         .color_parameter("tint", [0.2, 0.6, 1.0])
>         .build(),
> );
>
> world
>     .get_resource_mut::<RenderingManager>()
>     .ok_or("the RenderingManager is missing")?
>     .set_pipeline(pipeline);
> ```

The renderer starts using a new pipeline in the next update. In the editor, a pipeline your project sets during Play is put back when you press Stop.

## Can I control which material draws first?

Yes, with the material's `rendering_order`. Inside a pass, materials with a **higher** value draw **earlier**. The default is `255`, the highest, so a material you give a lower value draws after the others.

This is what lets a see-through material draw after the solid ones. Blending itself is a setting of the pass, not of the material.

## How do I write my own shader?

Write the fragment stage in HLSL under `res`, describe its inputs in a `.meta` file beside it, and load it like any other asset. Pill compiles it to the format the GPU runs.

1. **Name the file after its stage.** A fragment stage is `<name>_fragment.hlsl`, and its entry point is `fs_main`. A file named any other way is refused.
2. **Write `<name>_fragment.hlsl.meta` by hand.** It names the vertex stage to pair with, and every parameter and texture the shader reads.
3. **Load it** with `world.load_asset::<Shader>("shaders/<name>_fragment.hlsl")`.
4. **Name it in a material**, and make sure a pass draws it (see below).

> **Example:** an unlit shader, `res/shaders/unlit_fragment.hlsl`, that shows a texture times a tint with no lighting:
>
> ```hlsl
> // What the default vertex stage hands every pixel, in this order.
> struct PixelInput
> {
>     [[vk::location(0)]] float3 tangent_space_position : TEXCOORD0;
>     [[vk::location(1)]] float2 texture_coordinates    : TEXCOORD1;
>     [[vk::location(2)]] float3 tangent                : TEXCOORD2;
>     [[vk::location(3)]] float3 bitangent              : TEXCOORD3;
>     [[vk::location(4)]] float3 normal                 : TEXCOORD4;
>     [[vk::location(5)]] float3 world_position         : TEXCOORD5;
> };
>
> // One float4 per parameter, in the order the .meta lists them.
> struct MaterialParams
> {
>     float4 tint;
> };
>
> [[vk::binding(0, 2)]] ConstantBuffer<MaterialParams> material;
> [[vk::binding(0, 3)]] Texture2D color_texture;
> [[vk::binding(1, 3)]] SamplerState color_sampler;
>
> struct PixelOutput
> {
>     [[vk::location(0)]] float4 color : SV_TARGET0;
> };
>
> [shader("fragment")]
> PixelOutput fs_main(PixelInput input)
> {
>     PixelOutput output;
>     float4 sampled = color_texture.Sample(color_sampler, input.texture_coordinates);
>     output.color = float4(sampled.rgb * material.tint.rgb, 1.0);
>     return output;
> }
> ```
>
> And its `unlit_fragment.hlsl.meta`:
>
> ```yaml
> format_version: 1
> asset_type: pill_master_renderer::assets::Shader
> guid: 3f1c0d9e8b7a46e5a2c4d6e8f0a1b2c3
> settings:
>   vertex: common_shaders/default_vertex.wgsl
>   parameters:
>   - name: tint
>     type: Color
>   textures:
>   - name: color
>     type: Color
>     texture_binding: 0
>     sampler_binding: 1
>   engine_parameters: true
>   camera_parameters: true
> ```

### What are the rules a shader has to follow?

- **Every parameter takes one `float4`**, in the order the `.meta` lists them. A `Color` is in `.xyz`, a `Scalar` in `.x`, and a `Bool` is the integer 0 or 1 in `.x` (declare that slot as `uint4`). Declaring two parameters in one `float4` reads the wrong values.
- **Parameters are matched by name.** A material value whose name the shader does not list is ignored. A listed parameter the material does not set reads as zero.
- **Resources sit in four fixed groups:** group 0 holds engine values, group 1 the camera, group 2 the parameters (at binding 0), and group 3 the textures, at the bindings the `.meta` gives.
- **Keep `engine_parameters` and `camera_parameters` on** when you pair with the default vertex stage `common_shaders/default_vertex.wgsl`, as every shipped lit shader does.
- **Texture types:** `Color`, `Normal`, `Equirect`, `Cubemap`, or `Depth` for a depth buffer, which only a pass can supply.

### Which pass draws my shader?

That depends on the pipeline, because a pass chooses which materials it draws.

- **Simple or built-in pipeline:** your material just draws. These pipelines draw a material whose shader no pass names through that material's own shader.
- **PBR pipeline (the default):** the opaque pass draws only materials that use the PBR shader. Add a pass for your shader that writes the same picture, `hdr`, so your meshes still get bloom and tone mapping:

    ```rust
    use pill_master_renderer_data::{
        config::pbr_pipeline, PassTarget, PipelinePass, RenderPass, RenderingPipeline,
    };

    // `unlit_shader` is the handle `world.load_asset::<Shader>` returned in step 3.
    let unlit_pass = assets.add(
        RenderPass::new("my_project.unlit")
            .with_shader(unlit_shader)
            .with_target(PassTarget::Offscreen("hdr".to_owned())),
    );
    let pipeline = assets
        .handle_by_name::<RenderingPipeline>(pbr_pipeline::PIPELINE_NAME)
        .ok_or("the PBR pipeline is not installed")?;
    // Right after the opaque pass, which is the pipeline's first entry.
    assets
        .get_mut(pipeline)
        .ok_or("the PBR pipeline is gone")?
        .passes
        .insert(1, PipelinePass::new(unlit_pass));
    ```

### How are shaders compiled?

Pill compiles HLSL to WGSL, the shader language the GPU library runs, with a tool called `slangc`. Install it and put it on your `PATH`, or point `PILL_SLANGC` at it:

```powershell
$env:PILL_SLANGC = "C:/tools/slang/bin/slangc.exe"
```
```cmd
set PILL_SLANGC=C:/tools/slang/bin/slangc.exe
```
```bash
export PILL_SLANGC="C:/tools/slang/bin/slangc.exe"
```

- The development host compiles your project's shaders when it starts. The result, `<name>_fragment.wgsl`, sits beside the source.
- While the host runs, saving a `.hlsl` file compiles it again, and the new version draws a moment later without rebuilding any module. `PILL_ASSETS_HOT_RELOADING=0` turns this off.
- A shader that does not compile is reported in the log, and the previous version keeps drawing.
- A shipping bundle compiles your shaders before it packs `res`.
- Put shared code in a folder named `include` anywhere under `res`. Every `include` folder is on every shader's include path.

## How do I draw debug lines and labels?

Use the `DebugDraw` resource from any ECS system. A line or label you add is drawn on top of the picture for one update, unless you give it a lifetime.

```rust
// Draws a red line from each entity straight up, one unit long.
#[system]
fn show_up_vectors(
    mut debug_draw: ResMut<DebugDraw>,
    mut query: Query<&TransformComponent>,
) {
    let Some(mut debug_draw) = debug_draw.get_mut() else {
        return;
    };
    for transform in query.iter_mut() {
        let [x, y, z] = transform.translation;
        debug_draw.line([x, y, z], [x, y + 1.0, z], DebugStyle::colored([1.0, 0.0, 0.0, 1.0]));
    }
}
```

- `DebugDraw` also draws boxes (`aabb`), circles, spheres, arrows and text labels (`label_world`, `label_screen`).
- `DebugStyle` sets the colour, whether meshes in front hide the line (`depth_test`, on by default) and how long it stays (`lifetime`).
- Debug drawing is always on in the development host. In a shipping or browser build it starts as the `debug_draw:` key in `project_settings.yaml` says (off when absent), and `set_enabled` switches it while the project runs.

## Why can't I see my object?

Check these, in order:

| What you see                         | Likely cause                                                                                  |
| ------------------------------------ | --------------------------------------------------------------------------------------------- |
| nothing at all                       | no entity has an enabled `CameraComponent`                                                    |
| the object is missing                | its mesh or material handle no longer points at a loaded asset, so the entity is skipped      |
| the object is missing                | its material does not use the PBR shader, and the pipeline has no pass for that shader        |
| the object is missing                | the material loaded before its shader, so it fell back to the built-in shader                 |
| the object is missing                | it is behind the camera, closer than `near` or further than `far`                             |
| you see through parts of it          | you are looking at the back of its triangles, which are not drawn                             |
| it glows white                       | it is a new material: set `pbr_emissive` to black                                             |
| its texture is white                 | the material loaded before the texture                                                        |

The log helps too. Rendering writes under the `engine::rendering` target, and `[render] frame draws` reports how many passes drew something each time that number changes. For more detail, raise the level in `project_settings.yaml`:

```yaml
logging:
  targets:
    engine::rendering: debug
```

## Where is this in the code?

| What                                                     | Where                                                              |
| -------------------------------------------------------- | ------------------------------------------------------------------ |
| `CameraComponent`                                        | `pill_renderer_api`, `components/camera.rs`                        |
| `MeshRendererComponent`, `DirectionalLightComponent`     | `pill_master_renderer_data`, `components/`                         |
| `Mesh`, `Texture`, `Shader`, `Material`                  | `pill_master_renderer_data`, `assets/`                             |
| `RenderPass`, `RenderingPipeline`                        | `pill_master_renderer_data`, `assets/render_pass.rs`, `assets/rendering_pipeline.rs` |
| `RenderingManager`                                       | `pill_master_renderer_data`, `rendering_manager.rs`                |
| The PBR, simple and sky pipelines                        | `pill_master_renderer_data`, `config/`                             |
| The default material file                                | `pill_master_renderer_data`, `res/defaults/pill.pbr.material`      |
| The shipped shaders                                      | `pill_master_renderer_data`, `shader_sources/`                     |
| The `rendering` ECS system                               | `pill_master_renderer` (the GPU module), `frame.rs`                |
| `DebugDraw`                                              | `pill_engine_core`, `services/debug_draw.rs`                       |
| A project with mesh and material files                   | `examples/cube/cube_rust`                                          |
| A project that builds its material in code               | `examples/cube_no_editor/cube_no_editor_rust`                      |
| A project with textures and emissive glow                | `examples/pills/pills_rust`                                        |

## Where to read next

- [Assets](../concepts/assets.md): handles, guids and `.meta` files.
- [ECS systems](../concepts/systems.md): the phases, and where `rendering` runs among them.
- [Profiling](../advanced/profiling.md): measuring how long rendering takes.
- [How rendering works](../../engine_guide/rendering/rendering.md): the renderer from the inside, for engine developers.
