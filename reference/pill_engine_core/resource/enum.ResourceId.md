<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4505"></a>

# Enum `pill_engine_core::resource::ResourceId`

```rust
pub enum ResourceId { ... }
```

Source: `engine\pill_engine_core\src\resource.rs:200`

Identifies one resource type.

This is either the Rust [`TypeId`], or, for a resource that declares
[`Resource::shared_name`](trait.Resource.md#rustdoc-item-7250), a stable identity derived from that name, so
artifacts that compiled the type with different inputs still agree.

`Hash` is written by hand below rather than derived; the impl says why.

## Variants

<a id="rustdoc-item-6364"></a>

### `Native`

```rust
Native
```

Resource identified by its Rust [`TypeId`], which differs between
artifacts that compiled the type with different inputs.

<a id="rustdoc-item-7261"></a>

### `Shared`

```rust
Shared
```

Resource identified by the stable name it declares, which every
artifact computes identically.

## Associated functions and methods

<a id="rustdoc-item-7262"></a>

### `of`

```rust
pub fn of<T: Resource>() -> Self;
```

Returns the [`ResourceId`](#rustdoc-item-4505) identifying the resource type `T`.

For an ordinary resource this is its [`TypeId`]. For one declaring
[`Resource::shared_name`](trait.Resource.md#rustdoc-item-7250) it is the stable identity derived from that
name, so every artifact that links the type produces the same id.

<a id="rustdoc-item-7263"></a>

### `shared_identity`

```rust
pub const fn shared_identity(self: Self) -> Option<u128>;
```

The stable identity behind a shared resource id, if this is one.

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
- `PartialOrd`
- `Ord`
- `Hash`
