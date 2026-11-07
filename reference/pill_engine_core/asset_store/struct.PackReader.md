<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2300"></a>

# Struct `pill_engine_core::asset_store::PackReader`

```rust
pub(in asset_store) struct PackReader<'bytes>;
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:190`

A cursor over a pack's index.

## Fields

<a id="rustdoc-item-2298"></a>

### `bytes`

```rust
bytes: &'bytes [u8]
```

_No documentation provided._

<a id="rustdoc-item-2299"></a>

### `position`

```rust
position: usize
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-2301"></a>

### `take`

```rust
pub(in asset_store) fn take(self: &mut Self, length: usize) -> Result<&'bytes [u8], AssetPackError>;
```

The next `length` bytes.

#### Errors

[`AssetPackError::Truncated`](enum.AssetPackError.md#rustdoc-item-2265) when fewer than `length` bytes are left.

<a id="rustdoc-item-2302"></a>

### `u32`

```rust
pub(in asset_store) fn u32(self: &mut Self) -> Result<u32, AssetPackError>;
```

The next little-endian `u32`.

#### Errors

[`AssetPackError::Truncated`](enum.AssetPackError.md#rustdoc-item-2265) when fewer than four bytes are left.

<a id="rustdoc-item-2303"></a>

### `u64`

```rust
pub(in asset_store) fn u64(self: &mut Self) -> Result<u64, AssetPackError>;
```

The next little-endian `u64`.

#### Errors

[`AssetPackError::Truncated`](enum.AssetPackError.md#rustdoc-item-2265) when fewer than eight bytes are left.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
