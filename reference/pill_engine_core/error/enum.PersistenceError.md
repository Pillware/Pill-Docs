<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4834"></a>

# Enum `pill_engine_core::error::PersistenceError`

```rust
pub enum PersistenceError { ... }
```

Source: `engine\pill_engine_core\src\error.rs:839`

Migration failures of persistable component columns.

Raised while moving persisted component data from one schema to another: a
type that is unregistered or ambiguous, a missing deserializer, serializer,
inserter or storage factory, a column that cannot hand its rows to the
destination archetype, or bytes that fail to decode into the new layout.

## Variants

<a id="rustdoc-item-4811"></a>

### `ComponentTypeUnregistered`

```rust
ComponentTypeUnregistered
```

The component type is not registered in the current world.

<a id="rustdoc-item-4814"></a>

### `ComponentTypeAmbiguous`

```rust
ComponentTypeAmbiguous
```

The component type name resolves to more than one registered
component, so migration cannot tell which column owns the rows.

The persistable-registration path removes superseded same-name entries
so this cannot happen. Reaching it means two concurrent peers registered
the name and the collision guard was bypassed.

<a id="rustdoc-item-4816"></a>

### `DeserializerMissing`

```rust
DeserializerMissing
```

No deserializer is registered for the component type.

<a id="rustdoc-item-4818"></a>

### `SerializerMissing`

```rust
SerializerMissing
```

No serializer is registered for the component type.

Migration needs one to carry the entities the incoming generation
spawned during `init` across a rebuilt column, without reading their
bytes through the retiring generation's layout.

<a id="rustdoc-item-4820"></a>

### `InserterMissing`

```rust
InserterMissing
```

No inserter is registered for the component type.

<a id="rustdoc-item-4822"></a>

### `DeserializationFailed`

```rust
DeserializationFailed
```

The persisted bytes could not be decoded into the new schema.

<a id="rustdoc-item-4824"></a>

### `SerializationFailed`

```rust
SerializationFailed
```

A value could not be encoded, and the type's own `Serialize` says why.

The inverse of [`Self::DeserializationFailed`](#rustdoc-item-4822), reported the same way:
the pass records the type as skipped and leaves the world as it found
it, instead of aborting a reload halfway through its transaction.

<a id="rustdoc-item-4826"></a>

### `StorageRemovalFailed`

```rust
StorageRemovalFailed
```

The old component column could not be removed from its archetype.

<a id="rustdoc-item-4828"></a>

### `StorageFactoryMissing`

```rust
StorageFactoryMissing
```

No storage factory is registered for the component.

<a id="rustdoc-item-4830"></a>

### `NativeStorageExpected`

```rust
NativeStorageExpected
```

The component has no native Rust storage to migrate.

<a id="rustdoc-item-4832"></a>

### `ColumnMoveFailed`

```rust
ColumnMoveFailed
```

An unchanged column could not hand its row to the destination.

The cross-archetype migration moves every column it does not rewrite
straight into the destination archetype. A destination that has no
column for one of them, or one whose rows have a different width, is the
registry/storage desync a partly applied reload leaves behind. The
migration reports it instead of leaving the entity split between two
archetypes.

<a id="rustdoc-item-4833"></a>

### `DestinationArchetypeMissing`

```rust
DestinationArchetypeMissing
```

The destination archetype vanished immediately after creation.

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
- `From<PersistenceError>`
