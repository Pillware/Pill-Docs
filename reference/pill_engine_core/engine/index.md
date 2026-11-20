<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5715"></a>

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

The engine owns the [`World`](../ecs/world/struct.World.md#rustdoc-item-2848), the [`SystemScheduler`](../systems/scheduler/struct.SystemScheduler.md#rustdoc-item-5970) and the
[`CommandQueue`]. A frame bumps the world tick, runs the update systems
from the scheduler's batches (in parallel on Rayon threads), then applies
the commands the systems queued and runs the post-update systems on the
result. A system that uses [`Commands`](../ecs/commands/struct.Commands.md#rustdoc-item-2886) always runs alone, because it
needs exclusive access to the world.

The engine is the only owner of the registered systems, and each record
carries the access pattern the scheduler builds its conflict data from.
Any structural change - a registration, a removal, a clear - marks the
scheduler's graph as out of date; the next frame rebuilds the batches
once, before it dispatches.

## Module contents

### Structs
- [`BatchMember`](struct.BatchMember.md#rustdoc-item-5760) — A batch member's data, as the parallel worker closure sees it.
- [`Engine`](struct.Engine.md#rustdoc-item-2) — The main engine that drives the ECS.
- [`PlayRefusal`](struct.PlayRefusal.md#rustdoc-item-5866) — Why a play session could not start.
- [`RegisteredSystem`](struct.RegisteredSystem.md#rustdoc-item-5730) — One registered system with its runtime bookkeeping.
- [`SystemCondition`](struct.SystemCondition.md#rustdoc-item-5729) — One `run_if` condition of a registered system.
- [`SystemOptions`](struct.SystemOptions.md#rustdoc-item-5911) — What a registration asks of the schedule, beside the system itself.
- [`SystemOwner`](struct.SystemOwner.md#rustdoc-item-5662) — Says who registered a system: the project, an extension, the renderer or
- [`SystemSnapshot`](struct.SystemSnapshot.md#rustdoc-item-5791) — A read-only snapshot of one registered system.

### Enums
- [`RunMode`](enum.RunMode.md#rustdoc-item-5302) — Whether the frame is being edited or played.

### Functions
- [`conditions_hold`](fn.conditions_hold.md#rustdoc-item-6081) — Whether every `run_if` condition of a system holds.
- [`record_system_run`](fn.record_system_run.md#rustdoc-item-6082) — Records what every dispatch path owes a system that just ran.
- [`run_registered_system`](fn.run_registered_system.md#rustdoc-item-6080) — Runs one registered system on the calling thread.
- [`system_zone_color`](fn.system_zone_color.md#rustdoc-item-6079) — The Tracy zone color of a system with this owner.

### Type aliases
- [`BoxedSystemCondition`](type.BoxedSystemCondition.md#rustdoc-item-5940) — A `run_if` condition once boxed: it evaluates against the world and the
