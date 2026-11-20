<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4306"></a>

# Struct `pill_engine_core::ecs::resource::RestoreEpoch`

```rust
pub struct RestoreEpoch;
```

Source: `engine\pill_engine_core\src\ecs\resource.rs:267`

A play session's Stop counter, published as a resource.

[`World::restore_epoch`](crate::World::restore_epoch) is the world's own
number, and a system cannot read the world. A manager that mirrors the world
somewhere else - the physics simulation and its rapier world - cannot be
copied into the session and put back either, so it compares this value with
the one it built its mirror against: a value it has not seen means the world
it describes was replaced and the mirror has to be dropped.

The world writes it whenever a restore happens. It is a [`PlayState::Keep`](enum.PlayState.md#rustdoc-item-4294)
resource: putting back the pre-play number would hide the restore it
announces.

## Fields

<a id="rustdoc-item-4366"></a>

### `0`

```rust
0: u64
```

_No documentation provided._

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `Default`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Resource`
