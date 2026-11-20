<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-11240"></a>

# Struct `pill_editor_core::tools::ProjectedElement`

```rust
pub struct ProjectedElement;
```

Source: `editor\pill_editor_core\src\tools.rs:664`

Where one reported element of one frame lands on a scene view's surface.

The editor projects the report itself, because only it knows the view's
camera; the marquee rule then needs no camera at all and is a plain
rectangle test.

## Fields

<a id="rustdoc-item-11236"></a>

### `element`

```rust
element: crate::editor_state::ElementRef
```

The element.

<a id="rustdoc-item-11237"></a>

### `kind`

```rust
kind: String
```

The kind's name, as the tool reported it.

<a id="rustdoc-item-11238"></a>

### `x`

```rust
x: f32
```

Its place on the surface, in that surface's pixels.

<a id="rustdoc-item-11239"></a>

### `y`

```rust
y: f32
```

Its place on the surface, in that surface's pixels.

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
