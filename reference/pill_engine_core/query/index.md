<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6743"></a>

# Module `pill_engine_core::query`

Source: `engine\pill_engine_core\src\query\mod.rs:1`

Query system for efficient iteration over entities with specific components.
Queries: iterating the entities that hold a given set of components.

## Responsibilities

- Defines the [`Query`](query/struct.Query.md#rustdoc-item-6939) type as the primary entry point for component iteration.
- Provides [`QueryTarget`](target/trait.QueryTarget.md#rustdoc-item-2754) for data shapes (`&T`, `&mut T`, `Entity`, tuples).
- Provides [`QueryFilter`](filter/trait.QueryFilter.md#rustdoc-item-6508) for predicates (`With`, `Without`, `Changed`, `Added`, `Or`).
- Implements sequential ([`QueryIterMut`]) and parallel ([`ParQueryIter`]) iterators.
- Re-exports [`Res`](resource/struct.Res.md#rustdoc-item-1163) / [`ResMut`](resource/struct.ResMut.md#rustdoc-item-7091) for resource access in systems.

## Design

A query has a target (the data it fetches for each row) and a filter (the
rows it leaves out). The target turns its component ids into one
[`ComponentMask`](../component/struct.ComponentMask.md#rustdoc-item-617). The filter adds
`(include, exclude)` pairs of masks. An archetype passes the filter when it
holds every component in one pair's include mask and none in that pair's
exclude mask. The query yields an archetype only when it passes the target
mask and the filter. A filter with no restrictions adds no pairs, and then
the target mask alone decides.

The target and the filter resolve an archetype's storage once and hand
worker threads raw pointers, so parallel iteration never repeats a lookup.

[`query`](#rustdoc-item-6743) holds [`Query`](query/struct.Query.md#rustdoc-item-6939) itself. The other modules are [`target`],
[`filter`], [`iter`], [`ptr`] (thread-safe raw-pointer wrappers),
[`resource`](../resource/index.md#rustdoc-item-1162) ([`Res`](resource/struct.Res.md#rustdoc-item-1163) and [`ResMut`](resource/struct.ResMut.md#rustdoc-item-7091)), and [`change_detection`] (the `Mut`
smart pointer for tick tracking).

## Examples

```no_run
# use pill_engine::*;
# #[derive(Debug, Clone)] struct Transform { x: f32, y: f32 }
# impl Component for Transform {}
# #[derive(Debug, Clone)] struct Velocity { x: f32, y: f32 }
# impl Component for Velocity {}
// Sequential iteration
fn movement_system(mut query: Query<(&mut Transform, &Velocity)>) {
    for (mut transform, velocity) in query.iter_mut() {
        transform.x += velocity.x * 0.016;
    }
}

// Parallel iteration
fn physics_system(mut query: Query<(&mut Transform, &Velocity)>) {
    query.par_iter_mut().for_each(|(mut transform, velocity)| {
        transform.x += velocity.x * 0.016;
    });
}

// Filter on change detection
fn react(mut query: Query<(Entity, &Transform), Changed<Transform>>) {
    for (entity, transform) in query.iter_mut() { /* ... */ }
}
```

## Module contents

### Modules
- [`change_detection`](change_detection/index.md#rustdoc-item-6499) — [`Mut`](change_detection::Mut) smart pointer with tick-based change
- [`filter`](filter/index.md#rustdoc-item-6588) — The [`QueryFilter`] trait and the filter types the engine provides for
- [`iter`](iter/index.md#rustdoc-item-6787) — Sequential and parallel iterators produced by [`Query`](super::Query).
- [`ptr`](ptr/index.md#rustdoc-item-6941) — Thread-safe raw-pointer wrappers shared by query targets and filters.
- [`query`](query/index.md#rustdoc-item-7007) — The [`Query`] entry point - holds an exclusive borrow of the [`World`]
- [`resource`](resource/index.md#rustdoc-item-7057) — [`Res`] and [`ResMut`] system parameters for resource access in systems.
- [`target`](target/index.md#rustdoc-item-7182) — [`QueryTarget`] trait and built-in implementations for query data shapes.

### Structs
- [`FilteredArchetypeRange`](struct.FilteredArchetypeRange.md#rustdoc-item-6834) — Cached per-archetype state for parallel iteration.

## Re-exports

- [`pub use filter::Added;`](filter/struct.Added.md#rustdoc-item-6509)
- [`pub use filter::Changed;`](filter/struct.Changed.md#rustdoc-item-6450)
- [`pub use filter::Or;`](filter/struct.Or.md#rustdoc-item-6503)
- [`pub use filter::QueryFilter;`](filter/trait.QueryFilter.md#rustdoc-item-6508)
- [`pub use filter::With;`](filter/struct.With.md#rustdoc-item-6520)
- [`pub use filter::Without;`](filter/struct.Without.md#rustdoc-item-6526)
- [`pub use iter::BatchStats;`](iter/struct.BatchStats.md#rustdoc-item-6751)
- [`pub use iter::ParQueryIter;`](iter/struct.ParQueryIter.md#rustdoc-item-6842)
- [`pub use iter::QueryIterMut;`](iter/struct.QueryIterMut.md#rustdoc-item-6797)
- [`pub use query::Query;`](query/struct.Query.md#rustdoc-item-6939)
- [`pub use resource::Res;`](resource/struct.Res.md#rustdoc-item-1163)
- [`pub use resource::ResMut;`](resource/struct.ResMut.md#rustdoc-item-7091)
- [`pub use target::QueryTarget;`](target/trait.QueryTarget.md#rustdoc-item-2754)
