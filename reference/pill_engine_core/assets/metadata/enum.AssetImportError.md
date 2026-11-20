<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-510"></a>

# Enum `pill_engine_core::assets::metadata::AssetImportError`

```rust
pub enum AssetImportError { ... }
```

Source: `engine\pill_engine_core\src\assets\metadata.rs:373`

Why [`AssetManager::import`](../storage/struct.AssetManager.md#rustdoc-item-605) did not load an asset.

## Variants

<a id="rustdoc-item-1166"></a>

### `Load`

```rust
Load
```

Reading or decoding the source or its metadata file failed.

<a id="rustdoc-item-1170"></a>

### `PathBoundToOtherGuid`

```rust
PathBoundToOtherGuid
```

The path is already loaded, but not under the guid its metadata file
now holds. Either the file was edited, or the name was taken by an
asset that was added without metadata (`loaded` is then `None`).

<a id="rustdoc-item-1174"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `From<AssetImportError>`
- `Debug`
- `Error`
- `Display`
- `From<AssetLoadError>`
