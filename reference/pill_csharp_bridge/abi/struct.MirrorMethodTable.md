<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-13"></a>

# Struct `pill_csharp_bridge::abi::MirrorMethodTable`

```rust
pub(in abi) struct MirrorMethodTable;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:105`

Owned backing store for the mirror-method table exposed to managed code.

## Fields

<a id="rustdoc-item-91"></a>

### `rows`

```rust
rows: Vec<MirrorMethodRow>
```

Rows the copy callback writes out as C-ABI entries.

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
