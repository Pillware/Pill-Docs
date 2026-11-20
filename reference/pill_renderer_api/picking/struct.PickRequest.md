<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-879"></a>

# Struct `pill_renderer_api::picking::PickRequest`

```rust
pub struct PickRequest;
```

Source: `rendering\pill_renderer_api\src\picking.rs:76`

One request to find what is under a pixel.

## Fields

<a id="rustdoc-item-1331"></a>

### `id`

```rust
id: u64
```

The id its answer carries.

<a id="rustdoc-item-1332"></a>

### `surface`

```rust
surface: crate::SurfaceId
```

The surface the pixel belongs to.

<a id="rustdoc-item-1333"></a>

### `x`

```rust
x: u32
```

Physical pixels from the surface's left edge.

<a id="rustdoc-item-1334"></a>

### `y`

```rust
y: u32
```

Physical pixels from the surface's top edge.

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
