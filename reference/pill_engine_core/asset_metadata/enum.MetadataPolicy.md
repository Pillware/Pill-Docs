<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1392"></a>

# Enum `pill_engine_core::asset_metadata::MetadataPolicy`

```rust
pub enum MetadataPolicy { ... }
```

Source: `engine\pill_engine_core\src\asset_metadata.rs:256`

What [`AssetManager::import`](../asset/struct.AssetManager.md#rustdoc-item-1114) does when an asset has no metadata file yet.

## Variants

<a id="rustdoc-item-1119"></a>

### `ReadIfPresent`

```rust
ReadIfPresent
```

Build the asset from the request's initial settings and write nothing.

<a id="rustdoc-item-1109"></a>

### `CreateIfMissing`

```rust
CreateIfMissing
```

The same, then write the metadata file beside the source - when the
source is on a writable filesystem. A packed source (every shipping or
web build) behaves as [`Self::ReadIfPresent`](#rustdoc-item-1119).

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
