<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7651"></a>

# Struct `pill_engine_core::saved_references::SavedEntityLinks`

```rust
pub struct SavedEntityLinks;
```

Source: `engine\pill_engine_core\src\saved_references.rs:372`

The entity references a document holds, resolved in one pass.

A document is read in two steps, because a reference may name an entity
that comes later in the same document. Every entity is created first, and
then the ids are resolved against a world that holds them all. A link whose
id matches no entity names something that was deleted before the document
was written, so it comes back unresolved instead of being silently
cleared.

## Fields

<a id="rustdoc-item-7650"></a>

### `links`

```rust
links: Vec<SavedEntityLink>
```

The links still waiting for their entity.

## Associated functions and methods

<a id="rustdoc-item-7652"></a>

### `push`

```rust
pub fn push(self: &mut Self, entity: Entity, component: &str, field: &str, id: EntityId);
```

Records that `entity`'s `component.field` names the entity `id`.

<a id="rustdoc-item-7653"></a>

### `len`

```rust
pub fn len(self: &Self) -> usize;
```

Returns how many links are waiting.

<a id="rustdoc-item-7654"></a>

### `is_empty`

```rust
pub fn is_empty(self: &Self) -> bool;
```

Returns whether no link is waiting.

<a id="rustdoc-item-7655"></a>

### `resolve`

```rust
pub fn resolve(self: Self, world: &mut World) -> (usize, Vec<SavedEntityLink>);
```

Writes every link into its field.

Returns how many links were written, and the links that stayed
unresolved. A link stays unresolved when its id names no entity, and
also when the field refuses the write, because the document named a
reference the world could not take.

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
- `Default`
- `Clone`
