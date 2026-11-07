<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-669"></a>

# Struct `pill_engine_core::entity::Entity`

```rust
pub struct Entity;
```

Source: `engine\pill_engine_core\src\entity.rs:60`

A handle that names one entity in a [`World`].

The handle is 16 bytes, [`Copy`], and cheap to pass by value. Its
generation counter tells a reused slot apart from the entity that used it
before:

```
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Health(f32);
# impl Component for Health {}
# #[derive(Debug, Clone)] struct Damage(f32);
# impl Component for Damage {}
# let mut world = World::new();
# world.register_component::<Health>();
# world.register_component::<Damage>();
let enemy = world.create_entity().with(Health(100.0)).build().unwrap();
world.destroy_entity(enemy);

let bullet = world.create_entity().with(Damage(10.0)).build().unwrap();

// The destroyed handle is reported as invalid:
assert!(!world.is_entity_valid(enemy));
```

## Fields

<a id="rustdoc-item-4366"></a>

### `id`

```rust
id: u64
```

The numeric id of this entity's slot.

Ids are reused when entities are destroyed, so the id space does not
grow without end. The same id can name different entities over time;
the `generation` field tells them apart.

<a id="rustdoc-item-4367"></a>

### `generation`

```rust
generation: u32
```

The generation of the entity now in this slot.

The world adds one each time the slot is reused. This is what lets a
stale handle - one whose entity was destroyed and whose slot went to a
new entity - be detected. A handle is valid only if both its id and its
generation match the entity now in that slot.

## Associated functions and methods

<a id="rustdoc-item-4368"></a>

### `NULL`

```rust
const NULL: Self = _;
```

A handle that names no entity.

What a reference field holds before it is set and after it is cleared.
Both halves are saturated, which no slot allocation can produce: slot
ids count up from zero and stay far below `u64::MAX`.

<a id="rustdoc-item-4369"></a>

### `is_null`

```rust
pub fn is_null(self: Self) -> bool;
```

Whether this is the [null handle](#rustdoc-item-4368).

<a id="rustdoc-item-4370"></a>

### `from_raw`

```rust
pub const fn from_raw(id: u64, generation: u32) -> Self;
```

Rebuilds a handle from its id and generation.

Callers that stored the pair and check it against the world themselves
use this - the editor's state recovery and saved references, for
example. Until a live entity carries both numbers again,
[`World::is_entity_valid`] answers `false`.

<a id="rustdoc-item-4372"></a>

### `id`

```rust
pub fn id(self: Self) -> u64;
```

Returns the numeric id of this entity's slot.

The id alone is not unique over time, because the slot is reused. Pair
it with [`generation`](Self::generation) to name one entity.

<a id="rustdoc-item-4371"></a>

### `generation`

```rust
pub fn generation(self: Self) -> u32;
```

Returns the generation this handle was issued with.

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
- `ToString`
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
- `Copy`
- `StructuralPartialEq`
- `PartialEq`
- `Eq`
- `Hash`
- `Default`
- `Display`
- `QueryTarget`
