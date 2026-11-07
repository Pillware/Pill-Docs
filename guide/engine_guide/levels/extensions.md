# Extensions: optional modules a project chooses

## Summary

An extension is an optional module that adds one feature to Pill, such as physics, audio, splines or the renderer. A project picks the extensions it wants by name under `modules:` in its `project_settings.yaml`, and the host builds, loads and hot-reloads each one as its own DLL, exactly like the project.

This page covers what is specific to extensions: how they are organized, found, used and shipped. How any module is loaded and reloaded is in [modules.md](modules.md).

## At a glance

| Question                                  | Answer                                                                                                  |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Where does an extension live?             | In its own folder, `modules/extensions/<extension>/`.                                                   |
| How does a project turn one on?           | It lists the crate's name under `modules:` in `project_settings.yaml`.                                  |
| How does a project use its types?         | It adds the extension's crate to its own `Cargo.toml` as a normal dependency.                           |
| What can an extension add?                | Components, resources and managers, ECS systems, asset types, a settings asset, and its own asset files. |
| Does an extension have to be registered anywhere? | No. The host finds it by its folder; there is no list to edit.                                  |
| Can it add editor tools?                  | Yes, in an optional `<extension>_editor` crate that only the editor loads.                              |
| What happens in shipping mode?            | It is linked into the executable, and its asset files are packed with the project's.                    |

```
 project_settings.yaml                      modules/extensions/
 ─────────────────────                      ───────────────────
 modules:                                   pill_physics/
   - "pill_physics"   ── the host finds ──►   pill_physics/            (the crate)
                                              examples/stacked_boxes/  (optional)
                                              generated/               (written by the host)
                                            pill_audio/
                                              ...
```

## Why are features extensions instead of part of the engine?

Features are extensions so a project pays only for what it uses.

A project that needs no physics does not load `pill_physics`, does not compile rapier, and has no physics components in its world. The engine core stays small: it holds the ECS, the asset store and the hot reload machinery, and nothing feature-specific.

Splitting features into modules also keeps hot reload fast. When you edit the audio extension, only the audio DLL is rebuilt. The engine core, the project and the other extensions are not touched.

> **Example:** `stacked_boxes`, the physics example project, lists only `pill_physics` and sets `renderer: "none"`. It runs headless with a rigid-body simulation and nothing else: no renderer, no audio, no splines.

## What does an extension folder hold?

Each extension has one folder under `modules/extensions/`. The folder holds the extension's crates and a few optional folders beside them:

```
modules/extensions/pill_physics/
  pill_physics/                 ← the runtime crate (a plain Rust library)
    Cargo.toml
    build.rs                    ← writes the hot patch function list
    src/pill_physics.rs         ← crate root, named after the crate
    res/                        ← optional: the extension's own asset files
  pill_physics_editor/          ← optional: editor tools (none exists for physics today)
  examples/stacked_boxes/       ← optional: runnable example projects
  generated/                    ← written by the host, never by hand
    host_module_pill_physics/
```

Most folders hold one runtime crate named after the folder. A folder may hold more than one: `pill_master_renderer/` holds both the renderer's data crate and its GPU module.

A few conventions are the same in every extension crate:

- **`crate-type = ["rlib"]`.** The crate is a plain library. The host builds the DLL from a generated wrapper crate in `generated/`, so the project can also depend on the crate. [modules.md](modules.md#why-is-the-module-crate-not-a-dll-itself) explains why.
- **The crate root is named after the crate** (`src/pill_physics.rs`), not `lib.rs`. A Windows debugger matches breakpoints by file name when a DLL is loaded at runtime. With hundreds of `lib.rs` files in the dependency graph, it would find hundreds of wrong candidates. `gdb` and `lldb` on Linux also resolve a `file:line` breakpoint by file name, so the convention helps there too.
- **`build.rs` calls `pill_hot_scan`.** It writes a list of every function a hot patch can reach. Without it, only `#[pill_hot]` functions could be patched, and every other edit would fall back to a full hot reload.
- **Engine access goes through `pill_engine`**, the crate every module uses to reach the engine. An extension never names `pill_engine_core` directly.

## How does a project use an extension?

A project uses an extension in two places, and they do different jobs.

**`modules:` in `project_settings.yaml` decides what runs.** It tells the host to build and load the extension's DLL, so its ECS systems run every update and its resources exist in the world.

```yaml
modules:
  - "pill_physics"
```

**`Cargo.toml` decides what the project's code can name.** If the project's own code reads a `RigidBodyComponent` or calls `cast_ray`, it needs the crate as a dependency:

```toml
[dependencies]
pill_engine = { path = "../../../../engine/pill_engine" }
pill_physics = { path = "../../pill_physics" }
```

A project can list an extension without depending on it. In that case the extension runs, but the project's code cannot see its types. The reverse does not work: depending on the crate without listing it compiles the types into the project, but no physics ECS system ever steps the bodies.

> **Example:** `stacked_boxes` spawns a ground plane and a stack of boxes, each with a `RigidBodyComponent` and a `ColliderComponent`. The project names these types, so it depends on `pill_physics`. The bodies fall because `modules:` loads `pill_physics`, whose ECS system steps the simulation every update.

The renderer's data crate is the one dependency with a special rule: a project depends on it with `default-features = false`. The host and every module must resolve the same features, and the data crate's default features would add to them. See [modules_linking_in_pill.md](hosting/modules_linking_in_pill.md).

## Why are an extension's components shared?

An extension's components are **shared** so the project and the extension agree on them, even though each one compiled its own copy of the type.

When the project depends on `pill_physics`, the physics crate's code is compiled into the project's DLL as well as into the physics DLL. Rust gives the two copies of `RigidBodyComponent` different type ids. Without extra help, the project's query and the physics ECS system would look for two different component types.

So the components an extension exposes are marked `#[pill(shared)]`. A shared component's identity is a hash of its name, not its Rust type id. Every DLL computes the same hash, so both copies refer to the same column in the world.

```rust
#[derive(PillComponent)]
#[pill(persistable, shared)]
pub struct RigidBodyComponent { /* ... */ }
```

A shared component has a cost: when its layout changes, every module that compiled the old layout must be rebuilt before it can read it again. Until then, that module's queries match nothing and log the refusal once. [components.md](../concepts/components.md) covers identity in detail.

## How does the host find an extension?

The host finds an extension by its folder. There is no list of extensions to edit anywhere.

The workspace manifest includes every `extensions/*/pill_*` crate, and the host looks up each name under `modules:` in `modules/extensions/`:

1. It first tries `extensions/<name>/<name>/`.
2. If that does not exist, it searches every other folder for a crate with that name, in name order. This is how `pill_master_renderer_data` is found inside `pill_master_renderer/`.

Folders starting with `_` are skipped, and so is `rendering/`, which holds older renderers no build uses.

The host refuses the settings file before building anything when an entry:

- is not a valid crate folder name,
- ends in `_editor` (editor crates are never listed; see below),
- appears twice, or
- matches no folder.

> **Example:** a project lists `pill_phisics`. The host stops at start-up with an error naming `pill_phisics` as an extension with no folder. Nothing is built and nothing is loaded.

## In what order do extensions load?

Extensions load in the order `modules:` lists them, after the renderer's data crate.

The renderer's data crate always loads first, because other extensions and the project may use its components, such as `TransformComponent`. If a project also lists the data crate, it loads once, not twice.

The order matters in one visible place. A shared component is registered by every module that links it, but the C# mirror file declares it only once. The first module in load order that exposes the component keeps it in its mirror file. Because the order comes from the project's settings, it stays the same from run to run.

## What can an extension add?

An extension can add anything a project can add. It declares each item where the item is defined, and the extension's entry point registers it on every load.

| What                 | How it is declared                                  | Example                                         |
| -------------------- | --------------------------------------------------- | ----------------------------------------------- |
| Components           | `#[derive(PillComponent)]`, usually `shared`        | `RigidBodyComponent`, `ColliderComponent`       |
| ECS systems          | `#[system]` on a free function                      | the physics step                                |
| Resources            | `#[derive(PillResource)]`, inserted in `register`   | `PhysicsEvents`                                 |
| Managers             | a resource with `#[pill(manager)]`                  | `PhysicsManager`, which owns the rapier world   |
| Asset types          | `#[derive(PillAsset)]`                              | `Sound` in `pill_audio`                         |
| A settings asset     | registered in `register`                            | `res/settings/pill_physics.physics_settings`    |
| Asset files          | a `res` folder declared as the module's root        | the default material in `pill_master_renderer_data` |

`register` must be safe to run again, because it runs on every hot reload. An extension inserts a value only when the world does not already hold one.

> **Example:** `pill_physics`'s `register` inserts a `PhysicsManager` only if the world has none. On a reload the old manager is kept, so every body keeps its position and velocity. A fresh manager would drop them all.

An extension should keep its third-party libraries out of anything the project sees. `pill_physics` names rapier only inside its manager and its ECS system. Its components, events and queries hold plain numbers, so a project, a saved scene and the C# mirror never depend on rapier.

## How does an extension ship its own asset files?

An extension ships asset files in its own `res` folder, and the host mounts that folder **read-only** into the asset store.

The extension declares the folder as its root in `register` and names every file it relies on. If one of those files is missing, the host stops and reports the extension and the path, instead of failing later when something tries to load it. The host checks the roots again after every module has loaded.

The files are read-only because they belong to the extension, not to the project. The editor lists them under an `extensions` root, where nothing can be created, renamed, moved, deleted or rewritten.

> **Example:** `pill_master_renderer_data` ships `res/defaults/pill.pbr.material`, the engine's default material. A project can use it by path without copying it into its own `res`.

In shipping mode there is no extension folder to mount. The build packs every linked extension's `res` into the asset pack, next to the project's `res`. When the project and an extension have a file with the same path, the project's file wins.

## How is an extension tuned?

An extension whose manager needs tuning reads a **settings asset** from the project's `res/settings/`.

The file is named after the manager's settings: `res/settings/pill_physics.physics_settings` for physics. The host writes it with every default the first time the project runs, so the person always has a complete file to edit. After that, an edit applies at the next update while the host runs, and again after every reload.

A value the extension cannot use is refused by name, and the manager keeps its current values. A value that cannot change without a restart, such as the audio extension's sink counts, is refused with that reason.

How a manager reads its settings is described in [resources.md](../concepts/resources.md#manager-resource).

## How does an extension add editor tools?

An extension adds editor tools in a second crate in its folder, named `<extension>_editor`. Only the editor loads it. No other build ever compiles it: not standalone, not shipping, not web.

Editor tools live in their own crate so they never reach a project build. A project would otherwise compile and ship editor UI it never shows.

The editor handles editor crates on its own:

- It loads a folder's editor crate after that folder's runtime crates.
- It reloads the editor crate whenever one of those runtime crates reloads, because the editor crate reads their types.
- A project never lists an editor crate. `modules:` refuses names ending in `_editor`.

A folder that holds **only** an editor crate is an **editor-only extension**. The editor loads it in every project. The editor's own shell, `pill_editor_shell_egui/pill_editor_shell_egui_editor`, is one: it is the docked egui UI, and it is hot-reloaded like any other module.

An editor crate can name the editor it was written for in its `Cargo.toml`:

```toml
[package.metadata.pill]
editor_frontend = "egui"
```

The editor then loads the crate only when that editor is running.

## How does an extension carry example projects?

An extension carries examples under `examples/<name>/`, each one a complete project: `project_settings.yaml`, a `Cargo.toml` or a `.csproj`, `src/` and `res/`. The example lists its extension under `modules:` like any other project.

Examples are found by their path. There is no list to update. `test_extension_examples.py` builds every example it finds and runs it headless. It waits for a log line that carries the example's folder name in brackets, so each example must print one when it is ready.

> **Example:** `pill_physics/examples/stacked_boxes` logs `[stacked_boxes] ready: 5 boxes above a fixed ground plane` once its scene is set up. The suite fails if that line never appears.

An example is never a workspace member. The host generates its `host_project_*` crate when it runs it, like any other project.

## What behaves differently?

The rules above apply to every extension. A few extensions have extra rules:

- **The renderer is two extensions in one folder.** `pill_master_renderer_data` holds the renderer's components, asset types and shaders, and loads in every run, headless too. `pill_master_renderer` is the GPU module: it loads only in a windowed run and is the only module that talks to the GPU. Projects depend on the data crate, never on the GPU module. The project picks the renderer with `renderer:` instead of `modules:`, and `renderer: "none"` loads neither crate.
- **The renderer's GPU module is never unloaded after a reload,** and a reload of its data crate rebuilds the GPU module in the same update. [modules.md](modules.md#what-behaves-differently) explains why.
- **`pill_test`, `pill_dummy_math`, `pill_dummy_color` and `pill_dummy_random`** are small extensions the test suites use. They are not features to build on.
- **`extensions/rendering/`** holds older renderers. The workspace excludes it, and the host never searches it.
- **`extensions/_workspace_anchor/`** is not an extension. It keeps the `extensions/*/generated/*` workspace glob from matching nothing, because Cargo fails on an empty glob.

## How do I add a new extension?

Add a folder and a crate. Nothing else needs to change.

1. Create `modules/extensions/pill_<feature>/pill_<feature>/` with a `Cargo.toml` that sets `crate-type = ["rlib"]`, names the crate root `src/pill_<feature>.rs`, depends on `pill_core` and `pill_engine`, and has a `build.rs` that calls `pill_hot_scan::generate_function_inventory()`.
2. In the crate root, put `#[pill_module(register = register)]` on the `init` function, and write a `register` that is safe to run on every reload.
3. Declare components, ECS systems, resources and asset types where they are defined. Mark components a project will name as `shared`.
4. List `pill_<feature>` under `modules:` in a project, and add the crate to the project's `Cargo.toml` if the project's code names its types.
5. Optionally, add an example under `examples/<name>/` that logs `[<name>] ready` when it is set up.

The host generates the wrapper crate in `generated/` the next time it starts.

## Where is this in the code?

| What                                                       | Where                                                                       |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| Finding an extension's folder, checking `modules:`, load order | `modules/hosting/pill_development_host/src/config.rs` (`resolve_extensions`, `locate_extension_folder`, `module_names_with_renderer_data`) |
| Finding and filtering editor crates                        | `config.rs` (`resolve_editor_crates`, `EDITOR_CRATE_SUFFIX`)                |
| Loading one extension and reloading it                     | `modules/hosting/pill_development_host/src/extension.rs`                    |
| The workspace globs that make an extension a member        | `modules/Cargo.toml` (`extensions/*/pill_*`, `extensions/*/generated/*`)    |
| Declaring a module's `res` folder                          | `pill_engine::asset_store::declare_module_root`                             |
| Packing extensions' `res` for shipping                     | `pill_assets::write_asset_pack_with_roots`                                  |
| The C# mirror an extension generates                       | `modules/extensions/<extension>/<crate>/generated/<crate>_Components.g.cs`   |
| Running every example                                      | `devops/tests/test_extension_examples.py`                                   |
| A small, complete extension to read                        | `modules/extensions/pill_physics/`, `modules/extensions/pill_spline/`       |
| How every module is loaded and reloaded                    | [modules.md](modules.md)                                                    |
