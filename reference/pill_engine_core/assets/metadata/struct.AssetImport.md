<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1039"></a>

# Struct `pill_engine_core::assets::metadata::AssetImport`

```rust
pub struct AssetImport<T: ImportedAsset>;
```

Source: `engine\pill_engine_core\src\assets\metadata.rs:266`

One request to [`AssetManager::import`](../storage/struct.AssetManager.md#rustdoc-item-605).

## Fields

<a id="rustdoc-item-1036"></a>

### `path`

```rust
path: std::path::PathBuf
```

The source file, relative to the project's asset directory.

<a id="rustdoc-item-1037"></a>

### `policy`

```rust
policy: MetadataPolicy
```

What to do when the source has no metadata file.

<a id="rustdoc-item-1038"></a>

### `initial_settings`

```rust
initial_settings: <T as >::ImportSettings
```

The settings used when no metadata file exists. An existing file's
settings always win over these.

## Associated functions and methods

<a id="rustdoc-item-1040"></a>

### `new`

```rust
pub fn new<impl Into<PathBuf>: Into<PathBuf>>(path: impl Into<PathBuf>, policy: MetadataPolicy) -> Self;
```

A request for `path` with the type's default initial settings.

<a id="rustdoc-item-1041"></a>

### `with_initial_settings`

```rust
pub fn with_initial_settings(self: Self, settings: <T as >::ImportSettings) -> Self;
```

Use `settings` when the source has no metadata file yet.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
