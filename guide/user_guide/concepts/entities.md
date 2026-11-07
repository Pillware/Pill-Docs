# Entities

## Summary

An entity is one object in the world: a player, a bullet, a camera, a light. An entity holds no data of its own; it is an id that components attach to, and what an entity *is* comes entirely from the components it has.

## At a glance

| You want to...                          | In code that owns the world                         | Inside an ECS system                                  |
| --------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| create an entity                        | `world.create_entity().with(...).build()`           | `commands.create_entity().with(...).build()`          |
| destroy an entity                       | `world.destroy_entity(entity)`                      | `commands.destroy_entity(entity)`                     |
| add a component to an existing entity   | `world.add_component(entity, component)`            | `commands.add_component_to_entity(entity, component)` |
| remove a component                      | `world.remove_component::<T>(entity)`               | `commands.remove_component_from_entity::<T>(entity)`  |
| read one entity's component             | `world.get_component::<T>(entity)`                  | a `Query` that includes `Entity`                      |
| check that an entity still exists       | `world.is_entity_valid(entity)`                     | —                                                     |

## What is an entity?

An entity is an id, and nothing else. Its data lives in its components.

> **Example:** a falling crate is an entity with a `TransformComponent` (where it is), a `MeshRendererComponent` (how it looks) and a `Velocity` (how it moves). Remove the `Velocity` and the crate stops moving, because the ECS system that moves things only looks at entities that have one. Nothing else about the crate changes.

This is the main difference from object-oriented code: you do not write a `Crate` class with methods. You give an entity the components that describe it, and ECS systems act on every entity that has the components they need. See [components.md](components.md) and [systems.md](systems.md).

## How do I create an entity?

Start a builder, add components with `.with(...)`, and finish with `.build()`:

```rust
let crate_entity = world
    .create_entity()
    .with(TransformComponent {
        translation: [0.0, 10.0, 0.0],
        ..Default::default()
    })
    .with(Velocity { x: 0.0, y: -1.0, z: 0.0 })
    .build()
    .map_err(|error| error.to_string())?;
```

- `build()` returns a `Result`, because creating an entity can fail, for example when a component type was never registered.
- The value it returns is an `Entity`: a small, copyable handle you can store and use later.

Create entities like this in code that has the world: your module's registration function, a scene setup function, a test. Inside an ECS system, use `Commands` instead; see [How do I create or destroy entities from inside an ECS system?](#how-do-i-create-or-destroy-entities-from-inside-an-ecs-system)

## How do I add or remove a component later?

Through the world:

```rust
world.add_component(crate_entity, Burning { seconds_left: 3.0 })?;
world.remove_component::<Velocity>(crate_entity)?;
```

Both return a `Result`: the entity may no longer exist, or may not have the component you remove.

Adding or removing a component changes which ECS systems see the entity from the next time they run, because their queries match entities by the components they have.

## How do I destroy an entity?

```rust
world.destroy_entity(crate_entity);
```

All of its components are destroyed with it. The call returns `false` when the entity was already gone.

## What happens to an `Entity` handle after the entity is destroyed?

It stops working, safely. Every handle carries a **generation number** next to its id. When an entity is destroyed, its id is reused for the next entity created, but with a new generation. An old handle still carries the old generation, so the world can tell it is out of date:

```rust
let enemy = world.create_entity().with(Health(100.0)).build()?;
world.destroy_entity(enemy);

let bullet = world.create_entity().with(Damage(10.0)).build()?;

// `bullet` may reuse `enemy`'s id, but the old handle is not mistaken for it.
assert!(!world.is_entity_valid(enemy));
```

So storing an `Entity` (in a component, a resource or a list) is safe. Before using a stored handle, check `is_entity_valid`, or expect lookups such as `get_component` to return `None`.

## How do I create or destroy entities from inside an ECS system?

Take `Commands` as a parameter. Commands are **deferred**: they are collected while ECS systems run and applied at the end of the update, so no ECS system sees the world change halfway through its own loop.

```rust
// Spawns a bullet for every gun whose trigger is held.
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
```

- `commands.create_entity().build()` returns the new `Entity` at once, so you can store it, but the entity only exists in the world after the update ends.
- `commands.destroy_entity(entity)`, `add_component_to_entity` and `remove_component_from_entity` work the same way.
- An ECS system that takes `Commands` always runs on its own, never alongside other ECS systems. Use it when you need it, not by default.

## How do I find a specific entity?

Usually you don't look one up: you write a query for the components you care about, and the query visits every matching entity. Add `Entity` to the query when you also need the handle:

```rust
// Destroys every enemy whose health reached zero.
fn remove_dead_enemies(mut commands: Commands, mut enemies: Query<(Entity, &Health)>) {
    for (entity, health) in enemies.iter_mut() {
        if health.0 <= 0.0 {
            commands.destroy_entity(entity);
        }
    }
}
```

When one entity matters on its own (the player, the main camera), give it a marker component, such as `struct Player;`, and query for that. Or keep its `Entity` in a resource.

## Can a component refer to another entity?

Yes. A component can hold an `Entity` field:

```rust
#[derive(PillComponent, Clone, Copy)]
pub struct FollowTarget {
    pub target: Entity,
}
```

When a scene is saved, such a field is written as the target's **stable id**, not as the handle. Handles are only meaningful while the project runs, because ids are reused. When the scene is loaded again, the reference is reconnected to the right entity, even if it is created in a different order.

## Do entities survive a hot reload?

Yes. Entities belong to the world, and the world is not reloaded. When your code changes, every entity and its components stay in place, and the new code continues with them. See [components.md](components.md) for what happens when a component's own struct changes.

## Where is this in the code?

| What                                                       | Where                                                       |
| ---------------------------------------------------------- | ----------------------------------------------------------- |
| `Entity`, generations, `EntityId`                          | `pill_engine_core`, `entity.rs`                             |
| `create_entity`, `destroy_entity`, `is_entity_valid`       | `pill_engine_core`, `world/mod.rs`                          |
| `add_component`, `remove_component`, `get_component`       | `pill_engine_core`, `world/components.rs`                   |
| `Commands`                                                 | `pill_engine_core`, `commands.rs`                           |
| A real project creating entities                           | `examples/pills/pills_rust/src/game.rs`, `spawn_pills`      |
