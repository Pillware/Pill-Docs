<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-701"></a>

# Struct `pill_physics::manager::PhysicsStatistics`

```rust
pub struct PhysicsStatistics;
```

Source: `extensions\pill_physics\modules\runtime\src\manager.rs:83`

A running count of what the simulation did, for logs and tests.

## Fields

<a id="rustdoc-item-698"></a>

### `steps`

```rust
steps: u64
```

Steps run since the manager was created.

<a id="rustdoc-item-699"></a>

### `created_bodies`

```rust
created_bodies: u64
```

Bodies created since the manager was created.

<a id="rustdoc-item-700"></a>

### `dropped_bodies`

```rust
dropped_bodies: u64
```

Bodies dropped since the manager was created.

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
- `Equivalent<K>`
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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
