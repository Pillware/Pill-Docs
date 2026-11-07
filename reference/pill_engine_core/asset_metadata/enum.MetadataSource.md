<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1310"></a>

# Enum `pill_engine_core::asset_metadata::MetadataSource`

```rust
pub enum MetadataSource { ... }
```

Source: `engine\pill_engine_core\src\asset_metadata.rs:295`

Where an imported asset's guid and settings came from.

## Variants

<a id="rustdoc-item-1930"></a>

### `ReadFromFile`

```rust
ReadFromFile
```

An existing metadata file, packed or on disk.

<a id="rustdoc-item-1931"></a>

### `CreatedOnDisk`

```rust
CreatedOnDisk
```

No file existed; this import wrote one.

<a id="rustdoc-item-1932"></a>

### `InMemoryOnly`

```rust
InMemoryOnly
```

No file existed and none was written. The policy did not ask for one,
or the source is not on a writable filesystem. The guid lasts only for
this run.

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
