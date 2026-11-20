<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3285"></a>

# Struct `pill_development_host::native_binary::ByteReader`

```rust
pub(in native_binary) struct ByteReader<'a>;
```

Visibility: `{'restricted': {'parent': 3148, 'path': '::native_binary'}}` · Source: `hosting\pill_development_host\src\native_binary.rs:160`

Bounds-checked field reads over an image in its own byte order.

Every read answers `None` instead of panicking when the image is shorter
than the field it would read, so a damaged table ends the parse rather than
the host.

## Fields

<a id="rustdoc-item-3283"></a>

### `bytes`

```rust
bytes: &'a [u8]
```

The whole file, as read from disk.

<a id="rustdoc-item-3284"></a>

### `little_endian`

```rust
little_endian: bool
```

Whether fields are little-endian (`EI_DATA` says so).

## Associated functions and methods

<a id="rustdoc-item-3286"></a>

### `u8`

```rust
pub(in native_binary) fn u8(self: &Self, offset: usize) -> Option<u8>;
```

One byte at `offset`.

<a id="rustdoc-item-3287"></a>

### `u16`

```rust
pub(in native_binary) fn u16(self: &Self, offset: usize) -> Option<u16>;
```

A two-byte field at `offset`.

<a id="rustdoc-item-3288"></a>

### `u32`

```rust
pub(in native_binary) fn u32(self: &Self, offset: usize) -> Option<u32>;
```

A four-byte unsigned field at `offset`.

<a id="rustdoc-item-3289"></a>

### `i32`

```rust
pub(in native_binary) fn i32(self: &Self, offset: usize) -> Option<i32>;
```

A four-byte signed field at `offset`, which is how `d_tag` is spelled.

<a id="rustdoc-item-3290"></a>

### `u64`

```rust
pub(in native_binary) fn u64(self: &Self, offset: usize) -> Option<u64>;
```

An eight-byte unsigned field at `offset`.

<a id="rustdoc-item-3291"></a>

### `i64`

```rust
pub(in native_binary) fn i64(self: &Self, offset: usize) -> Option<i64>;
```

An eight-byte signed field at `offset`.

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
