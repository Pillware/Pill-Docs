<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1312"></a>

# Enum `pill_engine_core::asset_import_registry::ImportChange`

```rust
pub enum ImportChange { ... }
```

Source: `engine\pill_engine_core\src\asset_import_registry.rs:175`

What a call did with the value under a path, including the case where
nothing was there yet.

## Variants

<a id="rustdoc-item-1354"></a>

### `Fresh`

```rust
Fresh
```

Nothing was there: the asset was decoded and added.

<a id="rustdoc-item-1355"></a>

### `AlreadyLoaded`

```rust
AlreadyLoaded
```

The path was already loaded and nothing was decoded.

<a id="rustdoc-item-1356"></a>

### `Replaced`

```rust
Replaced
```

The loaded value was replaced in its slot.

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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
