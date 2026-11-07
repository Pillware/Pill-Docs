# Starting a Statically Linked Project

## Summary

In shipping mode the project, its extensions and its renderer are already compiled into the executable. Nothing is built, loaded or watched, so the player has to run a project it is not allowed to name: it is handed a description of one instead.

This document explains what that description contains, what runs in which order, and what has to stay alive for as long as the project does. The surrounding split between the player and the host is covered in [Hosting](hosting.md).

## At a glance

| Piece                  | What it is                                                                | Who builds it           |
| ---------------------- | ------------------------------------------------------------------------- | ----------------------- |
| `StaticProject`        | the whole description: name, backend, modules, renderer, assets, settings | the generated bundle    |
| `StaticModule`         | one extension: its name and the address of its entry point                | the generated bundle    |
| `StaticRenderer`       | the two functions the player needs from the renderer                      | the generated bundle    |
| `StaticProjectBackend` | how to reach the project itself: linked function, or a foreign runtime    | the generated bundle    |
| `ProjectBackend`       | the contract an outside runtime implements (the C# bridge today)          | the crate that hosts it |
| guard (`Box<dyn Any>`) | whatever must outlive the engine, returned by an external backend         | returned at start-up    |

```
  generated bundle (the only crate that depends on both sides)
        │  builds
        ▼
   StaticProject ──────────────► player: StaticProject::initialize
        ├─ modules:   [fn(&mut Engine) -> u32, …]     │  extensions first,
        ├─ backend:   Native{fn} | External(Arc)      │  then the project
        ├─ renderer:  Option<{init, attach}>
        └─ assets, logging, debug draw, startup scene
```

## Why can't the player name the project?

Because the player is linked into every executable, and naming a project would make it that project's player.

The dependency has to run one way: a project depends on the engine, never the engine on a project. If `pill_player` imported the game crate, every game would need its own copy of the player compiled with a different dependency, and the engine would have a dependency on one game. So the crate that links both sides - the generated shipping bundle - is the one that knows the project's name, and it hands the player a plain value.

> **Example:** two shipped games contain the same `pill_player` code. Only their generated bundles differ, and the player learns which project it runs from the value `main` passes it.

## What does the description contain?

`StaticProject` is a struct of literals, options and function pointers. Every field answers one question the boot asks.

| Field            | Question it answers                                          |
| ---------------- | ------------------------------------------------------------ |
| `name`           | what this project is called, in logs and in the window title |
| `backend`        | how to reach the project's own registration                  |
| `modules`        | which extensions to run, in which order                      |
| `renderer`       | which renderer this binary links, if it draws                |
| `asset_pack`     | the project's `res` directory, embedded in the binary        |
| `asset_pack_url` | where a browser build fetches the pack instead               |
| `logging`        | the `logging:` settings, as text                             |
| `debug_draw`     | whether debug drawing starts on                              |
| `startup_scene`  | the scene to load once every component type exists           |

Each module is two fields: a name used in logging, and `init: fn(&mut Engine) -> u32` - the function `#[pill_module]` was written on.

## How can a struct of data call code?

Through function pointers. In development mode the host loads a DLL and calls a symbol exported from it; in shipping the linker bakes that address into the binary, and the description stores it.

The signature is the same one the module ABI uses: `fn(&mut Engine) -> u32`, where `0` means success and anything else is a status the caller reports.

> **Example:** in a development run the host loads `pill_master_renderer_data.dll/.so` and calls its generated `pill_module_init` export. In a shipping run that same function arrives as `StaticModule { init: pill_master_renderer_data::register }`, called directly.

## What happens when a linked entry point runs?

It runs the same transaction the generated DLL wrapper runs: declare the artifact's components, then run its initialization under the right owner.

`run_linked_entry_point` drives this through `pill_engine`'s `run_artifact_entry`, which performs five steps in a fixed order:

| Step | What it does                                              | Why it is here and not elsewhere                                 |
| ---- | --------------------------------------------------------- | ---------------------------------------------------------------- |
| 1    | installs the artifact's value-type layout resolver        | fields of declared value types only expand while it is installed |
| 2    | drains the artifact's `inventory` registry into the world | the components this crate declared become real types             |
| 3    | runs the `before_init` hook                               | a project's startup scene loads here; see below                  |
| 4    | calls the entry point                                     | the user's `#[pill_module]` / `#[pill_project]` function         |
| 5    | re-reads the registration-error slot                      | step 4 can raise one after the drain checked it                  |

Skipping step 2 is the classic mistake: the code compiles, and the first access to a declared component fails later as "my component does not exist", not as a link error.

Step 4 is wrapped by `register_module`, which sets the **owner** around it:

- an extension runs with `extension_owner(index)`, so every ECS system it registers is tagged with that extension;
- the project runs with `PROJECT_SCOPE`, which is `None` - no owner is set, and its systems carry the project owner.

The owner is what a pause suspends and what the editor's system list labels a row with, so a shipped project attributes its ECS systems exactly as the development run did.

## Why do extensions run before the project?

Because the project may use what they registered. A project can name a component type an extension declares, and a managed project needs every module's components registered before its assembly loads, so the bindings it is handed can resolve them.

The generated bundle keeps that order: the renderer's data crate first, then the extensions in `project_settings.yaml` order, then the project.

## Why are there two kinds of backend?

Because a Rust project and a C# project reach registration in different ways, and the difference is real rather than cosmetic.

```rust
pub enum StaticProjectBackend {
    Native { init: fn(&mut Engine) -> u32 },
    External(Arc<dyn ProjectBackend>),
}
```

|                       | `Native`           | `External`                                 |
| --------------------- | ------------------ | ------------------------------------------ |
| What it is            | a function pointer | a value that starts another runtime        |
| Code lives            | in this binary     | beside it (hostfxr or a NativeAOT library) |
| Needs component names | no                 | yes - managed code binds them by name      |
| Returns               | nothing            | a guard that must outlive the engine       |
| Failure arrives as    | a `u32` status     | a `HostError`                              |

A function pointer needs no trait, no allocation and no lifetime of its own, so it is called directly. Only a project whose code arrives from outside needs an object that can start something and hand back something to keep.

`Arc<dyn ProjectBackend>` rather than `Box` keeps `StaticProject` cloneable, which the windowed frontend needs; `dyn` keeps .NET types out of the player's dependency graph.

## What is the guard, and why does drop order matter?

It is a value whose contents nobody reads, kept only so that its **drop** happens at the right moment.

`ProjectBackend::start` returns `Result<Box<dyn Any>, HostError>`. For the C# bridge that boxed value is the started .NET runtime. Dropping it unloads the assembly whose ECS systems the engine is still holding, so it has to be destroyed after the engine, never before.

That is why the player keeps it beside the engine:

```rust
pub struct Runtime {
    engine: Box<Engine>,
    /// What an external project backend returned, kept until the engine is
    /// gone. Declared after `engine`, so the engine - and every system the
    /// backend registered - drops first.
    _project_guard: Option<Box<dyn Any>>,
```

Rust drops fields in declaration order, so the engine goes first and the guard second. A native project returns `None`: there is nothing to keep alive, because its code is in the binary.

Getting it there is one assignment: `StaticProject::initialize` returns the option, and `setup_with_asset_database` stores it in the field before it hands the player back to the frontend.

> **Example:** a C# project registers a system that runs every update. The guard is the .NET runtime that holds that system's code. If it were released with the registration call, the next update would call into unloaded code.

## Where do the exposed component names come from?

From the world itself, not from a second list in the bundle.

Before each extension's entry point runs, the boot asks the world's component registry for its current sequence number. Afterwards it asks which component types were registered since that number. The names collected that way are exactly what that extension added, in registration order, and they are handed to an external backend as `exposed_component_names`.

> **Example:** the renderer's data crate registers `Transform`, `Mesh` and `Material`. The project is C# and reads those components byte by byte; it is handed the three names so its bindings can find them.

## When does the startup scene load?

At the earliest moment its component types exist, which is a different moment for the two backends.

| Backend    | When the scene loads                                  | Why                                                                                            |
| ---------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `Native`   | inside `run_linked_entry_point`, between step 2 and step 4 | the types exist, and the project's own `init` has not seeded entities over them yet            |
| `External` | after `start` returns                                 | a managed project registers its components inside `start`, so nothing exists before it returns |

A scene that failed to load is a warning, not an error: a missing or unreadable scene must not keep a project from starting.

## How does the start-up function itself work?

`StaticProject::initialize` is one call that fills an engine: it walks the extensions, starts the project, and hands back anything that must stay alive. In production it has exactly one caller, `pill_player::setup_with_asset_database`, and it is not public API.

```rust
pub(crate) fn initialize(
    &self,                   // the description being run
    engine: &mut Engine,     // the world being filled
) -> Result<Option<Box<dyn Any>>, HostError>
```

The result says which of three things happened:

| Return            | Meaning                                                      |
| ----------------- | ------------------------------------------------------------ |
| `Err(HostError)`  | start-up stopped; nothing is running                         |
| `Ok(None)`        | a Rust project: everything is running, nothing extra to keep |
| `Ok(Some(guard))` | an external backend: everything is running, keep this alive  |

### Step 1 - every extension, one at a time

```rust
let mut exposed_component_names: Vec<String> = Vec::new();

for (index, module) in self.modules.iter().enumerate() {
    let system_owner = extension_owner(index);
    let registration_sequence = engine.world().component_registration_sequence();
    run_linked_entry_point(engine, module.init, Some(system_owner), None).map_err(|status| { … })?;
    exposed_component_names.extend(engine.world().registered_component_names_since(registration_sequence));
    info!(…, module = module.name, owner = system_owner.0, "extension linked");
}
```

Read line by line, this is a loop over a to-do list:

1. **`exposed_component_names`** starts empty. It is a shopping list that will collect the names of the component types the extensions add.
2. **The loop** takes the extensions in the order the bundle listed them, so the renderer's data crate is first.
3. **`system_owner`** is the tag this extension's ECS systems will carry. It comes from the index, which is why the order matters.
4. **`registration_sequence`** is a bookmark in the world's log of registered component types, taken *before* the extension runs.
5. **`run_linked_entry_point`** runs the extension's entry point. The `?` is the important part: a non-zero status stops the whole boot here, and the error it returns names the extension that failed.
6. **`registered_component_names_since`** asks the world "what component types appeared since the bookmark?" Those names belong to this extension, and they are appended to the shopping list.
7. **`info!`** writes one line per extension, `extension linked`, with its name and owner.

Nothing here is healed or retried. The first extension that reports failure ends start-up, because a half-registered world is worse than no world.

### Step 2 - the project, one of two ways

```rust
let project_guard = match &self.backend {
    StaticProjectBackend::Native { init } => {
        run_linked_entry_point(engine, *init, PROJECT_SCOPE, self.startup_scene)?;
        None
    }
    StaticProjectBackend::External(backend) => {
        let project_guard = backend.start(engine, &exposed_component_names)?;
        if let Some(path) = self.startup_scene {
            apply_project_startup_scene(engine, path);
        }
        Some(project_guard)
    }
};
```

1. **The `match`** asks which kind of project this is. It is a compile-time choice baked into the bundle, not something discovered at run time.
2. **`Native`** calls the project's function through its pointer, under `PROJECT_SCOPE` so its systems carry the project owner, and with the startup scene passed along. It returns `None`: nothing needs keeping.
3. **`External`** hands the backend the engine and the shopping list, then starts it. Whatever it returns is the guard. The startup scene loads right after, because only then do the project's component types exist.
4. **`project_guard`** is now either `None` or `Some(...)` - "nothing to keep" or "keep this alive".

### Step 3 - one line, then the answer

```rust
info!(…, module = self.name, modules = self.modules.len(), external = project_guard.is_some(), "project linked");
Ok(project_guard)
```

The `project linked` line is how a log tells you which branch ran: `external=true` means a managed project, `external=false` a linked Rust one. Then the guard goes back to the caller, which stores it beside the engine.

> **Example:** a shipped C# game with two extensions. The loop logs `extension linked` twice and builds a shopping list of every component type those two added. The `External` branch hands that list to the .NET bridge, which starts the runtime and registers the project's systems, then returns the runtime as the guard. The final line reads `project linked external=true`, and the caller keeps the guard until the engine is gone.

## What happens when something goes wrong?

The first failure ends start-up, because there is no previous generation to fall back to.

| Failure                                         | Reported as                                                 |
| ----------------------------------------------- | ----------------------------------------------------------- |
| an extension entry point returns non-zero       | `ModuleError::InitializationFailed { module, status }`      |
| a native project's entry point returns non-zero | `LibraryError::InitializationFailed { status }`             |
| an external backend cannot start                | whatever `HostError` the backend returns                    |
| a component fails to register                   | status `u32::MAX` from `run_artifact_entry`, already logged |

Continuing would leave a partially registered world running, which is worse than stopping: a shipped binary that half-started would fail later, far from the cause.

## What does this path not do?

No building, no code loading, no file watching, and no reading of `project_settings.yaml` at run time - the bundle already turned those settings into literals.

Two things that look like part of start-up happen elsewhere: the logging stack is installed by `pill_player::setup` before `initialize` runs, and the renderer's own entry point is registered when a window is attached, under the owner after the last module, exactly as a loaded renderer module would be.

## Where does the bundle come from, and how is it kept honest?

`devops/tools/generate_shipping_bundle.py` writes `build/pill_shipping_bundle` for one project before cargo runs, because cargo resolves dependencies before build scripts do. The committed state of that folder is a stub whose only statement is a `compile_error!`, so nothing can type-check or ship against "whichever project was generated last".

The gate restores the stub after its shipping check (`--restore-stub`), and `devops/tests/test_shipping_smoke.py` refuses a committed generation before it builds anything.
