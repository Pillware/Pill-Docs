<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4004"></a>

# Struct `pill_engine_core::ecs::query::ptr::SendPtrMut`

```rust
pub struct SendPtrMut<T>;
```

Source: `engine\pill_engine_core\src\ecs\query\ptr.rs:81`

Thread-safe wrapper around a `*mut T` that lets worker threads write
storage they do not own.

As with [`SendPtr`](struct.SendPtr.md#rustdoc-item-3410), the wrapper stores an address and nothing else. The
`*mut` versus `*const` difference only matters where the address is
dereferenced, which needs `unsafe` and relies on the scheduler never
batching two systems that touch the same component.

## Fields

<a id="rustdoc-item-4003"></a>

### `0`

```rust
0: *mut T
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-4005"></a>

### `new`

```rust
pub fn new(pointer: *mut T) -> Self;
```

Wraps a raw mutable pointer in a [`SendPtrMut`](#rustdoc-item-4004).

<a id="rustdoc-item-4006"></a>

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
