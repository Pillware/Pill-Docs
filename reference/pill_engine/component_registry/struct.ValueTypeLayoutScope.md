<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-318"></a>

# Struct `pill_engine::component_registry::ValueTypeLayoutScope`

```rust
pub(in component_registry) struct ValueTypeLayoutScope;
```

Visibility: `{'restricted': {'parent': 322, 'path': '::component_registry'}}` · Source: `engine\pill_engine\src\component_registry.rs:451`

Holds this artifact's value types installed as the world's layout resolver.

Restores the previous resolver when it drops, which is the point: an `init`
that unwinds would otherwise leave the world holding a resolver that is a
function pointer into the generation the host just rejected, and the world
would call it after the reload.

## Fields

<a id="rustdoc-item-355"></a>

### `world`

```rust
world: *mut crate::World
```

World whose resolver this scope owns.

Raw because the entry point calls back into the engine between
construction and drop, so no reference to the world can be held for
that whole span.

<a id="rustdoc-item-356"></a>

### `previous_resolver`

```rust
previous_resolver: PreviousLayoutResolvers
```

Resolvers the world held before this scope installed its own.

## Associated functions and methods

<a id="rustdoc-item-357"></a>

### `install`

```rust
pub(in component_registry) fn install(engine: &mut Engine) -> Self;
```

Installs this artifact's resolver and takes responsibility for it.

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
- `Drop`
