<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1970"></a>

# Enum `pill_engine_core::assets::store::Existing`

```rust
pub(in assets::store) enum Existing { ... }
```

Visibility: `{'restricted': {'parent': 1779, 'path': '::assets::store'}}` · Source: `engine\pill_engine_core\src\assets\store.rs:661`

How a file being placed treats a destination that already exists.

## Variants

<a id="rustdoc-item-1968"></a>

### `Keep`

```rust
Keep
```

Someone else's file is as good as this one: leave it in place.

<a id="rustdoc-item-1969"></a>

### `Refuse`

```rust
Refuse
```

A create must never replace one: report the collision.

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
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
