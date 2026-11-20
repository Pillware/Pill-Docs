<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1781"></a>

# Enum `pill_engine_core::assets::store::AssetPackError`

```rust
pub enum AssetPackError { ... }
```

Source: `engine\pill_engine_core\src\assets\store.rs:82`

Why bytes could not be read as an asset pack.

## Variants

<a id="rustdoc-item-1813"></a>

### `NotAPack`

```rust
NotAPack
```

The bytes do not start with [`ASSET_PACK_MAGIC`].

<a id="rustdoc-item-1815"></a>

### `UnsupportedVersion`

```rust
UnsupportedVersion
```

The pack was written in a format version this engine does not read.

<a id="rustdoc-item-1816"></a>

### `Truncated`

```rust
Truncated
```

The index or a file's bytes run past the end of the pack.

<a id="rustdoc-item-1818"></a>

### `InvalidPath`

```rust
InvalidPath
```

An entry's path is not UTF-8.

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
- `Debug`
- `Error`
- `Display`
