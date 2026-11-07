<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1756"></a>

# Struct `pill_csharp_bridge::parallel::ManagedStatePointer`

```rust
pub(in parallel) struct ManagedStatePointer;
```

Visibility: `{'restricted': {'parent': 1752, 'path': '::parallel'}}` · Source: `csharp\pill_csharp_bridge\src\parallel.rs:64`

The managed caller's state pointer, wrapped so it can be sent to Rayon
workers.

## Fields

<a id="rustdoc-item-1755"></a>

### `0`

```rust
0: *mut std::ffi::c_void
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-1757"></a>

### `pointer`

```rust
pub(in parallel) fn pointer(self: Self) -> *mut c_void;
```

Returns the wrapped pointer, which is passed straight back to the
managed callback.

The caller reads it through this method on purpose. An edition-2021
closure that reads `state.0` directly captures only the raw pointer,
which is neither `Send` nor `Sync`. A method call captures the whole
wrapper, which is both.

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
