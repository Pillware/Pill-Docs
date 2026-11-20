<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8627"></a>

# Struct `pill_engine_core::services::diagnostics::ArchetypeReport`

```rust
pub(in services::diagnostics) struct ArchetypeReport;
```

Visibility: `{'restricted': {'parent': 8595, 'path': '::services::diagnostics'}}` · Source: `engine\pill_engine_core\src\services\diagnostics.rs:81`

One archetype's contribution to the report.

## Fields

<a id="rustdoc-item-8623"></a>

### `component_mask_bits`

```rust
component_mask_bits: u128
```

The archetype's packed component mask. The mask is also the archetype's
identity, so this value names it uniquely.

<a id="rustdoc-item-8624"></a>

### `entity_count`

```rust
entity_count: usize
```

How many entities the archetype currently holds.

<a id="rustdoc-item-8625"></a>

### `columns`

```rust
columns: Vec<ColumnReport>
```

Its columns, ordered by mask bit so they read in the same order as the
mask's set bits.

<a id="rustdoc-item-8626"></a>

### `total_bytes`

```rust
total_bytes: usize
```

Bytes all its columns occupy together.

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
