<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-140"></a>

# Struct `pill_master_renderer::chain::DrawRange`

```rust
pub(crate) struct DrawRange;
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:91`

One run of queue positions a geometry pass records, and which pipeline it
draws them through.

`own_pipeline` is true for the instances the pass's own shader shades. It is
false for the instances no pass in the chain claimed: those draw through the
pipeline their own material carries.

## Fields

<a id="rustdoc-item-404"></a>

### `range`

```rust
range: std::ops::Range<u32>
```

Positions in the frame's sorted queue (also instance indices).

<a id="rustdoc-item-405"></a>

### `own_pipeline`

```rust
own_pipeline: bool
```

Whether the pass's own pipeline draws this run.

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
- `Equivalent<K>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
