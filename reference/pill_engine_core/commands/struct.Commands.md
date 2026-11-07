<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2621"></a>

# Struct `pill_engine_core::commands::Commands`

```rust
pub struct Commands<'a>;
```

Source: `engine\pill_engine_core\src\commands.rs:773`

The handle a system uses to queue entity operations for later.

It gives the system the command queue and the world the queued entities are
allocated from. [`Self::create_entity`](#rustdoc-item-2620) takes the entity id from the world's
free list right away, so the caller can keep it even though the entity does
not exist in the world until the queue is flushed.

## Fields

<a id="rustdoc-item-2618"></a>

### `command_queue`

```rust
command_queue: &'a mut CommandQueue
```

The queue that deferred operations are appended to.

<a id="rustdoc-item-2619"></a>

### `world`

```rust
world: &'a mut crate::world::World
```

The world the entity ids are allocated from, and that the flush later
mutates.

## Associated functions and methods

<a id="rustdoc-item-2622"></a>

### `new`

```rust
pub(crate) fn new(command_queue: &'a mut CommandQueue, world: &'a mut World) -> Self;
```

Wraps a command queue and a world for one frame's system execution.

<a id="rustdoc-item-2620"></a>

### `create_entity`

```rust
pub fn create_entity(self: &mut Self) -> DeferredEntityBuilder<'_>;
```

Starts building a new entity; its creation is queued when it is built.

The entity id is taken from the free list immediately and returned by
[`.build()`](struct.DeferredEntityBuilder.md#rustdoc-item-2623). The entity does not appear in
the world until the queue is flushed at the end of the frame.

<a id="rustdoc-item-2625"></a>

### `add_component_to_entity`

```rust
pub fn add_component_to_entity<T>(self: &mut Self, entity: Entity, component: T) where T: Component + Send;
```

Queues adding a component to an entity; the flush applies it later.

<a id="rustdoc-item-2626"></a>

### `remove_component_from_entity`

```rust
pub fn remove_component_from_entity<T: Component>(self: &mut Self, entity: Entity);
```

Queues removing a component from an entity; the flush applies it later.

<a id="rustdoc-item-2627"></a>

### `destroy_entity`

```rust
pub fn destroy_entity(self: &mut Self, entity: Entity);
```

Queues destroying an entity; the entity is removed at the flush.

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
- `SystemParam`
