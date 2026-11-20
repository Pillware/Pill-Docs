<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2423"></a>

# Struct `pill_engine_core::ecs::archetype::PlannedField`

```rust
pub struct PlannedField;
```

Source: `engine\pill_engine_core\src\ecs\archetype.rs:415`

One instruction in a migration plan.

## Fields

<a id="rustdoc-item-2420"></a>

### `offset`

```rust
offset: usize
```

Byte offset of the field in the new row.

<a id="rustdoc-item-2421"></a>

### `bytes`

```rust
bytes: usize
```

The field's width in the new row, in bytes. A [`FieldSource::Default`](enum.FieldSource.md#rustdoc-item-2383)
writes only its own `len` bytes of that width.

<a id="rustdoc-item-2422"></a>

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
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Equivalent<K>`
- `Debug`
- `Clone`
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
