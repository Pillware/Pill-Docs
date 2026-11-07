<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-789"></a>

# Enum `pill_engine_core::asset::AssetLoadError`

```rust
pub enum AssetLoadError { ... }
```

Source: `engine\pill_engine_core\src\asset.rs:134`

Something went wrong while loading an asset.

The asset's source could not be found, read or decoded, or its metadata file
or a standalone document could not be used or written.

## Variants

<a id="rustdoc-item-731"></a>

### `PathNotFound`

```rust
PathNotFound
```

No pack or directory holds the path.

<a id="rustdoc-item-732"></a>

### `Read`

```rust
Read
```

The file was found but could not be read.

<a id="rustdoc-item-735"></a>

### `Utf8`

```rust
Utf8
```

The bytes read are not valid UTF-8 text.

<a id="rustdoc-item-782"></a>

### `Decode`

```rust
Decode
```

The bytes read do not hold the asset or document they should.

<a id="rustdoc-item-785"></a>

### `Metadata`

```rust
Metadata
```

The metadata layer cannot read, build or write an asset's metadata
file.

The file does not parse, names another asset type, was written by a
newer format version, or holds settings that do not fit the type.

<a id="rustdoc-item-788"></a>

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
- `Error`
- `Display`
- `From<AssetLoadError>`
