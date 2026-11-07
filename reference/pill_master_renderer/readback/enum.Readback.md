<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1646"></a>

# Enum `pill_master_renderer::readback::Readback`

```rust
pub(crate) enum Readback<T> { ... }
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\readback.rs:51`

What one [`MapState::poll`](struct.MapState.md#rustdoc-item-1645) found.

## Variants

<a id="rustdoc-item-1641"></a>

### `Pending`

```rust
Pending
```

The map has not finished yet. Poll again later.

<a id="rustdoc-item-1643"></a>

### `Done`

```rust
Done
```

The map succeeded and the bytes were decoded.

<a id="rustdoc-item-1644"></a>

### `Failed`

```rust
Failed
```

The map or the read failed. Nothing will arrive for this one.

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
- `Equivalent<K>`
- `WasmNotSendSync`
- `WasmNotSend`
- `WasmNotSync`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
