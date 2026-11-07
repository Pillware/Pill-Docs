<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6974"></a>

# Struct `pill_engine_core::query::ptr::SendPtrMut`

```rust
pub struct SendPtrMut<T>;
```

Source: `engine\pill_engine_core\src\query\ptr.rs:81`

Thread-safe wrapper around a `*mut T` that lets worker threads write
storage they do not own.

As with [`SendPtr`](struct.SendPtr.md#rustdoc-item-4417), the wrapper stores an address and nothing else. The
`*mut` versus `*const` difference only matters where the address is
dereferenced, which needs `unsafe` and relies on the scheduler never
batching two systems that touch the same component.

## Fields

<a id="rustdoc-item-6973"></a>

### `0`

```rust
0: *mut T
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-6975"></a>

### `new`

```rust
pub fn new(pointer: *mut T) -> Self;
```

Wraps a raw mutable pointer in a [`SendPtrMut`](#rustdoc-item-6974).

<a id="rustdoc-item-6976"></a>

### `as_ptr`

```rust
pub fn as_ptr(self: &Self) -> *mut T;
```

Returns the wrapped raw mutable pointer.

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
