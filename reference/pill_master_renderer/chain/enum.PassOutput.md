<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-338"></a>

# Enum `pill_master_renderer::chain::PassOutput`

```rust
pub(crate) enum PassOutput<'a> { ... }
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:56`

Where a pass writes.

## Variants

<a id="rustdoc-item-335"></a>

### `Surface`

```rust
Surface
```

The frame's own surface, which is the image the caller presents.

<a id="rustdoc-item-337"></a>

### `Offscreen`

```rust
Offscreen
```

An offscreen colour target, by the name the chain gave it.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Clone`
- `Copy`
