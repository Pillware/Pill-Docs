<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-441"></a>

# Struct `pill_physics::events::ContactForce`

```rust
pub struct ContactForce;
```

Source: `extensions\pill_physics\pill_physics\src\events.rs:52`

The force a contact carried, which is what breaks a crate or triggers a
sound.

## Fields

<a id="rustdoc-item-437"></a>

### `entity_a`

```rust
entity_a: pill_engine::Entity
```

The first of the two entities.

<a id="rustdoc-item-438"></a>

### `entity_b`

```rust
entity_b: pill_engine::Entity
```

The second of the two entities.

<a id="rustdoc-item-439"></a>

### `magnitude`

```rust
magnitude: f32
```

The largest force the contact carried, in newtons.

<a id="rustdoc-item-440"></a>

### `direction`

```rust
direction: [f32; 3]
```

The world direction the largest force pointed in, as a unit vector.

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
