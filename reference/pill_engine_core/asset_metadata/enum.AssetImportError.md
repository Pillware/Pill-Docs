<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-829"></a>

# Enum `pill_engine_core::asset_metadata::AssetImportError`

```rust
pub enum AssetImportError { ... }
```

Source: `engine\pill_engine_core\src\asset_metadata.rs:373`

Why [`AssetManager::import`](../asset/struct.AssetManager.md#rustdoc-item-1114) did not load an asset.

## Variants

<a id="rustdoc-item-1111"></a>

### `Load`

```rust
Load
```

Reading or decoding the source or its metadata file failed.

<a id="rustdoc-item-1112"></a>

### `PathBoundToOtherGuid`

```rust
PathBoundToOtherGuid
```

The path is already loaded, but not under the guid its metadata file
now holds. Either the file was edited, or the name was taken by an
asset that was added without metadata (`loaded` is then `None`).

<a id="rustdoc-item-1113"></a>

### `DuplicateGuid`

```rust
DuplicateGuid
```

The metadata file's guid already belongs to another live asset of this
type. It is usually a source copied together with its `.meta`.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `ToString`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `From<AssetImportError>`
- `Debug`
- `Error`
- `Display`
- `From<AssetLoadError>`
