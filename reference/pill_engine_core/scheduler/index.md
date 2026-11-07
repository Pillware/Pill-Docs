<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8013"></a>

# Module `pill_engine_core::scheduler`

Source: `engine\pill_engine_core\src\scheduler.rs:1`

Dependency analysis and parallel batch scheduling for system execution.
Works out which systems may run at the same time, and groups them into
parallel batches.

## Responsibilities

- Provides [`SystemAccess`](struct.SystemAccess.md#rustdoc-item-2654) for declaring what a system reads and writes.
- Builds the conflict matrix and the parallel batches from the registered
  systems' access patterns.
- Tracks when those results need rebuilding, through
  [`SystemScheduler::invalidate`](struct.SystemScheduler.md#rustdoc-item-8065) and [`SystemScheduler::clear`](struct.SystemScheduler.md#rustdoc-item-8067).
- Defines [`TypeKey`](struct.TypeKey.md#rustdoc-item-7968), a [`TypeId`] wrapper for callers that key native
  types by identity.

## Design

Each system declares which components and resources it reads and writes.
The scheduler compares every pair of systems, so the cost grows with the
square of the system count (O(n²)). Two systems conflict when one writes
something the other reads or writes. Systems that do not conflict share a
parallel batch. A system that uses [`Commands`](../commands/struct.Commands.md#rustdoc-item-2621) needs
exclusive access to the world, so it conflicts with every other system and
always runs alone.

The scheduler keeps no list of systems of its own. The engine owns the
registration records and marks the scheduler stale whenever that list
changes; [`SystemScheduler::ensure_execution_graph`](struct.SystemScheduler.md#rustdoc-item-8064) then rebuilds the
matrix and the batches once from the access patterns it is given, and does
nothing until the next invalidation. So the engine is the only owner of the
system list, and one flag says whether the graph is current.

## Module contents

### Structs
- [`SystemAccess`](struct.SystemAccess.md#rustdoc-item-2654) — What a system reads and writes: its component and resource access.
- [`SystemScheduler`](struct.SystemScheduler.md#rustdoc-item-4266) — The conflict matrix and the parallel batches, for the registered systems.
- [`TypeKey`](struct.TypeKey.md#rustdoc-item-7968) — Wraps a [`TypeId`] so a native type can be a map key that compares by
