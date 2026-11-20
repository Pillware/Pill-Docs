<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4700"></a>

# Struct `pill_editor_core::tools::ElementTransform`

```rust
pub struct ElementTransform;
```

Source: `editor\pill_editor_core\src\tools.rs:286`

Where one element is in the world, or where a drag moved it to.

The same three parts the engine's transform component holds, as plain
arrays: a tool reads its component into this shape when it reports an
element, and writes it back when the editor hands it a moved one. The
editor never reads a component's layout itself - the tool owns the mapping
between its data and these plain numbers.

## Fields

<a id="rustdoc-item-10844"></a>

### `translation`

```rust
translation: [f32; 3]
```

The element's place, in world space.

<a id="rustdoc-item-10845"></a>

### `rotation`

```rust
rotation: [f32; 4]
```

The element's orientation, a unit quaternion in `x y z w` order.

<a id="rustdoc-item-10846"></a>

### `scale`

```rust
scale: [f32; 3]
```

The element's scale.

## Associated functions and methods

<a id="rustdoc-item-10847"></a>

### `IDENTITY_ROTATION`

```rust
const IDENTITY_ROTATION: [f32; 4] = _;
```

The rotation that turns nothing.

<a id="rustdoc-item-10848"></a>

### `UNIT_SCALE`

```rust
const UNIT_SCALE: [f32; 3] = _;
```

The scale that resizes nothing.

<a id="rustdoc-item-10849"></a>

### `at`

```rust
pub fn at(translation: [f32; 3]) -> ElementTransform;
```

An unrotated, unscaled transform at `translation`.

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
- `StructuralPartialEq`
- `PartialEq`
