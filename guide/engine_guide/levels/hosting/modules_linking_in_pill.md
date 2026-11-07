# How is the engine linked?

## Summary

Pill Engine is built from many separate modules, and each module is joined to the modules it uses in one of two ways:

- **Dynamic linking:** the module stays a separate DLL, loaded when the program runs. Every module that uses it shares that one copy.
- **Static linking:** the module's code is copied into each module that uses it at compile time. Every user gets its own private copy.

Pill uses each one on purpose. Dynamic linking is for what must exist **once**: the engine's shared state. Static linking is for what must exist **once per module**, or for bundling everything into a single executable.

## What is hot reloading?

Hot reloading means changing a module's code and seeing the result while the project keeps running, with no restart.

It is Pill's central feature, and the reason the engine is split into modules. Each reloadable module is its own DLL, so it can be rebuilt on its own and swapped in place of the old version.

> **Example:** you change how fast a ball bounces in your project and save the file. The host notices the change, rebuilds only the project's DLL, unloads the old one and loads the new one. The project continues with the same entities on screen, now running the new code.

Not every module is reloadable.

**Reloaded while running:**
- the project
- extensions (for example audio, splines, the renderer's GPU module)

**Stays loaded for the whole run:**
- the engine core (`pill_core`, `pill_engine_core`)
- the host executable

The modules that stay loaded are what makes reloading possible: they hold the state that must survive each swap.

## What is the state?

The state is everything the running project has built up that must still be there after a module is swapped.

It comes in two kinds:

- **Project data:** the world, meaning every entity with its components, plus resources (global values such as the simulation time). The host owns the world, so it is not inside any reloadable DLL.
- **Engine services:** objects the whole process shares, such as the logger, the Rayon thread pool and type identities. They live in the engine core DLLs, which never unload.

What does *not* survive is everything inside the old module: its code, its own global variables and its registries. The new DLL brings fresh versions of all of them.

> **Example:** you add a `spin` field to the project's ball component and save. After the reload, every ball is still in the world at the same position, and each one gets a default `spin` value. Only the ball component is converted from the old layout to the new one; every other component keeps its bytes untouched.

That conversion is called **migration**. It works only for components that support persistence: the engine reads each value with the old DLL's code, writes it as JSON, and reads it back with the new DLL's code. Because JSON stores field names, an added field takes its default value and a removed field is ignored.

## How do development and shipping builds differ?

Pill and the project can be built in two modes, **development** and **shipping**, and each mode links the engine differently. Development builds link it dynamically so modules can be hot-reloaded. Shipping builds link everything statically into one executable.

For what each mode is for and how to build it, see [Build configurations](../../other/build_configurations.md).

In development, the engine lives in shared DLLs that are never unloaded, so its state survives while project and extension modules are swapped:

```
   host executable      project DLL      extension DLLs
          │                  │                  │
          └──────────────────┼──────────────────┘
                             ▼
              pill_core.dll/.so + pill_engine_core.dll/.so
       (logger, thread pool, type identities: one copy each)
```

In shipping mode, nothing is reloaded, so there is nothing to share. A single executable is faster and simpler to ship.

| Property                 | Development build                | Shipping build                 |
| ------------------------ | -------------------------------- | ------------------------------ |
| Engine linking           | Dynamic (shared DLLs)            | Static (inside the executable) |
| Hot reload               | Supported                        | Not used                       |
| Engine state             | One copy, shared by every module | One copy, in the executable    |
| Engine core DLLs to ship | Required                         | None                           |
| Fat LTO                  | Not possible with this setup     | Used                           |

## What would happen without shared engine core DLLs?

Each module would embed its own private copy of the engine's code at compile time.

There would still be one engine instance, since the host hands every module a pointer to it. But each module would work on it through its own copy of the code, and the copies disagree:

- **Type identities differ.** The same component type gets a different identity in each copy, so a component one module registers can't be found by another.
- **Globals are duplicated.** Each copy has its own logger and thread pool, separate from the ones the host set up.

## Why is `pill_engine` linked into each module instead?

Most of the engine is shared, but one part must belong to each module separately.

Every module keeps a list of what it declared: its components and its hot-patchable functions. These lists are called `inventory` registries, and they live in the `pill_engine` crate (the crate every module uses to talk to the engine).

Because a registry describes one specific module, each module embeds its own copy of `pill_engine` through static linking. When the module reloads, its registries are replaced together with its code, so they always match the new version.

## Why does shipping mode use static linking?

Shipping builds link statically because they never reload, so shared DLLs would bring cost and no benefit.

Everything is linked into one executable. There are no engine core DLLs to ship, and the compiler can optimise across crate boundaries with fat LTO (link-time optimisation).

## What does shared linking require?

Every module that shares the engine core DLLs must be built exactly the way the engine core was built: the same compiler, the same versions of every dependency, and the same optional features turned on.

**Why:** a module finds the engine's functions by name. In Rust, those names carry a fingerprint of how the library was built. If anything about the build differs, the fingerprint differs too.

> **Example:** the host is built with profiling turned on, and a project is built without it. The project now looks for engine functions under names with a different fingerprint. The engine core DLLs don't have those names, and loading the project fails with "procedure could not be found" on Windows, or `undefined symbol: …` on Linux.

**How Pill prevents this:** the host never builds a project on its own. It generates a small wrapper crate for the project inside the engine's own Cargo workspace (the group of crates that are built together) and builds that instead. The project then uses the same pinned dependency versions as the engine, and the host passes its own feature settings along to the build.

## Where is linking configured?

- `modules/.cargo/config.toml`: sets `-C prefer-dynamic` for every crate built from the workspace, which makes development builds link the engine dynamically.
- `devops/ci_cd/build_shipping.py` (or `.sh`): runs shipping builds with `RUSTFLAGS` cleared, which drops `prefer-dynamic`. A plain `cargo build --release` fails.
- `modules/projects_generated/host_project_*`: the generated workspace members the host builds projects through.
