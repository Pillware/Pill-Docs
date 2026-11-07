<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3585"></a>

# Struct `pill_editor_core::editor_state::ResourceFieldView`

```rust
pub struct ResourceFieldView;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:747`

One editable field of a resource.

## Fields

<a id="rustdoc-item-3623"></a>

### `field`

```rust
field: String
```

The field's name, the key a write addresses.

<a id="rustdoc-item-3624"></a>

### `label`

```rust
label: String
```

The row's label.

<a id="rustdoc-item-3625"></a>

### `value`

```rust
value: pill_engine::FieldValue
```

The value, as the row's widget shows it.

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
