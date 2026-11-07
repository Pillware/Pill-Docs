<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-633"></a>

# Struct `pill_renderer_api::frame::AssetKey`

```rust
pub struct AssetKey;
```

Source: `rendering\pill_renderer_api\src\frame.rs:208`

The key of one asset, as a frame and a renderer name it.

A key packs the asset's generation in its high 32 bits and its index in the
low 32 bits. A slot that is reused for a new asset gets a new generation, so
a key from before that reuse never equals a key from the live store. A
renderer keys its GPU objects by this value, which is how it notices that an
object was built for an asset that is gone.

The asset layer computes a key from a handle. The contract only carries it,
which is why the type lives here beside the frame rather than with the
store.

## Fields

<a id="rustdoc-item-632"></a>

### `0`

```rust
0: u64
```

_No documentation provided._

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
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `PartialOrd`
- `Ord`
- `Hash`
