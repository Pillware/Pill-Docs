<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-7182"></a>

# Module `pill_engine_core::query::target`

Visibility: `{'restricted': {'parent': 6743, 'path': '::query'}}` · Source: `engine\pill_engine_core\src\query\target.rs:1`

[`QueryTarget`](trait.QueryTarget.md#rustdoc-item-2754) trait and built-in implementations for query data shapes.

## Responsibilities

- Defines the [`QueryTarget`](trait.QueryTarget.md#rustdoc-item-2754) trait that determines what data a query yields per row.
- Implements `QueryTarget` for `&T`, `&mut T`, [`Entity`](../../entity/struct.Entity.md#rustdoc-item-669), and tuples of these.
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
- [`MutFetchState`](struct.MutFetchState.md#rustdoc-item-7140) — The state a mutable component query keeps for one archetype. It holds a

### Traits
- [`QueryTarget`](trait.QueryTarget.md#rustdoc-item-2754) — Trait for fetching components from archetypes.

### Functions
- [`declared_shared_schema`](fn.declared_shared_schema.md#rustdoc-item-7209) — Returns `T`'s component id together with the schema hash `T` declares, or
- [`find_aliasing_component`](fn.find_aliasing_component.md#rustdoc-item-7210) — Returns the first component that a target writes twice or both reads and

### Macros
- [`impl_query_target_tuple`](macro.impl_query_target_tuple.md#rustdoc-item-7208) — Implements `QueryTarget` for tuples up to arity 5, e.g.
