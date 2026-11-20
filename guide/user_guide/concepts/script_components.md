# Script components

## Summary

A script component is a component that carries its own behaviour. The engine calls methods on it when it is created, every update while it runs, and when it is removed. These methods are its **lifecycle methods**. 

Script components are Pill's **object-oriented** way to write project logic: each object's data and behaviour live together on one type. ECS systems are the **data-oriented** way: components hold only data, and ECS systems process many entities at once. In Pill, a project can use either approach on its own or mix the two.

**Lifecycle methods always run one at a time.** The engine calls them for each script component separately, in sequence, and cannot run them in parallel.

## At a glance

| Lifecycle method | Runs when                                                                                                                           | Unity equivalent |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `on_create`      | the component starts existing: your code or the editor adds it, a scene loads it, an undo or a paste brings it back, or Play starts | `Awake`          |
| `on_start`       | once, right before the script's first `on_update`, while the project plays                                                          | `Start`          |
| `on_update`      | once every update while the script runs                                                                                             | `Update`         |
| `on_stop`        | an editor Play session stops, or a running script's component is removed during one                                                 | –                |
| `on_destroy`     | the component is removed or its entity is destroyed through the command queue, or Stop discards the running copy                    | `OnDestroy`      |

Every lifecycle method is optional. Implement only the ones you need.

## How are script components different from ECS systems?

Script components are object-oriented, and ECS systems are data-oriented. The two approaches split data and behaviour differently:

- **Object-oriented (script components).** Each object carries its own data and its own behaviour, on one type. You think about one object at a time: "this door slides open when the player comes close". The engine calls each script component's lifecycle methods separately. This is the model of Unity's `MonoBehaviour`.
- **Data-oriented (ECS systems).** Components hold only data. An ECS system holds the behaviour and runs once per update over every entity that has the components it asks for. You think about one change applied to many entities: "move everything that has a velocity". See [systems.md](systems.md).

|                      | Script component                                                                    | ECS system                                                                             |
| -------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Approach             | object-oriented: data and behaviour on one type                                     | data-oriented: data in components, behaviour in a separate function                    |
| Where the code lives | in an `impl` block on the component's own type                                      | in a free function                                                                     |
| What it can reach    | its own fields through `&mut self`, the rest of the world through a `ScriptContext` | the components and resources named in its parameters                                   |
| How often it runs    | once per script component, every update                                             | once per update, over every matching entity                                            |
| Threads              | one script component at a time, in sequence, on the main thread; never in parallel  | may run in parallel with other ECS systems, and can split its own query across threads |
| Changing resources   | not possible: resources are read-only                                               | `ResMut<T>`                                                                            |
| Lifecycle methods    | create, start, update, stop, destroy                                                | none: the function runs every update                                                   |
| While editing        | only with `#[script(edit_mode)]`                                                    | only with `run_in_edit_mode = true`                                                    |

### When should I use which?

Mostly, it is a matter of convenience. Most people find it more natural to structure a project in an object-oriented way, around objects that each do their own thing, than in a data-oriented way, around data and the changes applied to it. Script components let you work the first way, so they are often the easier place to start.

The trade-off is speed on large numbers of entities: scripts run one at a time, while ECS systems can run in parallel (see [Do lifecycle methods run in parallel?](#do-lifecycle-methods-run-in-parallel)). As a rule of thumb:

Use a script component when the code reads as "this object does X" and needs to react to its own creation or removal. Use an ECS system when the same logic runs over many entities, when it should run in parallel, or when it needs to change a resource.

> **Example:** a door that slides open when the player comes close fits a script. `on_create` remembers the door's closed position, and `on_update` moves it. Moving 10,000 particles by their velocity fits an ECS system. One query visits them all, and the work can run in parallel.

### Can a project use only one approach, or both?

Both are possible. A project can write all of its logic as script components, all of it as ECS systems, or mix the two. Nothing in the engine requires either one. (Pill's own features, such as the renderer and physics, run as ECS systems either way, but your project doesn't have to write any.)

Mixing works because both approaches work on the same world:

- **A script component is a normal component.** An ECS system can query it like any other, for example `Query<&Mover>`, and a script can read and change the components that ECS systems use.
- **They take turns in every update.** ECS systems in the `pre_project` and `project` phases run first, then the scripts, then the `post_project` ECS systems. So a script sees what the earlier ECS systems changed in the same update, and an ECS system in the default `project` phase sees the scripts' changes in the next update.
- **Only ECS systems can change resources.** When a script needs a resource changed, leave that part to an ECS system.

> **Example:** a project writes its player controller and its doors as script components, because each is one object with its own behaviour. Its particles are moved by an ECS system, because the same work runs over thousands of them. A `Score` resource is updated by an ECS system that reads a `Collected` component the scripts add to coins they pick up.

## Do lifecycle methods run in parallel?

**No. The engine calls the lifecycle methods of each script component separately, one after another, on the main thread. It cannot run them in parallel.** This holds for every lifecycle method and every build.

The reason is the `ScriptContext`. Through it, a script can read and change any component on any entity, so the engine cannot know in advance which scripts touch the same data. Running two scripts at once could let both change the same value at the same time. ECS systems are different: their parameters declare exactly what they read and write, and that is what lets the engine run the ones that don't conflict in parallel.

What this means for your project:

- **Each script component is handled on its own.** 1,000 entities that carry a `Mover` mean 1,000 separate `on_update` calls, one after another.
- **The cost of scripts adds up and stays on one CPU core.** It grows with the number of script components, and more cores do not make it faster.
- **For the same work on thousands of entities, use an ECS system.** It handles them all in one call, and can spread the work across threads.

> **Example:** 1,000 entities carry a `Mover` script. Every update, the engine calls `Mover::on_update` 1,000 times in a row on the main thread. An ECS system with `Query<(&mut TransformComponent, &Velocity)>` does the same work in one call, and can split it across threads with `par_iter_mut()`.

## How do I write a script component?

Declare the component as usual, then implement `ScriptComponent` for it with `#[script]` above the block:

```rust
use pill_engine::*;

#[component(persistable)]
#[derive(Debug, Clone, Copy, Default)]
pub struct Mover {
    pub speed: f32,
    pub distance_travelled: f32,
}

#[script]
impl ScriptComponent for Mover {
    // Moves the entity along X by `speed` units per second.
    fn on_update(&mut self, script_context: &mut ScriptContext) {
        let Some(time) = script_context.get_resource::<Time>() else {
            return;
        };
        let delta_seconds = time.delta_seconds();
        let entity = script_context.get_owning_entity();
        if let Some(transform) = script_context.get_component_mut::<TransformComponent>(entity) {
            transform.translation[0] += self.speed * delta_seconds;
        }
        self.distance_travelled += self.speed * delta_seconds;
    }
}
```

- **`#[script]` is required.** Without it the code does not compile, and the error says "add `#[script]` above this implementation". The attribute is how the engine learns which lifecycle methods you wrote.
- **A script component is still a normal component.** `persistable`, `shared`, the Inspector attributes and scene saving all work as [components.md](components.md) describes.
- **Derive `Clone`.** The editor's Play button copies every component. It refuses to start, and names the type, when it cannot copy one.
- **You never register a script by hand.** Your module's entry point registers every `#[script]` type each time the module loads.

Attach a script like any other component, in code or from the editor's Inspector:

```rust
world
    .create_entity()
    .with(TransformComponent::default())
    .with(Mover { speed: 2.0, distance_travelled: 0.0 })
    .build()?;
```

## What can a script reach through its context?

Every lifecycle method receives `&mut self` and a `ScriptContext`. `self` is the script's own component, so you change your own fields through it directly. The context is a limited view of the rest of the world:

| Method                              | What it does                                                            | When the change happens                  |
| ----------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------- |
| `get_owning_entity()`               | returns the entity this script is attached to                           | –                                        |
| `get_component::<T>(entity)`        | reads a component on any entity                                         | –                                        |
| `get_component_mut::<T>(entity)`    | changes a component on any entity                                       | at once                                  |
| `entity_exists(entity)`             | checks whether an entity handle is still valid                          | –                                        |
| `get_resource::<T>()`               | reads a resource                                                        | –                                        |
| `create_entity().with(...).build()` | creates an entity and returns its handle at once                        | after every script of the update has run |
| `destroy_entity(entity)`            | destroys an entity, including the script's own                          | after every script of the update has run |
| `add_component(entity, component)`  | adds a component                                                        | after every script of the update has run |
| `remove_component::<T>(entity)`     | removes a component                                                     | after every script of the update has run |
| `get_commands()`                    | gives you the command queue, for a change the context has no method for | after every script of the update has run |

Resources are read-only from a script. To change a resource, use an ECS system with `ResMut`.

### Why are some changes delayed?

Creating or destroying an entity and adding or removing a component are queued, and the engine applies them after every script of the update has run. Adding or removing a component moves the entity's data to a different place in memory, and your `&mut self` points at the current place. Queuing the change keeps `self` valid until your lifecycle method returns.

> **Example:** a script sees its health reach zero and calls `script_context.destroy_entity(script_context.get_owning_entity())`. The rest of its `on_update` still runs normally, and scripts that run after it in this update still see the entity. The entity is gone once the scripts have finished.

Use `self` to change your own fields. Do not call `get_component_mut` for your own component type on your own entity: that gives you a second mutable reference to the same value `self` already points at.

## In what order do the lifecycle methods run?

A script's life follows one path:

```
 added ─► on_create ─► on_start ─► on_update ─► on_update ─► ... ─► on_stop ─► on_destroy ─► removed
                       (playing                                     (editor Play
                        only)                                        session only)
```

All scripts run at one point in every update: after the project's ECS systems, and before the update's queued changes are applied.

```
 one update
 ├─ pre_project ECS systems
 ├─ queued changes are applied ──► removals call on_stop and on_destroy
 ├─ project ECS systems
 ├─ scripts
 │   ├─ on_create   for every script added since the last update
 │   ├─ on_start    for the same scripts (playing only)
 │   └─ on_update   for every running script
 ├─ queued changes are applied ──► removals call on_stop and on_destroy
 └─ post_project ECS systems
```

This order gives you three guarantees:

- **A new script always gets `on_create` and `on_start` before its first `on_update`.**
- **In one update, every new script's `on_create` runs before any `on_start`.** So `on_start` can read values that other scripts set up in their `on_create`.
- **`on_stop` and `on_destroy` run before the component is removed.** The script can still read its own fields and its entity's other components.

> **Example:** an ECS system spawns a bullet that carries a `Mover` script, through `Commands`. The bullet is created when that update's queued changes are applied, which is after the scripts have run. In the next update, the bullet's `Mover` gets `on_create`, then `on_start`, then `on_update`.

### How do I order scripts against each other?

Put `#[order(n)]` on a lifecycle method. Lower numbers run first, and the default is `0`. Each lifecycle method has its own order, and scripts with the same order run in type name order. The order applies across every script type in every module.

```rust
#[script]
impl ScriptComponent for CameraFollow {
    // Runs after scripts that keep the default order 0, such as the player's movement.
    #[order(100)]
    fn on_update(&mut self, script_context: &mut ScriptContext) { /* ... */ }
}
```

- Script order is separate from ECS system order. `#[order(n)]` sorts scripts among scripts, and all scripts run in one block after the project's ECS systems.
- Entities that carry the same script type run in a fixed order that the engine chooses. Don't rely on which entity goes first.

## How do I know why a lifecycle method ran?

Every lifecycle method except `on_update` receives an info value. Its `cause` field says what happened:

| Lifecycle method | Info          | Causes                                                                                                                                                                                                     |
| ---------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `on_create`      | `CreateInfo`  | `Spawned` (your code added it), `Authored` (the editor or a tool added it), `SceneLoaded`, `HistoryRestored` (an undo or a redo), `Duplicated` (a paste or a duplicate), `PlayStarted`, `PlayStopRestored` |
| `on_start`       | `StartInfo`   | `PlayEntered` (Play was pressed), `SpawnedDuringPlay` (the component was added while the project plays)                                                                                                    |
| `on_stop`        | `StopInfo`    | `PlayExited` (Stop was pressed), `Removed` (the component was removed during a Play session)                                                                                                               |
| `on_destroy`     | `DestroyInfo` | `Despawned` (your code removed it), `Authored`, `SceneUnloaded`, `HistoryRestored`, `PlayStopRestored` (Stop discarded the running copy)                                                                   |

`CreateInfo` also carries `mode`, which is `RunMode::Editing` or `RunMode::Playing`, and `duplicated_from`, the entity a pasted or duplicated component was copied from when the editor knows it.

You never set a cause yourself. Your project's code always reports `Spawned` and `Despawned`; the editor and the scene loader set the others.

> **Example:** an enemy drops a coin when it dies, but not when you delete it in the editor or when Stop ends the session:
>
> ```rust
> fn on_destroy(&mut self, script_context: &mut ScriptContext, destroy_info: &DestroyInfo) {
>     if destroy_info.cause == DestroyCause::Despawned {
>         script_context.create_entity().with(Coin { value: 10 }).build();
>     }
> }
> ```

## What changes in the editor?

The editor has two modes. While you edit a scene, your project's scripts do not run. When you press Play, they run as they would in a shipped build, and Stop puts the scene back exactly as it was.

| Lifecycle method | While editing                                                   | While playing                                        |
| ---------------- | --------------------------------------------------------------- | ---------------------------------------------------- |
| `on_create`      | only `#[script(edit_mode)]` scripts                             | every script                                         |
| `on_start`       | never                                                           | every script                                         |
| `on_update`      | only `#[script(edit_mode)]` scripts                             | every script                                         |
| `on_stop`        | never                                                           | when Stop is pressed, or a running script is removed |
| `on_destroy`     | **every** script whose component is removed or entity destroyed | every script                                         |

`on_destroy` is the one lifecycle method that does not depend on `edit_mode`. Deleting an entity in the editor tells each script on it, with the cause `Authored`, even a script that never ran.

What Play, Stop and Pause do to scripts:

- **Play** copies the scene. Every script then gets `on_create` (`PlayStarted`), then `on_start` (`PlayEntered`), and starts updating.
- **Stop** gives every running script `on_stop` (`PlayExited`), then `on_destroy` (`PlayStopRestored`). The edited scene then comes back, and `edit_mode` scripts in it get `on_create` (`PlayStopRestored`).
- **Everything a session changed is discarded at Stop,** including the scripts' own fields. So are the changes `on_stop` and `on_destroy` queue during Stop, because they belong to the session that just ended.
- **Pause** stops `on_create`, `on_start` and `on_update`. A script added during the pause gets `on_create` and `on_start` when you resume or press Step. Removals still call `on_stop` and `on_destroy`, because queued changes are still applied while paused.
- **Step** runs the scripts for one update.

### How do I make a script run while editing?

Write `#[script(edit_mode)]` instead of `#[script]`:

```rust
#[script(edit_mode)]
impl ScriptComponent for PreviewSpinner {
    fn on_update(&mut self, script_context: &mut ScriptContext) { /* ... */ }
}
```

An `edit_mode` script gets `on_create` and `on_update` while you edit. It still gets `on_start` and `on_stop` only in a Play session, because nothing starts running while you edit.

Use it for previews, such as an object that should keep turning in the Scene view. What an `edit_mode` script changes while you edit is a change to the scene you are editing, so Stop does not undo it. Keep the project's own logic in plain scripts.

## What happens outside the editor?

Standalone, shipping and web builds have no edit mode: they always play. In those builds:

- `on_create` runs for every script that is added, with the cause `Spawned` or `SceneLoaded`. That includes scripts on the entities your module's `init` creates.
- `on_start` runs once for every script, with the cause `SpawnedDuringPlay`, right before its first `on_update`.
- `on_stop` never runs, because there is no Play session to stop. Removing a script calls only `on_destroy`.
- No lifecycle method runs when the program exits. Scripts that still exist at that point get neither `on_stop` nor `on_destroy`.

So put cleanup that must happen in every build in `on_destroy`, not in `on_stop`.

## What happens when I change a script while the project runs?

Save the file. The host treats a script like any other code:

| Your edit                                                                                 | What happens                                                                                                            |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| only the body of a lifecycle method                                                       | **hot patch**: just that lifecycle method is replaced, when the host can address it (see below); otherwise a hot reload |
| `#[order(n)]`, `edit_mode`, adding or removing a lifecycle method, the component's fields | **hot reload**: the module is rebuilt and the script registered again                                                   |

In both cases:

- Every script keeps its component values. When you change the fields, the rules in [components.md](components.md) apply: a `persistable` script keeps its values.
- No lifecycle method is repeated. A hot reload does not repeat `on_create` or `on_start`; the next `on_update` simply runs the new code.

To hot patch a lifecycle method, the host has to find it by name. It can when the `impl` block is in your crate's root file (`lib.rs`), or when the `impl` names the trait by its full path:

```rust
#[script]
impl pill_engine::ScriptComponent for Mover {
    // ...
}
```

Otherwise the build prints a warning that the method "is not registered for hot patching", and editing its body reloads the module instead. Both work; the patch is just faster.

## What should a script not do?

- **Keep the context.** A `ScriptContext`, and every reference you get from it, is only valid during the lifecycle method call. Don't store it or move it into a thread.
- **Point into your module's code.** Like any component, a script must not hold a `&'static str`, a function pointer, a closure or a trait object your module created, because a hot reload replaces that code.
- **Panic for errors you expect.** A panicking ECS system is caught in development builds, but a panicking lifecycle method is not: it stops the program, in development builds too. Log the problem and return instead.
- **Expect `on_destroy` from direct world calls.** `World::remove_component` and `World::destroy_entity` change the world at once and call no lifecycle method. Remove scripts through `Commands` in an ECS system, or through the context's `remove_component` and `destroy_entity` in a script.
- **Do the same heavy work on thousands of entities.** Scripts never run in parallel (see [Do lifecycle methods run in parallel?](#do-lifecycle-methods-run-in-parallel)). Use an ECS system for that work.

## Where is this in the code?

| What                                                            | Where                                                       |
| --------------------------------------------------------------- | ----------------------------------------------------------- |
| `ScriptComponent`, `ScriptContext`, the info and cause types    | `pill_engine_core`, `systems/scripting.rs`                  |
| `#[script]` and `#[order(n)]`                                   | `pill_engine_macros`, `lib.rs`                              |
| Registering every declared script when a module loads           | `pill_engine`, `declarations.rs`                            |
| The `on_update` pass                                            | `pill_engine_core`, `ecs/world/scripting.rs`                |
| The create, start, stop and destroy passes                      | `pill_engine_core`, `ecs/world/lifecycle.rs`                |
| A real script that logs every lifecycle method call it receives | `devops/tests/projects/scene/src/lib.rs` (`LifecycleProbe`) |

[engine_guide/concepts/script_components.md](../../engine_guide/concepts/script_components.md) explains how script components work inside the engine.
