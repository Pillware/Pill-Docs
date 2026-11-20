<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2835"></a>

# Struct `pill_engine_core::ecs::commands::CommandQueue`

```rust
pub struct CommandQueue;
```

Source: `engine\pill_engine_core\src\ecs\commands.rs:254`

The queue of deferred structural edits for one frame.

A system that needs to create or destroy an entity, or add or remove a
component, appends the edit here instead of changing the world. The engine
applies every queued edit in a separate phase after all systems have run.

## Fields

<a id="rustdoc-item-2834"></a>

### `commands`

```rust
commands: Vec<DeferredCommand>
```

The deferred operations queued this frame, in submission order.

## Associated functions and methods

<a id="rustdoc-item-2836"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty command queue.

<a id="rustdoc-item-2837"></a>

### `clear`

```rust
pub(crate) fn clear(self: &mut Self);
```

Throws away every queued command without applying it.

This is the rollback half of the queue-without-applying pair: a step
that queued commands and then failed calls it, so none of those commands
reaches the world.

<a id="rustdoc-item-2839"></a>

### `create_entity`

```rust
pub fn create_entity(self: &mut Self, entity: Entity, components: Vec<Box<dyn ComponentAdder>>);
```

Queues the creation of an entity with the given components.

`entity` must already be allocated from the world's free list. The
entity does not exist in the world until the queue is flushed.

<a id="rustdoc-item-2840"></a>

### `create_mixed_entity`

```rust
pub fn create_mixed_entity(self: &mut Self, entity: Entity, native_components: Vec<Box<dyn ComponentAdder>>, descriptor_components: Vec<(ComponentId, Vec<u8>)>);
```

Queues the creation of an entity that carries both native components
and type-erased runtime components.

<a id="rustdoc-item-2841"></a>

### `add_component_to_entity`

```rust
pub fn add_component_to_entity<T>(self: &mut Self, entity: Entity, component: T) where T: Component + Send;
```

Queues adding a component to an entity.

<a id="rustdoc-item-2842"></a>

### `add_component_adder_to_entity`

```rust
pub fn add_component_adder_to_entity(self: &mut Self, entity: Entity, component_adder: Box<dyn ComponentAdder>);
```

Queues a native component that the caller has already built as a
[`ComponentAdder`](trait.ComponentAdder.md#rustdoc-item-2731).

<a id="rustdoc-item-2843"></a>

### `add_descriptor_component_to_entity`

```rust
pub fn add_descriptor_component_to_entity(self: &mut Self, entity: Entity, component_id: ComponentId, bytes: Vec<u8>);
```

Queues adding an existing runtime component, identified by its
component id and written from `bytes`.

<a id="rustdoc-item-2844"></a>

### `remove_component_from_entity`

```rust
pub fn remove_component_from_entity<T: Component>(self: &mut Self, entity: Entity);
```

Queues removing a component from an entity.

<a id="rustdoc-item-2845"></a>

### `remove_component_by_id`

```rust
pub fn remove_component_by_id(self: &mut Self, entity: Entity, component_id: ComponentId);
```

Queues removing a component selected by its runtime component id.

<a id="rustdoc-item-2846"></a>

### `destroy_entity`

```rust
pub fn destroy_entity(self: &mut Self, entity: Entity);
```

Queues destroying an entity.

<a id="rustdoc-item-2847"></a>

### `execute_queued_commands`

```rust
pub(crate) fn execute_queued_commands(self: &mut Self, world: &mut World, exit_on_error: bool) -> Result<(), Vec<CommandError>>;
```

Executes every queued command against the world and empties the queue.

The engine calls this at the end of a frame, after every system has run.
The one-shot `run_deferred_commands` and `flush_deferred_commands`
helpers call it too.

#### Errors

With `exit_on_error` set, returns every command failure the flush
collected. With it cleared, the same failures are logged through the
telemetry warn target and the profile error channel instead, and the
flush reports success.

<a id="rustdoc-item-2849"></a>

### `execute_create_entity`

```rust
pub(in ecs::commands) fn execute_create_entity(world: &mut World, entity: Entity, component_adders: Vec<Box<dyn ComponentAdder>>, descriptor_components: Vec<(ComponentId, Vec<u8>)>) -> Result<(), Vec<CommandError>>;
```

Executes a queued entity-creation command.

Creates the archetype row for the entity and writes both its native
and type-erased components. The component data is trusted: the bytes
that arrive from the C# side are checked before they are queued.

#### Errors

Returns `DuplicateComponent` when the component list names one id
twice. That refusal happens before the row exists, so the slot the
caller was given is recycled.

Returns `ComponentWriteFailed` for a component that could not be
written. That failure happens after the insert and cannot be undone:
the row is already in every other column, so there is nothing to roll
back to and the entity stays live.

<a id="rustdoc-item-2850"></a>

### `execute_add_descriptor_component`

```rust
pub(in ecs::commands) fn execute_add_descriptor_component(world: &mut World, entity: Entity, component_id: ComponentId, bytes: Vec<u8>, errors: &mut Vec<CommandError>);
```

Executes a queued type-erased component addition.

Rejects an entity that no longer exists and a component the entity
already has, then writes the bytes into the entity's component storage.

<a id="rustdoc-item-2852"></a>

### `execute_add_component`

```rust
pub(in ecs::commands) fn execute_add_component(world: &mut World, entity: Entity, component_adder: Box<dyn ComponentAdder>, errors: &mut Vec<CommandError>);
```

Executes a queued native component addition.

Moves the entity to a new archetype that includes the component, copying
every component it already has and writing the new one. It runs the same
code as the eager [`World::add_component`](../world/struct.World.md#rustdoc-item-2851), so the checks for an
unregistered type and for a component the entity already has apply here
too.

<a id="rustdoc-item-2853"></a>

### `execute_remove_component`

```rust
pub(in ecs::commands) fn execute_remove_component(world: &mut World, commands: &mut CommandQueue, entity: Entity, component_id: ComponentId, errors: &mut Vec<CommandError>);
```

Executes a queued component removal.

Moves the entity to a new archetype without the component, or destroys
it when no components are left. It runs the same code as the eager
removal, with the script lifecycle methods the queued path owes: a
script that is running stops, and the component is told it is being
destroyed, both before the row goes.

<a id="rustdoc-item-2854"></a>

### `execute_destroy_entity`

```rust
pub(in ecs::commands) fn execute_destroy_entity(world: &mut World, commands: &mut CommandQueue, entity: Entity, errors: &mut Vec<CommandError>);
```

Executes a queued entity destruction.

Records `CommandError::EntityNotFound` when the entity is already gone,
matching the behaviour of the other command executors. Every script on
the entity stops and is destroyed first.

<a id="rustdoc-item-2855"></a>

### `command_error_of`

```rust
pub(in ecs::commands) fn command_error_of(entity: Entity, operation: &'static str, component_id: ComponentId, error: WorldError) -> CommandError;
```

Turns the world's error for a refused structural edit into a command
error.

The two executors that add and remove components use it, so a rule that
refuses an edit reports the same way whichever command queued it.

<a id="rustdoc-item-2856"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns whether no commands are currently queued.

#### Examples

```
# use pill_engine::commands::CommandQueue;
let queue = CommandQueue::new();
assert!(queue.is_empty());
```

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Default`
