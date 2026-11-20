<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-105"></a>

# Enum `pill_engine_core::assets::metadata::MetadataSource`

```rust
pub enum MetadataSource { ... }
```

Source: `engine\pill_engine_core\src\assets\metadata.rs:295`

Where an imported asset's guid and settings came from.

## Variants

<a id="rustdoc-item-1066"></a>

### `ReadFromFile`

```rust
ReadFromFile
```

An existing metadata file, packed or on disk.

<a id="rustdoc-item-1067"></a>

### `CreatedOnDisk`

```rust
CreatedOnDisk
```

No file existed; this import wrote one.

<a id="rustdoc-item-1068"></a>

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
