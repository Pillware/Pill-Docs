<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-10356"></a>

# Module `pill_engine_core::systems::scheduler`

Source: `engine\pill_engine_core\src\systems\scheduler.rs:1`

Dependency analysis and parallel batch scheduling for system execution.
Works out which systems may run at the same time, and groups them into
parallel batches.

## Responsibilities

- Provides [`SystemAccess`] for declaring what a system reads and writes.
- Builds the conflict matrix and the parallel batches from the registered
  systems' access patterns.
- Tracks when those results need rebuilding, through
  [`SystemScheduler::invalidate`] and [`SystemScheduler::clear`].
- Defines [`TypeKey`], a [`TypeId`] wrapper for callers that key native
  types by identity.

## Design

Each system declares which components and resources it reads and writes.
The scheduler compares every pair of systems, so the cost grows with the
square of the system count (O(n²)). Two systems conflict when one writes
something the other reads or writes. Systems that do not conflict share a
parallel batch. A system that uses [`Commands`](../../ecs/commands/struct.Commands.md#rustdoc-item-2886) needs
exclusive access to the world, so it conflicts with every other system and
always runs alone.

The scheduler keeps no list of systems of its own. The engine owns the
registration records and marks the scheduler stale whenever that list
changes; [`SystemScheduler::ensure_execution_graph`] then rebuilds the
matrix and the batches once from the access patterns it is given, and does
nothing until the next invalidation. So the engine is the only owner of the
system list, and one flag says whether the graph is current.

## Module contents

### Structs
- [`PhaseGraph`](struct.PhaseGraph.md#rustdoc-item-10457) — The conflict matrix and the parallel batches of one batched phase.
- [`SystemAccess`](struct.SystemAccess.md#rustdoc-item-2919) — What a system reads and writes: its component and resource access.
- [`SystemScheduler`](struct.SystemScheduler.md#rustdoc-item-5970) — The conflict matrices and the parallel batches, one graph per batched phase.
- [`TypeKey`](struct.TypeKey.md#rustdoc-item-10309) — Wraps a [`TypeId`] so a native type can be a map key that compares by

### Enums
- [`RunPhase`](enum.RunPhase.md#rustdoc-item-5714) — The phase of the frame a system runs in.
