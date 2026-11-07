<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2418"></a>

# Enum `pill_engine_core::asset_store::Existing`

```rust
pub(in asset_store) enum Existing { ... }
```

Visibility: `{'restricted': {'parent': 2228, 'path': '::asset_store'}}` · Source: `engine\pill_engine_core\src\asset_store.rs:661`

How a file being placed treats a destination that already exists.

## Variants

<a id="rustdoc-item-2416"></a>

### `Keep`

```rust
Keep
```

Someone else's file is as good as this one: leave it in place.

<a id="rustdoc-item-2417"></a>

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
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
