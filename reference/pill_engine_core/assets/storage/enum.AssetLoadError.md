<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-634"></a>

# Enum `pill_engine_core::assets::storage::AssetLoadError`

```rust
pub enum AssetLoadError { ... }
```

Source: `engine\pill_engine_core\src\assets\storage.rs:134`

Something went wrong while loading an asset.

The asset's source could not be found, read or decoded, or its metadata file
or a standalone document could not be used or written.

## Variants

<a id="rustdoc-item-1388"></a>

### `PathNotFound`

```rust
PathNotFound
```

No pack or directory holds the path.

<a id="rustdoc-item-1389"></a>

### `Read`

```rust
Read
```

The file was found but could not be read.

<a id="rustdoc-item-1391"></a>

### `Utf8`

```rust
Utf8
```

The bytes read are not valid UTF-8 text.

<a id="rustdoc-item-1432"></a>

### `Decode`

```rust
Decode
```

The bytes read do not hold the asset or document they should.

<a id="rustdoc-item-1297"></a>

### `Metadata`

```rust
Metadata
```

The metadata layer cannot read, build or write an asset's metadata
file.

The file does not parse, names another asset type, was written by a
newer format version, or holds settings that do not fit the type.

<a id="rustdoc-item-1437"></a>

### `Write`

```rust
Write
```

Writing a file into the project's asset directory failed.

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
- `From<AssetLoadError>`
- `Debug`
- `Error`
- `Display`
