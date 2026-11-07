<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7007"></a>

# Module `pill_engine_core::query::query`

Visibility: `{'restricted': {'parent': 6743, 'path': '::query'}}` · Source: `engine\pill_engine_core\src\query\query.rs:1`

The [`Query`](struct.Query.md#rustdoc-item-6939) entry point - holds an exclusive borrow of the [`World`](../../world/struct.World.md#rustdoc-item-2583)
and produces sequential or parallel iterators.

## Responsibilities

- Builds a query from a `&mut World` and caches the archetypes it matches.
- Builds a [`ComponentMask`](../../component/struct.ComponentMask.md#rustdoc-item-617) for the target and one mask pair per filter
  branch, so an archetype that cannot match is skipped.
- Delegates iteration to [`QueryIterMut`](../iter/struct.QueryIterMut.md#rustdoc-item-6797) (sequential) or [`ParQueryIter`](../iter/struct.ParQueryIter.md#rustdoc-item-6842)
  (parallel).

## Design

The query caches the ids of the archetypes it matches, together with the
world's archetype generation at the time of the scan. A later call to
[`iter_mut`](struct.Query.md#rustdoc-item-7022) reuses that list while the generation is
unchanged, and scans again only after archetypes were added or removed.

## Module contents

### Structs
- [`Query`](struct.Query.md#rustdoc-item-6939) — A query over the entities that hold a matching set of components.
