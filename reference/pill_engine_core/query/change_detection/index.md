<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6499"></a>

# Module `pill_engine_core::query::change_detection`

Visibility: `crate` · Source: `engine\pill_engine_core\src\query\change_detection.rs:1`

[`Mut`](struct.Mut.md#rustdoc-item-6451) smart pointer with tick-based change
detection for components and resources.
The [`Mut<T>`] handle a query yields for a component or resource it may
change.

## Responsibilities

- Gives mutable access to a component through `DerefMut`, while keeping a
  borrow of the component's [`ComponentTicks`].
- Records the component as changed on every mutable dereference, so a
  [`Changed`](../filter/struct.Changed.md#rustdoc-item-6450) filter run later sees the row.

## Design

A query that asks for `&mut T` yields the row as `Mut<'a, T>` instead of a
plain `&'a mut T`. Reading through `Deref` leaves the row's ticks alone,
so a row only counts as changed once something is written. Writing through
`DerefMut` sets [`ComponentTicks::changed`] to the tick of the current run.
That store is per row and needs no locking: the scheduler never runs two
systems that write the same component at the same time.

## Module contents

### Structs
- [`Mut`](struct.Mut.md#rustdoc-item-6451) — Mutable, change-tracking access to one component (or resource) row.
