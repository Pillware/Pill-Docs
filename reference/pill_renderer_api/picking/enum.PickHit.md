<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1293"></a>

# Enum `pill_renderer_api::picking::PickHit`

```rust
pub enum PickHit { ... }
```

Source: `rendering\pill_renderer_api\src\picking.rs:87`

What a pick found.

## Variants

<a id="rustdoc-item-1288"></a>

### `Nothing`

```rust
Nothing
```

Nothing is drawn there, the pixel is outside the surface, or the
renderer could not read the pick buffer back.

<a id="rustdoc-item-1290"></a>

### `Entity`

```rust
Entity
```

The entity whose mesh is nearest at that pixel.

<a id="rustdoc-item-1292"></a>

### `Handle`

```rust
Handle
```

The gizmo handle drawn there.

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
