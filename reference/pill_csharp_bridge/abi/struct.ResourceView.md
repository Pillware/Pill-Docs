<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-175"></a>

# Struct `pill_csharp_bridge::abi::ResourceView`

```rust
pub(crate) struct ResourceView;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\abi.rs:388`

Borrowed view of one resource's bytes, handed to managed code.

This is the resource counterpart of [`ComponentChunk`](struct.ComponentChunk.md#rustdoc-item-160), and it is much
smaller: a resource is a single value, so there is no column to iterate, no
archetype to identify and no per-row tick column. It carries only the
bytes, their width and the invocation the view was issued to.

## Fields

<a id="rustdoc-item-320"></a>

### `data`

```rust
data: *mut u8
```

Pointer to the resource's first byte in engine storage.

<a id="rustdoc-item-321"></a>

### `length`

```rust
length: u32
```

Width of the stored value, for the managed side to check its struct against.

<a id="rustdoc-item-322"></a>

### `scope_token`

```rust
scope_token: u32
```

Token of the managed invocation this view was issued to.

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
