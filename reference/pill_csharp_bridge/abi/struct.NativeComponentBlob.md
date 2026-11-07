<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-167"></a>

# Struct `pill_csharp_bridge::abi::NativeComponentBlob`

```rust
pub(crate) struct NativeComponentBlob;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\abi.rs:278`

One pinned managed component value supplied to a deferred command.

Managed code pins the data buffer for the complete duration of the call
that consumes the blob.

## Fields

<a id="rustdoc-item-220"></a>

### `component_key`

```rust
component_key: u64
```

Low half of the stable component key that identifies the component
type.

[`components::StableComponentId`](../components/struct.StableComponentId.md#rustdoc-item-219)
owns the key and how it is derived. The key arrives as two halves
because the C ABI has no 128-bit integer.

<a id="rustdoc-item-221"></a>

### `component_key_high`

```rust
component_key_high: u64
```

High half of that key, restored into position by `from_halves`.

<a id="rustdoc-item-222"></a>

### `data`

```rust
data: *const u8
```

Pointer to the managed-pinned component bytes.

<a id="rustdoc-item-223"></a>

### `size`

```rust
size: u32
```

Byte length of the pinned buffer pointed to by `data`.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
