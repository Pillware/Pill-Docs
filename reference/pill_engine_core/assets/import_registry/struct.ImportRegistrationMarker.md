<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-947"></a>

# Struct `pill_engine_core::assets::import_registry::ImportRegistrationMarker`

```rust
pub(crate) struct ImportRegistrationMarker<T>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\assets\import_registry.rs:1356`

The resource whose lifetime is one generation's registration of `T`.

Inserted by [`World::register_imported_asset`](../../ecs/world/struct.World.md#rustdoc-item-826),
so it is claimed by the registering generation like any resource it
registers. The registry holds only a weak reference to `alive`.

## Fields

<a id="rustdoc-item-943"></a>

### `alive`

```rust
alive: std::sync::Arc<()>
```

_No documentation provided._

<a id="rustdoc-item-945"></a>

### `_type`

```rust
_type: std::marker::PhantomData<fn () -> T>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-948"></a>

### `new`

```rust
pub(crate) fn new() -> Self;
```

A marker with a fresh token.

<a id="rustdoc-item-949"></a>

### `alive`

```rust
pub(crate) fn alive(self: &Self) -> Weak<()>;
```

The weak reference a registration holds.

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
- `Resource`
