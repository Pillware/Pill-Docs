<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2742"></a>

# Enum `pill_engine_core::ecs::commands::DeferredCommand`

```rust
pub(in ecs::commands) enum DeferredCommand { ... }
```

Visibility: `{'restricted': {'parent': 2741, 'path': '::ecs::commands'}}` · Source: `engine\pill_engine_core\src\ecs\commands.rs:199`

A structural edit that waits in the queue for the flush to apply it.

## Variants

<a id="rustdoc-item-2796"></a>

### `CreateEntity`

```rust
CreateEntity
```

Create a new entity carrying native and type-erased components.

<a id="rustdoc-item-2799"></a>

### `AddComponentToEntity`

```rust
AddComponentToEntity
```

Add a native component to an existing entity.

<a id="rustdoc-item-2803"></a>

### `AddDescriptorComponentToEntity`

```rust
AddDescriptorComponentToEntity
```

Add a type-erased runtime component to an existing entity.

<a id="rustdoc-item-2806"></a>

### `RemoveComponentFromEntity`

```rust
RemoveComponentFromEntity
```

Remove a component from an existing entity.

<a id="rustdoc-item-2808"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
