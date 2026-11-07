<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-542"></a>

# Struct `pill_physics::manager::PhysicsStatistics`

```rust
pub struct PhysicsStatistics;
```

Source: `extensions\pill_physics\pill_physics\src\manager.rs:71`

A running count of what the simulation did, for logs and tests.

## Fields

<a id="rustdoc-item-539"></a>

### `steps`

```rust
steps: u64
```

Steps run since the manager was created.

<a id="rustdoc-item-540"></a>

### `created_bodies`

```rust
created_bodies: u64
```

Bodies created since the manager was created.

<a id="rustdoc-item-541"></a>

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
