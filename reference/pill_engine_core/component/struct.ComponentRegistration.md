<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2901"></a>

# Struct `pill_engine_core::component::ComponentRegistration`

```rust
pub struct ComponentRegistration;
```

Source: `engine\pill_engine_core\src\component.rs:443`

What one component registration declared about its layout.

Stored per [`ComponentId`](enum.ComponentId.md#rustdoc-item-83) so a later registration of the same component can
be compared with the first. A shared component's record must match, because
two binaries reach one column through it and nothing else proves that they
agree about what a row contains. An ordinary component's record is simply
refreshed; a redefined type is handled by the persistence migration.

This is the layout the type declared, not the layout of the stored column.
[`ColumnLayout`](../archetype/struct.ColumnLayout.md#rustdoc-item-81) describes the column, and
its `schema_hash` is a plain `u64` rather than the `Option` below.

## Fields

<a id="rustdoc-item-2898"></a>

### `size`

```rust
size: usize
```

Byte size of one component value.

<a id="rustdoc-item-2899"></a>

### `align`

```rust
align: usize
```

Byte alignment of one component value.

<a id="rustdoc-item-2900"></a>

### `schema_hash`

```rust
schema_hash: Option<u64>
```

Structural hash over the declared field layout, or `None` when the
component was registered without one (hand-registered or unit types).

## Associated functions and methods

<a id="rustdoc-item-2902"></a>

### `of`

```rust
pub fn of<T: Component>(fields: &[ComponentFieldDescriptor]) -> Self;
```

Builds the layout record for `T` from its declared field descriptors.

An empty `fields` slice records no schema hash rather than the hash of
nothing, so a registration that simply carries no field metadata is not
mistaken for one describing an empty struct.

<a id="rustdoc-item-2903"></a>

### `is_compatible_with`

```rust
pub fn is_compatible_with(self: &Self, other: &Self) -> bool;
```

Whether `other` describes the same memory shape as this layout.

Size and alignment must always agree. The structural hash is compared
only when both records have one: a layout-less registration carries no
evidence either way, and treating its absence as a mismatch would
reject a hand-registered component that is in fact identical.

Size and alignment alone do not prove that two layouts match: `{f32,
f32}` and `{u32, u32}` agree on both and would read each other's rows
wrongly, with no error. That is why the schema hash exists, and why a
shared component should always be registered with its field
descriptors.

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
