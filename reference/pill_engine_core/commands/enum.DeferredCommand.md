<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2477"></a>

# Enum `pill_engine_core::commands::DeferredCommand`

```rust
pub(in commands) enum DeferredCommand { ... }
```

Visibility: `{'restricted': {'parent': 2476, 'path': '::commands'}}` · Source: `engine\pill_engine_core\src\commands.rs:199`

A structural edit that waits in the queue for the flush to apply it.

## Variants

<a id="rustdoc-item-2531"></a>

### `CreateEntity`

```rust
CreateEntity
```

Create a new entity carrying native and type-erased components.

<a id="rustdoc-item-2534"></a>

### `AddComponentToEntity`

```rust
AddComponentToEntity
```

Add a native component to an existing entity.

<a id="rustdoc-item-2538"></a>

### `AddDescriptorComponentToEntity`

```rust
AddDescriptorComponentToEntity
```

Add a type-erased runtime component to an existing entity.

<a id="rustdoc-item-2541"></a>

### `RemoveComponentFromEntity`

```rust
RemoveComponentFromEntity
```

Remove a component from an existing entity.

<a id="rustdoc-item-2543"></a>

### `DestroyEntity`

```rust
DestroyEntity
```

Destroy an entity entirely.

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
