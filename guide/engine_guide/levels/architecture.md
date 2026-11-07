# Architecture

## Summary

Pill runs a **project** inside an **engine**. A **frontend** (the program you start) creates a **player**, the player creates the engine, and every update the engine runs the project's **ECS systems** over the data in its **world**. Optional **extensions** add features such as physics or splines, and they plug in exactly like the project does. In development mode, a **host** sits between the frontend and the player and rebuilds and reloads code while everything keeps running.

This page explains Pill in stages. Each stage adds one layer to the one before it, so read them in order the first time:

| Stage | Question it answers                                      | You will know                                                     |
| ----- | -------------------------------------------------------- | ----------------------------------------------------------------- |
| 1     | What runs what?                                          | the four layers and how they nest                                 |
| 2     | What is a project made of?                               | modules, components, resources, assets, ECS systems, commands     |
| 3     | What happens in one update?                              | the exact order of work, from a key press to a drawn image        |
| 4     | How is Pill split into code?                             | the folders and crates, and where each layer lives                |
| 5     | How does hot reload fit in?                              | what the development host adds, and why the engine core is shared |
| 6     | What changes between ways of running?                    | windowed and headless, shipping, browser, C#, the editor          |

## Stage 1: What runs what?

Four layers run inside each other, like boxes in boxes. Each layer only talks to the one directly inside it.

```text
┌───────────────────────────────────────────────────────────────────────┐
│ FRONTEND   the program you start: window, OS events, loop             │
│ ┌───────────────────────────────────────────────────────────────────┐ │
│ │ PLAYER   owns the engine, runs one update at a time               │ │
│ │ ┌───────────────────────────────────────────────────────────────┐ │ │
│ │ │ ENGINE   the world and the scheduler that runs code           │ │ │
│ │ │ ┌───────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ MODULES   the project + the extensions it picked          │ │ │ │
│ │ │ └───────────────────────────────────────────────────────────┘ │ │ │
│ │ └───────────────────────────────────────────────────────────────┘ │ │
│ └───────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────────────────────────────────┘
```

- **The frontend** is the executable. It opens the window, receives keyboard and mouse events from the operating system, and runs the main loop. Pill has three: `pill_standalone` for the desktop, `pill_web` for the browser, and `pill_editor`. See [Frontends](frontends/frontends.md).
- **The player** (`pill_player`) creates the engine and runs one update whenever the frontend asks. It also attaches the renderer to the window and reports errors. See [`pill_player`](hosting/pill_player.md).
- **The engine** holds all the data in a **world** and runs the code that changes it. See [The engine crates](engine.md).
- **The modules** are the code that makes your project what it is: the **project** itself, plus the **extensions** it picked, such as physics or splines.

> **Example:** you start `pill_standalone` with `PROJECT_PATH` pointing at a small arcade project. The frontend opens a window and creates the player. The player creates the engine and loads the project and the `pill_physics` extension it listed. From now on, about 60 times a second, the frontend says "run one update", and the engine runs the project's code and the physics code.

The frontend never touches the world, and the project never touches the window. That separation is what lets one project run unchanged in a desktop window, in a browser, in the editor, or with no window at all.

## Stage 2: What is a project made of?

A project is made of **data** and **code that changes the data**, and the engine keeps the two strictly apart.

### Modules: the project and its extensions

A **module** is one separately compiled piece of code that the engine runs. There are two kinds, and they work the same way:

| Kind          | What it is                                                     | Example                                         |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------- |
| **project**   | your own code and assets                                       | an arcade game, a simulation, a visualization   |
| **extension** | an optional feature module that a project chooses by name      | `pill_physics`, `pill_spline`, `pill_audio`     |

A project lists the extensions it wants in its `project_settings.yaml`:

```yaml
name: "Arcade"
modules:
  - pill_physics
  - pill_spline
```

An extension is not special. It declares the same kinds of things a project declares, and the engine runs it the same way. The physics extension, for example, does its main work in one ECS system, `physics`, which steps the simulation every update. See [Extensions](extensions.md) and [Modules](modules.md).

### What a module can declare

Every module, project or extension, declares four kinds of things. Those declarations are the only places where it puts logic:

| What                | What it is                                                     | Example                                   | Learn more |
| ------------------- | -------------------------------------------------------------- | ----------------------------------------- | ---------- |
| **component** types | data attached to one entity                                    | `Health`, `TransformComponent`            | [Components](../concepts/components.md) |
| **resource** types  | one shared value for the whole world                           | `Input`, `Time`, `Score`                  | [Resources](../concepts/resources.md) |
| **asset** types     | data many entities share, usually loaded from files            | a mesh, a texture, a material             | [Assets](../concepts/assets.md) |
| **ECS systems**     | functions the engine runs every update                         | `movement`, `damage`, `physics`           | [ECS systems](../concepts/systems.md) |

On top of that, a module has an **init** function. The engine calls it once, when the module is first loaded, to set up the starting state: load assets, create the first entities, insert resources. A module can also have a **register** function, which runs again every time the module is reloaded; see [Modules](modules.md#what-is-the-difference-between-register-and-init).

So the logic of a module lives in exactly two places: its **init** function and its **ECS systems**. Components, resources and assets only hold data.

### Entities and components: the data of each object

An **entity** is one object in the world: a player, a bullet, a camera. An entity has no data of its own. It is just an id, and **components** attach to it. What an entity *is* comes entirely from the components it has.

> **Example:** three entities, built from components:
>
> | Entity  | `TransformComponent` | `MeshRendererComponent` | `Health` | `Velocity` | `CameraComponent` |
> | ------- | :------------------: | :---------------------: | :------: | :--------: | :---------------: |
> | player  | ✓                    | ✓                       | ✓        | ✓          |                   |
> | bullet  | ✓                    | ✓                       |          | ✓          |                   |
> | camera  | ✓                    |                         |          |            | ✓                 |
>
> The player and the bullet both move, because both have a `Velocity`. Only the player can take damage, because only it has `Health`. The camera is drawn from, not drawn, so it has a `CameraComponent` instead of a mesh.

A component belongs to exactly one entity at a time. Components are the only owners of per-object data: there are no "player objects" with fields and methods.

```rust
use pill_engine::*;

#[derive(Default, PillComponent)]
pub struct Health {
    pub current: f32,
}
```

See [Entities](../concepts/entities.md) and [Components](../concepts/components.md).

### ECS systems: the code that runs every update

An **ECS system** is a plain function. Its parameters say which data it needs, and the engine hands it exactly that data every update.

A system asks for components through a **query**. The query visits every entity that has all the listed components, and skips the rest.

```rust
// Moves every entity that has both a transform and a velocity.
#[system]
fn movement(time: Res<Time>, mut query: Query<(&mut TransformComponent, &Velocity)>) {
    let Some(time) = time.get() else { return };
    for (mut transform, velocity) in query.iter_mut() {
        transform.translation[0] += velocity.x * time.delta_seconds();
    }
}
```

> **Example:** with the three entities above, `movement` visits the player and the bullet, because both have a `TransformComponent` and a `Velocity`. It never sees the camera, which has no `Velocity`.

A system can also read **resources**: values that exist once for the whole world, not once per entity. `Res<T>` reads one, `ResMut<T>` changes one.

> **Example:** a `jump` system asks for `Res<Input>` to check whether the space key was pressed this update, and for `Query<(&mut Velocity, &Player)>` to push the player upward. The input state is one value for the whole world, so it is a resource. The velocity belongs to one entity, so it is a component.

Because every system declares what it reads and what it writes, the engine knows which systems can safely run at the same time. Two systems that write different components run in parallel; two that write the same component run one after the other.

### Commands: changing the shape of the world

A system may change the *values* inside components directly. But it may not change *which* entities and components exist while systems are running, because other systems may be visiting those same entities at that moment.

So structural changes are written down instead, as **commands**, and applied later:

| You want to                  | A system calls                                  |
| ---------------------------- | ----------------------------------------------- |
| create an entity             | `commands.create_entity().with(...).build()`    |
| destroy an entity            | `commands.destroy_entity(entity)`               |
| add a component              | `commands.add_component_to_entity(entity, ...)` |
| remove a component           | `commands.remove_component_from_entity::<T>(entity)` |

The engine collects the commands in a queue while the systems run, and applies them all at the end of the update.

```rust
// Destroys every entity whose health reached zero.
#[system]
fn remove_dead(mut commands: Commands, mut query: Query<(Entity, &Health)>) {
    for (entity, health) in query.iter_mut() {
        if health.current <= 0.0 {
            commands.destroy_entity(entity);
        }
    }
}
```

> **Example:** in one update, `remove_dead` queues the destruction of an enemy. Every other system that runs later in the *same* update still sees that enemy. After all systems finished, the engine applies the queue, and from the *next* update on, the enemy is gone.

See [Commands](../concepts/commands.md).

### Stage 2 in one picture

```text
                    ┌──────────────── WORLD (data) ───────────────┐
                    │ entities + components    resources   assets  │
                    └──────────▲──────────────────▲──────────▲─────┘
       reads and writes values │                  │          │
                    ┌──────────┴──────────────────┴──────────┴─────┐
 every update:      │ ECS SYSTEMS of the project and its extensions │
                    └──────────┬────────────────────────────────────┘
                               │ structural changes
                               ▼
                    ┌───────────────────────────┐
 end of update:     │ COMMAND QUEUE → applied   │
                    └───────────────────────────┘
```

[Containers across Pill](../other/containers_across_pill.md) compares how entities, components, resources and assets are stored.

## Stage 3: What happens in one update?

Every update follows the same fixed order. The frontend starts it, the engine runs the project's code, and the renderer draws the result.

```text
FRONTEND          PLAYER / ENGINE                                    RENDERER
────────          ───────────────                                    ────────
key events ──▶ 1. input is queued for this update
run_frame  ──▶ 2. the clock and the input state advance
               3. ECS systems run, in parallel batches
               4. per-entity scripts run
               5. the command queue is applied
               6. post-update ECS systems run
               7. failures and frame statistics are reported
                                                          ──▶ 8. the world is drawn
```

1. **Input arrives.** The frontend translates operating system events into Pill's own input events and hands them over.
2. **The update starts.** The engine advances the clock (`Time`), applies the queued input to the `Input` resource, and marks a new change tick, so systems can ask what changed since they last ran.
3. **ECS systems run.** The scheduler runs them in batches. Systems in one batch touch different data, so they run in parallel on the shared thread pool. An `order` value in `#[system(...)]` decides who goes first when two systems conflict.
4. **Scripts run.** Script components attached to entities run next. Their structural changes are queued too.
5. **Commands are applied.** Every queued entity creation, destruction, component addition and removal happens now, in the order it was queued.
6. **Post-update ECS systems run.** Systems declared with `post_update` see the world after the commands. The commands they queue apply in the next update.
7. **Results are reported.** A failing ECS system is logged with its name, and repeated failures are counted instead of flooding the log. About every three seconds the player logs a `Heartbeat` line with the frame rate and entity count.
8. **The world is drawn.** In a windowed run, the renderer reads the world (cameras, transforms, meshes, materials) and draws one image.

> **Example:** the player presses space while a bullet is about to hit an enemy.
>
> 1. The frontend turns the key press into an input event.
> 2. The update starts: `Input` now reports space as pressed this update.
> 3. Systems run. `jump` sees the key and changes the player's `Velocity`. `movement` moves the player and the bullet. `physics` detects the bullet touching the enemy and lowers the enemy's `Health` to zero. `remove_dead` queues the enemy's destruction and the bullet's.
> 4. Scripts run; nothing to do here.
> 5. The command queue is applied: the enemy and the bullet are destroyed.
> 6. Post-update systems run; nothing to do here.
> 7. Nothing failed, so nothing is reported.
> 8. The renderer draws the frame. The player is mid-jump, and the enemy and the bullet are gone.

See [`pill_player`](hosting/pill_player.md) for the update from the player's side, and [ECS systems](../concepts/systems.md) for the scheduler.

## Stage 4: How is Pill split into code?

Each layer from stage 1 is its own group of Rust crates, in its own folder under `modules/`:

| Layer                | Folder                                   | Main crates                                                       | Read more |
| -------------------- | ---------------------------------------- | ----------------------------------------------------------------- | --------- |
| frontends            | `modules/frontends/`, `modules/editor/`  | `pill_standalone`, `pill_web`, `pill_editor`                      | [Frontends](frontends/frontends.md), [Editor](../editor/editor.md) |
| player and host      | `modules/hosting/`                       | `pill_player`, `pill_development_host`                            | [Hosting](hosting/hosting.md) |
| engine               | `modules/engine/`                        | `pill_core`, `pill_engine_core`, `pill_engine` and two macro crates | [The engine crates](engine.md) |
| renderer contract    | `modules/rendering/`                     | `pill_renderer_api`                                               | [Extensions](extensions.md) |
| extensions           | `modules/extensions/<name>/`             | `pill_physics`, `pill_spline`, `pill_master_renderer`, …          | [Extensions](extensions.md) |
| projects             | anywhere, chosen by `PROJECT_PATH`       | your crate                                                        | [Modules](modules.md) |

The engine itself is split into three main crates, from the bottom up:

```text
  your project, extensions
           │  use pill_engine::*
           ▼
   pill_engine        the crate every module uses to talk to the engine;
                      it also keeps each module's own list of declarations
           │
           ▼
   pill_engine_core   the ECS: world, scheduler, commands, assets, scenes
           │
           ▼
   pill_core          the foundation: errors, logging, profiling, platform layer
```

A module never names `pill_engine_core` or `pill_core` directly. It writes `use pill_engine::*`, and that one crate gives it everything it needs: `#[system]`, `Query`, `Commands`, `Res`, the derive macros.

> **Example:** `#[derive(PillComponent)]` on your `Health` struct expands into code that adds `Health` to your module's own list of component types. When the engine loads your module, it reads that list and registers `Health` in the world. You never call a registration function yourself.

## Stage 5: How does hot reload fit in?

In development mode, a **development host** wraps the player. It builds your project and extensions, loads them, watches their files, and swaps in new code while the project keeps running.

```text
development mode                              shipping mode
────────────────                              ─────────────
FRONTEND                                      FRONTEND
  └─ DEVELOPMENT HOST  builds, loads, watches   └─ PLAYER
       └─ PLAYER                                     └─ ENGINE
            └─ ENGINE                                     └─ project + extensions,
                 └─ project DLL, extension DLLs              compiled into the executable
```

**Every module is its own DLL.** The host compiles the project into one DLL and each extension into another. When you save a file, only the module you changed is rebuilt and swapped.

**The engine core is shared, not copied.** The world, the asset store, the logger and the thread pool live in two shared DLLs, `pill_core` and `pill_engine_core`, loaded once. Every module uses that one copy. That is why your entities survive a reload: they were never inside the module that was replaced.

> **Example:** the project runs with 200 enemies. You change the `movement` system and save.
>
> 1. The host notices the change and rebuilds the project's DLL.
> 2. At the start of the next update, it unloads the old project DLL and loads the new one.
> 3. The new DLL registers its ECS systems again. The world, in the shared engine core, still holds all 200 enemies.
> 4. From this update on, the enemies move with the new code.
>
> If the edit only changed the body of a function, for example a `#[pill_hot]` ECS system, the host goes further: it **hot patches** just that function, without reloading the module at all.

When a reload changes the layout of a component, for example by adding a field, the engine **migrates** the stored components to the new layout. A change it cannot migrate safely is refused, and the old code keeps running.

See [Hosting](hosting/hosting.md), [Hot reloading](hosting/hot_reloading.md), [Hot function patching](hosting/hot_function_patching.md) and [How is the engine linked?](hosting/modules_linking_in_pill.md). [Linking and multi-DLL programs](other/linking_technical.md) explains the general linking ideas behind it.

## Stage 6: What changes between ways of running?

The layers stay the same in every way of running. What changes is which frontend sits on top, and whether the host is there.

| Way of running              | Frontend          | Host? | What is different                                                                  |
| --------------------------- | ----------------- | ----- | ---------------------------------------------------------------------------------- |
| development, windowed       | `pill_standalone` | yes   | the everyday setup: hot reload and a window                                        |
| development, headless       | `pill_standalone` | yes   | no window and no GPU renderer; useful for tests and logic work                    |
| shipping                    | `pill_standalone` | no    | one optimized executable; the project, extensions and assets are built into it     |
| browser                     | `pill_web`        | no    | shipping mode for a web page, drawn with WebGPU                                    |
| editor                      | `pill_editor`     | yes   | the editor's panels around the running project; development only                  |

A few pieces deserve one more sentence each:

- **The renderer is an extension in two halves.** Its **data** half (components such as `MeshRendererComponent`, and asset types such as materials) loads in every run, so a headless run still understands your scene. Its **GPU** half loads only when there is a window to draw into.
- **C# projects** run through a bridge: the engine stays in Rust, the project's ECS systems are written in C#, and C# code reloads through an in-process compiler.
- **Shipping mode** generates one crate that names the project and its extensions as ordinary dependencies, and links everything into one executable with no hot reload.

See [Build configurations](../other/build_configurations.md) for how each mode is built, [Starting a statically linked project](hosting/hosting_advanced.md) for how shipping mode starts a project it cannot name, and [`pill_standalone`](frontends/pill_standalone.md) and [`pill_web`](frontends/pill_web.md) for the two game frontends.

## Where to go next

| If you want to…                                     | Read                                                              |
| --------------------------------------------------- | ----------------------------------------------------------------- |
| understand how the data is stored                   | [Entities](../concepts/entities.md), [Components](../concepts/components.md), [Resources](../concepts/resources.md), [Assets](../concepts/assets.md), [Containers across Pill](../other/containers_across_pill.md) |
| understand how code runs                            | [ECS systems](../concepts/systems.md), [Commands](../concepts/commands.md) |
| change the engine itself                            | [The engine crates](engine.md), [Modules](modules.md)             |
| add or change an extension                          | [Extensions](extensions.md)                                       |
| work on hot reload                                  | [Hosting](hosting/hosting.md), [Hot reloading](hosting/hot_reloading.md), [Hot function patching](hosting/hot_function_patching.md) |
| run, build and ship                                 | [Build configurations](../other/build_configurations.md), [Environment variables](../other/environment_variables.md) |
| measure and test                                    | [Profiling](../other/profiling.md), [Automated tests](../devops/automated_tests.md) |
| follow the code style                               | [Free functions and modules](../coding_style/free_functions_and_modules.md), [Logging guidelines](../coding_style/logging_guidelines.md) |

## Where is this in the code?

- `modules/frontends/` - `pill_standalone` and `pill_web`.
- `modules/editor/` - `pill_editor` and the editor's shared core.
- `modules/hosting/` - `pill_player` and `pill_development_host`.
- `modules/engine/` - `pill_core`, `pill_engine_core`, `pill_engine` and the macro crates.
- `modules/rendering/` - the contract between the player and any renderer.
- `modules/extensions/` - one folder per extension.
- `modules/engine/pill_engine_core/src/engine.rs` - `Engine::process_frame`, the update order from stage 3.
