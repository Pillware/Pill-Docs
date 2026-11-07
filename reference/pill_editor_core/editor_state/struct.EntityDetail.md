<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1157"></a>

# Struct `pill_editor_core::editor_state::EntityDetail`

```rust
pub struct EntityDetail;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:296`

The expensive tier of the snapshot, built only for the selected entities.

## Fields

<a id="rustdoc-item-3040"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity this detail describes.

<a id="rustdoc-item-3041"></a>

### `components`

```rust
components: Vec<ComponentView>
```

Every attached component with its current field values.

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
