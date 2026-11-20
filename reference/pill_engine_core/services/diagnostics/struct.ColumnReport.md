<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8599"></a>

# Struct `pill_engine_core::services::diagnostics::ColumnReport`

```rust
pub(in services::diagnostics) struct ColumnReport;
```

Visibility: `{'restricted': {'parent': 8595, 'path': '::services::diagnostics'}}` · Source: `engine\pill_engine_core\src\services\diagnostics.rs:63`

One component column stored in one archetype.

## Fields

<a id="rustdoc-item-8594"></a>

### `component_bit`

```rust
component_bit: Option<u8>
```

The registry bit this component occupies. It is also the bit the
component sets in the owning archetype's mask.

<a id="rustdoc-item-8596"></a>

### `name`

```rust
name: String
```

Registered name of the component.

<a id="rustdoc-item-8597"></a>

### `row_bytes`

```rust
row_bytes: usize
```

Bytes one row of this column occupies.

<a id="rustdoc-item-8598"></a>

### `is_descriptor`

```rust
is_descriptor: bool
```

Whether this column holds rows defined by another language, reached as
raw bytes rather than through a Rust type.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
