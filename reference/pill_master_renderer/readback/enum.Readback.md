<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1692"></a>

# Enum `pill_master_renderer::readback::Readback`

```rust
pub(crate) enum Readback<T> { ... }
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\modules\runtime\gpu\src\readback.rs:51`

What one [`MapState::poll`](struct.MapState.md#rustdoc-item-1691) found.

## Variants

<a id="rustdoc-item-1687"></a>

### `Pending`

```rust
Pending
```

The map has not finished yet. Poll again later.

<a id="rustdoc-item-1689"></a>

### `Done`

```rust
Done
```

The map succeeded and the bytes were decoded.

<a id="rustdoc-item-1690"></a>

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
