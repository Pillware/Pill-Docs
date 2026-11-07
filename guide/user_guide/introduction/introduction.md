# Introduction

## Summary

This page is a small knowledge pill (🙃) - a minimal explanation of how Pill works, using the cube example from the [Quick start](quick_start.md): a camera looking at a spinning cube.

The cube project is tiny, but it already uses every basic idea in Pill: a **project**, **assets**, **entities** made of **components**, a **resource**, and an **ECS system** that runs every update. Once you understand it, you understand how every Pill project is put together.

## What is in the cube project?

A Pill project is a folder with a settings file, code and assets:

```text
examples/cube/cube_rust/
├── project_settings.yaml        the project's name and the extensions it uses
├── Cargo.toml                   a normal Rust crate that depends on Pill
├── src/
│   └── lib.rs                   the code: setup + one ECS system
└── res/                         the assets
    ├── models/cube.obj          the cube's shape
    ├── models/cube.obj.meta     the model's identity and import settings
    └── materials/cube.material  the cube's surface: color, roughness, shader
```

You run it by pointing `PROJECT_PATH` at this folder. Pill reads the settings, builds the code, loads the assets and starts running it.

## What is an ECS?

Pill is built on an **ECS** (entity component system): a way of organizing a project that keeps data and code strictly apart.

| Piece          | What it is                                                    | In the cube example                     |
| -------------- | ------------------------------------------------------------- | --------------------------------------- |
| **entity**     | one object in the world - just an id, with no data of its own | the camera, the cube                    |
| **component**  | a piece of data attached to an entity                         | `TransformComponent`, `CameraComponent` |
| **resource**   | one value shared by the whole world, not by one entity        | `Time`                                  |
| **ECS system** | a function that runs every update over the data it asks for   | `spin_cube_system`                      |

All of it lives in one **world**. Your code never owns objects with fields and methods; it puts data into the world as components, and ECS systems change that data every update. Because each ECS system says exactly which data it uses, Pill can run the ones that don't touch the same data at the same time, on all your CPU cores.

The next three sections show each piece in the cube's real code.

## What are entities and components?

The cube example creates two **entities**, the camera and the cube, and gives each its **components**:

```rust
// The camera: a camera component, placed 5 units in front of the origin.
world
    .create_entity()
    .with(CameraComponent::default())
    .with(TransformComponent {
        translation: [0.0, 0.0, 5.0],
        ..Default::default()
    })
    .build()
    .map_err(|error| error.to_string())?;

// The cube: a transform, plus a mesh renderer that says what to draw.
world
    .create_entity()
    .with(TransformComponent::default())
    .with(
        MeshRendererComponent::builder()
            .mesh(&mesh_handle)
            .material(&material_handle)
            .build(),
    )
    .build()
    .map_err(|error| error.to_string())?;
```

This code runs once when the project starts, in its `init` function (see [What happens when the project starts?](#what-happens-when-the-project-starts)). `mesh_handle` and `material_handle` point at the cube's model and material, loaded just before (see [What are assets?](#what-are-assets)).

After that, the world holds two entities:

| Entity | `TransformComponent` | `CameraComponent` | `MeshRendererComponent`           |
| ------ | -------------------- | :---------------: | --------------------------------- |
| camera | at `[0, 0, 5]`       |         ✓         |                                   |
| cube   | at the origin        |                   | the cube mesh + the cube material |

What an entity *is* comes entirely from its components. The camera is a camera because it has a `CameraComponent`. The cube is drawn because it has a `MeshRendererComponent`. Give the camera a `MeshRendererComponent` and it would be drawn too.

The real example only creates each entity when the world doesn't have one of that kind yet, so running the setup twice can never give you a second cube.

See [Entities](../concepts/entities.md) and [Components](../concepts/components.md).

## What makes the cube spin?

An **ECS system**: a plain function that Pill runs every update. This one is the only logic the cube example runs:

```rust
#[pill_hot]
#[system(name = "spin_cube")]
fn spin_cube_system(
    time_resource: Res<Time>,
    mut drawn_entities: Query<(&mut TransformComponent, &MeshRendererComponent)>,
) -> Result<(), SystemError> {
    let Some(frame_time) = time_resource.get() else {
        return Ok(());
    };
    let delta_seconds = frame_time.delta_seconds();
    let [x, y, z] = SPIN_RATES_RADIANS_PER_SECOND;
    let frame_rotation = glam::Quat::from_euler(
        glam::EulerRot::XYZ,
        x * delta_seconds,
        y * delta_seconds,
        z * delta_seconds,
    );
    for (mut transform, _) in drawn_entities.iter_mut() {
        let current_rotation = glam::Quat::from_array(
            pill_engine::common_components::rotation_or_identity(transform.rotation),
        );
        transform.rotation = (frame_rotation * current_rotation).normalize().to_array();
    }
    Ok(())
}
```

The parameters say what data the system needs, and Pill hands it exactly that:

- **`#[system(name = "spin_cube")]`** registers the function. You never call it yourself.
- **`Res<Time>`** asks for the `Time` resource, which says how long the last update took. Multiplying the spin by `delta_seconds` keeps the speed the same at 30 or 300 updates per second.
- **`Query<(&mut TransformComponent, &MeshRendererComponent)>`** asks for every entity that has *both* components. `&mut` means the system changes the transform; `&` means it only reads the mesh renderer.
- **`#[pill_hot]`** lets Pill swap in a new version of this function while the project runs (see below).

> **Example:** the query visits the cube, because it has a `TransformComponent` and a `MeshRendererComponent`. It skips the camera, which has no `MeshRendererComponent`. That is how the cube spins and the camera stays still, without any `if` in the code.

See [ECS systems](../concepts/systems.md) and [Resources](../concepts/resources.md).

## What happens every update?

About 60 times a second (more, if your screen refreshes faster), Pill runs one **update**:

1. **The clock advances.** The `Time` resource now holds how long the last update took.
2. **The ECS systems run.** `spin_cube` turns the cube a little.
3. **The renderer draws.** It finds the camera through its `CameraComponent` and draws every entity with a `MeshRendererComponent` from the camera's point of view.

That is the whole loop, seen from your project: your ECS systems change the data in the world, and the renderer shows the result.

## What happens when the project starts?

Pill calls your project's **init** function once, when the project first loads. The `#[pill_project]` attribute marks it:

```rust
#[pill_project]
pub fn init(engine: &mut Engine) -> u32 {
    // Step 1: Register the renderer's data and point the asset store at `res`.
    pill_master_renderer_data::register(engine);
    AssetLoader::set_root(res_directory());

    // Step 2: Load the mesh and the material.
    let Ok((mesh_handle, material_handle)) = load_assets(engine.world_mut()) else {
        return 1;
    };

    // Step 3: Add the camera and the cube to the world.
    if create_scene(engine.world_mut(), &mesh_handle, &material_handle).is_err() {
        return 1;
    }
    0
}
```

Returning `0` means "ready", and `1` means setup failed. The example's real `init` also logs why.

`init` fills the world with the starting state: first the assets, which the next section covers, then the camera and the cube you saw [above](#what-are-entities-and-components).

## What does `project_settings.yaml` say?

It names the project and lists the extensions it needs:

```yaml
name: "Cube"
build_binary_name: "CubeRust"
version: "0.1.0"
modules: []
```

**Extensions** are optional features: physics, audio, splines and so on. Each one is a module you add by name under `modules:`. The cube needs none of them, so the list is empty. A project that wanted physics would write `modules: [pill_physics]`.

The renderer is an extension too, but Pill loads it for every project by default, so you never list it.

## How is the code connected to Pill?

Through `Cargo.toml`. The project is a normal Rust crate with two Pill dependencies:

```toml
[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
pill_engine = { path = "../../../modules/engine/pill_engine" }
pill_master_renderer_data = { path = "../../../modules/extensions/pill_master_renderer/pill_master_renderer_data", default-features = false }
```

- **`pill_engine`** is everything your code uses to talk to the engine: `#[system]`, `Query`, `Res`, `Engine`, `World`.
- **`pill_master_renderer_data`** gives you the renderer's components and asset types, such as `TransformComponent`, `CameraComponent`, `Mesh` and `Material`.
- **`cdylib`** lets Pill build your project as a separate DLL while you work, which is what makes hot reload possible.

## What are assets?

An **asset** is data that many things can share, usually loaded from a file: a model, a texture, a material, a sound. The cube uses two:

```rust
fn load_assets(world: &mut World) -> Result<(Handle<Mesh>, Handle<Material>), String> {
    let mesh_handle = world.load_asset::<Mesh>("models/cube.obj")?;
    let material_handle = world
        .get_resource_mut::<AssetManager>()
        .ok_or("the AssetManager resource is missing")?
        .import_standalone::<Material>(Path::new("materials/cube.material"))
        .map_err(|error| error.to_string())?
        .handle;
    Ok((mesh_handle, material_handle))
}
```

Loading an asset gives you a **handle**: a small value that points at the loaded data. You pass the handle around instead of the data itself, so a hundred cubes can share one mesh without copying it a hundred times.

Pill's own asset files are plain JSON, so you can read and edit them by hand. Here is part of `cube.material`:

```json
{
  "asset_type": "pill_master_renderer::assets::Material",
  "guid": "0000000000000000000000000000c002",
  "asset": {
    "parameters": {
      "pbr_base":      { "Color": [0.8, 0.8, 0.82] },
      "pbr_roughness": { "Scalar": 0.35 }
    }
  }
}
```

The `guid` is the material's permanent identity, so references to it keep working even when the file is moved or renamed. A file from another tool, such as `cube.obj`, keeps its guid in a `.meta` file next to it.

> **Example:** while the cube is spinning, change `0.8, 0.8, 0.82` to `0.9, 0.2, 0.2` in `cube.material` and save. Pill reimports the material and the cube turns red, without restarting.

See [Assets](../concepts/assets.md).

## What happens when I change the code?

Pill picks the change up while the cube keeps spinning. What it does depends on what you changed:

| You change…                                                          | Pill…                                                       | Takes               |
| -------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------- |
| the body of `spin_cube_system`, for example `delta_seconds * 3.0`    | **hot patches** just that function, thanks to `#[pill_hot]` | under a second      |
| `SPIN_RATES_RADIANS_PER_SECOND`, or anything outside a function body | **hot reloads** the whole project DLL                       | a couple of seconds |
| `cube.material` or another asset                                     | **reimports** the asset                                     | almost instantly    |

In every case the world survives: the cube keeps its current rotation and carries on with the new code or asset. Nothing restarts, and `init` does not run again.

## What does the cube not use?

The cube example keeps things minimal. Real projects soon need a few more pieces:

- **Commands** create and destroy entities from inside an ECS system, for example to spawn a bullet. See [Commands](../concepts/commands.md).
- **Extensions** add features such as physics or audio through `modules:` in `project_settings.yaml`.
- **Your own components and resources**, declared with `#[derive(PillComponent)]` and `#[derive(PillResource)]`.
- **C#.** `examples/cube/cube_csharp` draws the same scene from the same files, written in C#.

## Where do I go next?

- The building blocks in depth: [Entities](../concepts/entities.md), [Components](../concepts/components.md), [ECS systems](../concepts/systems.md), [Resources](../concepts/resources.md), [Assets](../concepts/assets.md), [Commands](../concepts/commands.md).
- Running, building and shipping: [Build configurations](../advanced/build_configurations.md).
- Seeing your world while it runs: [Editor](../editor/editor.md).
- How Pill works inside: the engine's [Architecture](../../engine_guide/levels/architecture.md).
