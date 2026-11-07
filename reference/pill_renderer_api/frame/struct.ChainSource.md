<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-759"></a>

# Struct `pill_renderer_api::frame::ChainSource`

```rust
pub struct ChainSource;
```

Source: `rendering\pill_renderer_api\src\frame.rs:298`

What a frame's resolved pass chain was read from: the two values that, when
either moves, mean the chain has to be resolved again.

## Fields

<a id="rustdoc-item-757"></a>

### `revision`

```rust
revision: u64
```

The asset manager's revision when the chain was resolved.

<a id="rustdoc-item-758"></a>

### `pipeline`

```rust
pipeline: Option<AssetKey>
```

Key of the pipeline asset the chain came from, when one is selected.

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
