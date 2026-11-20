<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-346"></a>

# Struct `pill_engine_core::assets::store::AssetPack`

```rust
pub struct AssetPack;
```

Source: `engine\pill_engine_core\src\assets\store.rs:69`

A parsed asset pack: the pack's bytes, and where each file sits in them.

A file is looked up by its `/`-separated path relative to its asset root.

## Fields

<a id="rustdoc-item-1777"></a>

### `bytes`

```rust
bytes: std::borrow::Cow<'static, [u8]>
```

The whole pack, borrowed when embedded in the binary, owned when fetched.

<a id="rustdoc-item-1780"></a>

### `entries`

```rust
entries: std::collections::HashMap<String, (usize, usize)>
```

Each file's byte range within `bytes`, by `/`-separated relative path.

## Associated functions and methods

<a id="rustdoc-item-1782"></a>

### `parse`

```rust
pub fn parse<impl Into<Cow<'static, [u8]>>: Into<Cow<'static, [u8]>>>(bytes: impl Into<Cow<'static, [u8]>>) -> Result<Self, AssetPackError>;
```

Parse a pack, validating its index against its length.

Takes `&'static [u8]` for a pack embedded with `include_bytes!` without
copying it, or `Vec<u8>` for one fetched at runtime.

#### Errors

Returns an [`AssetPackError`](enum.AssetPackError.md#rustdoc-item-1781) when the bytes are not a pack of this
version, or its index does not fit in it.

<a id="rustdoc-item-1783"></a>

### `get`

```rust
pub fn get(self: &Self, path: &str) -> Option<&[u8]>;
```

The bytes of the file at `path` (`/`-separated, relative), if packed.

<a id="rustdoc-item-1784"></a>

### `paths`

```rust
pub fn paths(self: &Self) -> impl Iterator<Item = _>;
```

The relative path of every file in the pack, in no particular order.

<a id="rustdoc-item-1785"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

Number of files in the pack.

<a id="rustdoc-item-1786"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether the pack holds no files.

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
- `Debug`
