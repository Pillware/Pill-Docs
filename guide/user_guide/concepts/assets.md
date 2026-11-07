# Assets

## Summary

An asset is data that many entities can use at once, such as a mesh, a texture, a material or a sound. Assets live in the world's `AssetManager`, components refer to them through small `Handle<T>` values, and most assets come from files in your project's `res` folder.

## At a glance

| Kind of asset            | Where it comes from                                   | Example                         | Load it with                                   |
| ------------------------ | ----------------------------------------------------- | ------------------------------- | ---------------------------------------------- |
| **imported**             | a source file in `res`, plus a `.meta` file beside it | a `.gltf` mesh, a `.png` texture | `world.load_asset::<Mesh>("meshes/rock.gltf")` |
| **standalone**           | its own file in `res`, written by Pill                | a `.material`, a `.scene`       | `assets.import_standalone::<Material>(path)`   |
| **created in code**      | your code builds it                                   | a procedurally generated mesh   | `assets.add(mesh)`                             |

## What is an asset, and how is it different from a component?

A component belongs to one entity. An asset is shared: one mesh can be drawn by a thousand entities.

So an entity does not hold the mesh itself. It holds a `Handle<Mesh>`, a small value that points at the mesh in the `AssetManager`:

```rust
world
    .create_entity()
    .with(TransformComponent::default())
    .with(
        MeshRendererComponent::builder()
            .mesh(&rock_mesh)          // a Handle<Mesh>
            .material(&stone_material) // a Handle<Material>
            .build(),
    )
    .build()?;
```

> **Example:** a forest of 500 trees uses one tree mesh and one bark material. The `AssetManager` holds each once. Each tree entity holds two handles, a few bytes each. Changing the bark material changes every tree at once.

## How do I load an asset from a file?

Put the file in your project's `res` folder and load it by its path relative to `res`:

```rust
let rock_mesh: Handle<Mesh> = world.load_asset::<Mesh>("meshes/rock.gltf")?;
```

- Loading the same path twice returns the same handle; the file is only read once.
- The first time a file is loaded, Pill writes a `.meta` file beside it (`rock.gltf.meta`) with a unique **guid** and the file's import settings. Keep the `.meta` file with the asset, and commit it: the guid is how scenes find the asset again, even after the file is moved or renamed.
- Standalone assets such as materials are files Pill reads and writes itself. Load them through the `AssetManager`: `assets.import_standalone::<Material>(Path::new("materials/stone.material"))?.handle`.
- To choose the import settings a new `.meta` file starts with, import through the `AssetManager` instead: `assets.import(AssetImport::<Texture>::new("textures/grid.png", MetadataPolicy::CreateIfMissing).with_initial_settings(settings))?.handle`. `MetadataPolicy::ReadIfPresent` never writes a `.meta` file.
- The path is resolved the same way in every build: through `res` in a checkout, through the embedded asset pack in a shipping build, and through the fetched pack in a browser build. Your code doesn't change.

## How do I create an asset in code?

Add it to the `AssetManager` resource:

```rust
let Some(assets) = world.get_resource_mut::<AssetManager>() else {
    return Err("the AssetManager is missing".into());
};
let terrain: Handle<Mesh> = assets.add(build_terrain_mesh(&settings));
```

An asset created this way has no file and no guid. It exists only while the project runs, and it is not saved anywhere.

## How do I use an asset in an ECS system?

Through the `AssetManager` resource and a handle:

```rust
// Logs the number of vertices of every mesh an entity draws.
fn report_meshes(assets: Res<AssetManager>, mut query: Query<&MeshRendererComponent>) {
    let Some(assets) = assets.get() else {
        return;
    };
    for renderer in query.iter_mut() {
        if let Some(mesh) = assets.get(renderer.mesh) {
            // read the mesh
        }
    }
}
```

- `assets.get(handle)` returns `None` when the asset is gone. A handle carries a generation number, like an entity, so a handle to a removed asset never points at a different asset that later takes its place.
- Use `ResMut<AssetManager>` and `assets.get_mut(handle)` to change an asset. Every entity using it sees the change.

## How are asset references saved in scenes?

By guid. When a scene is saved, a `Handle<Mesh>` field in a component is written as the mesh's guid plus its path as a hint. When the scene loads, the asset is found by its guid and loaded if it isn't already.

So an asset referenced from a saved scene must be **file-based** with a `.meta` file. An asset created in code has no guid, so a reference to it cannot be saved.

## Does an asset need to be shared?

When more than one module uses the asset type, yes, for the same reason as components and resources: every module then reaches the same set of assets. The renderer's asset types (`Mesh`, `Texture`, `Shader`, `Material`, `RenderPass`, `RenderingPipeline`) are all shared, so a project and the renderer see the same meshes and materials.

Your own asset type only needs a shared name if another module also uses it.

## How do I declare my own asset type?

Derive `PillAsset` and say which kind it is:

```rust
#[derive(PillAsset)]
#[pill(imported)] // or #[pill(standalone)]
pub struct Sound { /* ... */ }

pill_engine::trait_type_map::impl_trait_accessible!(dyn Asset; Sound);
```

- The derive declares the type: your module's entry point registers it with the import registry on every load, so you don't call `register_asset` yourself.
- You still write the `ImportedAsset` (how to decode the source file, and its import settings) or `StandaloneAsset` impl by hand, plus the `impl_trait_accessible!` line.
- `pill_audio`'s `Sound` is a complete imported example.

## What happens when I edit an asset file while the project runs?

The development host watches your project's `res` folder. When you save an asset file, or its `.meta` file, the asset is imported again at the next frame boundary, and every handle to it sees the new data. Shader sources (`.hlsl`) are recompiled and applied live in the same way.

Set `PILL_ASSETS_HOT_RELOADING=0` before starting the host to turn both watchers off. Shipping and browser builds never watch files.

## What happens to assets when the project hot-reloads?

Assets stay in memory as they are. A **code** reload does not read asset files again.

What happens when you change the **struct** of an asset type depends on the type:

| Asset type and change                             | What happens                                                                                              |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| any code, but not the asset's struct              | every asset and handle keeps working                                                                      |
| your own asset type's struct changed              | the existing assets of that type become **unreachable**: handles return `None`, and the new code starts with none |
| a shared asset type's struct changed size         | the reload is **refused**, and the previous version keeps running                                         |

Asset values are never converted when their struct changes. If you change an asset type's fields while the project runs, load its files again, or create its assets again in code, for example by checking whether a handle still resolves:

```rust
if assets.get(terrain.mesh).is_none() {
    terrain.mesh = assets.add(build_terrain_mesh(&settings));
}
```

Restarting the project after such a change is the simplest option.

## Where is this in the code?

| What                                                        | Where                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------- |
| `AssetManager`, `Handle<T>`, `add`, `get`                   | `pill_engine_core`, `asset.rs`                                |
| `World::load_asset`                                         | `pill_engine_core`, `asset_loading.rs`                        |
| Imported assets and `.meta` files                           | `pill_engine_core`, `asset_metadata.rs`                       |
| Standalone assets (`.material`)                             | `pill_engine_core`, `asset_standalone.rs`                     |
| Asset references in scenes                                  | `pill_engine_core`, `saved_references.rs` and `scene.rs`      |
| `#[derive(PillAsset)]`                                      | `pill_engine_macros`, `lib.rs`                                |
| Watching `res` and reimporting edited assets                | `pill_development_host`, `watchers/asset.rs`                  |
| The renderer's asset types                                  | `pill_master_renderer_data/src/assets/`                       |
| A declared imported asset type                              | `pill_audio/src/sound.rs`, `Sound`                            |
| A real project loading meshes, textures and materials       | `examples/pills/pills_rust/src/lib.rs`, `load_assets`         |
