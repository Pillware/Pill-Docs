<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2661"></a>

# Struct `pill_engine_core::world::EntityBuilder`

```rust
pub struct EntityBuilder<'w>;
```

Source: `engine\pill_engine_core\src\world\mod.rs:1560`

Builds an entity by adding one component at a time.

[`World::create_entity`](struct.World.md#rustdoc-item-9073) returns one. Add components with
[`with`](#rustdoc-item-9141), then insert the entity into the world with
[`build`](#rustdoc-item-9137).

## Examples

```
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Transform { x: f32, y: f32, z: f32 }
# impl Component for Transform {}
# #[derive(Debug, Clone)] struct Velocity { x: f32, y: f32 }
# impl Component for Velocity {}
# let mut world = World::new();
# world.register_component::<Transform>();
# world.register_component::<Velocity>();
world.create_entity()
    .with(Transform { x: 0.0, y: 0.0, z: 0.0 })
    .with(Velocity { x: 10.0, y: 0.0 })
    .build().unwrap();
```

## Fields

<a id="rustdoc-item-9138"></a>

### `world`

```rust
world: &'w mut World
```

World the built entity is inserted into on [`build`](#rustdoc-item-9137).

<a id="rustdoc-item-9139"></a>

### `entity`

```rust
entity: crate::entity::Entity
```

Entity handle reserved by the free list for this build.

<a id="rustdoc-item-9140"></a>

### `stable_id`

```rust
stable_id: Option<crate::entity::EntityId>
```

Stable id the creator supplied, or `None` to mint a fresh one.

<a id="rustdoc-item-9142"></a>

### `component_inserters`

```rust
component_inserters: Vec<Box<dyn ComponentInserter>>
```

Type-erased component inserters accumulated via [`with`](#rustdoc-item-9141).

## Associated functions and methods

<a id="rustdoc-item-9143"></a>

### `with_id`

```rust
pub fn with_id(self: Self, id: EntityId) -> Self;
```

Builds the entity with an id the caller already chose.

A scene load uses this: the id written in the file has to be the id the
loaded entities carry, or every reference inside the scene would point at
nothing. [`build`](#rustdoc-item-9137) refuses an id that a live entity already
holds.

<a id="rustdoc-item-9141"></a>

### `with`

```rust
pub fn with<T>(self: Self, component: T) -> Self where T: Component;
```

Adds a component to the entity being built.

<a id="rustdoc-item-9137"></a>

### `build`

```rust
pub fn build(self: Self) -> Result<Entity, BuildError>;
```

Finishes the build and inserts the entity into the world.

#### Errors

Returns [`BuildError::ComponentNotRegistered`](../error/enum.BuildError.md#rustdoc-item-4762) when a component type
added with [`.with()`](#rustdoc-item-9141) was not registered with the world
first, [`BuildError::DuplicateComponent`](../error/enum.BuildError.md#rustdoc-item-4766) when one type was added more
than once, and [`BuildError::DuplicateEntityId`](../error/enum.BuildError.md#rustdoc-item-4764) when the id given to
[`with_id`](#rustdoc-item-9143) already belongs to a live entity.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
