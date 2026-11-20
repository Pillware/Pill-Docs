<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3772"></a>

# Module `pill_engine_core::ecs::query`

Source: `engine\pill_engine_core\src\ecs\query\mod.rs:1`

Query system for efficient iteration over entities with specific components.
Queries: iterating the entities that hold a given set of components.

## Responsibilities

- Defines the [`Query`] type as the primary entry point for component iteration.
- Provides [`QueryTarget`] for data shapes (`&T`, `&mut T`, `Entity`, tuples).
- Provides [`QueryFilter`] for predicates (`With`, `Without`, `Changed`, `Added`, `Or`).
- Implements sequential ([`QueryIterMut`]) and parallel ([`ParQueryIter`]) iterators.
- Re-exports [`Res`] / [`ResMut`] for resource access in systems.

## Design

A query has a target (the data it fetches for each row) and a filter (the
rows it leaves out). The target turns its component ids into one
[`ComponentMask`](../component/struct.ComponentMask.md#rustdoc-item-2638). The filter adds
`(include, exclude)` pairs of masks. An archetype passes the filter when it
holds every component in one pair's include mask and none in that pair's
exclude mask. The query yields an archetype only when it passes the target
mask and the filter. A filter with no restrictions adds no pairs, and then
the target mask alone decides.

The target and the filter resolve an archetype's storage once and hand
worker threads raw pointers, so parallel iteration never repeats a lookup.

[`query`](#rustdoc-item-3772) holds [`Query`] itself. The other modules are [`target`],
[`filter`], [`iter`], [`ptr`] (thread-safe raw-pointer wrappers),
[`resource`](../resource/index.md#rustdoc-item-4292) ([`Res`] and [`ResMut`]), and [`change_detection`] (the `Mut`
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
- [`change_detection`](change_detection/index.md#rustdoc-item-3528) — [`Mut`](change_detection::Mut) smart pointer with tick-based change
- [`filter`](filter/index.md#rustdoc-item-3617) — The [`QueryFilter`] trait and the filter types the engine provides for
- [`iter`](iter/index.md#rustdoc-item-3816) — Sequential and parallel iterators produced by [`Query`](super::Query).
- [`ptr`](ptr/index.md#rustdoc-item-3971) — Thread-safe raw-pointer wrappers shared by query targets and filters.
- [`query`](query/index.md#rustdoc-item-4037) — The [`Query`] entry point - holds an exclusive borrow of the [`World`]
- [`resource`](resource/index.md#rustdoc-item-4089) — [`Res`] and [`ResMut`] system parameters for resource access in systems.
- [`target`](target/index.md#rustdoc-item-4223) — [`QueryTarget`] trait and built-in implementations for query data shapes.

### Structs
- [`FilteredArchetypeRange`](struct.FilteredArchetypeRange.md#rustdoc-item-3863) — Cached per-archetype state for parallel iteration.

## Re-exports

- [`pub use filter::Added;`](filter/struct.Added.md#rustdoc-item-3538)
- [`pub use filter::Changed;`](filter/struct.Changed.md#rustdoc-item-3479)
- [`pub use filter::Or;`](filter/struct.Or.md#rustdoc-item-3532)
- [`pub use filter::QueryFilter;`](filter/trait.QueryFilter.md#rustdoc-item-3537)
- [`pub use filter::With;`](filter/struct.With.md#rustdoc-item-3549)
- [`pub use filter::Without;`](filter/struct.Without.md#rustdoc-item-3555)
- [`pub use iter::BatchStats;`](iter/struct.BatchStats.md#rustdoc-item-3780)
- [`pub use iter::ParQueryIter;`](iter/struct.ParQueryIter.md#rustdoc-item-3872)
- [`pub use iter::QueryIterMut;`](iter/struct.QueryIterMut.md#rustdoc-item-3826)
- [`pub use query::Query;`](query/struct.Query.md#rustdoc-item-3969)
- [`pub use resource::Res;`](resource/struct.Res.md#rustdoc-item-1772)
- [`pub use resource::ResMut;`](resource/struct.ResMut.md#rustdoc-item-4124)
- [`pub use target::QueryTarget;`](target/trait.QueryTarget.md#rustdoc-item-3019)
- [`pub use target::ReadOnlyQueryTarget;`](target/trait.ReadOnlyQueryTarget.md#rustdoc-item-3416)
