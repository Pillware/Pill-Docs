<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2570"></a>

# Struct `pill_engine_core::commands::CommandQueue`

```rust
pub struct CommandQueue;
```

Source: `engine\pill_engine_core\src\commands.rs:254`

The queue of deferred structural edits for one frame.

A system that needs to create or destroy an entity, or add or remove a
component, appends the edit here instead of changing the world. The engine
applies every queued edit in a separate phase after all systems have run.

## Fields

<a id="rustdoc-item-2569"></a>

### `commands`

```rust
commands: Vec<DeferredCommand>
```

The deferred operations queued this frame, in submission order.

## Associated functions and methods

<a id="rustdoc-item-2571"></a>

### `new`

```rust
pub fn new() -> Self;
```

Creates an empty command queue.

<a id="rustdoc-item-2572"></a>

### `clear`

```rust
pub(crate) fn clear(self: &mut Self);
```

Throws away every queued command without applying it.

This is the rollback half of the queue-without-applying pair: a step
that queued commands and then failed calls it, so none of those commands
reaches the world.

<a id="rustdoc-item-2574"></a>

### `create_entity`

```rust
pub fn create_entity(self: &mut Self, entity: Entity, components: Vec<Box<dyn ComponentAdder>>);
```

Queues the creation of an entity with the given components.

`entity` must already be allocated from the world's free list. The
entity does not exist in the world until the queue is flushed.

<a id="rustdoc-item-2575"></a>

### `create_mixed_entity`

```rust
pub fn create_mixed_entity(self: &mut Self, entity: Entity, native_components: Vec<Box<dyn ComponentAdder>>, descriptor_components: Vec<(ComponentId, Vec<u8>)>);
```

Queues the creation of an entity that carries both native components
and type-erased runtime components.

<a id="rustdoc-item-2576"></a>

### `add_component_to_entity`

```rust
pub fn add_component_to_entity<T>(self: &mut Self, entity: Entity, component: T) where T: Component + Send;
```

Queues adding a component to an entity.

<a id="rustdoc-item-2577"></a>

### `add_component_adder_to_entity`

```rust
pub fn add_component_adder_to_entity(self: &mut Self, entity: Entity, component_adder: Box<dyn ComponentAdder>);
```

Queues a native component that the caller has already built as a
[`ComponentAdder`](trait.ComponentAdder.md#rustdoc-item-2466).

<a id="rustdoc-item-2578"></a>

### `add_descriptor_component_to_entity`

```rust
pub fn add_descriptor_component_to_entity(self: &mut Self, entity: Entity, component_id: ComponentId, bytes: Vec<u8>);
```

Queues adding an existing runtime component, identified by its
component id and written from `bytes`.

<a id="rustdoc-item-2579"></a>

### `remove_component_from_entity`

```rust
pub fn remove_component_from_entity<T: Component>(self: &mut Self, entity: Entity);
```

Queues removing a component from an entity.

<a id="rustdoc-item-2580"></a>

### `remove_component_by_id`

```rust
pub fn remove_component_by_id(self: &mut Self, entity: Entity, component_id: ComponentId);
```

Queues removing a component selected by its runtime component id.

<a id="rustdoc-item-2581"></a>

### `destroy_entity`

```rust
pub fn destroy_entity(self: &mut Self, entity: Entity);
```

Queues destroying an entity.

<a id="rustdoc-item-2582"></a>

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

<a id="rustdoc-item-2584"></a>

### `execute_create_entity`

```rust
pub(in commands) fn execute_create_entity(world: &mut World, entity: Entity, component_adders: Vec<Box<dyn ComponentAdder>>, descriptor_components: Vec<(ComponentId, Vec<u8>)>) -> Result<(), Vec<CommandError>>;
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

<a id="rustdoc-item-2585"></a>

### `execute_add_descriptor_component`

```rust
pub(in commands) fn execute_add_descriptor_component(world: &mut World, entity: Entity, component_id: ComponentId, bytes: Vec<u8>, errors: &mut Vec<CommandError>);
```

Executes a queued type-erased component addition.

Rejects an entity that no longer exists and a component the entity
already has, then writes the bytes into the entity's component storage.

<a id="rustdoc-item-2587"></a>

### `execute_add_component`

```rust
pub(in commands) fn execute_add_component(world: &mut World, entity: Entity, component_adder: Box<dyn ComponentAdder>, errors: &mut Vec<CommandError>);
```

Executes a queued native component addition.

Moves the entity to a new archetype that includes the component, copying
every component it already has and writing the new one. It runs the same
code as the eager [`World::add_component`](../world/struct.World.md#rustdoc-item-2586), so the checks for an
unregistered type and for a component the entity already has apply here
too.

<a id="rustdoc-item-2588"></a>

### `execute_remove_component`

```rust
pub(in commands) fn execute_remove_component(world: &mut World, entity: Entity, component_id: ComponentId, errors: &mut Vec<CommandError>);
```

Executes a queued component removal.

Moves the entity to a new archetype without the component, or destroys
it when no components are left. It runs the same code as the eager
removal.

<a id="rustdoc-item-2589"></a>

### `execute_destroy_entity`

```rust
pub(in commands) fn execute_destroy_entity(world: &mut World, entity: Entity, errors: &mut Vec<CommandError>);
```

Executes a queued entity destruction.

Records `CommandError::EntityNotFound` when the entity is already gone,
matching the behaviour of the other command executors.

<a id="rustdoc-item-2590"></a>

### `command_error_of`

```rust
pub(in commands) fn command_error_of(entity: Entity, operation: &'static str, component_id: ComponentId, error: WorldError) -> CommandError;
```

Turns the world's error for a refused structural edit into a command
error.

The two executors that add and remove components use it, so a rule that
refuses an edit reports the same way whichever command queued it.

<a id="rustdoc-item-2591"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Default`
