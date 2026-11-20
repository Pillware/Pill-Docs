<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3410"></a>

# Struct `pill_engine_core::ecs::query::ptr::SendPtr`

```rust
pub struct SendPtr<T>;
```

Source: `engine\pill_engine_core\src\ecs\query\ptr.rs:37`

Thread-safe wrapper around a `*const T` that lets worker threads read
storage they do not own.

The wrapper stores an address and nothing else, so copying or moving it is
harmless. Only dereferencing it needs `unsafe`, and the query code that
dereferences it guarantees the address is valid and nobody writes the same
row at the same time.

## Fields

<a id="rustdoc-item-3970"></a>

### `0`

```rust
0: *const T
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-3972"></a>

### `new`

```rust
pub fn new(pointer: *const T) -> Self;
```

Wraps a raw read-only pointer in a [`SendPtr`](#rustdoc-item-3410).

<a id="rustdoc-item-3973"></a>

### `as_ptr`

```rust
pub fn as_ptr(self: &Self) -> *const T;
```

Returns the wrapped raw read-only pointer.

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
- `Clone`
- `Copy`
- `Send`
- `Sync`
