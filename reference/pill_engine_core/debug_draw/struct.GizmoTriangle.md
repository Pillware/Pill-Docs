<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3830"></a>

# Struct `pill_engine_core::debug_draw::GizmoTriangle`

```rust
pub struct GizmoTriangle;
```

Source: `engine\pill_engine_core\src\debug_draw.rs:175`

One gizmo triangle, drawn on top of everything and pickable by its handle
id.

## Fields

<a id="rustdoc-item-3827"></a>

### `corners`

```rust
corners: [[f32; 3]; 3]
```

Its corners, in world space.

<a id="rustdoc-item-3828"></a>

### `color`

```rust
color: DebugColor
```

Its colour.

<a id="rustdoc-item-3829"></a>

### `handle`

```rust
handle: u32
```

The id a pick of this triangle reports. It must fit in the low 31 bits,
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
