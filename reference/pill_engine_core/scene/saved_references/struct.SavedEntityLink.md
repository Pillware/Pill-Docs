<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7713"></a>

# Struct `pill_engine_core::scene::saved_references::SavedEntityLink`

```rust
pub struct SavedEntityLink;
```

Source: `engine\pill_engine_core\src\scene\saved_references.rs:352`

One entity reference a document names, waiting for its entity to exist.

## Fields

<a id="rustdoc-item-7709"></a>

### `entity`

```rust
entity: crate::entity::Entity
```

The entity holding the field.

<a id="rustdoc-item-7710"></a>

### `component`

```rust
component: String
```

The component's registered name.

<a id="rustdoc-item-7711"></a>

### `field`

```rust
field: String
```

The field's name.

<a id="rustdoc-item-7712"></a>

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
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
