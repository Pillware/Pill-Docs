<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1205"></a>

# Struct `pill_engine_core::asset_database::GuidConflict`

```rust
pub struct GuidConflict;
```

Source: `engine\pill_engine_core\src\asset_database.rs:71`

Two paths that claim one guid. The first path keeps it; the second is not
indexed.

The importer refuses the same thing when a source is copied together with
its `.meta`: the copied file needs a guid of its own.

## Fields

<a id="rustdoc-item-1202"></a>

### `guid`

```rust
guid: crate::asset::AssetGuid
```

The guid both paths claim.

<a id="rustdoc-item-1203"></a>

### `kept`

```rust
kept: String
```

The path that keeps the guid.

<a id="rustdoc-item-1204"></a>

### `refused`

```rust
refused: String
```

The path that also claims it and is not indexed.

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
