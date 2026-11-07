<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3298"></a>

# Struct `pill_engine_core::entity::EntityId`

```rust
pub struct EntityId;
```

Source: `engine\pill_engine_core\src\entity.rs:189`

Stable 128-bit identity of one entity, for references that outlive a run.

An [`Entity`](struct.Entity.md#rustdoc-item-669) names a slot and carries a generation: it is cheap, and it
means nothing to a world that did not issue it, because the slot is reused.
An `EntityId` is what data meant for a later run stores instead - a scene
file, a spawn table, a saved selection - so a reference finds its entity
again after the world is rebuilt and the slots are handed out in a
different order.

The id is random, not derived from the slot. A slot-derived id would name
whoever took that slot next, so a stale reference would address the wrong
entity instead of nothing. The world assigns one when it creates the
entity, unless the creator supplies one, and indexes the id in both
directions.

## Examples

```
# use pill_engine::*;
# let mut world = World::new();
let entity = world.create_entity().build().unwrap();
let id = world.entity_id(entity).expect("the entity has one");
assert_eq!(world.entity_by_id(id), Some(entity));
```

## Fields

<a id="rustdoc-item-4422"></a>

### `0`

```rust
0: u128
```

_No documentation provided._

## Associated functions and methods

<a id="rustdoc-item-4424"></a>

### `new`

```rust
pub const fn new(value: u128) -> Self;
```

Wraps an id a file or a spawn table already recorded.

<a id="rustdoc-item-4425"></a>

### `from_name`

```rust
pub const fn from_name(name: &str) -> Self;
```

Derives an id from a name, with the same hash the engine uses for shared
component identities.

This is what the world falls back to when it cannot mint a random id -
after four id collisions, or when the platform has no random source.
The result is unique per name and can be derived again from that name.

<a id="rustdoc-item-4426"></a>

### `value`

```rust
pub const fn value(self: Self) -> u128;
```

Returns the id as its raw 128-bit number.

<a id="rustdoc-item-4427"></a>

### `random`

```rust
pub fn random() -> Result<Self, getrandom::Error>;
```

Creates a new id from the operating system's random source.

#### Errors

Returns the `getrandom` error when the platform has no usable random
source. The world then falls back to counter-derived ids and logs the
failure.

<a id="rustdoc-item-4428"></a>

### `parse`

```rust
pub fn parse(text: &str) -> Option<Self>;
```

Parses a 32-digit hexadecimal id, in either letter case, or returns
`None` for any other text. This is the form
[`Display`](std::fmt::Display) writes.

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
- `DeserializeOwned`
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
- `PartialOrd`
- `Ord`
- `Hash`
- `Display`
- `Serialize`
- `Deserialize<'de>`
