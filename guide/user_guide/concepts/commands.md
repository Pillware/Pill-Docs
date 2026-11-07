# Commands

## Summary

`Commands` is how an ECS system creates and destroys entities and adds or removes components. The changes do not happen right away: they are collected while the ECS systems run and applied together at the end of the update, so no ECS system sees the world change in the middle of its work.

## At a glance

| You want to...                        | Inside an ECS system (`Commands`)                     | Elsewhere (with the world)                    |
| ------------------------------------- | ----------------------------------------------------- | --------------------------------------------- |
| create an entity                      | `commands.create_entity().with(...).build()`          | `world.create_entity().with(...).build()`     |
| destroy an entity                     | `commands.destroy_entity(entity)`                     | `world.destroy_entity(entity)`                |
| add a component to an existing entity | `commands.add_component_to_entity(entity, component)` | `world.add_component(entity, component)`      |
| remove a component                    | `commands.remove_component_from_entity::<T>(entity)`  | `world.remove_component::<T>(entity)`         |
| change a component's value            | not needed: use `Query<&mut T>`                       | `world.get_component_mut::<T>(entity)`        |

| Question                              | Answer                                                     |
| ------------------------------------- | ---------------------------------------------------------- |
| When do the changes happen?           | After every ECS system of the update has run               |
| Do I get the new entity's handle?     | Yes, at once, even though the entity appears later         |
| What if a change fails?               | It is skipped, a warning is logged, and the update carries on |
| Does `Commands` slow anything down?   | An ECS system that takes it always runs on its own         |

## When do I need `Commands`?

You need `Commands` when an ECS system changes **which** entities exist or **which** components they have.

- Spawning a bullet, an enemy or an effect: `Commands`.
- Destroying something that died or expired: `Commands`.
- Giving an entity a new component, such as a `Stunned` marker, or taking one away: `Commands`.
- Changing a value an entity already has, such as its position or its health: **not** `Commands`. Ask for `Query<&mut T>` and write the value directly.

Outside an ECS system, for example in your module's registration code, a scene setup function or a test, you already have the world. Use the `world.` functions there instead; they apply at once.

## How do I use `Commands`?

Add `mut commands: Commands` as a parameter of the ECS system and call its methods:

```rust
use pill_engine::*;

// Spawns a bullet for every gun whose trigger is held.
#[system]
fn fire_guns(mut commands: Commands, mut guns: Query<(&Gun, &TransformComponent)>) {
    for (gun, transform) in guns.iter_mut() {
        if gun.trigger_held {
            commands
                .create_entity()
                .with(*transform)
                .with(Bullet { speed: gun.bullet_speed })
                .build();
        }
    }
}

// Destroys every enemy whose health reached zero.
#[system]
fn remove_dead_enemies(mut commands: Commands, mut enemies: Query<(Entity, &Health)>) {
    for (entity, health) in enemies.iter_mut() {
        if health.current <= 0.0 {
            commands.destroy_entity(entity);
        }
    }
}
```

Add `Entity` to the query whenever you need to name the entity a command should act on.

## When do the changes actually happen?

The changes happen after every ECS system of the update has run, in the order you queued them.

While the ECS systems run, `Commands` only writes each change on a list. Once the last ECS system (and every C# script) has finished, the engine goes through the list and applies each change. From then on, everything sees the new state.

This has a visible effect: **a change is invisible to every ECS system for the rest of the update**, including the ECS system that queued it.

> **Example:** `fire_guns` spawns a bullet, and a `move_bullets` ECS system moves every bullet.
>
> - In the update where the bullet is spawned, `move_bullets` does not see it, even if it runs after `fire_guns`. The bullet does not exist yet.
> - At the end of that update, the bullet is created.
> - From the next update on, `move_bullets` moves it like any other bullet.

The same holds for destroying: an enemy you destroy is still visible to queries until the update ends.

## Why are changes delayed instead of applied at once?

Changes are delayed so an ECS system never sees the world change while it is looking at it.

An ECS system usually loops over entities. If it could destroy or reshape entities during that loop, the loop could skip entities or visit them twice. And several ECS systems often run at the same time on different threads; if one of them could change the world's structure, the others would be reading data that is moving under them.

Collecting the changes and applying them together, after all ECS systems are done, avoids both problems. You can call `commands.destroy_entity` in the middle of a loop without worrying about the loop.

## Can I use the new entity before it exists?

Yes, you can keep its handle and use it later. `build()` returns the new `Entity` straight away:

```rust
let bullet = commands
    .create_entity()
    .with(Bullet { speed: 20.0 })
    .build();
```

You can store `bullet` in a component or a resource, or queue more commands for it, such as `commands.add_component_to_entity(bullet, Tracer)`. Those are applied after the creation, because commands are applied in the order they were queued.

What you cannot do is read the entity before the update ends. Until then, queries do not see it and lookups such as `world.get_component` return `None`.

> **Important:** no command takes effect on the line where you call it. Adding a component, removing a component, destroying an entity and creating one are **all** only queued. The next line of your ECS system still sees the world exactly as it was. The change happens at the end of the update, after **every** ECS system has run.
>
> ```rust
> commands.add_component_to_entity(enemy, Stunned);
> // `enemy` does NOT have `Stunned` yet: a check here still says it is missing.
>
> commands.remove_component_from_entity::<Health>(enemy);
> // `enemy` still HAS `Health` here, and later queries in this update still find it.
>
> commands.destroy_entity(enemy);
> // `enemy` still EXISTS here: queries in this and every other ECS system this update still visit it.
> ```
>
> So never write code that relies on a command having already happened in the same update. If later code in this update needs to know about the change, keep that information yourself, for example in a local variable or a resource.

## What happens if a command cannot be applied?

The engine skips that command, logs a `deferred command failed` warning that names the problem, and applies the rest.

Commands fail when the world changed between the moment you queued them and the moment they are applied. Common cases:

| What you did                                                    | What happens                                     |
| --------------------------------------------------------------- | ------------------------------------------------ |
| destroyed an entity that was already destroyed                  | the second destroy fails: the entity is not found |
| two ECS systems both destroy the same enemy in one update       | the second destroy fails the same way            |
| added a component to an entity destroyed earlier in the list    | the add fails: the entity is not found           |
| added a component the entity already has                        | the add fails: the component already exists      |
| removed a component the entity does not have                    | the remove fails: the component is not found     |

One rule surprises people: **removing an entity's last component destroys the entity.** An entity with no components cannot exist in the world.

A failed command never stops the project. If you see these warnings often, the usual cause is two ECS systems acting on the same entity; let one of them own that decision.

## Does using `Commands` cost anything?

Yes: an ECS system that takes `Commands` always runs alone, never at the same time as another ECS system.

The engine runs ECS systems in parallel when they do not touch the same data. `Commands` needs to reserve new entity handles from the world, so the engine cannot run anything beside an ECS system that has it. That ECS system waits for its own turn.

So take `Commands` only in ECS systems that really create, destroy, add or remove. An ECS system that only moves things or changes values should not ask for it.

> **Example:** you have ten ECS systems that read and write different components, and they run in two parallel groups. You add `Commands` to one of them "just in case". It now leaves its group and runs on its own, and the update takes a little longer for no benefit.

## What about ECS systems that run after the update?

An ECS system marked `#[system(post_update)]` runs **after** the changes are applied. It sees this update's new and destroyed entities.

If a post-update ECS system queues commands itself, they are applied at the end of the **next** update, together with the next update's other commands.

## Is this the same as the editor's commands?

No. The editor has its own "commands": recorded edits such as `delete entity` that you can undo. They are a different thing with the same name. The editor applies its edits through the same command list at the moment you make them, but `Commands` in your ECS systems has nothing to do with undo.

## Where is this in the code?

| What                                                           | Where                                          |
| -------------------------------------------------------------- | ---------------------------------------------- |
| `Commands`, the command list and the entity builder            | `pill_engine_core`, `commands.rs`              |
| When the list is applied during an update                      | `pill_engine_core`, `engine.rs` (`process_frame`) |
| Why an ECS system with `Commands` runs alone                   | `pill_engine_core`, `scheduler.rs`             |
| The `world.` functions that apply at once                      | `pill_engine_core`, `world/`                   |
| Related guides                                                 | [entities.md](entities.md), [systems.md](systems.md), [components.md](components.md) |
| How it works inside                                            | [technical/concepts/commands.md](../../engine_guides/concepts/commands.md) |
