<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2958"></a>

# Struct `pill_editor_core::editor_state::EntityPickTarget`

```rust
pub struct EntityPickTarget;
```

Source: `editor\pill_editor_core\src\editor_state\mod.rs:262`

The field an armed entity reference row waits for a scene click to name,
together with the entity it belongs to.

## Fields

<a id="rustdoc-item-2955"></a>

### `entity`

```rust
entity: pill_engine::Entity
```

The entity the field belongs to.

<a id="rustdoc-item-2956"></a>

### `component`

```rust
component: String
```

Registered component type name.

<a id="rustdoc-item-2957"></a>

### `field`

```rust
field: String
```

Field name.

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
- `Equivalent<K>`
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
- `Eq`
