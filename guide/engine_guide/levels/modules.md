# Modules: how they are built, loaded and reloaded

## Summary

A module is one separately compiled piece of Pill or of the project. In development mode each module becomes its own DLL, so the host can rebuild one module and swap it in while the project keeps running. The project is a module too, and an extension (physics, audio, the renderer) is an optional module the project asks for.

## At a glance

| Question                              | Answer                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| What is a module in code?             | A Rust crate (a plain library) or a C# project.                                                         |
| Which modules does a run load?        | The project, the extensions listed under `modules:` in `project_settings.yaml`, and the renderer's data crate. |
| What gets loaded in development mode? | One DLL per module, built from a small wrapper crate the host generates.                                |
| What do all modules share?            | The engine core (`pill_core`, `pill_engine_core`): one copy in the process, so one world, one asset store, one logger. |
| What does each module keep for itself?| Its own code and its own registries: the lists of what it declared.                                     |
| What happens after an edit?           | Only the edited module is rebuilt and swapped in (hot reload). The world and its data stay.             |
| What happens in shipping mode?        | No DLLs: the project and its extensions are linked into one executable.                                 |

```
 development mode

   pill_standalone (.exe on Windows) (frontend + development host)
          │ loads
          ├── project DLL ───────┐
          ├── pill_physics DLL ──┤   each module carries its own code
          ├── pill_spline DLL ───┤   and its own registries
          │                      ▼
          └──────────────► pill_core.dll/.so + pill_engine_core.dll/.so
                           (engine core: one copy of the world,
                            the asset store, the logger)
```

## Why is each module its own DLL?

Each module is its own DLL so the host can replace one module's code without stopping the project.

When you edit physics code, the host rebuilds only the physics DLL and swaps it in. Every entity, component value, resource and loaded asset stays where it was. You see the change in the running project a few seconds later.

This only works if the data does not live inside the module that is being replaced. That is why every module links to one shared copy of the engine core. The world, the asset store and the logger live in `pill_engine_core.dll/.so` and `pill_core.dll/.so`, and those two DLLs stay loaded for the whole run.

> **Example:** you change how `PhysicsManager` applies gravity and save. The host rebuilds `pill_physics`, loads the new DLL and points the engine at its code. The rigid bodies, the boxes on screen and the camera all stay where they were, because they live in the world inside the engine core, not inside the physics DLL.

Without separate DLLs, every edit would mean restarting the project and rebuilding its state from scratch.

## What does a module look like on disk?

An extension lives in its own folder under `modules/extensions/`. The module itself is a normal Rust library, plus a few optional folders:

```
modules/extensions/pill_physics/
  pill_physics/              ← the module's crate (a plain library)
    Cargo.toml
    src/pill_physics.rs      ← crate root, named after the crate
    res/                     ← optional: the module's own assets
  examples/stacked_boxes/    ← optional: runnable example projects
  generated/                 ← written by the host, not by hand
    host_module_pill_physics/
```

The module's crate defines what the module adds to the engine: components such as `RigidBodyComponent`, resources such as `PhysicsManager`, ECS systems, asset types and settings. It talks to the engine only through `pill_engine`, the crate every module uses to reach the engine.

The crate root carries one attribute. It sits on the module's one-time `init` function and names its `register` function:

```rust
#[pill_module(register = register)]
pub fn init(engine: &mut Engine) -> u32 { /* ... */ }

pub fn register(engine: &mut Engine) -> u32 { /* ... */ }
```

Everything else is declared where it is defined: `#[system]` on an ECS system, `#[derive(PillResource)]` on a resource, `#[derive(PillAsset)]` on an asset type. A module never lists them by hand. Each declaration adds itself to one of the module's registries, and the module's entry point registers everything in those registries when the module loads.

The project follows the same pattern with `#[pill_project(register = ...)]` instead of `#[pill_module]`.

## Why is the module crate not a DLL itself?

The module crate is a plain library (`crate-type = ["rlib"]`) so other crates can use it as an ordinary dependency.

A project often needs to name an extension's components in its own queries, for example to read a `RigidBodyComponent`. It can only do that if it depends on the extension's crate. If the crate were the DLL itself, that dependency would not be possible in the same way.

So the host builds the DLL from a separate, tiny crate that wraps the module. This is the **wrapper crate**, `generated/host_module_<crate>/`. Its whole source is one macro call:

```rust
pill_physics::__pill_module_entry_points!();
```

That macro expands into the functions the host calls when it loads the DLL. The project gets the same kind of wrapper, under `projects_generated/host_project_*`.

The host rewrites every wrapper on each start and removes wrappers it no longer needs. Never edit or delete them by hand: they are members of the Cargo workspace, and the host is the only thing that keeps them correct.

## What is shared between modules, and what is not?

**By default, engine state is shared.** Every module links to the one copy of the engine core, so there is one world, one asset store, one ECS scheduler and one logger for the whole process.

**The exception is `pill_engine`, which is compiled into every module.** `pill_engine` holds the registries a module's declarations add themselves to. Each module needs its own registries, because they must list exactly what that module declared. When the physics DLL is replaced, the physics registries are replaced with it, and the project's registries are not touched.

| Part                     | How many copies       | Why                                                                 |
| ------------------------ | --------------------- | ------------------------------------------------------------------- |
| `pill_core`              | one per process       | errors, logging and the platform layer must be the same for everyone |
| `pill_engine_core`       | one per process       | the world, the asset store and the scheduler must outlive every reload |
| `pill_engine`            | one per module        | each module's registries describe only that module                  |
| the module's own code    | one per module        | this is the part a hot reload replaces                              |

Sharing the engine core has a cost: the host and every module must be built with exactly the same dependency features. The names of the functions the engine core exports include a hash of those features. If one module is built with different features, the host cannot find the functions it expects, and loading fails with "procedure could not be found" on Windows, or `undefined symbol: …` on Linux. The full linking model is in [modules_linking_in_pill.md](hosting/modules_linking_in_pill.md).

## Which modules does a run load?

A run loads the project and the extensions the project asks for in its `project_settings.yaml`:

```yaml
modules:
  - "pill_spline"
  - "pill_physics"
```

A few modules are added automatically:

- **The renderer's data crate** (`pill_master_renderer_data`) loads first in every run, including headless ones. It holds the renderer's components, asset types and shaders, so a headless project can still use them.
- **The renderer's GPU module** (`pill_master_renderer`) loads only in a windowed run. It is the only module that talks to the GPU.
- **Editor crates** (`<extension>_editor`) load only in the editor, after their extension.

## What happens when a module loads?

When the host starts, it builds every module's wrapper crate in one Cargo invocation, then loads each module in turn:

1. **Copy the DLL to a path of its own.** The host hard-links (or copies) the built DLL to a path used only by this load. Cargo can then overwrite the build output on the next rebuild while this copy stays loaded.
2. **Open and check it.** The host loads the DLL, checks that it has the functions it must have, and reads its ABI version. A DLL built against an incompatible engine is refused before any of its code runs.
3. **Register everything it declared.** The host calls the module's `pill_module_init`. Inside the module, `pill_engine` first registers every component, ECS system, resource and asset type in the module's registries. Then it runs the module's `register` function. On the module's very first load only, it also runs the one-time `init`.
4. **Tag its ECS systems.** Each module gets a `SystemOwner`, and every ECS system it registers is tagged with it. The host can later remove exactly that module's ECS systems without touching anyone else's.
5. **Mount its assets.** If the module ships a `res` folder, the host mounts it read-only into the asset store. Every file the module names must exist; a missing one stops the host with the module and the path.

From then on, the module's ECS systems run every update in the one shared scheduler, ordered among the project's ECS systems by their declared `order`.

## What is the difference between `register` and `init`?

`register` runs on every load of the module, and `init` runs only on the first one.

A reload replaces the module's code but keeps the world. So anything that must point at the new code has to be set up again: values whose behavior lives in the module, a manager's settings surface, entities the new code expects to find. That goes in `register`.

Anything that should happen once per run goes in `init`: the start-up chain and entities seeded at the start. If it ran on every reload, the world would get a second copy of everything.

> **Example:** a module that spawns three demo splines in `init` spawns them once. If it spawned them in `register`, every save would add three more. `pill_spline` handles this the other way round: its `register` counts the splines that already exist and only creates the missing ones, so a reload keeps the existing ones.

A shipping build has no later load, so it calls only `init`.

## What happens when you edit a module?

Only the edited module is rebuilt and swapped in. This is a **hot reload**.

Each module has its own source watcher. When you save a file in `pill_physics`, the host:

1. **Rebuilds** that module's wrapper crate. If the build fails, the old version keeps running.
2. **Loads the new DLL** the same way as at start-up, before it changes any engine state. If the new DLL cannot be loaded, the old version keeps running.
3. **Moves the engine state over to the new code.** This is a fixed sequence of steps, shared by the project and every extension:
   - runs the new version's registration, and puts the old version back if that fails;
   - drops the components and resources the new version no longer declares, using the old version's code, which is still loaded;
   - re-points everything that survives at the new version's code;
   - migrates data whose layout changed;
   - replaces the module's old ECS systems with its new ones.
4. **Keeps the old DLL loaded for a while.** Some pointers into the old code may still be in use, so the old DLL goes into a **graveyard** of retired DLLs instead of being unloaded at once. The host keeps at most two retired versions per module and unloads older ones once nothing points into them.

> **Example:** you change the body of a physics ECS system and save. Within a few seconds the host logs that `pill_physics` was rebuilt and reloaded. The project's ECS systems and the other extensions are not touched, the world keeps all its entities, and the next update already runs the new physics code.

The order of the steps in point 3 is important: the old version's code must still be loaded while its data is dropped and re-pointed. Changing that order leads to calls into unloaded code, and the crash often shows up only a few reloads later. The full sequence is in [hot_reloading.md](hosting/hot_reloading.md#in-what-order-does-the-host-move-the-engine-state-over).

A smaller edit can skip the whole reload. If you change only the body of a function marked `#[pill_hot]`, the host replaces just that function in place. This is a **hot patch**, described in [hot_function_patching.md](hosting/hot_function_patching.md).

## Why does reloading one module not disturb the others?

Reloading one module does not disturb the others because each module owns and tracks only what it registered.

- Its ECS systems carry its `SystemOwner`, so the host removes only those.
- Its registries list only what it declared, so the host can tell what the new version stopped declaring.
- A resource several modules use is counted per module that claims it, so one module's reload cannot remove a resource another module still needs.

## What behaves differently?

The default rules above apply to every module. A few modules have extra rules:

- **The renderer's GPU module** is never unloaded after a reload. The graphics driver and the GPU library keep pointers into the code that created them, so releasing an old renderer DLL can hang the host. The host keeps every old renderer DLL loaded instead, which costs one loaded DLL per reload.
- **The renderer's data crate** rebuilds the GPU module in the same update when it reloads, because the GPU module reads its types.
- **Editor crates** reload whenever one of their extension's runtime crates reloads.
- **A C# project** reaches extensions' components through a generated C# mirror. When an extension's reload changes that mirror, the host queues a reload of the C# project as well.

## How do modules work in shipping mode?

In shipping mode there are no module DLLs and no hot reload.

The project and every extension it lists are linked into one executable through a generated bundle. Each module's `init` runs once at start-up, and `register` is not needed because there is never a second version. Each module's `res` folder is packed into the asset pack, next to the project's own assets. When a file exists in both, the project's version is used.

| Property                 | Development mode                         | Shipping mode                          |
| ------------------------ | ---------------------------------------- | -------------------------------------- |
| One DLL per module       | yes                                      | no, one executable                     |
| Engine core              | shared DLLs, one copy                    | linked into the executable             |
| Hot reload / hot patch   | yes                                      | no                                     |
| Entry functions run      | `register` on every load, `init` once    | `init` once                            |
| A module's `res` folder  | mounted read-only from disk              | packed into the asset pack             |

## Where is this in the code?

| What                                                       | Where                                                              |
| ---------------------------------------------------------- | ------------------------------------------------------------------ |
| Loading one extension, its slot and its own reloads        | `modules/hosting/pill_development_host/src/extension.rs`           |
| The reload sequence and the graveyard                      | `modules/hosting/pill_development_host/src/reload.rs`              |
| Copying DLLs to their own path, checking exports and ABI   | `modules/hosting/pill_development_host/src/native_library.rs`      |
| The entry points and the registries each module carries    | `modules/engine/pill_engine/` (`__pill_module_entry_points!`, `component_registry`) |
| The list of extensions a project loads                     | `modules:` in the project's `project_settings.yaml`                |
| A small, complete extension to read                        | `modules/extensions/pill_spline/`, `modules/extensions/pill_physics/` |
| The full reload procedure                                  | [hot_reloading.md](hosting/hot_reloading.md)             |
| How the engine core is linked                              | [modules_linking_in_pill.md](hosting/modules_linking_in_pill.md) |
