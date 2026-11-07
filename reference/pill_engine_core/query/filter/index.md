<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6588"></a>

# Module `pill_engine_core::query::filter`

Visibility: `{'restricted': {'parent': 6743, 'path': '::query'}}` · Source: `engine\pill_engine_core\src\query\filter.rs:1`

The [`QueryFilter`](trait.QueryFilter.md#rustdoc-item-6508) trait and the filter types the engine provides for
deciding which entities a query yields.

## Responsibilities

- Defines the [`QueryFilter`](trait.QueryFilter.md#rustdoc-item-6508) trait that layers row-level predicates on queries.
- Implements [`With`](struct.With.md#rustdoc-item-6520) / [`Without`](struct.Without.md#rustdoc-item-6526) for archetype-level component scoping.
- Implements [`Changed`](struct.Changed.md#rustdoc-item-6450) / [`Added`](struct.Added.md#rustdoc-item-6509) for per-entity change-detection filtering.
- Implements [`Or`](struct.Or.md#rustdoc-item-6503) for logical-OR composition of multiple filters.

## Design

Filters produce `(include, exclude)` component-id pairs that the query
turns into masks. An archetype matches a pair when it holds every include
and none of the excludes. `With<T>` adds `T` to the include set, and
`Without<T>` adds `T` to the exclude set. `Changed<T>` and `Added<T>`
compare the ticks stored for each row against the baseline the calling
system recorded on its last run. `Or` produces several pairs, and an
archetype matches it when any one of them passes.

## Module contents

### Structs
- [`Added`](struct.Added.md#rustdoc-item-6509) — Row filter that yields only the entities whose `T` was added since the
- [`Changed`](struct.Changed.md#rustdoc-item-6450) — Row filter that yields only the entities whose `T` changed (or was added)
- [`Or`](struct.Or.md#rustdoc-item-6503) — A logical OR over a tuple of filters: a row matches when at least one
- [`TickFilterState`](struct.TickFilterState.md#rustdoc-item-6528) — Per-archetype state that `Changed<T>` and `Added<T>` use to test one row
- [`With`](struct.With.md#rustdoc-item-6520) — Archetype filter that yields only the rows whose archetype contains `T`.
- [`Without`](struct.Without.md#rustdoc-item-6526) — Archetype filter that yields only the rows whose archetype does not

### Traits
- [`QueryFilter`](trait.QueryFilter.md#rustdoc-item-6508) — Trait for predicates that decide which entities a query yields beyond

### Functions
- [`and_filter_pairs`](fn.and_filter_pairs.md#rustdoc-item-6742) — Combines the filter pairs of several filters with AND.

### Macros
- [`impl_query_filter_or`](macro.impl_query_filter_or.md#rustdoc-item-6741)
- [`impl_query_filter_tuple`](macro.impl_query_filter_tuple.md#rustdoc-item-6716)
