<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7968"></a>

# Struct `pill_engine_core::scheduler::TypeKey`

```rust
pub struct TypeKey;
```

Source: `engine\pill_engine_core\src\scheduler.rs:46`

Wraps a [`TypeId`] so a native type can be a map key that compares by
identity.

## Fields

<a id="rustdoc-item-7967"></a>

### `0`

```rust
0: std::any::TypeId
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-7969"></a>

### `of`

```rust
pub fn of<T: 'static>() -> Self;
```

Builds the [`TypeKey`](#rustdoc-item-7968) for a given type `T`.

<a id="rustdoc-item-7970"></a>

### `type_id`

```rust
pub fn type_id(self: Self) -> TypeId;
```

Returns the underlying [`TypeId`].

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
- `PartialOrd`
- `Ord`
