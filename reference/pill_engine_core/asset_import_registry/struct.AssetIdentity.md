<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1403"></a>

# Struct `pill_engine_core::asset_import_registry::AssetIdentity`

```rust
pub struct AssetIdentity;
```

Source: `engine\pill_engine_core\src\asset_import_registry.rs:218`

The live asset a handle addresses, as a tool shows it.

## Fields

<a id="rustdoc-item-1408"></a>

### `guid`

```rust
guid: Option<crate::asset::AssetGuid>
```

The asset's guid, when it has one.

<a id="rustdoc-item-1409"></a>

### `name`

```rust
name: Option<String>
```

The asset's name - its path relative to `res` for an imported one -
when it has one.

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
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
