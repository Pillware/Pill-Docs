# Rendering

## Summary

Rendering in Pill happens in two steps every update. First, an ECS system called `rendering` reads the world and writes down **what** to draw: every visible mesh, the camera, and the list of passes to run. Then the frontend hands that list to the **renderer**, which turns it into GPU work and shows the result in the window.

The list in the middle is plain data. Because of that, the GPU code can live in its own module, be swapped for a stub when there is no window, and be hot reloaded while the project keeps running.

This page explains rendering in stages. Each stage builds on the one before it, so read them in order the first time:

| Stage | Question it answers                                     | You will know                                                       |
| ----- | ------------------------------------------------------- | ------------------------------------------------------------------- |
| 1     | What do I need to put something on screen?              | the three components and the one asset pair that make a cube appear |
| 2     | What happens every update?                              | the two halves of rendering and the frame that connects them        |
| 3     | Why is the renderer split into three crates?            | the contract, the data crate and the GPU module, and who links what |
| 4     | How does the renderer turn a frame into pixels?         | asset sync, the draw queue, batching, recording and presenting      |
| 5     | What decides how the picture looks?                     | pipelines, passes, offscreen targets and the default PBR chain      |
| 6     | How do materials and shaders reach the GPU?             | shader slots, bind groups, parameter packing and shader cooking     |
| 7     | How does rendering survive a hot reload?                | what is rebuilt, what is kept, and why the frame is plain data      |
| 8     | What else does the renderer draw?                       | several windows, the editor's overlay, picking and previews         |

The page closes with [where everything lives](#where-does-each-part-live) and [which log lines to look for](#which-log-lines-show-what-the-renderer-did).

---

## Stage 1: What do I need to put something on screen?

You need **a camera** and **at least one entity with a mesh renderer**. Both also need a position. Nothing else is required: Pill installs a default lit pipeline on its own.

Three components do the work. They come from the renderer's data crate, `pill_master_renderer_data`:

| Component               | What it says                                    | Example                                  |
| ----------------------- | ----------------------------------------------- | ---------------------------------------- |
| `TransformComponent`    | Where the entity is, how it is rotated and scaled | `translation: [0.0, 0.0, -5.0]`          |
| `CameraComponent`       | "Look at the world from here"                   | field of view, near and far planes       |
| `MeshRendererComponent` | "Draw this mesh with this material"             | a `Handle<Mesh>` and a `Handle<Material>` |

A **mesh** is the shape (vertices and triangles). A **material** says how the shape is shaded: which shader runs, and which colours, numbers and textures that shader reads. Both are **assets**, so the component stores only a handle to each, not the data itself.

> **Example:** a project's `init` spawns a camera and one red cube. This is all the rendering code it needs.
>
> ```rust
> // The camera: the renderer draws the window through it.
> world
>     .create_entity()
>     .with(CameraComponent::default())
>     .with(TransformComponent {
>         translation: [0.0, 0.0, 10.0],
>         ..Default::default()
>     })
>     .build()?;
>
> // The cube: a mesh, a material, and a place in the world.
> world
>     .create_entity()
>     .with(TransformComponent::default())
>     .with(
>         MeshRendererComponent::builder()
>             .mesh(&cube_mesh)
>             .material(&red_material)
>             .build(),
>     )
>     .build()?;
> ```
>
> An ECS system that changes the cube's `TransformComponent` moves the cube on screen in the same update. No ECS system ever calls the renderer.

The project never draws anything itself. It only describes the scene with components, and the renderer reads that description.

---

## Stage 2: What happens every update?

Every update splits rendering into two halves: **collecting** what to draw, and **drawing** it.

```text
 one update
 ─────────────────────────────────────────────────────────────────────────────
  input → your ECS systems → commands → post-update ECS systems → draw
                                              │                      │
                                  the `rendering` ECS system         │
                                  reads the world and fills          │
                                  the RenderFrame resource ──────────┘
                                                              the frontend calls
                                                              renderer.render(frame, assets)
                                                              and the picture appears
```

**Half 1: the `rendering` ECS system collects.** It runs as a *post-update* ECS system, after all your ECS systems and their commands. So it always sees the final positions of this update. It fills one world resource, `RenderFrame`.

**Half 2: the renderer draws.** After the update, the frontend takes the `RenderFrame` and the asset store out of the world and calls the renderer's `render` method once. The renderer draws every window and presents the picture.

### What is in a `RenderFrame`?

The renderer calls the picture it draws for one update a **frame**, and `RenderFrame` is the description of that picture. It holds plain values only:

| Field             | What it holds                                                          |
| ----------------- | ---------------------------------------------------------------------- |
| `instances`       | One entry per drawable entity: its transform, its mesh key and material key |
| `passes`          | The list of passes to run this frame (Stage 5)                          |
| `surface_views`   | The camera each window draws through                                    |
| `seconds`, `delta_seconds`, `sequence` | The clock, so shaders can animate                  |
| `debug`, `outlines`, `grid_cell_size` | Debug lines, selection outlines and the editor's grid (Stage 8) |
| `pick_requests`, `preview_requests` | Questions the editor asked the GPU (Stage 8)           |
| `ui`              | The project's own UI, as draw lists                                     |

> **Example:** a world with one camera and 1,000 cubes produces a frame with 1,000 `instances`, one entry in `surface_views` (the main window), and the pass list of the default pipeline. Next update, the cubes have moved, so the `rendering` ECS system clears `instances` and fills it again with the new transforms.

### How does the `rendering` ECS system choose the camera?

The main window draws through **the enabled camera with the highest `priority`**. When two cameras have the same priority, the one with the lower entity id wins, so the choice does not flicker from one update to the next. A camera with `enabled: false` is never chosen.

If no camera is enabled, the frame has no view for the main window, and the renderer skips the frame. The window keeps its last picture. This is a normal outcome, not an error.

### What happens to a broken handle?

An entity whose mesh or material handle no longer points at a loaded asset is **left out** of the frame. It draws nothing, and the rest of the frame draws normally. A deleted asset never stops the renderer.

---

## Stage 3: Why is the renderer split into three crates?

The renderer is split so that **only one crate links the GPU library**. Everything else talks to the renderer through plain data. That one decision makes headless builds, hot reload and the browser build possible.

```text
                 pill_renderer_api                 the contract: RenderFrame, the
                 (plain data, no GPU)              PillRenderer trait, cameras, surfaces
                    ▲           ▲
                    │           │
   pill_master_renderer_data    │                  the data: components, assets,
   (plain data, no GPU)         │                  pipelines, shader sources
                    ▲           │
                    │           │
              pill_master_renderer                 the GPU module: wgpu, the frame
              (links wgpu)                         system, drawing, overlay, UI painter
```

| Crate                          | Holds                                                                  | Links wgpu? | Loaded when                      |
| ------------------------------ | ---------------------------------------------------------------------- | ----------- | -------------------------------- |
| `pill_renderer_api`            | The contract: `RenderFrame`, the `PillRenderer` trait, `CameraComponent`, surfaces, picking | No          | Always; the host links it        |
| `pill_master_renderer_data`    | `MeshRendererComponent`, the six asset types, the default pipelines and their shader sources | No          | Always, as the first extension, headless too |
| `pill_master_renderer`         | The `rendering` ECS system and everything that talks to the GPU       | **Yes**     | Only in a windowed build         |
| `pill_ui_frame`                | Plain UI draw lists the renderer paints over the frame                | No          | Always                           |

### Why is the master renderer two crates instead of one?

Because its two halves are **needed in different places** and **change at different speeds**.

- The **data** is the renderer's vocabulary: `MeshRendererComponent`, `Material`, `Mesh`, `RenderPass`, `RenderingManager`. Your project writes it, the world stores it, scene files save it, and the editor shows it. It is needed in **every** run, and it rarely changes.
- The **GPU code** is how that vocabulary becomes pixels. It is needed **only when there is a window**, it is the part you edit most while working on the renderer, and the world stores none of it.

Put both in one crate, and every place that needs the vocabulary would also get wgpu, and every edit to the drawing code would reload the vocabulary too. The five reasons below are the concrete consequences.

#### 1. Your project depends on the data, never on the GPU code

Your project's code names renderer types: it builds a `MeshRendererComponent`, creates a `Material`, calls `set_pipeline`. To compile, the project DLL must link the crate that defines those types. If that were the GPU crate, every project would compile and link wgpu, and every project rebuild during hot reload would carry it.

> **Example:** `examples/local/cube/Cargo.toml` depends on the data crate only:
>
> ```toml
> # The master renderer's data only - components, assets, pipelines. The GPU
> # renderer is the host's (or the web build's).
> pill_master_renderer_data = { path = "...", default-features = false }
> ```
>
> The project never names `pill_master_renderer`. The host loads the GPU module, so the project stays small and builds fast.

#### 2. A headless run needs the data but cannot use a GPU

Test suites, CI machines and servers run without a window, and often without a graphics driver. They still spawn cameras and meshes, load materials and save scenes, so the component and asset types must exist.

The host therefore loads the data crate as the **first extension in every run, headless too**, and loads the GPU module only when there is a window. In a headless run, the frontend uses `HeadlessRenderer`, a stub whose `render` does nothing and returns `Skipped`. The update loop calls it exactly as it would call the real renderer.

> **Example:** a headless test loads a `.scene` file that contains entities with a `MeshRendererComponent`, then saves the scene again. The engine knows that component, because the data crate registered it, so the meshes survive the round trip. Without the data crate, the loader would drop every `MeshRendererComponent` and list it under `unknown_components` in its report, and the saved scene would have lost them.

#### 3. Editing the drawing code must not touch the world

When a module registers a component or asset type, the engine keeps pointers into that module's DLL: the code that drops the value, saves it, and describes its fields. Reloading the module that owns a type means pointing all of those at the new DLL, and checking whether every stored component of that type still has the same layout.

The GPU module is the part you edit most often, so it **registers no types at all**. All of them belong to the data crate. Reloading the GPU module then touches no component and no asset table: the host swaps the renderer, and the world is not involved.

> **Example:** you change how the mesh drawer batches draws in `pill_master_renderer`. The host rebuilds only the GPU module, detaches the old renderer, attaches the new one and logs `renderer reattached to the window`. The 10,000 `MeshRendererComponent`s in the world are not touched, migrated or checked.
>
> Now you add a field to `MeshRendererComponent` in `pill_master_renderer_data`. That is a real data change: the host reloads the data crate, migrates every stored `MeshRendererComponent` to the new layout, and then rebuilds the GPU module against the new data, all in the same frame boundary.

#### 4. The editor and C# need the data, not the GPU code

The editor's Inspector shows a `MeshRendererComponent`'s fields, and its asset pickers know that a material's `shader` field takes a `Shader` (the data crate declares that in its `register`). C# projects reach the same components and the `RenderingManager` through a generated mirror, which lives in the data crate's `managed/` folder. None of this draws anything, so none of it should depend on wgpu.

#### 5. The default content ships with the data

The default material, the shader sources and the default pipelines are all data: files and assets the store loads by name. The data crate declares its `res/` and `shader_sources/` folders and installs the PBR pipeline when it registers, so they exist before any project code runs, even in a headless run. A shipping build packs those folders beside the project's own `res/`.

#### What does the split cost?

The GPU module compiles in its own copy of the data crate's types. So when the data crate changes, the GPU module must be rebuilt as well, even if its own code did not change. The host does this automatically, in the same frame boundary as the data crate's reload (see [Stage 7](#stage-7-how-does-rendering-survive-a-hot-reload)).

| Question                              | `pill_master_renderer_data` | `pill_master_renderer` |
| ------------------------------------- | --------------------------- | ---------------------- |
| Does your project depend on it?       | Yes                         | No                     |
| Loaded in a headless run?             | Yes                         | No                     |
| Links wgpu?                           | No                          | Yes                    |
| Registers components and asset types? | Yes, all of them            | None                   |
| Registers ECS systems?                | None                        | The `rendering` ECS system |
| Edited often while working on the renderer? | Rarely                | Often                  |
| A reload touches the world?           | Yes: migrates its components | No                    |

#### Why not put the data in `pill_renderer_api`?

`pill_renderer_api` is the contract **every** renderer shares, and the host links it directly, so changing it needs a host restart. `MeshRendererComponent`, the PBR material and the bloom chain are specific to the master renderer. Another renderer would bring its own data crate with its own components. Keeping them out of the contract keeps the contract small and stable, and lets the data crate be hot reloaded.

### Why is the contract its own crate?

The host has to call the renderer, but in development mode the renderer is a DLL that is rebuilt while the program runs. The host cannot depend on code that changes under it. It depends only on `pill_renderer_api`, which defines the `PillRenderer` trait and the frame format. Any renderer that implements the trait can be plugged in.

> **Example:** in development mode, the host loads `pill_master_renderer` as a DLL and calls its `pill_renderer_attach` export with the window's handles. The export returns a `PillRenderer` trait object. From then on, the host calls `render`, `resize_surface` and the other trait methods through it, without knowing that wgpu exists.

### How does the renderer get attached in each mode?

| Mode                         | Where the GPU module comes from                    | How it is attached                                   |
| ---------------------------- | -------------------------------------------------- | ---------------------------------------------------- |
| Development, windowed        | A DLL the host builds and loads                    | The `pill_renderer_attach` export (blocking)         |
| Shipping, windowed           | Linked statically into the executable              | `pill_master_renderer::attach`, which returns a future |
| Browser                      | Linked statically, compiled to WebAssembly         | The same future, awaited, because a browser cannot block |
| Headless (any mode)          | Not loaded                                         | `HeadlessRenderer`                                   |

The `renderer:` key in `project_settings.yaml` picks the renderer (`pill_master_renderer` by default, `none` for no renderer).

---

## Stage 4: How does the renderer turn a frame into pixels?

`Renderer::render` does five things, in this order:

```text
  RenderFrame + AssetManager
            │
  1. sync assets ──────── upload only the meshes, textures, shaders, materials that changed
            │
  2. build the queue ──── one queue entry per instance, sorted so equal draws sit together
            │
  3. upload instances ─── one model matrix per instance, into one GPU buffer, once
            │
  4. plan the passes ──── decide which queue entries each pass draws
            │
  5. per window: record every pass, draw the overlay and the UI, submit, present
```

### Step 1: How are assets kept on the GPU?

The renderer keeps a **GPU copy of every asset** it draws with: a vertex buffer per mesh, a texture per texture, a compiled pipeline per shader, a bind group per material. The asset store itself stays on the CPU.

Uploading everything every update would be far too slow, so the renderer only does work when something changed. The asset store has a **revision** number that increases whenever any asset is added, changed or removed. Each asset also has its own **content version**.

1. If the store's revision is the same as last update, the sync does nothing at all.
2. If the revision moved, the renderer walks each asset type and rebuilds **only** the assets whose content version moved. It frees the GPU copies of assets that were removed.
3. Textures and shaders are synced first, because materials point at them. A material whose shader or texture was rebuilt is rebuilt too.

> **Example:** you edit `red.material` and change its tint. The asset store reimports it, its content version increases, and the store's revision increases. On the next update, the renderer rebuilds that one material's GPU parameters. The 40 other materials, every mesh and every texture keep the GPU objects they already had.

An asset that fails to build (a shader that does not compile, a texture that cannot upload) is named in the log and skipped. The rest of the frame still draws. An instance whose material failed draws with the **default material** instead, so it stays visible.

### Step 2: How does the renderer group thousands of draws?

Drawing each instance with its own GPU command would be slow. Instead, the renderer draws every instance that shares **a shader, a material and a mesh** with **one instanced draw**.

To find those groups, it builds a **draw queue**: one entry per instance, each with a 64-bit sort key. The key packs, from most to least important:

| Bits  | Part of the key                          |
| ----- | ---------------------------------------- |
| 56-63 | The material's `rendering_order`         |
| 40-55 | The shader                               |
| 24-39 | The material                             |
| 8-23  | The mesh                                 |

After sorting, instances that share a key sit next to each other. Each run of equal keys becomes one draw.

> **Example:** the scene has 900 green cubes and 100 red spheres, all through the same lit shader. The queue sorts into two runs: 900 entries with the key (lit shader, green material, cube mesh), then 100 with (lit shader, red material, sphere mesh). The renderer records **two** draw commands instead of 1,000.

A material's `rendering_order` controls where its draws sort: a **higher** value draws **earlier**. The default is 255, so a material you give a lower value draws after the default ones. This is how a translucent material can draw after the opaque ones.

### Step 3: How do positions reach the GPU?

The renderer turns each instance's `TransformComponent` into a model matrix on the CPU, in queue order, split across the shared thread pool. It uploads all matrices into **one instance buffer**, once per update, and every pass of every window reads from that one buffer.

Only the top three rows of each matrix are sent, because the fourth row is always `0, 0, 0, 1`. The vertex shader reads the three rows as instance attributes and rebuilds the matrix.

### Step 4: How does the renderer decide what each pass draws?

The frame lists passes (Stage 5 explains them). For each pass, the renderer makes a **plan**: which target the pass writes, whether it clears that target, and which runs of the draw queue it draws. The plan is cheap; the expensive objects behind it (GPU pipelines, bind groups, offscreen textures) are built once and reused until the pass list, a shader or texture, or the window size changes.

### Step 5: How is a window drawn?

For each window that has a camera, the renderer:

1. Gets the next image from the window's swapchain.
2. Writes the frame's clock and the window's camera into their GPU buffers.
3. Records one GPU render pass per planned pass into one command encoder.
4. Draws the overlay (Stage 8) and the UI over the result.
5. Submits the commands and presents the image.

A window that is minimized, has no camera this update, or is not ready to present is skipped. If a secondary window fails to draw, the others still draw. Only a failure on the main window ends the frame with an error.

---

## Stage 5: What decides how the picture looks?

A **pipeline** decides how the picture looks. A pipeline is an ordered list of **passes**, and each pass is one step that draws into a picture. Pipelines and passes are ordinary assets, so a project can build its own, swap them at runtime, or store them as files.

```text
  RenderingManager ──► RenderingPipeline ──► RenderPass, RenderPass, RenderPass, ...
  (world resource)     (asset: the list)     (assets: one step each)
```

| Type                | Kind            | What it is                                                         |
| ------------------- | --------------- | ------------------------------------------------------------------ |
| `RenderingManager`  | World resource  | Holds which pipeline the renderer runs                             |
| `RenderingPipeline` | Asset           | The ordered list of passes, each switchable on or off              |
| `RenderPass`        | Asset           | One step: what it draws, where it writes, which shader it uses     |
| `ResolvedPass`      | Plain data in the frame | A pass with its handles turned into keys, ready for the renderer |

### What kinds of pass are there?

| Kind         | What it draws                                                                   | Typical use              |
| ------------ | ------------------------------------------------------------------------------- | ------------------------ |
| `Geometry`   | The scene's meshes, batched as in Stage 4                                       | The lit scene            |
| `Fullscreen` | One triangle covering the whole target; its shader reads earlier pictures      | Bloom, tonemapping, any post-processing |
| `Skybox`     | One triangle at the far plane, only where no mesh was drawn                     | The sky                  |

### Where does a pass write?

A pass writes either the **surface** (the window's image) or an **offscreen target**, a named texture that later passes can read. A pass declares its inputs by name, so the passes form a chain.

The default pipeline shows the idea. `pill_master_renderer_data` installs it when it loads, so every project gets it unless it picks another one:

```text
 order  pass                  kind        reads           writes
 ─────  ────────────────────  ──────────  ──────────────  ─────────────────────────────
   0    pill.pbr.pass.opaque  geometry    —               hdr      lit meshes, bright values kept
   0    pill.pbr.pass.skybox  skybox      —               hdr      sky behind them (off until set)
   1    bloom                 fullscreen  hdr             bloom    the bright parts, at half size
   2    composite             fullscreen  hdr, bloom      lit      bloom added back on top
   3    tonemap               fullscreen  lit             ldr      brightness brought into display range
   4    lens                  fullscreen  ldr             surface  grain, colour grade, vignette
```

Offscreen targets use a half-float format (`Rgba16Float`), because lit pixels can be much brighter than 1.0. A normal 8-bit target would cut those values off before the tonemap pass could bring them back into range.

A few rules keep a chain valid. The renderer checks them when the chain changes and names the pass that breaks one:

- **The pass that writes the surface must be last.** Nothing can read the surface, so any pass after it would draw into a picture nobody sees.
- **A pass may only read a target an earlier pass wrote.** A misspelt name fails that pass's build, instead of showing a black window.
- **Only a fullscreen pass can draw at a smaller size** (`target_scale`). Geometry and skybox passes share the window's depth buffer, so they must match its size.

### Which pass draws which mesh?

A geometry pass that names a shader draws **the instances whose material uses that shader**. A geometry pass that names no shader draws **every instance**, each through its own material's shader.

Instances that no pass claims are not lost. The first geometry pass that names a shader and writes only the surface draws them too, each through its own material. So a material you assign is never silently missing from the picture.

> **Example:** a pipeline has one geometry pass that names the lit shader. You add a cube whose material uses a custom `toon` shader that no pass names. The geometry pass draws the lit instances with the lit shader, and also draws the toon cube with the toon shader. A debug log line says the pass drew instances no pass claimed.

### How does a project pick its own pipeline?

It builds the passes, puts them in a pipeline asset and hands the pipeline to the `RenderingManager`. The renderer starts using it in the next update.

> **Example:** the `cube` example replaces the default PBR chain with the one-pass simple pipeline.
>
> ```rust
> let pipeline = simple_pipeline::install(assets)?;   // one geometry pass → surface
>
> world
>     .get_resource_mut::<RenderingManager>()
>     .ok_or("the RenderingManager resource is missing")?
>     .set_pipeline(pipeline);
> ```
>
> A custom pass is built the same way:
>
> ```rust
> let blur = RenderPass::new("my.blur")
>     .with_kind(PassKind::Fullscreen)
>     .with_shader(blur_shader)
>     .with_input("source", "hdr")                              // read the "hdr" target
>     .with_target(PassTarget::Offscreen("blurred".to_owned()))  // write a new one
>     .with_order(2);
> ```

`RenderingManager::clear()` drops the pipeline and puts the renderer on its **built-in chain**: one geometry pass that draws every instance into the surface through its own material.

### Is the pass list rebuilt every update?

No. The `rendering` ECS system turns the pipeline into `ResolvedPass` values only when the asset store's revision or the selected pipeline changes. Each time it does, it increases `chain_generation`. The renderer compares that number with the one its GPU objects were built from. An unchanged frame costs one number comparison.

---

## Stage 6: How do materials and shaders reach the GPU?

A **shader** is a GPU program with two stages: the vertex stage places each vertex on screen, and the fragment stage colours each pixel. A **material** is a shader plus the values it reads. Both are matched up **by name**.

### How does a shader say what it reads?

Each shader source has a `.meta` file beside it that lists the shader's **slots**: the named values and textures it expects. It also names the vertex stage to pair with, and whether the shader reads the engine's clock and the camera.

> **Example:** the simple pipeline's lit shader, `default_lit_fragment.hlsl.meta`:
>
> ```json
> "settings": {
>   "vertex": "common_shaders/default_vertex.wgsl",
>   "parameters": [
>     { "name": "tint",        "type": "Color" },
>     { "name": "specularity", "type": "Scalar" }
>   ],
>   "textures": [
>     { "name": "color",  "type": "Color",  "texture_binding": 0, "sampler_binding": 1 },
>     { "name": "normal", "type": "Normal", "texture_binding": 2, "sampler_binding": 3 }
>   ],
>   "engine_parameters": true,
>   "camera_parameters": true
> }
> ```
>
> A material for this shader then fills those slots by name:
>
> ```rust
> Material::builder("red")
>     .shader(&lit_shader)
>     .color_parameter("tint", [0.9, 0.1, 0.1])
>     .scalar_parameter("specularity", 0.5)
>     .texture("color", &brick_texture)
>     .build()
> ```

The renderer packs a material's values by walking **the shader's slot list**, not the material's values. A value whose name the shader does not declare is ignored. A misspelt name therefore cannot shift the other values into the wrong places. Every value takes one 16-byte slot in the uniform buffer.

| Parameter type | Stored as                         |
| -------------- | --------------------------------- |
| `Scalar`       | one `f32`                         |
| `Bool`         | a `u32`, 0 or 1                   |
| `Color`        | three `f32` (RGB)                 |

### Where does each kind of data go?

Every shader in Pill uses the same four **bind groups**, which are numbered sets of GPU resources a shader reads:

| Group | Holds                                                              | Changes        |
| ----- | ------------------------------------------------------------------ | -------------- |
| 0     | Engine parameters: window size, seconds, frame duration, frame number | Once per window per update |
| 1     | Camera: view and projection matrices                               | Once per window per update |
| 2     | The material's (or pass's) parameters                              | Per material   |
| 3     | The material's (or pass's) textures and samplers                   | Per material   |

A pass can carry its own parameters and textures, or name a material. When it does both, the pass's own values win.

### Why are shaders written in HLSL but run as WGSL?

wgpu runs WGSL, but Pill's shaders are written in HLSL. A tool called `slangc` **cooks** each HLSL source into WGSL:

- The data crate's own shaders are cooked when it builds.
- A project's shaders under `res` are cooked when the development host starts.
- In a windowed development host, a watcher re-cooks an edited `.hlsl` file and applies it live.

The file name decides the stage: `*_fragment.hlsl` starts at `fs_main`, and `*_vertex.hlsl` starts at `vs_main`. Any other name is refused rather than guessed. The cooker takes `slangc` from `PILL_SLANGC`, or from the first `slangc` on `PATH`.

> **Example:** you save `pbr_fragment.hlsl` with a new lighting term. The host's watcher re-cooks it into `pbr_fragment.wgsl` and hands the new text to the data crate. The data crate writes it into the `Shader` asset, which raises its content version. On the next update, the renderer's asset sync (Stage 4) rebuilds that one shader's pipeline, and the materials that use it. No module is rebuilt.

---

## Stage 7: How does rendering survive a hot reload?

Rendering survives a hot reload because **the world never holds anything that belongs to the GPU module**. The frame, the components and the assets are plain data. The GPU objects live only inside the renderer, and the renderer can rebuild all of them from that data.

### What happens when the GPU module itself is edited?

The host rebuilds `pill_master_renderer` and swaps it in, much like any other extension, with one extra step around the swap:

1. The host builds and loads the new renderer DLL. The old renderer keeps drawing until this succeeds.
2. Just before the old DLL is retired, the host **detaches** the old renderer. Its destructor runs inside the old DLL, while that DLL is still loaded.
3. The host **attaches** the new renderer to the same window and replays every extra window onto it.
4. The new renderer starts with an empty GPU cache, so its first frame uploads every asset again.

The scene does not notice: entities, components, assets and the pass list all stay in the world. The log says `renderer reattached to the window`.

### What happens when the data crate is edited?

The GPU module contains a compiled copy of the data crate's types, so it must be rebuilt too. The host reloads the data crate and then rebuilds the renderer **in the same frame boundary**, so no update runs with mismatched code.

If a component's layout changed and the renderer could not be rebuilt against it, the host **pauses** the `rendering` ECS system and logs `rendering paused`. The window keeps its last picture until a renderer edit builds and loads. Drawing with the wrong layout would read memory as the wrong type.

### Why is the frame written with keys and `BTreeMap`s?

A value in the world outlives the DLL that created it. So the frame must not hold anything that points into a DLL:

- **Asset keys instead of handles or pointers.** A key is a number. It packs the asset's slot index and a generation, so a key to a deleted asset never matches the asset that later reuses its slot.
- **`BTreeMap`, never `HashMap`.** An empty `HashMap` points at a static value inside the DLL that created it. After that DLL is unloaded, reading the map crashes. A `BTreeMap` holds no such pointer.
- **Owned copies.** The camera is copied into the frame, not borrowed. `RenderCapabilities` holds an owned `Vec<String>`, not a `&'static` slice.

The resources that cross the boundary (`RenderFrame`, `RenderingManager`, `SurfaceCameras` and the picking resources) each have a fixed **shared name**. The host and every generation of the renderer find the same resource by that name. A test pins each name, because changing one would make the renderer read a resource nobody writes.

| Edit                         | What is rebuilt                          | What is kept                       |
| ---------------------------- | ---------------------------------------- | ---------------------------------- |
| A material, texture or mesh file | That asset's GPU copy                  | Everything else                    |
| An `.hlsl` shader            | That shader's pipeline and its materials | Everything else; no module rebuild |
| `pill_master_renderer` code  | The whole renderer and its GPU cache     | The world, assets and pass list    |
| `pill_master_renderer_data` code | The data crate, then the renderer    | The world's values                 |
| Your project code            | Nothing in the renderer                  | Everything                         |

---

## Stage 8: What else does the renderer draw?

Besides the scene, the renderer handles several windows at once, draws the editor's tools on top of the picture, and answers questions such as "which entity is under the mouse?".

### How does one renderer draw several windows?

Every window the renderer draws into is a **surface**, named by a `SurfaceId`. The window the renderer was attached to is `SurfaceId::PRIMARY`. A frontend attaches more with `attach_surface`.

All surfaces share one GPU device, one asset cache and one instance buffer. Each surface owns what is sized to it: its swapchain, depth buffer, offscreen targets and its own copy of the chain's GPU objects.

The `SurfaceCameras` resource binds a camera to each surface. A binding is either a camera entity in the world, or a camera given as plain data. The editor uses the second kind for its scene views, so its cameras never appear in the project's world.

> **Example:** the editor shows `Scene`, `Scene 2` and `Game`. `Game` is the primary surface and draws through the project's own camera, chosen as in Stage 2. `Scene` and `Scene 2` are extra surfaces, each bound to an editor camera given as data. The renderer draws all three every update, from one frame and one instance upload.

### What is the overlay?

The **overlay** is everything drawn **after** the pipeline, on top of its picture: debug lines and labels, selection outlines, the transform gizmo and the scene grid. It does not go through the pipeline, because a debug line must look the same whatever pipeline the project uses.

The overlay reads the depth buffer the geometry passes left, so a mesh in front of a depth-tested line hides it. The editor's tools (outlines, gizmo, grid) appear only on surfaces bound to an editor camera, never on the project's own window.

The UI comes last. A project that draws its own egui UI publishes draw lists into the world's `UiFrameSlot`. The `rendering` ECS system moves them into `RenderFrame.ui`, and the renderer's UI painter draws them over each surface.

### How does picking work?

**Picking** answers "which entity is at this pixel?". The editor writes a request into `PickRequests`. When it draws the next frame, the renderer draws the requested surface's entities into a hidden pick buffer, each as its own id, and asks the GPU to copy the pixel back.

The answer arrives **a few updates later**, when the GPU has finished. The frame that asked never waits for it. The frontend moves the answer into `PickResults`, where the editor reads it. A pick on a surface that was not drawn is answered at once, with no hit.

**Previews** work the same way: the editor asks for a small off-screen render of an asset (a mesh or material thumbnail), the renderer draws at most one per update, and the image comes back a few updates later.

---

## Where does each part live?

| What                                             | Where                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------- |
| The `PillRenderer` trait, `HeadlessRenderer`     | `modules/rendering/pill_renderer_api/src/api.rs`                              |
| `RenderFrame`, `ResolvedPass`, `PassSettings`    | `modules/rendering/pill_renderer_api/src/frame.rs`                            |
| Surfaces and camera bindings                     | `modules/rendering/pill_renderer_api/src/surface.rs`                          |
| Picking and previews (contract)                  | `modules/rendering/pill_renderer_api/src/picking.rs`, `preview.rs`            |
| UI draw lists                                    | `modules/rendering/pill_ui_frame/`                                            |
| Components, assets, `RenderingManager`           | `modules/extensions/pill_master_renderer/modules/runtime/data/src/`      |
| Default pipelines (simple, PBR, post-processing, skybox) | `.../data/src/config/`                           |
| Shader sources (HLSL)                            | `.../data/shader_sources/`                               |
| The `rendering` ECS system                       | `modules/extensions/pill_master_renderer/modules/runtime/gpu/src/frame.rs`   |
| `Renderer::render` and window recording          | `.../gpu/src/renderer.rs`                                    |
| Asset sync and the draw queue                    | `.../gpu/src/rendering_resources_manager.rs`, `render_queue.rs` |
| Pass chain GPU objects and planning              | `.../gpu/src/chain.rs`                                       |
| Instanced drawing                                | `.../gpu/src/drawers/mesh_drawer.rs`, `instance.rs`          |
| Overlay, picking, grid                           | `.../gpu/src/overlay/`                                       |
| Loading and reloading the GPU module             | `modules/hosting/pill_development_host/src/renderer_module.rs`, `runtime.rs`  |
| Calling `render` every update                    | `modules/hosting/pill_player/src/rendering.rs` (`AttachedRenderer`)           |

## Which log lines show what the renderer did?

The renderer logs under `engine::rendering`. Set `engine::rendering: debug` under `logging: targets:` in `project_settings.yaml` for the per-shader and per-material detail.

| Log line                                       | Means                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------ |
| `[render] First frame: Presented; camera=true` | The first frame with at least one draw reached the window                 |
| `[render] frame draws`                         | The number of passes that drew changed; a pass that stops drawing shows here |
| `[render] surface N first frame presented`     | Surface `N` presented for the first time                                  |
| `renderer reattached to the window`            | The GPU module was hot reloaded and is drawing again                      |
| `rendering paused`                             | The data layout changed and the renderer could not be rebuilt against it  |
| `[ui] producer=game` / `producer=none`         | Whether the project's UI is feeding the frame                             |

To measure the GPU time of each pass, set `PILL_GPU_PROFILE=1`. The renderer then logs each pass's GPU time every 120 frames, and the times also appear in Tracy (see [Profiling](../other/profiling.md)).

```powershell
$env:PROJECT_PATH = "../examples/local/cube"
$env:PILL_GPU_PROFILE = "1"
cargo run --package pill_standalone --features rendering
```
```cmd
set PROJECT_PATH=../examples/local/cube
set PILL_GPU_PROFILE=1
cargo run --package pill_standalone --features rendering
```
```bash
export PROJECT_PATH="../examples/local/cube"
export PILL_GPU_PROFILE="1"
cargo run --package pill_standalone --features rendering
```

Run these from `modules/`.

## Where to read next

- [Architecture](architecture.md): where rendering sits in one update, and how the frontend, player and host nest.
- [Extensions](extensions.md): how an extension such as the renderer's data crate is loaded.
- [Hot reloading](hosting/hot_reloading.md): the general reload transaction the renderer's reload builds on.
- [Assets](../concepts/assets.md): handles, guids and the asset store the renderer reads.
