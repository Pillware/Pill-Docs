<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5102"></a>

# Struct `pill_engine_core::ecs::world::EntityRow`

```rust
pub struct EntityRow;
```

Source: `engine\pill_engine_core\src\ecs\world\mod.rs:185`

One live entity and the type names of the components attached to it.

[`World::entity_rows`](struct.World.md#rustdoc-item-5101) returns these for the editor's Hierarchy list. The
type names and the [`Entity`](../entity/struct.Entity.md#rustdoc-item-2687) handle stay the same across hot reloads, which
makes the handle a stable selection identity.

## Fields

<a id="rustdoc-item-5099"></a>

### `entity`

```rust
entity: crate::entity::Entity
```

The live entity handle, generation-tagged.

<a id="rustdoc-item-5100"></a>

### `components`

```rust
components: Vec<String>
```

Registered type names of the components attached to the entity.

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
- `Clone`
- `Debug`
- `StructuralPartialEq`
- `PartialEq`
