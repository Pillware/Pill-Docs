# Resources

## Summary

A resource is a single value that the whole project shares, such as the time, the input state or the project's settings. It belongs to the world rather than to an entity, ECS systems read and write it through `Res<T>` and `ResMut<T>`, and, when it has a shared name, it keeps its value when you save code and the project hot-reloads.

## At a glance

| Question                               | Component                                  | Resource                                                  |
| -------------------------------------- | ------------------------------------------ | --------------------------------------------------------- |
| How many values exist?                 | one per entity that has it                 | at most one in the whole world                            |
| What does it describe?                 | one object: its position, its health       | the project as a whole: time, score, settings             |
| How does an ECS system reach it?       | `Query<&Health>`, `Query<&mut Health>`     | `Res<Score>`, `ResMut<Score>`                             |
| How is it declared?                    | `#[derive(PillComponent)]`                 | `#[derive(PillResource)]`                                 |
| Does it survive a hot reload?          | yes                                        | yes, when it has a shared name and your module still declares it |

## When should I use a resource instead of a component?

Use a resource when there is exactly one of something and it does not belong to any particular entity.

| Use a resource for                                           | Use a component for                                      |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| the score, the current level, the game mode                  | each enemy's health                                      |
| tuning values that ECS systems read (gravity, speeds)        | each object's position and velocity                      |
| the input state, the time since the last update              | data a designer places on objects in a scene             |
| a service many ECS systems use, such as the asset store      | anything that exists once per object                     |

If you find yourself creating a single "manager" entity only to hang one component on it, that data probably wants to be a resource.

## How do I declare a resource?

Derive `PillResource`:

```rust
use pill_engine::*;

#[derive(Default, PillResource)]
#[pill(shared = "my_project::Score")]
pub struct Score {
    pub points: u32,
}
```

The derive does the declaration for you: your module's entry point declares every `PillResource` type before your own registration code runs, on the first load and on every reload. You don't call `register_resource` yourself.

| Attribute                                   | What it gives you                                                                 |
| ------------------------------------------- | --------------------------------------------------------------------------------- |
| none                                        | a resource only this generation of your module sees; it is replaced on every reload |
| `#[pill(shared)]` / `shared = "crate::Name"` | a stable identity: the value **survives reloads**, and every module reaches the same value |
| `layout_sources = ["src/score.rs"]`         | the host notices when the struct's layout changes and rebuilds the value instead of keeping stale bytes |
| `layout_dependencies = ["glam"]`            | the same, for a struct that embeds another crate's types                           |

So in practice: **give every resource you want to keep a shared name.** See [Why does my resource reset on every reload?](#why-does-my-resource-reset-on-every-reload)

You can still write `impl Resource for Score { fn shared_name() ... }` by hand and call `world.register_resource::<Score>()` yourself; hosts and older code do this. The derive is the normal way for a project or an extension.

## How do I add a resource to the world?

Insert a value **only if one is not there yet**, in your module's registration code:

```rust
#[pill_project]
pub fn init(engine: &mut Engine) -> u32 {
    let world = engine.world_mut();
    if !world.has_resource::<Score>() {
        world.insert_resource(Score::default());
    }
    0
}
```

Declaring and inserting are different jobs:

- **Declaring** (the derive) says "this module owns `Score`". It does not create a value.
- **`insert_resource`** stores a value, and replaces any value already there.

The `has_resource` check matters because a project's `init` runs again on **every hot reload** (unless the project splits it with `#[pill_project(register = ...)]`, in which case only `register` repeats). Inserting unconditionally would reset the resource to its starting value each time you save a file.

> **Example:** your project tracks a `Score`. You play for a minute and reach 1200 points, then fix a typo in an ECS system and save. The project reloads and runs its registration again.
>
> - With the `has_resource` check, `Score` is already there, nothing is inserted, and you still have 1200 points.
> - Without it, `insert_resource` replaces the value, and the score drops back to 0.

Declaring is not optional, even when the value already exists. A module that stops declaring a resource is telling the engine it no longer owns it, and the engine removes it during the reload. With the derive this happens only when you delete the type or its derive.

## How do I use a resource in an ECS system?

Add `Res<T>` to read it, or `ResMut<T>` to read and change it, as a parameter of the ECS system:

```rust
// A resource declared like `Score` above: the total time the player has played.
#[derive(Default, PillResource)]
#[pill(shared = "my_project::PlayTime")]
pub struct PlayTime {
    pub seconds: f32,
}

// Reads the engine's `Time` and adds the time this update took to `PlayTime`.
#[system]
fn track_play_time(time: Res<Time>, mut play_time: ResMut<PlayTime>) {
    let (Some(time), Some(mut play_time)) = (time.get(), play_time.get_mut()) else {
        return;
    };
    play_time.seconds += time.delta_seconds();
}
```

Two things to know:

- **`get()` and `get_mut()` return an `Option`.** A resource may not be in the world yet, or may have been removed, so the ECS system decides what to do when it is missing. Returning early, as above, is the usual choice.
- **`ResMut` tracks changes.** Writing through `get_mut()` marks the resource as changed, so other code can tell it was modified.

Outside an ECS system, for example in a registration function or a test, use the world directly: `world.get_resource::<Score>()` and `world.get_resource_mut::<Score>()`.

## Can two ECS systems use the same resource at the same time?

Two ECS systems that only **read** a resource can run at the same time. An ECS system that **writes** it always runs on its own.

The scheduler sees each ECS system's parameters: `Res<Score>` counts as a read, `ResMut<Score>` as a write. It never runs a writer together with any other ECS system that reads or writes the same resource. You do not need locks or extra code for this.

So take `Res<T>` whenever an ECS system only needs to look at a value. Asking for `ResMut<T>` when you only read stops that ECS system from running alongside others.

## What happens to my resource when the project hot-reloads?

The value stays in the world and only the code that owns it is swapped, **if the engine can recognise it as the same resource**. That depends on its shared name and on what you changed:

| Your resource, and what you changed and saved                     | What happens to the resource                                                                                   |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **no shared name**, any edit                                      | **replaced**: the new code sees a different type, so the old value is retired and `has_resource` is false; your registration inserts a fresh one |
| shared, any code but not the resource's struct                    | **kept**, with its current value                                                                               |
| shared, you deleted the type or its derive                        | **removed** from the world                                                                                     |
| shared and **persistable**, its struct changed                    | **converted**: fields that still exist keep their values, new fields start at their default, removed fields are dropped |
| shared with `layout_sources`, one of those files changed          | **rebuilt**: the old value is dropped with a `resource layout changed` warning, and your registration inserts a fresh one |
| shared, struct changed, neither persistable nor `layout_sources`  | **unsafe**: the old bytes are kept and read through the new struct. Avoid this; declare one of the two         |

> **Example:** a shared `DifficultySettings` resource holds `enemy_speed: 3.0`, which you tuned while playing. You add a new field `spawn_rate`.
>
> - If it is persistable, `enemy_speed` stays at `3.0`, and `spawn_rate` starts at its default.
> - If it declares `layout_sources`, the value is rebuilt, and `enemy_speed` is back to its default.
> - If it declares neither, the new code reads the old bytes as if they had the new shape. Restart instead.

## Why does my resource reset on every reload?

Because it has no shared name. Without one, a resource is identified by its Rust `TypeId`, and every new build of your module gets a different `TypeId` for the same struct. The engine sees a new type, retires the old value, and your `has_resource` check inserts a fresh one.

Add `#[pill(shared = "my_crate::Name")]` and the value is kept.

## Should my resource be persistable?

Make it persistable when its value is worth keeping while you change its fields: tuning values, settings, progress. Leave it plain when the code rebuilds the value anyway; in that case, declare `layout_sources` so a change to its struct rebuilds it safely.

A persistable resource needs `Serialize`, `Deserialize` and `Default`, a shared name, and is registered with `register_persistable_resource` (the derive has no persistable flag yet):

```rust
#[derive(Serialize, Deserialize, Default)]
#[serde(default)]
pub struct DifficultySettings {
    pub enemy_speed: f32,
    pub spawn_rate: f32,
}

impl Resource for DifficultySettings {
    fn shared_name() -> Option<&'static str> {
        Some("my_project::DifficultySettings")
    }
}

pub fn register(world: &mut World) {
    world.register_persistable_resource::<DifficultySettings>();
    if !world.has_resource::<DifficultySettings>() {
        world.insert_resource(DifficultySettings::default());
    }
}
```

On a reload the old value is read by the **old** build's serializer, carried across as JSON and written back over the new struct's `Default`. A resource whose struct did not change is left alone. Persistable resources are also included when the engine takes a snapshot of the world's resources. `pills_rust`'s `DemoState` follows exactly this pattern.

If a field cannot be serialized (a handle to something outside the engine, for example), mark it `#[serde(skip)]`. The rest of the resource stays persistable, and that field comes back as its default after a conversion.

## When should I declare `layout_sources`?

When the resource holds state that cannot be serialized (a physics world, a GPU handle, an open audio stream), so it can't be persistable, but you still want it kept across ordinary reloads.

```rust
#[derive(PillResource)]
#[pill(shared, layout_sources = ["Cargo.toml", "src/components.rs", "src/manager.rs"])]
pub struct PhysicsManager { /* rapier world, body maps, ... */ }
```

- List every file whose edit can change the struct's layout, including files of types it embeds by value. Paths are relative to the crate's root.
- List in `layout_dependencies` the crates whose upgrade can change it (`"rapier3d"`); the host reads their versions from `Cargo.lock`.
- The development host fingerprints those inputs. An unchanged fingerprint keeps the value; a changed one drops it and your registration builds a new one. An edit to any other file never costs you the value.

## When does a resource need a shared name?

Almost always: to survive reloads (see above), and when more than one module uses the same resource type.

Every module is a separate DLL with its own compiled copy of the types it uses. A shared name makes the engine identify the resource by the name, so every module, and every generation of each module, reaches the same value.

```rust
#[derive(PillResource)]
#[pill(shared = "my_crate::GameSettings")]
pub struct GameSettings { /* ... */ }
```

- `#[pill(shared)]` alone takes the name from the module path. Pin it with `shared = "..."` so moving the type to another file does not change it.
- The name must be unique in the whole process. Include your crate's name (`"my_crate::GameSettings"`, not `"GameSettings"`).
- Never change the name once it is in use, or the engine treats it as a different resource.
- When several modules declare a shared resource, it is removed only when the **last** of them stops declaring it.

## How do I give a manager settings the user can edit?

A manager whose tuning should live in a file, like the audio manager's sink counts or physics' gravity, declares a **settings asset**. Its crate implements `SettingsAssetManager` and calls this in its registration, which runs on every generation:

```rust
world.register_settings_asset_manager::<AudioManager>();
```

The host then writes `res/settings/<settings_name>.<extension>` the first time, with every default in it, and reads it on each start. While the host runs, an edit to that file is applied at the next frame boundary. A document that does not parse or is refused keeps the current values and logs one warning naming the manager, the file and the reason. Game code can point a manager at another settings asset with `World::bind_manager_settings`.

## What should a resource not contain?

Anything that points into your module's code, because that code is replaced on every hot reload and the old version is eventually unloaded:

| Avoid in a resource                                      | Use instead                                          |
| -------------------------------------------------------- | ---------------------------------------------------- |
| `&'static str`                                           | `String`                                             |
| a function pointer or a closure (`fn`, `Box<dyn Fn>`)     | an enum or an id that selects the behaviour          |
| a trait object (`Box<dyn Trait>`) created by your module | an enum, or plain data that ECS systems act on        |
| a thread your module starts and does not stop            | the engine's shared thread pool                      |

Plain data such as numbers, `String`, `Vec`, maps of plain data, entity ids and asset handles is always safe.

## Which resources does the engine provide?

| Resource         | What it holds                                        |
| ---------------- | ---------------------------------------------------- |
| `Time`           | timing for the current update                        |
| `Input`          | the keyboard, mouse and gamepad state                |
| `AssetManager`   | every loaded or created asset, reached by handle     |
| `DebugDraw`      | debug lines and labels to draw this update           |

Extensions add their own, for example `AudioManager` from `pill_audio`, and `PhysicsManager` and `PhysicsEvents` from `pill_physics`.

## Where is this in the code?

| What                                                   | Where                                                           |
| ------------------------------------------------------ | --------------------------------------------------------------- |
| `#[derive(PillResource)]` and its attributes           | `pill_engine_macros`, `lib.rs`                                  |
| How declared resources are registered                  | `pill_engine`, `declarations.rs`                                |
| The `Resource` trait, `shared_name`, `layout_sources`  | `pill_engine_core`, `resource.rs`                               |
| `insert_resource`, `register_resource`, `get_resource` | `pill_engine_core`, `world/resources.rs`                        |
| `register_persistable_resource`, snapshots, conversion | `pill_engine_core`, `persistence/resources.rs`                  |
| Settings assets for managers                           | `pill_engine_core`, `settings.rs` and `manager_settings.rs`     |
| `Res<T>` and `ResMut<T>`                               | `pill_engine_core`, `query/resource.rs`                         |
| The layout fingerprint on reload                       | `pill_development_host`, `layout_record.rs`                     |
| A shared, persistable resource in a real project       | `examples/pills/pills_rust/src/game.rs`, `DemoState`            |
| A resource with `layout_sources`                       | `pill_physics/src/manager.rs`, `PhysicsManager`                 |
