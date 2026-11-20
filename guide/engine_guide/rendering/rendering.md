# How rendering works

## Summary

Every update, rendering runs in two halves. First, the `rendering` ECS system reads the world and writes down **what** to draw as plain data: the instances, the pass chain, the camera of every surface, the clock, debug drawing and the editor's requests. Then the frontend hands that data and the asset store to the renderer's `render` method, which turns it into GPU work and presents every surface.

The data in the middle is the reason the renderer can be hot reloaded. Nothing in the world points into the GPU module, so the host can drop the renderer, load a new build of it, and let it rebuild every GPU object from the world and the asset store. Inside the renderer, almost everything is cached and checked against a cheap number (the store's revision, a content version, the chain's generation), so an update in which nothing changed rebuilds nothing.

This page assumes you know the [user guide to rendering](../../user_guide/rendering/rendering.md): cameras, mesh renderers, materials and pipelines from a project's side.

## At a glance

```text
 one update
 ──────────────────────────────────────────────────────────────────────────────────
  your ECS systems ─► scripts ─► post_project ECS systems ─────────────► frontend
                                       │                                   │
                          `rendering` (GPU module, frame.rs)               │
                          reads the world, fills RenderFrame               │
                                                                           ▼
                                             AttachedRenderer::present(world)
                                               │
                                               ├─ renderer.render(&RenderFrame, &AssetManager)
                                               │    1. sync the GPU copy of changed assets
                                               │    2. build and sort the draw queue
                                               │    3. build and upload the instance buffer, once
                                               │    4. plan the pass chain
                                               │    5. per surface: passes, overlay, UI, present
                                               │
                                               └─ move finished picks and previews into the world
```

| Crate                       | Holds                                                                                                               | Links wgpu | Loaded                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------------------------------- |
| `pill_renderer_api`         | the contract: `PillRenderer`, `RenderFrame`, `CameraComponent`, surfaces, picking, previews, the grid               | no         | always; the host links it                    |
| `pill_ui_frame`             | plain UI draw lists the frame carries                                                                               | no         | always; a shared DLL                         |
| `pill_master_renderer_data` | the master renderer's components, its six asset types, `RenderingManager`, the shipped pipelines and shader sources | no         | always, as the first extension, headless too |
| `pill_master_renderer`      | the GPU module: the `rendering` ECS system and everything that talks to the GPU                                     | **yes**    | only when there is a window                  |

## Why is rendering split into collecting and drawing?

So that the only thing the world and the renderer share is plain data.

The `rendering` ECS system lives in the GPU module, but everything it writes is a value from `pill_renderer_api`: asset keys instead of handles, a copy of each camera instead of a reference, owned strings, `BTreeMap`s. The renderer reads that value through a `&RenderFrame` for the length of one call and keeps nothing that points back into it.

Three things follow from that:

- **A headless run uses the same update loop.** The frontend calls `HeadlessRenderer::render`, which returns `FrameOutcome::Skipped`, exactly where it would call the real renderer.
- **The renderer can be swapped while the project runs.** The host only needs the `PillRenderer` trait. It never names wgpu.
- **The frame is a test surface.** A test can fill a world, run the `rendering` ECS system and assert on the `RenderFrame` without a GPU.

The data one update hands the renderer is a `RenderFrame`. The rest of this page calls it **the frame**.

## Which crates make up the renderer, and who links what?

Four crates, arranged so that **only one of them links the GPU library**.

```text
                   pill_renderer_api   ◄────────── the host links this in every mode
                   (contract, no GPU)
                     ▲            ▲
                     │            │
   pill_master_renderer_data      │                 the vocabulary a project writes:
   (data, no GPU)                 │                 components, assets, pipelines
                     ▲            │
                     │            │
               pill_master_renderer                 the GPU module: wgpu, the `rendering`
               (links wgpu)                         ECS system, drawing, overlay, UI painter
```

### Why are the data crate and the GPU module separate?

Because they are needed in different places and change at different speeds.

- **A project depends on the data, never on the GPU code.** A project names `MeshRendererComponent`, `Material` and `RenderingManager`, so its DLL links the crate that defines them. If that crate linked wgpu, every project build, and every project hot reload, would carry it.
- **A headless run needs the data but cannot use a GPU.** Test suites and servers spawn cameras, load materials and save scenes. The host therefore loads the data crate in every run and the GPU module only with a window. Without the data crate, a scene loader would not know `MeshRendererComponent` and would drop it.
- **Reloading the drawing code must not touch the world.** The data crate registers every component and asset type, so the world keeps pointers into the data crate's DLL. The GPU module registers no data at all: its `register` returns 0 and declares nothing. Reloading it touches no component column and no asset table.
- **The editor and C# need the data, not the GPU code.** The Inspector shows a mesh renderer's fields, and the data crate declares that a material's `shader` field takes a `Shader`. C# projects reach the same types through the mirror in the data crate's `managed/` folder.

The split has one cost. The GPU module compiles in its own copy of the data crate's types, so when the data crate changes, the GPU module must be rebuilt too. The development host does that in the same frame boundary (see [What happens when the data crate reloads?](#what-happens-when-the-data-crate-reloads)).

### Why isn't the master renderer's data in `pill_renderer_api`?

Because the contract is shared by every renderer and linked by the host, so changing it needs a host restart.

`MeshRendererComponent`, the PBR material and the bloom chain belong to the master renderer. Another renderer would bring its own data crate. Only what every renderer must understand lives in the contract: `CameraComponent`, `RenderFrame` and the pass vocabulary (`PassKind`, `PassTarget`, `PassSettings`, `MaterialParameter`), which `RenderPass` and `Material` import from there.

## How is the renderer started in each mode?

The same renderer code is reached three ways, and a headless run uses a stub.

| Mode                  | Where the GPU module comes from             | How it is attached                                                       |
| --------------------- | ------------------------------------------- | ------------------------------------------------------------------------ |
| development, windowed | a DLL the development host builds and loads | the `pill_renderer_attach` export, which blocks until the device exists  |
| shipping, windowed    | linked statically into the executable       | `pill_master_renderer::attach`, an `AttachFuture` the frontend blocks on |
| browser               | linked statically, compiled to WebAssembly  | the same future, awaited, because a browser cannot block                 |
| headless, any mode    | not loaded                                  | `HeadlessRenderer`                                                       |

`attach` returns a future because creating a GPU device is asynchronous, and a browser only finishes that work once control returns to its event loop.

In development, the GPU module crosses the DLL boundary as a `Box<Box<dyn PillRenderer>>` behind a raw pointer. The host wraps it in `ModuleRenderer`, calls the trait through it, and hands it back to the module's `pill_renderer_detach` to be dropped. The module allocated the renderer, so the module frees it, while its DLL is still loaded. The two exports are separate named functions rather than one export with an operation number, so a missing export fails at load time with its name.

The `renderer:` key in `project_settings.yaml` picks the renderer: `pill_master_renderer` when absent, `none` for no renderer. The host derives the data crate's name by appending `_data`.

## What does the `rendering` ECS system put in the frame?

Everything the renderer needs for one update, read from the world. It is declared with `#[system(name = "rendering", run_phase = "post_project", run_in_edit_mode = true)]`, so it runs after every project ECS system and every script, and keeps running in the editor while nobody plays.

| Field                                        | Filled from                                                                                          |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `passes`, `chain_source`, `chain_generation` | the pipeline the `RenderingManager` selects, resolved only when it changes                           |
| `seconds`, `delta_seconds`, `sequence`       | `Time`: the frame's own clock grows by the update's delta                                            |
| `debug`                                      | `DebugDraw::collect_frame`, which also ages timed items                                              |
| `outlines`                                   | a copy of the `SelectionOutlines` resource                                                           |
| `pick_requests`, `preview_requests`          | taken out of `PickRequests` and `PreviewRequests`                                                    |
| `surface_views`                              | the camera of every surface that has one this update                                                 |
| `grid_cell_size`, `editor_views`             | `SurfaceCameras`: its grid switch and the surfaces bound to a view camera                            |
| `ui`                                         | taken out of the world's `UiFrameSlot`, when a project installed one                                 |
| `instances`                                  | one entry per entity with a `TransformComponent` and a `MeshRendererComponent` whose handles resolve |

### How is the pass chain resolved?

Only when it could have changed. The ECS system builds a `ChainSource` from the asset store's revision and the selected pipeline's key, and resolves the chain again only when that value differs from the one the frame holds. Each time it does, it increases `chain_generation`, which is the renderer's cheap test that its GPU objects still match.

Resolving walks the pipeline's entries:

1. An entry switched off in the pipeline (`PipelinePass.enabled`) is skipped. So is a pass asset switched off itself (`RenderPass.enabled`), which hides it from every pipeline.
2. A handle that no longer resolves is counted and skipped, with one warning for the lot.
3. A pass that names a material gets the material's shader, parameters and textures, and then the pass's own values on top. The renderer only ever sees one plain pass.
4. The passes are sorted by `settings.order`. The sort is stable, so equal orders keep the pipeline's order.
5. A chain whose surface pass is not the single last pass is reported once, because only the last pass's writes reach the window.

With no pipeline selected, the chain is `ResolvedPass::builtin()`: one geometry pass, no shader, writing the surface. A pipeline handle that stopped resolving falls back to the same pass, with a warning. A pipeline with every pass switched off resolves to an empty chain, which asks for a cleared picture and nothing else.

### How is each surface's camera chosen?

From `SurfaceCameras` first, then from the world.

- A binding for `SurfaceId::PRIMARY` decides the primary surface's camera outright.
- Without one, the primary surface takes the enabled `CameraComponent` with the highest `priority`, and the lowest entity id on a tie, so the choice cannot change with query order.
- Every other surface draws only through its own binding. A `CameraBinding::Entity` resolves when that entity has an enabled camera. A `CameraBinding::View` carries a camera and a transform as plain data and always resolves. The editor's scene views are view bindings, so their cameras never appear in the project's world.
- A surface with no camera this update is left out of `surface_views` and is not drawn.

The surfaces bound to a view camera are the frame's `editor_views`. They, and only they, get the editor's chrome: the grid, the gizmo handles and the selection outlines. A surface drawn through a world camera is the project's own window and never shows them.

### How are instances collected?

The ECS system walks every `(Entity, &TransformComponent, &MeshRendererComponent)` and pushes a `RenderInstance` for each one whose mesh and material are both in the store. An entity with a dangling handle is skipped, so a deleted asset never fails the update.

The material is read rather than only checked, because its `rendering_order` travels with the instance. The ECS system remembers the last mesh and material pair it resolved. Entities of one archetype usually share both, so this skips nearly every asset lookup when thousands of instances share one pair.

The transform is used as it is: `TransformComponent` holds the entity's world placement.

## What does `Renderer::render` do?

Five steps, in this order. The Tracy zone of each step is named in brackets.

1. **Apply the UI textures** the frame carries, once for the whole update.
2. **Collect the surfaces that draw.** A surface that is minimized, not ready to present, or has no camera this update is left out. Picks on a surface that is not drawn are answered at once with no hit. If no surface draws, every preview request is refused and `render` returns `Skipped`.
3. **Prepare the shared data**, once for every surface:
    - sync the GPU copy of the assets (`renderer: sync assets`),
    - build and sort the draw queue (`renderer: build queue`),
    - build one model matrix per queued instance (`renderer: build instances`),
    - upload them into one instance buffer (`renderer: upload instances`).
4. **Plan the primary surface's chain** (`renderer: plan`): rebuild its GPU objects if needed, decide what each pass draws, and log the chain when it changed.
5. **Draw each surface** (`renderer: submit`): acquire the swapchain image, write the engine and camera parameters, record one wgpu render pass per planned pass, draw the overlay and the UI, submit and present. A surface other than the primary plans its own chain from the same frame here. Then one asset preview is recorded, with its own submission, so it never delays a presented picture.

A failure on a secondary surface is logged and the other surfaces still draw. Only a failure on the primary surface ends `render` with an error.

`RenderMetrics` records the time of steps 3 and 5, the number of passes and of passes that drew, and the instance bytes. The player logs `[render] frame draws` whenever the number of passes that drew changes.

## How does the GPU copy of the assets stay current?

The renderer keeps one GPU object per live asset, tagged with the content version it was built from, and rebuilds only the objects whose version moved.

`RenderingResourcesManager` holds one `GpuColumn` per asset type: shaders, textures, meshes and materials. Each entry is a GPU handle plus the content version it was built from. The sync runs at the start of every `render`:

1. **If the store's revision is the one it synced last time, it does nothing.** That is the common case.
2. **Textures and shaders first**, because materials bind them. Each column walks the store's own column for its type: an asset whose version moved is rebuilt, and an entry whose asset is gone is freed.
3. **Meshes.** The draw path resolves a mesh per update, so a rebuilt mesh needs nothing else.
4. **Materials.** A material built against a texture or shader that was just rebuilt has its version record dropped first, so it is rebuilt even though its own content did not change. Then every material whose own version moved is rebuilt.
5. **The resource epoch.** If any shader or texture object changed, the epoch increases once. The pass chain reads the epoch, because its bind groups hold shaders and textures.

> **Example:** you edit `brick.png` while the project runs. The asset watcher reimports it, which raises its content version and the store's revision. On the next `render`, the texture column rebuilds that one texture, every material that binds it is rebuilt, and the epoch moves, so each surface's chain rebuilds its bind groups. The other textures, every mesh and every other material keep the objects they had.

A failure is per asset and never fatal. A texture that does not upload, a shader that does not compile or a material whose pipeline does not build is named in the log and skipped. Its version stays unrecorded, so the next revision tries it again.

### What happens when an asset is missing?

The renderer falls back instead of failing. It builds a **default shader and material pair** when it starts, from the embedded WGSL of the simple pipeline's lit shader, before any asset store exists.

| Situation                                        | What the instance draws with       |
| ------------------------------------------------ | ---------------------------------- |
| its mesh never uploaded                          | nothing: the instance is left out  |
| its material never built                         | the default material               |
| its material names no shader (`Handle::INVALID`) | the default shader                 |
| its material names a shader that is not loaded   | the default shader, with a warning |

The default shader is a shader like any other, so a pass has to draw it. A surface-writing chain does (see [Which instances does a geometry pass draw?](#which-instances-does-a-geometry-pass-draw)). The PBR chain does not, so under the default pipeline a fallback instance is not visible.

`PillRenderer::invalidate_assets` drops every version record, so the next sync rebuilds everything. The host calls it when it cannot trust the recorded versions any more.

## How are thousands of draws batched?

The renderer draws every instance that shares a rendering order, a shader, a material and a mesh with **one instanced draw**.

`build_queue` turns each `RenderInstance` into a `RenderQueueItem`: the shader, material and mesh GPU handles it binds, its index in the frame's instance list, and a 64-bit sort key. After sorting, equal keys sit next to each other, and the mesh drawer records each run as one instanced draw. Ties are broken by the instance index, so instances keep the frame's order inside their run.

| Bits  | Part of the key                                                             |
| ----- | --------------------------------------------------------------------------- |
| 56-63 | the material's `rendering_order`, inverted, so a higher value sorts earlier |
| 48-55 | the shader's slot index                                                     |
| 40-47 | the shader slot's version                                                   |
| 32-39 | the material's slot index                                                   |
| 24-31 | the material slot's version                                                 |
| 16-23 | the mesh's slot index                                                       |
| 8-15  | the mesh slot's version                                                     |
| 0-7   | unused                                                                      |

Each index and version keeps only its low byte. The key is only ever compared, and the item carries its real handles beside it, so a value above 255 can merge or split runs but never draws with the wrong objects.

> **Example:** a scene has 900 green cubes and 100 red spheres, both materials on the PBR shader. The queue sorts into two runs: 900 items with (PBR shader, green, cube), then 100 with (PBR shader, red, sphere). The opaque pass records two instanced draws instead of 1,000.

### How do positions reach the GPU?

As one model matrix per queued instance, in queue order, in one buffer that every pass of every surface reads.

`build_queued_instances` builds the matrices on the shared Rayon pool (`pill_core::rayon`). It sends only the top three rows of each matrix, because the fourth row of an affine transform is always `0, 0, 0, 1`. The default vertex stage reads the rows as instance attributes 5 to 7 and rebuilds the matrix.

Because a queue position is also the position in the instance buffer, a pass that draws a run of the queue draws the same run of the buffer, with nothing copied. The overlay's outline and pick passes rely on that too. The buffer starts at `INSTANCE_BATCH_SIZE` (10,000) instances and grows in steps of that size, which is a buffer size, not a limit.

## How is the pass chain built?

Each surface owns a `GpuChain`: one GPU object per pass of the chain, plus the offscreen targets the chain writes. It is rebuilt only when something it depends on changed.

`GpuChain::ensure` checks in two steps, from cheap to expensive:

1. **A tuple of four numbers**: the chain generation, the resource epoch and the surface's width and height. If it equals the last tuple, nothing happens. That is one comparison per surface per update.
2. **The chain itself.** If the tuple moved, the chain is compared with the copy its objects were built from (`ResolvedPass` equality, together with the epoch), and the offscreen layout with the layout its targets were built for. Only what differs is rebuilt.

When it rebuilds, it walks the chain in order and builds a `PassSlot` per pass:

| Slot                  | When                                                     | What it holds                           |
| --------------------- | -------------------------------------------------------- | --------------------------------------- |
| `Drawable`            | the pass names a shader the renderer built               | a pipeline for the pass's own targets   |
| `Unshaded`            | a geometry pass with no shader, writing only the surface | nothing: each material's pipeline draws |
| `Unsupported(reason)` | the pass cannot work                                     | the reason the log names, once          |

A pass may read only the targets an earlier pass declared. The set of declared targets grows as the chain is walked, so a pass that reads its own output, or a later pass's, is refused instead of binding whatever the map happens to hold.

A pass is refused, and named once in the log with `pass not drawn; the chain runs without it`, when:

- it is a geometry or skybox pass with a `target_scale` above 1. Both use the surface's full-size depth buffer, and every attachment of a render pass must have the same size;
- it is a geometry pass with no shader that writes an offscreen target. Material pipelines are built for the surface's format;
- it is a fullscreen pass with no shader, or a skybox pass with no material or shader;
- its shader is not loaded, or did not build.

### What are offscreen targets?

Named colour textures that one pass writes and later passes read. They let the chain hand pictures from pass to pass.

- **They belong to the surface.** Every surface has its own set, sized to it.
- **They are half-float** (`Rgba16Float`), because a lit picture holds values well above 1.0 and an 8-bit target would cut them off before the tonemap pass can bring them back.
- **The first pass that names a target decides its size**, through its `target_scale`. Only a fullscreen pass can draw at a smaller size.
- **A pass reads a target through `inputs`**, a map from the shader's texture slot to the target's name. The name `depth` means the surface's depth buffer instead of a colour target.
- **A pass can write several targets at once** with `extra_targets`, in the order the shader's `SV_TARGET1`, `SV_TARGET2` and so on name them. That is how a geometry pass can leave a normal buffer for a later pass.

The PBR chain shows the shape:

```text
 order  pass                            kind        reads          writes
 ─────  ──────────────────────────────  ──────────  ─────────────  ────────
   0    pill.pbr.pass.opaque            geometry    —              hdr
   0    pill.pbr.pass.skybox            skybox      (depth)        hdr       off until a sky is set
   1    pill.pbr.pass.bloom             fullscreen  hdr            bloom     half size
   2    pill.pbr.pass.bloom.composite   fullscreen  hdr, bloom     lit
   3    pill.pbr.pass.tonemap           fullscreen  lit            ldr
   4    pill.pbr.pass.lens              fullscreen  ldr, grain     surface
```

## Which instances does a geometry pass draw?

That depends on whether the pass names a shader. `GpuChain::plan` decides it again every update, which is cheap: it only cuts the sorted queue into ranges.

- **A geometry pass that names a shader** draws the runs of the queue whose shader is that one, through the pass's own pipeline. Each run still binds its own material's parameters and textures. The pass's pipeline decides the target formats, depth writing and culling, which no material may choose.
- **A geometry pass that names no shader** draws the whole queue, each run through the pipeline its own material's shader carries. This is the built-in chain.
- **Instances no pass claimed** are drawn by the first geometry pass that names a shader and writes only the surface, each through its own material's pipeline. So in a surface-writing chain, an assigned material is never silently missing. A debug line, `pass draws the instances no pass in the chain claimed`, reports it.

A pass that writes an offscreen target never takes the unclaimed runs, because a material's pipeline is built for the surface's format. **The PBR chain's geometry pass writes `hdr`, so under the default pipeline an instance whose material does not use the PBR shader is not drawn at all.** The user guide shows the fix: a geometry pass for that shader, writing `hdr`.

> **Example:** a pipeline holds the simple pipeline's one geometry pass, which names the simple lit shader and writes the surface. You add a cube whose material uses a project shader, `toon`, that no pass names. The pass draws its own shader's runs through its pipeline, then the toon cube through the toon material's pipeline. Under the PBR chain, the same cube would draw nothing, and `[render] frame draws` would not change.

### Which pass clears the picture?

The first planned pass clears every target it writes, and the depth buffer. Every later pass loads what is already there. A fullscreen pass covers every pixel anyway, and a second geometry pass draws over the first one's picture, depth-tested against it.

A chain with nothing recordable in it still plans one empty pass, `frame.clear`, because a swapchain image that nobody cleared presents whatever memory it held.

A fullscreen pass draws one triangle that covers the whole target. A skybox pass draws the same triangle at the far plane and tests it against the depth the geometry passes left, so the sky shows only where no mesh drew.

## How do materials and passes feed a shader?

Through four fixed bind groups and a packing rule that walks the shader's own slot list.

| Group | Holds                                               | Bound                                                                    |
| ----- | --------------------------------------------------- | ------------------------------------------------------------------------ |
| 0     | engine parameters                                   | when the shader declares `engine_parameters`                             |
| 1     | the camera                                          | when the shader declares `camera_parameters`                             |
| 2     | the material's (or pass's) parameters, at binding 0 | per material in a geometry pass, per pass in a fullscreen or skybox pass |
| 3     | the material's (or pass's) textures and samplers    | the same                                                                 |

- **Engine parameters** are 48 bytes, rewritten for each surface: `fog_color` and `fog_density` (always zero today; no frontend sets fog), `frame_size` (pixels and their reciprocals) and `time` (seconds, delta, frame number). The HLSL `EngineParams` in `common.hlsl` declares only the first 16 bytes.
- **Camera parameters** hold `camera_position`, `camera_view_projection` and `camera_inverse_view_projection`. The camera looks along its rotation's -Z, right-handed, with wgpu's 0-to-1 depth range. A field of view, near or far value the projection cannot use is replaced before the matrix is built.

### How are parameters packed?

By walking **the shader's slot list**, in the order its `.hlsl.meta` declares the slots, and taking each slot's value from the material by name. Every slot is 16 bytes.

| Slot type | Packed as                                |
| --------- | ---------------------------------------- |
| `Scalar`  | one `f32` in the first 4 bytes           |
| `Bool`    | a `u32` of 0 or 1 in the first 4 bytes   |
| `Color`   | three `f32`, the fourth word left as 0.0 |

Walking the shader's slots rather than the material's values is what makes the rule safe:

- A value whose name the shader does not declare is ignored. A misspelt name cannot shift the values after it.
- A declared slot the material does not set packs as zero.
- A value whose type does not match its slot is ignored, and the slot packs as zero.
- A slot name declared twice keeps its first declaration, with a warning.

The shipped shaders therefore declare one `float4` per slot. Two values in one `float4` would read padding.

### How are textures bound?

By slot name, against the shader's texture slots, each of which names its texture and sampler binding and a kind.

| Kind       | Uploaded as                                  | An empty slot reads                               |
| ---------- | -------------------------------------------- | ------------------------------------------------- |
| `Color`    | sRGB, read as linear light                   | one white texel                                   |
| `Normal`   | linear data                                  | one flat normal, (128, 128, 255)                  |
| `Equirect` | `Rgba16Float` panorama                       | one black texel                                   |
| `Cubemap`  | `Rgba16Float`, six faces projected at import | six black faces                                   |
| `Depth`    | not an asset                                 | nothing: a pass must name `depth` in its `inputs` |

A pass binds both `textures` (assets) and `inputs` (targets). A slot named in both takes the input, which is the picture an earlier pass of the same chain produced.

## How do shaders get from HLSL to the GPU?

They are **cooked**: compiled from HLSL to WGSL by the `slangc` tool, into a `.wgsl` file beside each source. wgpu runs WGSL. The `Shader` asset is built from the cooked file, never from the HLSL.

### What are the cooking rules?

- **The file name decides the stage.** `*_vertex.hlsl` is entered at `vs_main`, `*_fragment.hlsl` at `fs_main`. Any other name is refused rather than guessed.
- **`include` folders hold headers.** Every folder named `include` in a tree is on every source's include path, in sorted order. Any other folder that directly holds `.hlsl` files is a source folder.
- **Only stale outputs are written**, so editing a header makes every source stale again.
- **The compiler comes from `PILL_SLANGC`**, or from the first `slangc` on `PATH`. A compiler that resolves inside the working directory is refused, so a project cannot ship a `slangc.exe` that the cook would run. A `slangc` that runs longer than 120 seconds is killed.

`pill_assets::cook_shader_tree` applies these rules. Every place that cooks calls it, so they all produce the same output.

### Which shader trees are there?

Two, cooked and reloaded in different ways.

|                      | The data crate's `shader_sources/`                                                          | A project's `res`                                        |
| -------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Cooked when          | the data crate's build script runs                                                          | the development host starts, before the project loads    |
| Read as              | `Shader` assets imported from `.hlsl` + `.hlsl.meta` by `config::import_shader`             | `Shader` assets the project imports                      |
| Reloaded when edited | the watcher re-cooks it and calls the data crate's `pill_render_data_shader_changed` export | the watcher re-cooks it and the host reimports the asset |
| Shipped              | packed beside the project's `res` by the bundle's build script                              | cooked by the shipping bundle before it packs `res`      |

A shader asset is imported from its `.hlsl` path with the `.hlsl.meta` beside it. The meta's `vertex` key names the vertex stage by its cooked path, resolved through the asset store. A project's shader can therefore pair with `common_shaders/default_vertex.wgsl`, because the data crate mounts its `shader_sources/` as a read-only module root.

Only one pair of stages is read straight out of the data crate's code: the default vertex stage and the simple lit fragment, embedded with `include_str!`. The GPU module builds its default shader from them when it starts, before an asset store exists.

### What happens when a shader is edited while the host runs?

> **Example:** you save `pbr_fragment.hlsl` with a new lighting term. The host's shader watcher, on its own thread:
>
> 1. waits until the burst of file events settles,
> 2. cooks the data crate's tree with `cook_shader_tree`, and queues every output whose text changed.
>
> At the next frame boundary, after any module reloads, the main thread passes each queued file to `pill_render_data_shader_changed` on the data crate generation that is loaded at that moment. That export looks the file up in the pipelines' `SHADER_SOURCES` tables, writes the new WGSL into each `Shader` asset built from it, and raises their content versions. On the next `render`, the asset sync rebuilds that one shader and every material that uses it, and the epoch move makes each chain rebuild its pass objects. No module is rebuilt.

The worker thread runs only host code and `slangc`, never code inside a module DLL, so a data crate reload can replace the module at any moment. A cook that fails is logged and queues nothing, so the shaders that are loaded keep drawing. `PILL_ASSETS_HOT_RELOADING=0` starts neither shader watcher.

## How does one renderer draw several surfaces?

Every window or canvas the renderer draws into is a **surface**, named by a `SurfaceId`. The one the renderer was attached with is `SurfaceId::PRIMARY`. A frontend adds more with `attach_surface`.

| Shared by all surfaces                                        | Owned by each surface                                             |
| ------------------------------------------------------------- | ----------------------------------------------------------------- |
| the device and queue                                          | its swapchain and presentation mode                               |
| the asset caches and the default shader and material          | its depth buffer and offscreen targets                            |
| the draw queue and the instance buffer, built once per update | its `GpuChain`, its camera's GPU buffer and the overlay's targets |

So a frame that draws three surfaces syncs the assets, sorts the queue and uploads the instances once. The primary surface's plan is the one step 4 made. Every other surface plans its own chain from the same frame, because its size, and so its targets, can differ.

> **Example:** the editor shows `Scene`, `Scene 2` and `Game`. `Game` is the primary surface. It has no binding in `SurfaceCameras`, so it draws through the project's own camera. `Scene` and `Scene 2` are extra surfaces with view bindings to the editor's orbit cameras, so they are the frame's `editor_views` and draw the grid, the outlines and the gizmo. One frame and one instance upload feed all three.

The frontend decides when each surface may present, because only it knows the window system. `set_surface_ready(id, false)` makes the renderer skip that surface instead of blocking on it, so one blocked surface never stalls another or the event loop.

A surface can be restricted to a rectangle with `set_surface_viewport`. When the rectangle does not cover the target and the surface can carry alpha, the surface is cleared to transparent rather than opaque, so the frame does not paint over whatever else shares the window.

Surfaces present with vsync (`Fifo`) by default. `PILL_PRESENT_MODE=immediate` or `mailbox` asks for another mode, and an extra surface can ask through `SurfaceOptions.present`. A mode the driver does not offer falls back to `Fifo` with a warning.

## What is drawn after the chain?

The **overlay**, then the **UI**. Neither goes through the pass chain, because a debug line or an outline must look the same whatever chain a project runs.

### What does the overlay draw?

For each drawn surface, into the same swapchain image and reading the depth buffer the geometry passes left:

1. **Selection outlines**, on editor views only: the outlined entities are drawn into a mask, and the mask's edge becomes a 2-pixel outline in the `SelectionOutlines` colour.
2. **The scene grid**, on editor views when the grid is on: one fullscreen triangle pinned to the far plane whose fragment shader ray-casts the ground plane per pixel, depth-tested so meshes cover it.
3. **Debug lines**, depth-tested ones and on-top ones. A line marked as chrome (`DebugStyle.chrome`) is drawn only on editor views.
4. **Gizmo lines, triangles and points**, on editor views only.
5. **The pick buffer**, when the surface has picks waiting (see below).

Lines, gizmo triangles and outlines are anti-aliased without multisampling. Each primitive is projected on the CPU, widened in screen space by about a pixel of feather, and its fragment shader fades that band back down to the shape's true edge. Multisampling would cost every surface of every frontend; this costs only the overlay's own primitives.

Debug labels are laid out as a `pill_ui_frame` draw list over the overlay's bitmap font, and the UI painter draws them.

### How is the UI painted?

The UI painter (`ui/`) draws the frame's `ui` lists over each surface after the overlay: the debug labels first, then the project's lists. It uploads whole images by revision, clips with scissor rectangles, and blends straight-alpha sRGB correctly whether or not the target is sRGB.

The project's UI is produced by `pill_project_ui` into the world's `UiFrameSlot`. The `rendering` ECS system takes it each update and logs `[ui] producer=game` or `[ui] producer=none` when that changes. A rebuilt painter starts with no textures, while the producer lives in a shared DLL and has already sent every image once. So the first update in which a new GPU module generation finds the slot asks the producer to send every texture again. See [User interface](../levels/user_interface.md).

### How does picking work?

Picking answers "what is drawn at this pixel of this surface?" without ever making an update wait for the GPU.

1. The editor adds a request to `PickRequests`. The next frame carries it.
2. The overlay draws the surface's instances into a hidden `R32Uint` pick buffer, straight from the instance buffer, then the gizmo handles over them in wider quads. Each pixel holds `0` for nothing, `1 + index` for the instance at that position of the frame's instance list, or a handle id with the top bit (`PICK_HANDLE_BIT`) set.
3. The renderer copies the requested pixels into a readback buffer and maps it without waiting.
4. A few updates later the GPU has finished. `AttachedRenderer::present` calls `take_pick_results` after `render` and moves the answers into `PickResults`, where the editor matches them by request id.

A pick on a surface that was not drawn is answered in the same update, with no hit. `present` delivers results after `render` on purpose: delivering first would hand the editor the previous update's answers again.

### How do asset previews work?

The same way as picks. The editor asks through `PreviewRequests` for a texture, material or mesh thumbnail. The renderer draws at most one per update into its own 128 × 128 target, after the surfaces, and reads it back over the next updates. Every request it takes is answered: a request it cannot draw gets `PreviewImage::refused`, so the editor never waits for an answer that will not come.

## How does rendering survive a hot reload?

Because the world never holds anything that belongs to the GPU module. The frame, the components, the assets and the pass chain are plain data. The GPU objects live only inside the renderer, and a new renderer can build all of them again from that data.

### What happens when the GPU module is edited?

The development host keeps the GPU module out of its extension list, because a renderer reload needs one step the generic reload does not have: the old renderer must be dropped before its DLL is retired.

1. The host builds and loads the new renderer DLL. The old renderer keeps drawing until this succeeds.
2. In the reload's `before_commit` step, the host detaches the old renderer. Its destructor runs in the old DLL, which is still loaded.
3. The host attaches the new generation to the same window through `pill_renderer_attach`, and `AttachedRenderer::replace_backend` replays the primary surface's viewport and pacing and every extra surface onto it.
4. The new renderer starts with empty caches, so its first `render` uploads every asset and builds every chain.

The host logs `renderer reattached to the window`, with the number of `rendering` ECS systems, which must be exactly one.

The first load happens when the window opens, after the project has filled the world. It loads under `FirstLoadFailure::ClearSystemsOnly`: a generation that fails clears only its own ECS systems and must not have registered data. The window stays blank and the scene is untouched until the next renderer edit builds.

### What happens when the data crate reloads?

The GPU module holds a compiled copy of the data crate's types, so it is rebuilt **in the same frame boundary**, before any update runs.

1. The data crate reloads like any extension. Its `register` runs again: it re-points the component and asset tables at the new DLL and installs the PBR pipeline again, which returns the existing assets.
2. The host compares the data crate's component schemas from before and after, logs `the renderer's data crate reloaded; rebuilding the renderer against it`, and asks the renderer module to rebuild.
3. The renderer reloads as above.

If a component layout changed and the renderer could not be rebuilt, loaded or attached, the host disables the renderer module's ECS systems and logs `rendering paused`. The window keeps its last picture. Drawing with a renderer compiled against the old layout would read components as the wrong type. The next renderer build that loads logs `rendering resumed`.

### What must the frame never contain?

Anything that points into a DLL, because a value in the world outlives the DLL that created it.

- **Asset keys, not handles or pointers.** An `AssetKey` packs the asset's generation above its index, so a key to a deleted asset never matches the asset that later takes its slot.
- **`BTreeMap`, never `HashMap`.** An empty `HashMap` points at a static inside the DLL that created it. After that DLL is unloaded, reading the map crashes. `ResolvedPass`, `Material` and `RenderPass` all use `BTreeMap` for this reason.
- **Owned copies.** The camera is copied into `SurfaceView`. `RenderCapabilities::consumed_components` is a `Vec<String>`, not a `&'static` slice, because the GPU module builds it inside its own DLL.
- **No per-generation state in the frame.** State that belongs to one GPU module generation, such as "which UI producer did I log" and "have I asked for the UI textures yet", is a module static. A reload gives the module fresh statics, so the new generation starts over.

The resources that cross the boundary each have a **pinned shared name**, which the host and every generation of the GPU module use to find the same resource. Tests assert the exact strings. Some of them spell a path that no longer exists, and that spelling is part of the identity: "fixing" one would register a second resource and leave the first one stale.

| Resource or component                                                                         | Pinned shared name                                                     |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `RenderFrame`                                                                                 | `pill_master_renderer::frame::RenderFrame`                             |
| `SurfaceCameras`                                                                              | `pill_renderer_api::surface::SurfaceCameras`                           |
| `SelectionOutlines`, `PickRequests`, `PickResults`                                            | `pill_renderer_api::picking::...`                                      |
| `PreviewRequests`, `PreviewResults`                                                           | `pill_renderer_api::preview::...`                                      |
| `RenderingManager`                                                                            | `pill_master_renderer::resources::rendering_manager::RenderingManager` |
| `TransformComponent`, `CameraComponent`, `MeshRendererComponent`, `DirectionalLightComponent` | `pill_master_renderer::component::...`                                 |

### What does each kind of edit rebuild?

| Edit                             | What is rebuilt                                         | What is kept                     |
| -------------------------------- | ------------------------------------------------------- | -------------------------------- |
| a material, texture or mesh file | that asset's GPU object, plus materials that bind it    | everything else                  |
| an `.hlsl` source in either tree | that shader, its materials and the chains' pass objects | every module                     |
| `pill_master_renderer` code      | the whole renderer and its caches                       | the world, the assets, the chain |
| `pill_master_renderer_data` code | the data crate, then the renderer                       | the world's values               |
| the project's code               | nothing in the renderer                                 | everything                       |

### What does Play do to rendering state?

The renderer's resources declare what an editor Play session does with them. `RenderingManager` is copied at Play and put back at Stop, so a pipeline the project selects while playing is undone. `SurfaceCameras`, `SelectionOutlines` and the pick and preview resources are `Keep`: they are the editor's infrastructure, and a session leaves them alone. Assets are not world state, so a material changed during Play stays changed after Stop.

## What are the current limitations?

- **Lights are constants in the shaders.** The PBR shader has a fixed three-light rig and a flat ambient term, and the simple lit shader one point light. There are no shadows and no image-based lighting. `DirectionalLightComponent` is registered and saved, but nothing reads it.
- **The host warns about components the renderer ignores.** It compares the render components entities carry with `RenderCapabilities::consumed_components` (transform, camera and mesh renderer) and logs `entities carry a render component the active renderer does not draw; it has no effect on the picture`.
- **Fog is always off.** The engine parameters keep the fog pair at zero, and no frontend sets it.
- **Cameras are perspective only.**
- **Under the PBR chain, unclaimed instances are not drawn**, and neither are the default-material fallbacks (see [Which instances does a geometry pass draw?](#which-instances-does-a-geometry-pass-draw)).
- **No surface reports HDR output.** `RenderCapabilities::hdr` is `false` for every renderer in the repository.
- **Meshes import from `.obj` only.**

## How do I see what the renderer is doing?

### Which log lines matter?

The renderer logs under `engine::rendering`. Set `engine::rendering: debug` under `logging: targets:` in `project_settings.yaml` for per-shader, per-material and per-run detail.

| Log line                                            | Means                                                                     |
| --------------------------------------------------- | ------------------------------------------------------------------------- |
| `using GPU`, `present mode chosen`                  | the adapter, backend and present mode the renderer started with           |
| `[render] First frame: Presented; camera=true; ...` | the first update that drew at least one pass reached the window           |
| `[render] frame draws`                              | the number of passes that drew changed: a pass started or stopped drawing |
| `pass chain: <pass>(<draws>) ...`                   | the primary surface's planned chain, logged once per change               |
| `pass not drawn; the chain runs without it`         | a pass was refused, with the reason                                       |
| `[render] surface N first frame presented`          | surface `N` presented for the first time                                  |
| `material ... names a shader that is not loaded`    | a material fell back to the default shader                                |
| `renderer reattached to the window`                 | the GPU module was reloaded and is drawing again (`engine::hot_reload`)   |
| `rendering paused` / `rendering resumed`            | the data layout changed and the renderer could not, or now can, follow    |
| `[ui] producer=game`, `[ui] surface=... draws=...`  | whether the project's UI feeds the frame, and what each surface painted   |

### How do I measure GPU time?

Set `PILL_GPU_PROFILE=1`. The renderer then logs each pass's GPU time, and the geometry passes' shader invocation counts, every 120 frames. A device without timestamp or pipeline statistics queries says so and runs without it. Tracy shows the CPU side through the zones named in [What does `Renderer::render` do?](#what-does-rendererrender-do). Run these from `modules/`:

```powershell
$env:PROJECT_PATH = "../examples/cube/cube_rust"
$env:PILL_GPU_PROFILE = "1"
$env:PILL_PRESENT_MODE = "immediate"   # uncap the frame rate while measuring
cargo run --package pill_standalone --features rendering
```
```cmd
set PROJECT_PATH=../examples/cube/cube_rust
set PILL_GPU_PROFILE=1
REM uncap the frame rate while measuring
set PILL_PRESENT_MODE=immediate
cargo run --package pill_standalone --features rendering
```
```bash
export PROJECT_PATH="../examples/cube/cube_rust"
export PILL_GPU_PROFILE="1"
export PILL_PRESENT_MODE="immediate"   # uncap the frame rate while measuring
cargo run --package pill_standalone --features rendering
```

See [Profiling](../other/profiling.md) for Tracy and [Environment variables](../other/environment_variables.md) for every switch.

## Where does each part live?

`data/` is `modules/extensions/pill_master_renderer/modules/runtime/data`, and `gpu/` is `modules/extensions/pill_master_renderer/modules/runtime/gpu`.

| What                                                                   | Where                                                                        |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `PillRenderer`, `HeadlessRenderer`, `RenderMetrics`                    | `modules/rendering/pill_renderer_api/src/api.rs`                             |
| `RenderFrame`, `ResolvedPass`, `PassSettings`, `AssetKey`              | `modules/rendering/pill_renderer_api/src/frame.rs`                           |
| Surfaces and camera bindings; the grid                                 | `modules/rendering/pill_renderer_api/src/surface.rs`, `grid.rs`              |
| Picking and previews (contract)                                        | `modules/rendering/pill_renderer_api/src/picking.rs`, `preview.rs`           |
| UI draw lists and `UiFrameSlot`                                        | `modules/rendering/pill_ui_frame/src/`                                       |
| Components, assets, `RenderingManager`                                 | `data/src/components/`, `data/src/assets/`, `data/src/rendering_manager.rs`  |
| Bind group indices, the PBR, simple, post-processing and sky pipelines | `data/src/config/`                                                           |
| Shader sources and the default material                                | `data/shader_sources/`, `data/res/defaults/pill.pbr.material`                |
| The data crate's shader reload export                                  | `data/src/shader_hot_reload.rs`                                              |
| The `rendering` ECS system                                             | `gpu/src/frame.rs`                                                           |
| `Renderer::render` and per-surface recording                           | `gpu/src/renderer.rs`                                                        |
| Asset sync, the default shader and material                            | `gpu/src/rendering_resources_manager.rs`                                     |
| The draw queue and its sort key                                        | `gpu/src/render_queue.rs`                                                    |
| Instance matrices; instanced drawing                                   | `gpu/src/instance.rs`, `gpu/src/drawers/mesh_drawer.rs`                      |
| Pass objects, offscreen targets, planning                              | `gpu/src/chain.rs`, `gpu/src/resources/renderer_pass.rs`                     |
| Swapchain and present modes                                            | `gpu/src/surface.rs`                                                         |
| Overlay, grid, outlines, picking                                       | `gpu/src/overlay/`                                                           |
| The UI painter                                                         | `gpu/src/ui/`                                                                |
| Previews; GPU profiling                                                | `gpu/src/preview.rs`, `gpu/src/profiler.rs`                                  |
| The attach and detach exports                                          | `gpu/src/module_entry.rs`                                                    |
| Cooking HLSL to WGSL                                                   | `modules/assets/pill_assets/src/shader_tree.rs`, `rules/hlsl_to_wgsl.rs`     |
| Calling `render` every update; delivering picks                        | `modules/hosting/pill_player/src/rendering.rs` (`AttachedRenderer`)          |
| Loading and reloading the GPU module                                   | `modules/hosting/pill_development_host/src/renderer_module.rs`, `runtime.rs` |
| The shader watcher                                                     | `modules/hosting/pill_development_host/src/watchers/shader.rs`               |

## Where to read next

- [Rendering](../levels/rendering.md): the earlier, stage-by-stage walkthrough of the same renderer.
- [User interface](../levels/user_interface.md): how the project's egui UI becomes the frame's draw lists.
- [How gizmos are drawn](../other/gizmos_rendering.md): component gizmos and the overlay's debug lines.
- [How the editor works](../editor/editor_implementation.md): the editor's surfaces, picking and the transform gizmo.
- [Hot reloading](../levels/hosting/hot_reloading.md): the general reload transaction the renderer's reload builds on.
