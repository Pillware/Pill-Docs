<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-325"></a>

# Struct `pill_editor_core::boundary::ShellRect`

```rust
pub struct ShellRect;
```

Source: `editor\pill_editor_core\src\boundary.rs:160`

A rectangle in logical pixels that crosses the boundary: a viewport body,
an overlay region or the IME candidate's place.

## Fields

<a id="rustdoc-item-321"></a>

### `x`

```rust
x: f32
```

Distance from the client area's left edge.

<a id="rustdoc-item-322"></a>

### `y`

```rust
y: f32
```

Distance from the client area's top edge.

<a id="rustdoc-item-323"></a>

### `width`

```rust
width: f32
```

Extent along x.

<a id="rustdoc-item-324"></a>

### `height`

```rust
height: f32
```

Extent along y.

## Associated functions and methods

<a id="rustdoc-item-326"></a>

### `contains`

```rust
pub fn contains(self: &Self, x: f32, y: f32) -> bool;
```

Whether a logical point lies inside the rectangle, edges included.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Copy`
- `Debug`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
