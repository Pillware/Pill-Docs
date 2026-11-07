<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1684"></a>

# Enum `pill_master_renderer::readback::MapOutcome`

```rust
pub(crate) enum MapOutcome { ... }
```

Visibility: `crate` · Source: `extensions\pill_master_renderer\pill_master_renderer\src\readback.rs:66`

What the device's map callback reported.

## Variants

<a id="rustdoc-item-1681"></a>

### `Pending`

```rust
Pending
```

The map is still under way.

<a id="rustdoc-item-1682"></a>

### `Mapped`

```rust
Mapped
```

The buffer is mapped and readable.

<a id="rustdoc-item-1683"></a>

### `Failed`

```rust
Failed
```

The device refused to map the buffer.

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
- `Copy`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
