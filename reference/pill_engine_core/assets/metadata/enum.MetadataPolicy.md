<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-501"></a>

# Enum `pill_engine_core::assets::metadata::MetadataPolicy`

```rust
pub enum MetadataPolicy { ... }
```

Source: `engine\pill_engine_core\src\assets\metadata.rs:256`

What [`AssetManager::import`](../storage/struct.AssetManager.md#rustdoc-item-605) does when an asset has no metadata file yet.

## Variants

<a id="rustdoc-item-999"></a>

### `ReadIfPresent`

```rust
ReadIfPresent
```

Build the asset from the request's initial settings and write nothing.

<a id="rustdoc-item-1000"></a>

### `CreateIfMissing`

```rust
CreateIfMissing
```

The same, then write the metadata file beside the source - when the
source is on a writable filesystem. A packed source (every shipping or
web build) behaves as [`Self::ReadIfPresent`](#rustdoc-item-999).

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
