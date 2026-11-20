<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-206"></a>

# Struct `pill_renderer_api::preview::PreviewImage`

```rust
pub struct PreviewImage;
```

Source: `rendering\pill_renderer_api\src\preview.rs:108`

One preview that came back.

## Fields

<a id="rustdoc-item-1639"></a>

### `id`

```rust
id: u64
```

The id of the request this answers.

<a id="rustdoc-item-1640"></a>

### `width`

```rust
width: u32
```

The image's width in texels.

<a id="rustdoc-item-1641"></a>

### `height`

```rust
height: u32
```

The image's height in texels.

<a id="rustdoc-item-1642"></a>

### `rgba`

```rust
rgba: Vec<u8>
```

Tightly packed RGBA8 rows, top row first.

## Associated functions and methods

<a id="rustdoc-item-1643"></a>

### `refused`

```rust
pub fn refused(id: u64) -> Self;
```

The answer to a request that was taken but could not be drawn: the id,
and no pixels.

Every taken request is answered. A caller that waits for an answer
which never comes - an undecodable file, a frame that drew nothing, a
renderer that was still busy - waits forever, and an editor that asks
one question at a time stops asking. A refusal says "no preview for
this", so the caller forgets the request and takes the next one.

<a id="rustdoc-item-1644"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Whether this answer carries no pixels. Only a refused preview has none.

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
