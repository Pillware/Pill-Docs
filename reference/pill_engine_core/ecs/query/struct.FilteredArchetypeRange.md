<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3863"></a>

# Struct `pill_engine_core::ecs::query::FilteredArchetypeRange`

```rust
pub(crate) struct FilteredArchetypeRange<TargetState, FilterState>;
```

Visibility: `crate` · Source: `engine\pill_engine_core\src\ecs\query\mod.rs:95`

Cached per-archetype state for parallel iteration.

One record per matching archetype that holds at least one entity, built
once per `par_iter_mut` call. It keeps the target and filter state resolved
for that archetype, and the number of rows they were resolved against.

## Fields

<a id="rustdoc-item-4266"></a>

### `target_state`

```rust
target_state: TargetState
```

Cached storage pointers this target resolved for the archetype.

<a id="rustdoc-item-4267"></a>

### `filter_state`

```rust
filter_state: FilterState
```

Cached state the row filter needs for this archetype.

<a id="rustdoc-item-4268"></a>

### `entity_count`

```rust
entity_count: usize
```

Rows in the archetype when the states were built.

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
