<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8379"></a>

# Struct `pill_engine_core::services::debug_draw::GizmoPoint`

```rust
pub struct GizmoPoint;
```

Source: `engine\pill_engine_core\src\services\debug_draw.rs:211`

One gizmo point handle: a mark drawn on top of everything, pickable by its
handle id, whose size is given in pixels rather than in world units.

A handle that keeps its size on screen stays as easy to hit in a small
viewport as in a large one, which is why the size is pixels.

## Fields

<a id="rustdoc-item-8418"></a>

### `position`

```rust
position: [f32; 3]
```

Where it sits, in world space.

<a id="rustdoc-item-8419"></a>

### `size_pixels`

```rust
size_pixels: f32
```

How wide it draws, in pixels, in every view.

<a id="rustdoc-item-8420"></a>

### `shape`

```rust
shape: GizmoPointShape
```

The silhouette it draws as.

<a id="rustdoc-item-8421"></a>

### `color`

```rust
color: DebugColor
```

Its colour.

<a id="rustdoc-item-8422"></a>

### `handle`

```rust
handle: u32
```

The id a pick of this point reports. It must fit in the low 31 bits,
because a pick sets the top bit to mark a handle.

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
