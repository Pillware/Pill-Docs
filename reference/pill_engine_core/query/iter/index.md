<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6787"></a>

# Module `pill_engine_core::query::iter`

Visibility: `{'restricted': {'parent': 6743, 'path': '::query'}}` · Source: `engine\pill_engine_core\src\query\iter.rs:1`

Sequential and parallel iterators produced by [`Query`](../query/struct.Query.md#rustdoc-item-6939).

## Responsibilities

- Implements [`QueryIterMut`](struct.QueryIterMut.md#rustdoc-item-6797) for sequential, single-threaded iteration.
- Implements [`ParQueryIter`](struct.ParQueryIter.md#rustdoc-item-6842) for parallel iteration on Rayon's thread pool.
- Provides [`BatchStats`](struct.BatchStats.md#rustdoc-item-6751) for inspecting how a parallel run spread its work
  across batches.

## Design

Both iterators work from the query's cached list of matching archetypes. The
sequential iterator visits the archetypes in order; the parallel one cuts the
rows into slices and gives groups of them to Rayon. The component pointers of
the current archetype are cached as raw pointers, so the inner loop does not
look them up in a `HashMap` again.

## Module contents

### Structs
- [`BatchStats`](struct.BatchStats.md#rustdoc-item-6751) — How one parallel iteration spread its work over batches.
- [`ParallelPlan`](struct.ParallelPlan.md#rustdoc-item-6856) — One parallel dispatch's slices and the contiguous groups of them.
- [`ParQueryIter`](struct.ParQueryIter.md#rustdoc-item-6842) — Parallel iterator that runs a query's rows on Rayon's thread pool.
- [`QueryIterMut`](struct.QueryIterMut.md#rustdoc-item-6797) — Sequential iterator for mutable queries.

### Enums
- [`WorkPlan`](enum.WorkPlan.md#rustdoc-item-6853) — How one parallel dispatch runs, decided once per `for_each`.

### Functions
- [`iterator_work_group_count`](fn.iterator_work_group_count.md#rustdoc-item-6938) — Returns how many Rayon tasks one parallel iteration is split into.
- [`run_group`](fn.run_group.md#rustdoc-item-6937) — Walks one work group's slices and returns how many rows it visited.
