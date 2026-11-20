<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5460"></a>

# Struct `pill_engine_core::hot_reload::persistence::components::SelectiveMigrationReport`

```rust
pub struct SelectiveMigrationReport;
```

Source: `engine\pill_engine_core\src\hot_reload\persistence\components.rs:76`

What selective migration did.

[`World::migrate_changed_persistable_components`](../../../ecs/world/struct.World.md#rustdoc-item-5458) returns one of these: the
number of component types it migrated, the number of rows, and the types it
had to skip.

## Fields

<a id="rustdoc-item-6889"></a>

### `migrated_type_count`

```rust
migrated_type_count: usize
```

Number of component types that were migrated.

<a id="rustdoc-item-6890"></a>

### `migrated_entity_count`

```rust
migrated_entity_count: usize
```

Number of rows migrated across all changed types. An entity whose two
component types both changed is counted twice.

<a id="rustdoc-item-6891"></a>

### `skipped_types`

```rust
skipped_types: Vec<SkippedType>
```

Types that could not be migrated selectively, with the reason.

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `Debug`
- `Default`
