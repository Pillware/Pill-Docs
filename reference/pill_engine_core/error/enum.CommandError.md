<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2568"></a>

# Enum `pill_engine_core::error::CommandError`

```rust
pub enum CommandError { ... }
```

Source: `engine\pill_engine_core\src\error.rs:654`

Error returned when a deferred command cannot be executed.

Command errors are non-fatal by default: the engine logs them and keeps
going. Call `Engine::set_should_exit_on_error(true)` and
`Engine::process_frame` returns every failure to its caller instead.

## Variants

<a id="rustdoc-item-4617"></a>

### `EntityNotFound`

```rust
EntityNotFound
```

The target entity no longer exists in the world.

<a id="rustdoc-item-4621"></a>

### `ComponentWriteFailed`

```rust
ComponentWriteFailed
```

A queued command could not write one of its components.

The component was validated when the command was queued, but the world
can change before the queue is flushed. A hot reload that retires a
component type between a managed `CreateEntity` call and the end of the
frame leaves the queued command naming storage that no longer exists.
The failure is collected as an error instead of panicking, because a
panic here would unwind through the C ABI of a managed project.

<a id="rustdoc-item-4624"></a>

### `DuplicateComponent`

```rust
DuplicateComponent
```

The queued creation listed one component id more than once.

The id set defines the archetype's columns. A duplicate would push two
rows for one entity row, or make the archetype insert panic when it
finds the id already present. The command is refused before the entity
row exists, so a rejected command leaves no partial entity.

<a id="rustdoc-item-4627"></a>

### `ComponentAlreadyExists`

```rust
ComponentAlreadyExists
```

The entity already possesses the component being added.

<a id="rustdoc-item-4630"></a>

### `ComponentNotFound`

```rust
ComponentNotFound
```

The entity does not have the component being removed.

<a id="rustdoc-item-4633"></a>

### `MigrationFailed`

```rust
MigrationFailed
```

A queued structural edit failed inside the world for a reason the flush
has no more specific command error for.

A storage column missing from an archetype, or a column whose layout no
longer matches the manifest, is what a partly applied hot reload leaves
behind. These failures are collected like any other command failure
instead of panicking inside the flush, which for a managed project would
unwind across the C ABI.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Debug`
- `Diagnostic`
- `Error`
- `Display`
- `EngineMessage`
- `From<CommandError>`
