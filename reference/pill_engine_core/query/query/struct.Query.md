<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6939"></a>

# Struct `pill_engine_core::query::query::Query`

```rust
pub struct Query<'w, Q: QueryTarget, F: QueryFilter = ()>;
```

Source: `engine\pill_engine_core\src\query\query.rs:67`

A query over the entities that hold a matching set of components.

`Q` is the data fetched for each row, for example
`(Entity, &Transform, &mut Velocity)`. `F` is an optional row filter; the
default, `()`, accepts every row.

## Examples
```no_run
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Transform { x: f32, y: f32 }
# impl Component for Transform {}
# #[derive(Debug, Clone)] struct Velocity { vx: f32, vy: f32 }
# impl Component for Velocity {}
# #[derive(Debug, Clone)] struct Health(f32);
# impl Component for Health {}
# #[derive(Debug, Clone)] struct Enemy;
# impl Component for Enemy {}
# #[derive(Debug, Clone)] struct Frozen;
# impl Component for Frozen {}
// Plain query - data only
fn movement(mut q: Query<(&mut Transform, &Velocity)>) { /* ... */ }

// Filter on change detection
fn react_to_moves(mut q: Query<(Entity, &Transform), Changed<Transform>>) {
    for (e, t) in q.iter_mut() {
        println!("entity {:?} moved to {:?}", e.id(), (t.x, t.y));
    }
}

// With/Without to scope the iteration
fn enemies_only(mut q: Query<&Health, (With<Enemy>, Without<Frozen>)>) {
    /* ... */
}
```

## Fields

<a id="rustdoc-item-7006"></a>

### `world`

```rust
world: &'w mut crate::world::World
```

The world, borrowed exclusively for as long as this query lives.

<a id="rustdoc-item-7008"></a>

### `target_mask`

```rust
target_mask: crate::component::ComponentMask
```

Mask of the components the target fetches. Built once when the query is
constructed, so it is the same for every query with this `Q`.

<a id="rustdoc-item-7009"></a>

### `filter_pairs`

```rust
filter_pairs: Vec<(crate::component::ComponentMask, crate::component::ComponentMask)>
```

One `(include, exclude)` mask pair per branch of the filter, built once
at construction. A filter with no restrictions produces no pair, an
ordinary filter produces one, and [`Or`](../filter/struct.Or.md#rustdoc-item-6503) produces one
per branch.

<a id="rustdoc-item-7010"></a>

### `unresolved_target`

```rust
unresolved_target: Option<crate::component::ComponentId>
```

The first target id the component registry could not resolve, if any.

A component with no registered bit cannot be fetched, so the query
matches no archetype at all. Leaving the bit out of the mask instead
would make the mask less restrictive: an unregistered component would
match archetypes that cannot serve it, and iteration would then panic in
the column lookup.

<a id="rustdoc-item-7011"></a>

### `stale_shared_component`

```rust
stale_shared_component: Option<crate::component::ComponentId>
```

A shared component whose layout this binary declares differently from
the one registered now (see `World::find_stale_shared_reader`).

Reading it would apply this binary's field offsets to rows stored with
the other layout, so the query matches nothing, exactly like an
unresolved target. The world logs the refusal once per component and
declared layout.

<a id="rustdoc-item-7012"></a>

### `filters_unsatisfiable`

```rust
filters_unsatisfiable: bool
```

Whether every filter pair was dropped because its include side held an
unresolved id. No archetype can satisfy a dropped pair, and dropping
them all would leave no restriction at all - `With<T>` for an
unregistered `T` would then match everything - so the query matches
nothing instead.

<a id="rustdoc-item-7013"></a>

### `total_components_size_bytes`

```rust
total_components_size_bytes: usize
```

Total size in bytes of the components the target fetches, but never
less than 8. It sets the entity count of one parallel slice.

<a id="rustdoc-item-7014"></a>

### `cached_matches`

```rust
cached_matches: Vec<crate::archetype::ArchetypeId>
```

Ids of the archetypes this query matches. Valid while the world's
archetype generation still equals `cached_generation`.

<a id="rustdoc-item-7015"></a>

### `cached_generation`

```rust
cached_generation: Option<u64>
```

The world's archetype generation at the last refresh of
`cached_matches`, or `None` before the first refresh. The cache is stale
whenever this differs from the world's generation.

`None` rather than `0` as the "never filled" state, because `0` is also
the generation a fresh world reports.

<a id="rustdoc-item-7016"></a>

### `_phantom`

```rust
_phantom: std::marker::PhantomData<(Q, F)>
```

Keeps the `Q` and `F` type parameters in the struct, which is what
variance and the drop check look at.

## Associated functions and methods

<a id="rustdoc-item-2752"></a>

### `new`

```rust
pub fn new(world: &'w mut World) -> Self;
```

Builds a query over the given world, computing the target and filter
masks once here.

The world stays borrowed exclusively for the query's whole lifetime, so
no other system can mutate it while the query exists. The list of
matching archetypes is built on the first lookup and cached after that
(see `matching_archetype_ids`).

#### Panics

Panics when the target reads and writes the same component, because
iterating such a query would create two overlapping borrows of one row.

#### Examples

```
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Position { x: f32, y: f32 }
# impl Component for Position {}
# #[derive(Debug, Clone)] struct Velocity { x: f32, y: f32 }
# impl Component for Velocity {}
# let mut world = World::new();
# world.register_component::<Position>();
# world.register_component::<Velocity>();
let mut query = Query::<(&Position, &Velocity)>::new(&mut world);
assert_eq!(query.iter_mut().count(), 0);
```

<a id="rustdoc-item-7017"></a>

### `stale_shared_component`

```rust
pub fn stale_shared_component(self: &Self) -> Option<ComponentId>;
```

The shared component this query refused, because this binary declares a
different field layout than the one registered, if any.

A refused query matches nothing; this returns the component that caused
it.

<a id="rustdoc-item-7018"></a>

### `build_target_mask`

```rust
pub(in query::query) fn build_target_mask(world: &World, component_ids: &[ComponentId]) -> Result<ComponentMask, ComponentId>;
```

Builds the target mask from the world's component registry.

Called once from [`new`](#rustdoc-item-2752). A target id with no registered bit
cannot be fetched, and the caller turns that into a query that matches
no archetype.

#### Errors

Returns the first target component id the registry has no bit for.

<a id="rustdoc-item-7019"></a>

### `build_filter_mask_pairs`

```rust
pub(in query::query) fn build_filter_mask_pairs(world: &World, requested_filter_pairs: Vec<(Vec<ComponentId>, Vec<ComponentId>)>) -> (Vec<(ComponentMask, ComponentMask)>, bool);
```

Builds the filter mask pairs from the world's component registry.

Called once from [`new`](#rustdoc-item-2752) with the pairs the filter reported.

Returns the usable pairs, plus whether every requested pair was
dropped. A pair is dropped when an id on its include side is not
registered: no archetype can hold a component that was never
registered. An unresolved id on the exclude side is harmless, because
no archetype can hold that component either.

<a id="rustdoc-item-7020"></a>

### `archetype_matches`

```rust
pub(in query::query) fn archetype_matches(archetype: &Archetype, target_mask: &ComponentMask, filter_pairs: &[(ComponentMask, ComponentMask)]) -> bool;
```

Returns `true` when `archetype` satisfies this query's target mask and
filter.

The target mask must match entirely: the archetype has to hold every
component the query fetches. A filter pair requires all of its include
bits and none of its exclude bits, and the archetype passes when it
satisfies any one pair. Only [`Or`](../filter/struct.Or.md#rustdoc-item-6503) produces more than
one pair, one per branch, so `Or<(With<A>, With<B>)>` becomes two pairs.

<a id="rustdoc-item-7021"></a>

### `matching_archetype_ids`

```rust
pub(in query::query) fn matching_archetype_ids(self: &mut Self) -> &[ArchetypeId];
```

Ids of the archetypes that match this query.

The list is cached together with the world's archetype generation, so it
is scanned again only when archetypes were added or removed since the
last call.

<a id="rustdoc-item-7022"></a>

### `iter_mut`

```rust
pub fn iter_mut(self: &mut Self) -> QueryIterMut<'_, Q, F>;
```

Returns a sequential iterator over the entities this query matches.

Each call increases the world's change tick by one and reads the current
system last-run tick, so change-detection filters such as
[`Changed`](../filter/struct.Changed.md#rustdoc-item-6450) compare against a fresh baseline.

<a id="rustdoc-item-7023"></a>

### `first_non_empty_matching_archetype`

```rust
pub(in query::query) fn first_non_empty_matching_archetype(self: &mut Self) -> Option<ArchetypeId>;
```

The first matching archetype that holds at least one row, in the same
order [`iter_mut`](#rustdoc-item-7022) visits archetypes.

The cached list is copied first, so the borrow of the query ends before
the caller visits archetypes mutably. `first` and `is_empty` both take
their fast path through this lookup, so neither can disagree with
`iter_mut` about which archetypes match or in what order.

<a id="rustdoc-item-7024"></a>

### `matching_row_count`

```rust
pub(in query::query) fn matching_row_count(self: &mut Self) -> usize;
```

Total rows across every matching archetype.

Only called when the filter accepts every row, so this is exactly the
number of entities a full iteration would yield.

<a id="rustdoc-item-7025"></a>

### `first`

```rust
pub fn first(self: &mut Self) -> Option<<Q as >::Item<'_>>;
```

Returns the data of the first entity this query matches, if any.

When the filter accepts every row, this reads the sorted list of
matching archetypes directly, without building an iterator, and visits
them in the same order as [`iter_mut`](#rustdoc-item-7022). With any other
filter it falls back to [`iter_mut`](#rustdoc-item-7022) and returns its
first row.

<a id="rustdoc-item-7026"></a>

### `is_empty`

```rust
pub fn is_empty(self: &mut Self) -> bool;
```

Returns `true` when no entity matches this query.

When the filter accepts every row, this is O(archetypes): it only reads
the row counts of the matching archetypes. With any other filter it asks
the iterator for the first row, so every row test runs.

<a id="rustdoc-item-7027"></a>

### `entity_count`

```rust
pub fn entity_count(self: &mut Self) -> usize;
```

Returns the number of entities matching this query.

When the filter accepts every row (`F::ACCEPTS_ALL`, which `()` sets),
this is O(archetypes): it adds up the row counts without visiting a row.
With any other filter, such as `Changed<T>`, every row has to be tested,
so the cost is O(n).

<a id="rustdoc-item-7028"></a>

### `par_iter_mut`

```rust
pub fn par_iter_mut(self: &mut Self) -> ParQueryIter<'_, Q, F> where <Q as >::State: Send + Sync, <F as >::State: Send + Sync, <Q as >::Item<'a>: Send;
```

Returns a parallel iterator over all matching entities, spreading the
work across the shared Rayon thread pool.

The target state, the filter state and every fetched item must be
[`Send`], so that one archetype can be processed on a worker thread.
Those bounds are on the method signature.

#### Examples

```
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Position { x: f32, y: f32 }
# impl Component for Position {}
# let mut world = World::new();
# world.register_component::<Position>();
# world.create_entity().with(Position { x: 1.0, y: 2.0 }).build().unwrap();
let mut query = Query::<&Position>::new(&mut world);
query.par_iter_mut().for_each(|position| {
    println!("position x = {}", position.x);
});
```

## Trait implementations

- `Borrow<T>`
- `BorrowMut<T>`
- `Into<U>`
- `From<T>`
- `TryInto<U>`
- `TryFrom<U>`
- `Any`
- `Instrument`
- `WithSubscriber`
- `IntoEither`
- `Pointable`
- `OwoColorize`
- `ErasedDestructor`
- `CastableFrom<ST, Uninit, Uninit>`
- `CastableFrom<ST, Initialized, Initialized>`
- `Read<Exclusive, BecauseExclusive>`
- `SystemParam`
