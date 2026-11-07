<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4"></a>

# Enum `pill_physics::components::BodyKind`

```rust
pub enum BodyKind { ... }
```

Source: `extensions\pill_physics\pill_physics\src\components.rs:29`

How the simulation is allowed to move a body.

## Variants

<a id="rustdoc-item-0"></a>

### `Dynamic`

```rust
Dynamic
```

The simulation moves it: gravity, forces and contacts decide the pose.

<a id="rustdoc-item-1"></a>

### `Fixed`

```rust
Fixed
```

It never moves. This is static level geometry.

<a id="rustdoc-item-2"></a>

### `KinematicPosition`

```rust
KinematicPosition
```

Game code sets its pose, and it pushes whatever it touches on the way
there.

<a id="rustdoc-item-3"></a>

### `KinematicVelocity`

```rust
KinematicVelocity
```

Game code sets its velocity, and the simulation moves it from there.

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
