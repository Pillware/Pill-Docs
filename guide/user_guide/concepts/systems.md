# ECS systems

## Summary

An ECS system is a plain Rust function that runs every update and does the project's work: it reads and changes components and resources through its parameters. You declare it with `#[system]`, the engine registers it when your module loads, and the engine decides which ECS systems can safely run at the same time.

## At a glance

| Parameter            | Gives the ECS system...                                         |
| -------------------- | --------------------------------------------------------------- |
| `Query<&T>`          | read access to `T` on every entity that has it                  |
| `Query<&mut T>`      | write access to `T`                                             |
| `Query<(Entity, &T)>`| the entity handles too                                          |
| `Res<T>`             | read access to the resource `T`                                 |
| `ResMut<T>`          | write access to the resource `T`                                |
| `Commands`           | creating, destroying and changing entities, applied after the update |

## What is an ECS system?

A function whose parameters say what data it needs. The engine calls it every update and hands it that data:

```rust
use pill_engine::*;

// Moves every entity by its velocity, scaled by the time the last update took.
#[system]
fn movement(time: Res<Time>, mut query: Query<(&mut TransformComponent, &Velocity)>) {
    let Some(time) = time.get() else {
        return;
    };
    let delta = time.delta_seconds();
    for (mut transform, velocity) in query.iter_mut() {
        transform.translation[0] += velocity.x * delta;
        transform.translation[1] += velocity.y * delta;
        transform.translation[2] += velocity.z * delta;
    }
}
```

An ECS system does not own any data. Everything it needs comes in through its parameters: components through queries ([components.md](components.md)), single shared values through `Res`/`ResMut` ([resources.md](resources.md)), and changes to entities through `Commands` ([entities.md](entities.md)).

## How do I register an ECS system?

You don't call anything. Put `#[system]` on the function, and your module's entry point registers it every time the module loads, before your own `init` runs:

```rust
#[system(name = "movement", order = 10)]
fn movement(time: Res<Time>, mut query: Query<(&mut TransformComponent, &Velocity)>) { /* ... */ }

#[system(name = "remove_dead_enemies", order = 20)]
fn remove_dead_enemies(mut commands: Commands, mut enemies: Query<(Entity, &Health)>) { /* ... */ }

#[system(name = "late_cleanup", post_update)]
fn late_cleanup(mut commands: Commands) { /* ... */ }
```

| Argument             | What it does                                                                                                         |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name = "..."`       | the name used in logs, profiling, hot patches and the editor's Systems panel. Without it, the name is the function's module path plus its name |
| `order = <number>`   | where the ECS system sits among your module's ECS systems: lower numbers register first, and equal numbers go by name |
| `post_update`        | runs it after the update's `Commands` have been applied, instead of with the other ECS systems                         |

- Registration runs again on every hot reload, and your module's old ECS systems are removed first, so you never end up with two copies.
- A module's ECS systems belong to that module. Reloading one module never removes another module's ECS systems.
- You can still register an ECS system by hand, with `engine.register_system("name", function)`, in your module's registration code. A system registered that way runs after every declared one. Hosts and the renderer use this; a project or extension normally doesn't need it.

## In what order do ECS systems run?

Mostly in registration order: by `order`, then by name, for declared ECS systems, followed by any registered by hand. ECS systems that don't conflict may run **at the same time**, and the exception below can move an ECS system earlier.

Two ECS systems conflict when one of them writes something the other reads or writes: the same component type or the same resource. The engine works this out from the parameters:

| ECS system A        | ECS system B        | Can run at the same time? |
| ------------------- | ------------------- | ------------------------- |
| `Query<&Position>`  | `Query<&Position>`  | yes: both only read       |
| `Query<&mut Position>` | `Query<&Position>` | no: A writes what B reads |
| `ResMut<Score>`     | `Res<Score>`        | no                        |
| `Query<&mut Health>` | `Query<&mut Position>` | yes: different data    |
| `Commands`          | anything            | no: an ECS system with `Commands` always runs alone |

Two ECS systems that conflict never run at the same time, and registration order is the only ordering signal the engine has. But it is not a strict guarantee. The engine packs each ECS system into the earliest group that holds nothing it conflicts with, so an ECS system can move ahead of an earlier one it conflicts with, when everything in between leaves it room.

> **Example:** you declare `A` (writes `Position`, `order = 1`), then `B` (reads `Position`, writes `Velocity`, `order = 2`), then `C` (reads `Velocity`, `order = 3`). `C` conflicts with `B` but not with `A`, so the engine runs `C` together with `A`, **before** `B`. In that update, `C` reads the `Velocity` from before `B` changed it.

When the order of a chain matters, you can force strict registration order with `engine.set_parallel_execution(false)`, at the cost of running every ECS system one after another. [technical/concepts/systems.md](../../engine_guide/concepts/systems.md#does-registration-order-decide-which-of-two-conflicting-ecs-systems-runs-first) explains the rule in detail.

Ask only for the access you need: `&T` instead of `&mut T` and `Res` instead of `ResMut` let more ECS systems run in parallel.

## When do changes made in an ECS system become visible?

- **Component and resource changes** through `&mut T` and `ResMut` are visible at once, to every ECS system that runs later in the same update.
- **Entity changes** through `Commands` (creating, destroying, adding or removing components) are applied **after** all ECS systems of the update have run. Later ECS systems in the same update don't see them yet.

> **Example:** an ECS system spawns a bullet with `Commands`, and the movement ECS system is registered after it. In that same update, the movement ECS system does not move the new bullet, because it does not exist yet. From the next update on, it does.

## Can an ECS system fail?

It can return an error instead of `()`:

```rust
fn apply_tuning(settings: Res<DifficultySettings>) -> Result<(), SystemError> {
    let Some(settings) = settings.get() else {
        return Err(SystemError::MissingResource {
            name: "DifficultySettings".to_string(),
        });
    };
    // ...
    Ok(())
}
```

A returned error is recorded and logged as `system <name> failed: ...`, and the other ECS systems keep running.

A **panic** is different. In development builds with hot patching on (the default), a panicking ECS system is caught, recorded like an error, and the update continues; a function that keeps panicking is rolled back to its previous version. In other builds, such as shipping builds, a panic ends the program. So return an error for anything you expect can go wrong, and keep panics for real bugs.

## How do I change an ECS system while the project runs?

Just save the file. What happens depends on the edit:

| Your edit                                               | What happens                                                                 |
| ------------------------------------------------------- | ---------------------------------------------------------------------------- |
| only the body of a function marked `#[pill_hot]`        | **hot patch**: just that function is replaced, usually very quickly          |
| anything else (a new parameter, a new ECS system, a struct) | **hot reload**: the whole module is rebuilt and its ECS systems registered again |

In both cases, entities, components and resources keep their values.

Mark ECS systems you iterate on with `#[pill_hot]`:

```rust
#[pill_hot]
#[system(name = "camera", order = 10)]
pub fn camera_system(input: Res<Input>, time: Res<Time>, mut cameras: Query<&mut TransformComponent>) {
    // ...
}
```

A hot patch only covers changes **inside** the function body. Changing its parameters, its return type or adding new types needs a hot reload, which the host does automatically. Two more limits, both handled by falling back to a reload:

- The patch is built from the edited file alone and links your module as a library. So in a file with `#[pill_hot]` functions, name your own items through the crate's name (`my_project::Score`), not `crate::`. The `pills_rust` example re-exports what its hot files need for this reason.
- A body that starts calling a helper defined in its own file cannot be patched in place; the host reports it and reloads the module.

Set `PILL_FUNCTION_HOT_PATCHING=0` before starting the host to turn patching off: every edit then reloads, and a debugger breakpoint in an ECS system stays bound.

## Can I pause ECS systems?

Yes. In the editor, the Systems panel pauses and resumes all ECS systems, runs them for a single update, and switches individual ones on and off. In code, the same controls are on the engine: `set_systems_paused`, `enable_system(name)` and `disable_system(name)`.

## What should an ECS system not do?

- **Keep its parameters.** A `Query`, `Res` or `Commands` is only valid during the call. Don't store it, return it, or move it into a thread or a closure that outlives the call.
- **Start its own threads or thread pools.** Use the engine's shared thread pool, for example a query's `par_iter_mut()`. A thread your module starts can still be running its code when the module is reloaded.
- **Hold state in a `static`.** Put state in a resource or a component, where it survives hot reloads and the scheduler knows about it.

## Where is this in the code?

| What                                                   | Where                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------- |
| `#[system]` and its arguments                          | `pill_engine_macros`, `lib.rs`                                |
| How declared ECS systems are registered, in what order | `pill_engine`, `declarations.rs`                              |
| `register_system`, pausing, enabling                   | `pill_engine_core`, `engine.rs`                               |
| How a function becomes an ECS system, `SystemError`    | `pill_engine_core`, `system.rs`, `error.rs`                   |
| Which ECS systems run together                         | `pill_engine_core`, `scheduler.rs`                            |
| `Commands`                                             | `pill_engine_core`, `commands.rs`                             |
| Real ECS systems, declared and hot-patchable           | `examples/pills/pills_rust/src/camera.rs`, `game.rs`, `overlay.rs` |
