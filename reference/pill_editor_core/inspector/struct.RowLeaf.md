<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4687"></a>

# Struct `pill_editor_core::inspector::RowLeaf`

```rust
pub struct RowLeaf;
```

Source: `editor\pill_editor_core\src\inspector.rs:281`

One writable leaf of a grouped row.

A leaf is one field, or one element inside a field's array value. A colour
held as `[f32; 4]` writes `SetArrayElement` four times; one held as four
scalar fields writes `SetField` four times. Either way, committing the row
records one step.

## Fields

<a id="rustdoc-item-4684"></a>

### `index`

```rust
index: usize
```

The field's position in the component's field list (the value's, too).

<a id="rustdoc-item-4685"></a>

### `field`

```rust
field: String
```

The field's registered name, which the edit names.

<a id="rustdoc-item-4686"></a>

### `element`

```rust
element: Option<usize>
```

The element inside the field's array value, when the field is one.

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
- `SerializableAny`
- `SimdFrom<T, S>`
- `SimdInto<T, S>`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `IntoEither`
- `Instrument`
- `WithSubscriber`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
