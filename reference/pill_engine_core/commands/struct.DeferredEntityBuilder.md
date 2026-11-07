<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2624"></a>

# Struct `pill_engine_core::commands::DeferredEntityBuilder`

```rust
pub struct DeferredEntityBuilder<'a>;
```

Source: `engine\pill_engine_core\src\commands.rs:837`

Builds an entity's component list and queues its creation.

[`World::EntityBuilder`](../world/struct.EntityBuilder.md#rustdoc-item-2661) creates the entity
immediately. This builder queues the creation instead. It still takes the
entity id from the free list when it is constructed, so
[`build()`](#rustdoc-item-2623) can return the handle at once. The entity becomes
visible to queries when the current frame's queue is flushed.

## Fields

<a id="rustdoc-item-2657"></a>

### `command_queue`

```rust
command_queue: &'a mut CommandQueue
```

The queue the finished create command is appended to.

<a id="rustdoc-item-2658"></a>

### `allocated_entity`

```rust
allocated_entity: crate::entity::Entity
```

The entity handle allocated from the free list at construction time.

<a id="rustdoc-item-2660"></a>

### `component_adders`

```rust
component_adders: Vec<Box<dyn ComponentAdder>>
```

Native components accumulated via [`with`](#rustdoc-item-2659).

## Associated functions and methods

<a id="rustdoc-item-2663"></a>

### `new`

```rust
pub fn new(command_queue: &'a mut CommandQueue, world: &mut World) -> Self;
```

Creates a builder whose entity id is already allocated from the world.

[`ScriptContext::create_entity`](../scripting/struct.ScriptContext.md#rustdoc-item-2662)
calls this. [`Commands::create_entity`](struct.Commands.md#rustdoc-item-2620) builds the same state itself,
because it already has the world it took the handle from.

<a id="rustdoc-item-2659"></a>

### `with`

```rust
pub fn with<T>(self: Self, component: T) -> Self where T: Component + Send;
```

Adds a component to the entity being created.

<a id="rustdoc-item-2623"></a>

### `build`

```rust
pub fn build(self: Self) -> Entity;
```

Finishes the builder and queues the entity's creation.

Returns the entity handle at once. The entity does not appear in world
queries until the queue is flushed at the end of the frame, but the
handle is valid and can be stored for later use.

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
