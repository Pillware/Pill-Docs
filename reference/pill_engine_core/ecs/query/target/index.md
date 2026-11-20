<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4223"></a>

# Module `pill_engine_core::ecs::query::target`

Visibility: `{'restricted': {'parent': 3772, 'path': '::ecs::query'}}` · Source: `engine\pill_engine_core\src\ecs\query\target.rs:1`

[`QueryTarget`](trait.QueryTarget.md#rustdoc-item-3019) trait and built-in implementations for query data shapes.

## Responsibilities

- Defines the [`QueryTarget`](trait.QueryTarget.md#rustdoc-item-3019) trait that determines what data a query yields per row.
- Implements `QueryTarget` for `&T`, `&mut T`, [`Entity`](../../entity/struct.Entity.md#rustdoc-item-2687), and tuples of these.
- Detects an aliasing target - two writes of one component, or a read beside
  a write - at construction time.

## Design

Each implementation reports the components it reads and the components it
writes. A query builds its component mask from that report, and a system
declares the same access to the scheduler. The mask and the declared access
then cannot disagree about what the target touches.

An implementation also builds the state a query keeps for one archetype and
reads one row out of it by index. That state holds raw pointers into
component storage, so the parallel iterator can share it only when it is
`Send + Sync`.

## Module contents

### Structs
- [`MutFetchState`](struct.MutFetchState.md#rustdoc-item-4173) — pointer to the component column, so a row fetch does not look the column up

### Traits
- [`QueryTarget`](trait.QueryTarget.md#rustdoc-item-3019) — Trait for fetching components from archetypes.
- [`ReadOnlyQueryTarget`](trait.ReadOnlyQueryTarget.md#rustdoc-item-3416) — A query target that only ever reads, so a

### Functions
- [`declared_shared_schema`](fn.declared_shared_schema.md#rustdoc-item-4250) — Returns `T`'s component id together with the schema hash `T` declares, or
- [`find_aliasing_component`](fn.find_aliasing_component.md#rustdoc-item-4251) — Returns the first component that a target writes twice or both reads and

### Macros
- [`impl_query_target_tuple`](macro.impl_query_target_tuple.md#rustdoc-item-4249) — Implements `QueryTarget` for tuples up to arity 5, e.g.
- [`impl_read_only_query_target_tuple`](macro.impl_read_only_query_target_tuple.md#rustdoc-item-4221) — Implements [`ReadOnlyQueryTarget`] for tuples whose members all read, so a
