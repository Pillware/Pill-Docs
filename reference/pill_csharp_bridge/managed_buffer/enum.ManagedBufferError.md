<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1208"></a>

# Enum `pill_csharp_bridge::managed_buffer::ManagedBufferError`

```rust
pub enum ManagedBufferError { ... }
```

Source: `csharp\pill_csharp_bridge\src\managed_buffer.rs:42`

Why one managed payload could not be fetched.

The variants that report a length carry it, so a caller that logs the
failure and one that returns a typed error both have what they need without
asking the managed side again.

## Variants

<a id="rustdoc-item-1204"></a>

### `LengthOutOfRange`

```rust
LengthOutOfRange
```

The managed side reported a length outside `1..=limit`.

<a id="rustdoc-item-1206"></a>

### `AllocationFailed`

```rust
AllocationFailed
```

The host could not reserve a buffer that long.

<a id="rustdoc-item-1207"></a>

### `CopyFailed`

```rust
CopyFailed
```

The managed side declined to fill the buffer the host offered.

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
