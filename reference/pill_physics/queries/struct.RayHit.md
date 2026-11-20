<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-854"></a>

# Struct `pill_physics::queries::RayHit`

```rust
pub struct RayHit;
```

Source: `extensions\pill_physics\modules\runtime\src\queries.rs:30`

The closest thing a ray reached.

## Fields

<a id="rustdoc-item-920"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity whose collider the ray reached.

<a id="rustdoc-item-921"></a>

### `distance`

```rust
distance: f32
```

How far along the ray the hit is, in world units.

<a id="rustdoc-item-922"></a>

### `point`

```rust
point: [f32; 3]
```

Where the ray met the shape, in world space.

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
- `MaybeSync`
- `SupersetOf<SS>`
- `Scalar`
- `Same`
- `Downcast`
- `DowncastSend`
- `DowncastSync`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
