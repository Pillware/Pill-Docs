<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-809"></a>

# Struct `pill_renderer_api::picking::PickRequest`

```rust
pub struct PickRequest;
```

Source: `rendering\pill_renderer_api\src\picking.rs:70`

One request to find what is under a pixel.

## Fields

<a id="rustdoc-item-1250"></a>

### `id`

```rust
id: u64
```

The id its answer carries.

<a id="rustdoc-item-1251"></a>

### `surface`

```rust
surface: crate::SurfaceId
```

The surface the pixel belongs to.

<a id="rustdoc-item-1252"></a>

### `x`

```rust
x: u32
```

Physical pixels from the surface's left edge.

<a id="rustdoc-item-1253"></a>

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
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
