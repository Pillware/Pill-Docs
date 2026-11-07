<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8100"></a>

# Struct `pill_engine_core::scripting::ScriptContext`

```rust
pub struct ScriptContext<'a>;
```

Source: `engine\pill_engine_core\src\scripting.rs:46`

A restricted view of the ECS for script components.

The context gives a script:
- read-only world queries: a component's value, an entity's existence;
- a mutable borrow of a component on any entity;
- read-only access to resources;
- deferred structural changes: create or destroy an entity, add or remove
  a component.

In an archetype-based ECS, adding or removing a component moves the entity's
row into another archetype. A script that did that through `&mut World`
while holding `&mut self` would be left with a reference into storage the
entity has left. This type never hands out `&mut World`, and every
structural change it offers is queued, so a script cannot do that.

## Fields

<a id="rustdoc-item-8096"></a>

### `world`

```rust
world: &'a mut crate::world::World
```

Mutable access to the world for component queries

<a id="rustdoc-item-8098"></a>

### `commands`

```rust
commands: &'a mut crate::commands::CommandQueue
```

The command queue the deferred structural changes go into

<a id="rustdoc-item-8099"></a>

### `owning_entity`

```rust
owning_entity: crate::entity::Entity
```

The entity this script is attached to

## Associated functions and methods

<a id="rustdoc-item-8101"></a>

### `new`

```rust
pub(crate) fn new(world: &'a mut World, commands: &'a mut CommandQueue, owning_entity: Entity) -> Self;
```

Creates a new script context.

<a id="rustdoc-item-8102"></a>

### `get_owning_entity`

```rust
pub fn get_owning_entity(self: &Self) -> Entity;
```

Gets the entity this script is attached to.

<a id="rustdoc-item-8103"></a>

### `get_component`

```rust
pub fn get_component<T>(self: &Self, entity: Entity) -> Option<&T> where T: Component;
```

Gets an immutable reference to a component on any entity.

Returns `None` if the entity does not exist or does not carry `T`.

<a id="rustdoc-item-8104"></a>

### `get_component_mut`

```rust
pub fn get_component_mut<T>(self: &mut Self, entity: Entity) -> Option<&mut T> where T: Component;
```

Gets a mutable reference to a component on any entity.

Returns `None` if the entity does not exist or does not carry `T`.

The reference can point at the script's own component. If the script
asks for its own type, `&mut self` and the returned `&mut T` alias,
which Rust calls undefined behaviour. The API accepts that because it
cannot break in practice. The only thing that can invalidate either
reference is a structural change to the entity, and this context only
queues those.

<a id="rustdoc-item-8105"></a>

### `entity_exists`

```rust
pub fn entity_exists(self: &Self, entity: Entity) -> bool;
```

Checks whether an entity exists.

Returns `false` for a destroyed entity and for an old handle whose id
has been reused.

<a id="rustdoc-item-8106"></a>

### `get_resource`

```rust
pub fn get_resource<T: Resource>(self: &Self) -> Option<&T>;
```

Gets an immutable reference to a resource.

Returns `None` if the world holds no resource of type `T`.

<a id="rustdoc-item-2662"></a>

### `create_entity`

```rust
pub fn create_entity(self: &mut Self) -> crate::commands::DeferredEntityBuilder<'_>;
```

Queues creating a new entity.

The entity id is allocated now, and the entity joins the world when the
queued commands run, after every script in the frame has returned. The
returned [`crate::commands::DeferredEntityBuilder`](../commands/struct.DeferredEntityBuilder.md#rustdoc-item-2624) adds components to
it.

<a id="rustdoc-item-8107"></a>

### `destroy_entity`

```rust
pub fn destroy_entity(self: &mut Self, entity: Entity);
```

Queues destroying an entity.

The command runs after every script in the frame has returned, so a
script may queue the destruction of the entity it runs on.

<a id="rustdoc-item-8108"></a>

### `add_component`

```rust
pub fn add_component<T>(self: &mut Self, entity: Entity, component: T) where T: Component + Send;
```

Queues adding a component to an entity.

The command runs after every script in the frame has returned.

<a id="rustdoc-item-8109"></a>

### `remove_component`

```rust
pub fn remove_component<T: Component>(self: &mut Self, entity: Entity);
```

Queues removing a component from an entity.

The command runs after every script in the frame has returned.

<a id="rustdoc-item-8110"></a>

### `get_commands`

```rust
pub fn get_commands(self: &mut Self) -> &mut CommandQueue;
```

Returns the command queue, so a script can queue a command this context
has no method for.

Queued commands still run only after every script in the frame has
returned.

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
