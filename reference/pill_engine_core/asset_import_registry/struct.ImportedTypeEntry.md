<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1631"></a>

# Struct `pill_engine_core::asset_import_registry::ImportedTypeEntry`

```rust
pub(in asset_import_registry) struct ImportedTypeEntry;
```

Visibility: `{'restricted': {'parent': 1318, 'path': '::asset_import_registry'}}` · Source: `engine\pill_engine_core\src\asset_import_registry.rs:553`

One imported asset type and every live registration of it, newest last.

## Fields

<a id="rustdoc-item-1629"></a>

### `type_name`

```rust
type_name: String
```

The type's metadata type name, owned: a `&'static str` would point
into the registering binary.

<a id="rustdoc-item-1630"></a>

### `registrations`

```rust
registrations: Vec<Registration>
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1632"></a>

### `current`

```rust
pub(in asset_import_registry) fn current(self: &Self) -> Option<&Registration>;
```

The newest registration still alive, which is the one to call.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `CloneToUninit`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToOwned`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
