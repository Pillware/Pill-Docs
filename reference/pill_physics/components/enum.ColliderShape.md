<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-149"></a>

# Enum `pill_physics::components::ColliderShape`

```rust
pub enum ColliderShape { ... }
```

Source: `extensions\pill_physics\pill_physics\src\components.rs:49`

The shape of a collider, which decides what its dimensions mean.

## Variants

<a id="rustdoc-item-145"></a>

### `Ball`

```rust
Ball
```

A sphere. `dimensions[0]` is the radius.

<a id="rustdoc-item-146"></a>

### `Cuboid`

```rust
Cuboid
```

A box. `dimensions` are the half extents along x, y and z.

<a id="rustdoc-item-147"></a>

### `Capsule`

```rust
Capsule
```

A capsule standing on its y axis. `dimensions[0]` is the half height of
the cylindrical part and `dimensions[1]` is the radius.

<a id="rustdoc-item-148"></a>

### `Cylinder`

```rust
Cylinder
```

A cylinder standing on its y axis, read the same way as a capsule.

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
- `DeserializeOwned`
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
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Default`
- `Serialize`
- `Deserialize<'de>`
