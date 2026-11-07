<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1817"></a>

# Struct `pill_engine_core::asset_import_registry::ImportRegistrationMarker`

```rust
pub(crate) struct ImportRegistrationMarker<T>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:1350`

The resource whose lifetime is one generation's registration of `T`.

Inserted by [`World::register_imported_asset`](../world/struct.World.md#rustdoc-item-1702),
so it is claimed by the registering generation like any resource it
registers. The registry holds only a weak reference to `alive`.

## Fields

<a id="rustdoc-item-1814"></a>

### `alive`

```rust
alive: std::sync::Arc<()>
```

_No documentation provided._

<a id="rustdoc-item-1816"></a>

### `_type`

```rust
_type: std::marker::PhantomData<fn () -> T>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1818"></a>

### `new`

```rust
pub(crate) fn new() -> Self;
```

A marker with a fresh token.

<a id="rustdoc-item-1819"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Resource`
