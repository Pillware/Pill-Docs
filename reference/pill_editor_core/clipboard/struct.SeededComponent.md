<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-911"></a>

# Struct `pill_editor_core::clipboard::SeededComponent`

```rust
pub struct SeededComponent;
```

Source: `editor\pill_editor_core\src\clipboard.rs:93`

One component in a payload: its type name and the fields it carried.

## Fields

<a id="rustdoc-item-960"></a>

### `type_name`

```rust
type_name: String
```

Registered component type name. This name, not a registry id, is the
key that survives a reload.

<a id="rustdoc-item-961"></a>

### `fields`

```rust
fields: Vec<(String, String)>
```

Each field's name and its token value, in the component's layout order.

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
