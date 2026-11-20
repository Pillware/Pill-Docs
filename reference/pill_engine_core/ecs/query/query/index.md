<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4037"></a>

# Module `pill_engine_core::ecs::query::query`

Visibility: `{'restricted': {'parent': 3772, 'path': '::ecs::query'}}` · Source: `engine\pill_engine_core\src\ecs\query\query.rs:1`

The [`Query`](struct.Query.md#rustdoc-item-3969) entry point - holds an exclusive borrow of the [`World`](../../world/struct.World.md#rustdoc-item-2848)
and produces sequential or parallel iterators.

## Responsibilities

- Builds a query from a `&mut World` and caches the archetypes it matches.
- Builds a [`ComponentMask`](../../component/struct.ComponentMask.md#rustdoc-item-2638) for the target and one mask pair per filter
  branch, so an archetype that cannot match is skipped.
- Delegates iteration to [`QueryIterMut`](../iter/struct.QueryIterMut.md#rustdoc-item-3826) (sequential) or [`ParQueryIter`](../iter/struct.ParQueryIter.md#rustdoc-item-3872)
  (parallel).

## Design

The query caches the ids of the archetypes it matches, together with the
world's archetype generation at the time of the scan. A later call to
[`iter_mut`](struct.Query.md#rustdoc-item-4052) reuses that list while the generation is
unchanged, and scans again only after archetypes were added or removed.

## Module contents

### Structs
- [`Query`](struct.Query.md#rustdoc-item-3969) — A query over the entities that hold a matching set of components.
