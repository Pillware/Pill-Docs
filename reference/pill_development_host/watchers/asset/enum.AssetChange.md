<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4235"></a>

# Enum `pill_development_host::watchers::asset::AssetChange`

```rust
pub(crate) enum AssetChange { ... }
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\watchers\asset.rs:60`

One source asset's change, worked out from the files on disk.

## Variants

<a id="rustdoc-item-4230"></a>

### `Edited`

```rust
Edited
```

The source or its metadata file was created or edited: import it, or
reimport it when it is loaded.

<a id="rustdoc-item-4232"></a>

### `SourceRemoved`

```rust
SourceRemoved
```

The source file is gone.

<a id="rustdoc-item-4234"></a>

### `MetadataRemoved`

```rust
MetadataRemoved
```

The metadata file is gone while its source remains.

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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
