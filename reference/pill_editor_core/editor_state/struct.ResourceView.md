<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3535"></a>

# Struct `pill_editor_core::editor_state::ResourceView`

```rust
pub struct ResourceView;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:736`

One editable resource, as the Inspector's resource section shows it.

## Fields

<a id="rustdoc-item-3582"></a>

### `name`

```rust
name: String
```

The resource's stable name, the key a write addresses.

<a id="rustdoc-item-3583"></a>

### `label`

```rust
label: String
```

The section's label.

<a id="rustdoc-item-3584"></a>

### `fields`

```rust
fields: Vec<ResourceFieldView>
```

The editable fields, in row order.

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
- `Default`
- `StructuralPartialEq`
- `PartialEq`
