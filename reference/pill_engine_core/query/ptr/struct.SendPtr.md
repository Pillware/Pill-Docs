<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4417"></a>

# Struct `pill_engine_core::query::ptr::SendPtr`

```rust
pub struct SendPtr<T>;
```

Source: `engine\pill_engine_core\src\query\ptr.rs:37`

Thread-safe wrapper around a `*const T` that lets worker threads read
storage they do not own.

The wrapper stores an address and nothing else, so copying or moving it is
harmless. Only dereferencing it needs `unsafe`, and the query code that
dereferences it guarantees the address is valid and nobody writes the same
row at the same time.

## Fields

<a id="rustdoc-item-6940"></a>

### `0`

```rust
0: *const T
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-6942"></a>

### `new`

```rust
pub fn new(pointer: *const T) -> Self;
```

Wraps a raw read-only pointer in a [`SendPtr`](#rustdoc-item-4417).

<a id="rustdoc-item-6943"></a>

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
- `Send`
- `Sync`
