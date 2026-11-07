<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-377"></a>

# Enum `pill_master_renderer::chain::PassSlot`

```rust
pub(crate) enum PassSlot { ... }
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\chain.rs:68`

A pass's GPU object, or the reason there is none.

## Variants

<a id="rustdoc-item-373"></a>

### `Drawable`

```rust
Drawable
```

Built and ready to record: a pipeline of its own, for the target it
writes.

<a id="rustdoc-item-374"></a>

### `Unshaded`

```rust
Unshaded
```

A geometry pass with no shader of its own. Each instance draws through
the pipeline its own material names, so nothing is built for the pass;
this is what the built-in chain uses.

<a id="rustdoc-item-376"></a>

### `Unsupported`

```rust
Unsupported
```

Cannot be recorded, carrying the reason the log reports.

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
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
