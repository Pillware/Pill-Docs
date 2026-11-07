<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4158"></a>

# Module `pill_engine_core::engine`

Source: `engine\pill_engine_core\src\engine.rs:1`

System registration, frame execution, and the parallel dispatch of
systems.
System registration, frame processing and parallel dispatch.

## Responsibilities

- Registers systems by name and enables or disables them.
- Runs the frame: the update systems in parallel batches, then the command
  flush, then the post-update systems.
- Limits the frame rate through `set_fps_limit`.
- Measures how long each system takes, for profiling and utilization
  metrics.
- Provides `world()` and `world_mut()` for queries outside the frame.

## Design

The engine owns the [`World`](../world/struct.World.md#rustdoc-item-2583), the [`SystemScheduler`](../scheduler/struct.SystemScheduler.md#rustdoc-item-4266) and the
[`CommandQueue`]. A frame bumps the world tick, runs the update systems
from the scheduler's batches (in parallel on Rayon threads), then applies
the commands the systems queued and runs the post-update systems on the
result. A system that uses [`Commands`](../commands/struct.Commands.md#rustdoc-item-2621) always runs alone, because it
needs exclusive access to the world.

The engine is the only owner of the registered systems, and each record
carries the access pattern the scheduler builds its conflict data from.
Any structural change - a registration, a removal, a clear - marks the
scheduler's graph as out of date; the next frame rebuilds the batches
once, before it dispatches.

## Module contents

### Structs
- [`BatchMember`](struct.BatchMember.md#rustdoc-item-4198) — A batch member's data, as the parallel worker closure sees it.
- [`Engine`](struct.Engine.md#rustdoc-item-2) — The main engine that drives the ECS.
- [`RegisteredSystem`](struct.RegisteredSystem.md#rustdoc-item-4168) — One registered system with its runtime bookkeeping.
- [`SystemOwner`](struct.SystemOwner.md#rustdoc-item-4111) — Says who registered a system: the project, an extension, the renderer or
- [`SystemSnapshot`](struct.SystemSnapshot.md#rustdoc-item-4229) — A read-only snapshot of one registered system.

### Functions
- [`record_system_run`](fn.record_system_run.md#rustdoc-item-4365) — Records what every dispatch path owes a system that just ran.
- [`run_registered_system`](fn.run_registered_system.md#rustdoc-item-4364) — Runs one registered system on the calling thread.
- [`system_zone_color`](fn.system_zone_color.md#rustdoc-item-4363) — The Tracy zone color of a system with this owner.
