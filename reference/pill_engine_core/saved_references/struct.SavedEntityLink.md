<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7616"></a>

# Struct `pill_engine_core::saved_references::SavedEntityLink`

```rust
pub struct SavedEntityLink;
```

Source: `engine\pill_engine_core\src\saved_references.rs:352`

One entity reference a document names, waiting for its entity to exist.

## Fields

<a id="rustdoc-item-7612"></a>

### `entity`

```rust
entity: crate::entity::Entity
```

The entity holding the field.

<a id="rustdoc-item-7613"></a>

### `component`

```rust
component: String
```

The component's registered name.

<a id="rustdoc-item-7614"></a>

### `field`

```rust
field: String
```

The field's name.

<a id="rustdoc-item-7615"></a>

### `id`

```rust
id: crate::entity::EntityId
```

The id the document named.

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
