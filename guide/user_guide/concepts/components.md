# Components

## Summary

A component is a piece of data attached to an entity, such as its position, its health or the mesh it draws. You declare one with `#[derive(PillComponent)]`, ECS systems read and change components through queries, and two optional attributes decide whether a component survives changes to its own struct (`persistable`) and whether several modules can share it (`shared`).

## At a glance

| Attribute                  | What it gives you                                                                 | When to use it                                                |
| -------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| none                       | a component used by one module                                                    | working data the code rebuilds anyway                         |
| `#[pill(persistable)]`     | its values are **converted** when you change its fields while the project runs   | most components: anything you tune or that matters to keep    |
| `#[pill(shared)]`          | every module that uses the type reaches the **same** component                   | a component more than one module uses                         |
| `#[pill(shared, persistable)]` | both                                                                           | a shared component whose fields may still change              |

## What is a component?

A component is a plain Rust struct that holds data for one entity. It has no behaviour of its own: ECS systems provide the behaviour by reading and changing components.

> **Example:** a `Health { current: f32, max: f32 }` component on an enemy says how hurt it is. A damage ECS system lowers `current`; a different ECS system destroys entities whose `current` reaches zero. The component itself never does anything.

Keep components small and focused. An entity gets its full set of behaviour by combining several components, not from one large component.

## How do I declare a component?

Derive `PillComponent`:

```rust
use pill_engine::*;

#[derive(Debug, Clone, Copy, Default, Serialize, Deserialize, PillComponent)]
#[pill(persistable)]
pub struct Health {
    pub current: f32,
    pub max: f32,
}
```

The derive does the registration for you: every component declared this way in your module is registered automatically when the module loads. You don't need a separate registration call.

## How do I attach components to entities?

When you create the entity, or later:

```rust
let enemy = world
    .create_entity()
    .with(Health { current: 100.0, max: 100.0 })
    .with(TransformComponent::default())
    .build()?;

world.add_component(enemy, Burning { seconds_left: 3.0 })?;
```

An entity has at most one component of each type. See [entities.md](entities.md) for creating, changing and destroying entities, including from inside ECS systems.

## How do ECS systems read and change components?

Through a `Query`, a parameter that visits every entity that has the components you ask for:

```rust
// Moves every entity that has both a position and a velocity.
fn movement(mut query: Query<(&mut Position, &Velocity)>) {
    for (mut position, velocity) in query.iter_mut() {
        position.x += velocity.x;
        position.y += velocity.y;
    }
}
```

- `&T` reads a component, and `&mut T` changes it.
- An entity is visited only if it has **every** component in the query.
- Add `Entity` to get each entity's handle: `Query<(Entity, &Health)>`.

You can narrow a query with a second type parameter, a **filter**:

| Filter          | Visits entities that...                                         |
| --------------- | --------------------------------------------------------------- |
| `With<T>`       | have `T`, without reading it                                     |
| `Without<T>`    | do not have `T`                                                  |
| `Added<T>`      | got `T` since this ECS system last ran                           |
| `Changed<T>`    | had `T` written since this ECS system last ran                   |
| `Or<(A, B)>`    | match either filter                                              |

```rust
// Only enemies that are not already burning.
fn ignite(mut query: Query<&mut Health, (With<Enemy>, Without<Burning>)>) { /* ... */ }
```

`Changed<T>` works because writing through `&mut T` marks that entity's component as changed automatically. Reading through `&mut T` without writing does not.

See [systems.md](systems.md) for how ECS systems are registered and scheduled.

## What happens to my components when the project hot-reloads?

They stay, with their values. Entities and their components belong to the world, which is not reloaded. Only your code is replaced.

What happens when you change a component's **own struct** depends on whether it is persistable:

| You save a change to...                                   | Plain component                                                       | Persistable component                                                                  |
| --------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| any other code                                            | kept, unchanged                                                       | kept, unchanged                                                                        |
| the component's fields (added, removed, changed)          | the existing values **cannot be converted**; avoid this while running  | every value is **converted**: kept fields keep their values, new fields start at their default |
| the component's name or its module (it moved)             | treated as a new component                                            | treated as a new component, unless it has a pinned shared name                         |

> **Example:** you tuned 40 enemies' `Health` while playing, then add a `shield: f32` field and save. With `#[pill(persistable)]`, every enemy keeps its current health, and `shield` starts at `0.0`. Without it, the new code cannot read the existing values, so restart the project after such a change.

So use `persistable` unless you have a reason not to. It needs `Serialize`, `Deserialize` and `Default`, as in the `Health` example above. A field that cannot be serialized can be marked `#[serde(skip)]`; it starts at its default after a conversion.

## When does a component need to be shared?

When more than one module uses the component: an extension defines it and your project spawns it, or two extensions both query it.

Every module is a separate DLL with its own compiled copy of the types it uses. Without `shared`, the copies may count as **different** component types, and then each module only sees the entities the other module never created. Nothing warns you; the entities just seem to be missing. `shared` makes the engine identify the component by a name instead, so every module reaches the same component.

```rust
#[derive(Debug, Clone, Copy, Default, Serialize, Deserialize, PillComponent)]
#[pill(shared = "my_extension::Spline", persistable)]
#[repr(C)]
pub struct Spline {
    pub segments: u32,
}
```

- `#[pill(shared)]` takes the name from the module path. Pin it with `shared = "crate::Name"` so moving the type to another file does not change it.
- The name must be unique in the whole process, and must contain `::`.
- Add `#[repr(C)]`, so every module lays the fields out in the same order.
- When you change a shared component's fields, every other module that uses it pauses its ECS systems until it is rebuilt, because their code still expects the old fields.

## Are components saved in scenes?

Yes. When a scene is saved, every component declared with `#[derive(PillComponent)]` is written field by field, whether or not it is persistable:

- an asset handle field (`Handle<Mesh>`) is written as the asset's guid, so it loads the same asset later;
- an `Entity` field is written as the target's stable id, so the reference is reconnected on load;
- a `String`, `Vec` or other container field is **not** written; the save reports it as skipped.

So keep data that must be saved in plain fields: numbers, arrays, nested `#[derive(PillMirror)]` structs, handles and entity references.

## How do I control how a component looks in the editor?

With field attributes that only change the Inspector, never the stored data:

```rust
#[derive(Debug, Clone, Copy, Default, Serialize, Deserialize, PillComponent)]
#[pill(persistable)]
pub struct Enemy {
    #[pill(header("Movement"), range(0.0, 20.0))]
    pub speed: f32,
    #[pill(tooltip("Seconds between attacks"), min(0.1))]
    pub attack_interval: f32,
    #[pill(hide_in_inspector)]
    pub internal_timer: f32,
}
```

| Attribute                                   | Inspector shows                                   |
| ------------------------------------------- | ------------------------------------------------- |
| `header("Text")`, `space(10.0)`             | a labelled separator, a gap                       |
| `tooltip("Text")`                           | hover text on the label                           |
| `range(min, max)`, `min(value)`             | a slider, a drag value with a lower limit         |
| `text_area`, `multiline(5)`                 | a multi-line text box                             |
| `color`, `vector`                           | a colour picker, one X/Y/Z row                    |
| `hide_in_inspector`                         | nothing, but the value is still stored            |

## What should a component not contain?

Anything that points into your module's code, because that code is replaced on every hot reload and the old version is eventually unloaded: `&'static str`, function pointers, closures, and trait objects (`Box<dyn Trait>`) your module created. Use `String`, an enum, or an id instead.

## Where is this in the code?

| What                                                   | Where                                                                  |
| ------------------------------------------------------ | ---------------------------------------------------------------------- |
| `#[derive(PillComponent)]` and its attributes          | `pill_engine_macros`, `lib.rs`                                         |
| `Component`, `shared_name`                             | `pill_engine_core`, `component.rs`                                     |
| `Query` and its filters                                | `pill_engine_core`, `query/`                                           |
| Saving components in scenes                            | `pill_engine_core`, `scene.rs`                                         |
| Registering every declared component at module load    | `pill_engine`, `component_registry.rs`                                 |
| Real components                                        | `pill_master_renderer_data/src/components/`, `pill_physics/src/components.rs`, `pill_spline/src/pill_spline.rs` |
| Shared, persistable components in a real project       | `examples/pills/pills_rust/src/game.rs`                                |
