<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-748"></a>

# Struct `pill_physics::manager::StaticColliderState`

```rust
pub(in manager) struct StaticColliderState;
```

Visibility: `{'restricted': {'parent': 697, 'path': '::manager'}}` · Source: `extensions\pill_physics\modules\runtime\src\manager.rs:99`

What a static collider was last placed from, so an edit or a move is
noticed.

## Fields

<a id="rustdoc-item-746"></a>

### `applied`

```rust
applied: crate::components::ColliderComponent
```

The component values the rapier collider holds.

<a id="rustdoc-item-747"></a>

### `pose`

```rust
pose: ([f32; 3], [f32; 4])
```

The transform pose the rapier collider sits at.

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
- `Same`
- `Downcast`
- `DowncastSend`
- `DowncastSync`
- `Debug`
- `Clone`
- `Copy`
