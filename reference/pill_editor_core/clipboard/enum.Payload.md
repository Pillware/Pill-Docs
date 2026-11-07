<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-922"></a>

# Enum `pill_editor_core::clipboard::Payload`

```rust
pub enum Payload { ... }
```

Source: `editor\pill_editor_core\src\clipboard.rs:52`

One decoded payload document.

The variant is the document's `kind` member: a copy of an entity, of one
component, of one field value, or of one asset reference.

## Variants

<a id="rustdoc-item-912"></a>

### `Entity`

```rust
Entity
```

One entity, as the components a fresh entity is seeded with.

<a id="rustdoc-item-914"></a>

### `Component`

```rust
Component
```

One component, as the values a paste writes onto an entity.

<a id="rustdoc-item-919"></a>

### `Field`

```rust
Field
```

One field value, carried as its token.

<a id="rustdoc-item-921"></a>

### `Asset`

```rust
Asset
```

One asset reference, by project-relative path.

## Associated functions and methods

<a id="rustdoc-item-923"></a>

### `kind`

```rust
pub fn kind(self: &Self) -> &'static str;
```

Returns the document's kind tag, for messages.

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
