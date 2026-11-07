<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-399"></a>

# Struct `pill_engine_core::archetype::PlannedField`

```rust
pub struct PlannedField;
```

Source: `engine\pill_engine_core\src\archetype.rs:415`

One instruction in a migration plan.

## Fields

<a id="rustdoc-item-396"></a>

### `offset`

```rust
offset: usize
```

Byte offset of the field in the new row.

<a id="rustdoc-item-397"></a>

### `bytes`

```rust
bytes: usize
```

The field's width in the new row, in bytes. A [`FieldSource::Default`](enum.FieldSource.md#rustdoc-item-360)
writes only its own `len` bytes of that width.

<a id="rustdoc-item-398"></a>

### `source`

```rust
source: FieldSource
```

Where those bytes come from.

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
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
