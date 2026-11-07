<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8672"></a>

# Struct `pill_engine_core::world::EntityLocation`

```rust
pub(crate) struct EntityLocation;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\world\mod.rs:94`

Where one entity is stored: its archetype and its row in that archetype.

Maps an [`Entity`](../entity/struct.Entity.md#rustdoc-item-669) handle to the [`Archetype`](../archetype/struct.Archetype.md#rustdoc-item-84) that owns its component
columns, plus the row in that archetype. The world updates it on every
creation, migration and destruction, so a lookup by handle stays O(1).

## Fields

<a id="rustdoc-item-8670"></a>

### `archetype_id`

```rust
archetype_id: crate::archetype::ArchetypeId
```

The archetype that currently stores the entity's components.

<a id="rustdoc-item-8671"></a>

### `index_in_archetype`

```rust
index_in_archetype: usize
```

Row of the entity in the archetype, shared by all of its columns.

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
- `Clone`
- `Copy`
