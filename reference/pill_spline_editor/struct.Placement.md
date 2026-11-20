<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-133"></a>

# Struct `pill_spline_editor::Placement`

```rust
pub(crate) struct Placement;
```

Visibility: `crate` · Source: `extensions\pill_spline\modules\editor\src\pill_spline_editor.rs:503`

An entity's transform, as the tool reads it: the spline's own space to the
world and back.

The maths is written once here so every hook agrees about where a point is,
and a spline under a rotated or scaled entity moves as one piece.

## Fields

<a id="rustdoc-item-129"></a>

### `translation`

```rust
translation: pill_core::math::Vector3f
```

_No documentation provided._

<a id="rustdoc-item-131"></a>

### `rotation`

```rust
rotation: [f32; 4]
```

_No documentation provided._

<a id="rustdoc-item-132"></a>

### `scale`

```rust
scale: pill_core::math::Vector3f
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-134"></a>

### `of`

```rust
pub(crate) fn of(world: &World, entity: Entity) -> Placement;
```

The placement of `entity`, or the identity when it has no transform.

<a id="rustdoc-item-135"></a>

### `to_world`

```rust
pub(crate) fn to_world(self: &Self, point: Vector3f) -> [f32; 3];
```

A place in the spline's own space, in world space.

<a id="rustdoc-item-136"></a>

### `to_world_direction`

```rust
pub(crate) fn to_world_direction(self: &Self, direction: Vector3f) -> Vector3f;
```

A direction in the spline's own space, in world space.

Only the rotation applies: a direction has no place, and scaling it
would turn a tangent's length into a measurement of the entity.

<a id="rustdoc-item-137"></a>

### `to_local`

```rust
pub(crate) fn to_local(self: &Self, point: [f32; 3]) -> Vector3f;
```

A place in world space, back in the spline's own space.

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
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
