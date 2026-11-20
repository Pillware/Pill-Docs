<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9918"></a>

# Module `pill_engine_core::services::time`

Source: `engine\pill_engine_core\src\services\time.rs:1`

Frame timing maintained by the engine and read through `Res<Time>`.
Frame timing, maintained by the engine and readable from any system.

## Responsibilities

- Defines [`Time`], the engine-owned clock resource.
- Tracks the time elapsed since startup, how long the previous frame took
  and how far this frame should advance the simulation.

## Design

[`Time`] is inserted by [`Engine::new`](../../engine/struct.Engine.md#rustdoc-item-2103) and
advanced at the top of every frame, before any system runs. Systems read it
through `Res<Time>`.

[`Engine::process_frame`](../../engine/struct.Engine.md#rustdoc-item-5392) advances the
clock itself instead of running a registered system. A "time system" would
only run ahead of the systems that read the clock if every project
registered it first. The scheduler fills its parallel batches in
registration order (see [`ensure_execution_graph`](../../systems/scheduler/struct.SystemScheduler.md#rustdoc-item-9964)),
so a project that registered a time system late would leave the systems
before it reading the previous frame's values. Advancing the clock outside
the system set makes every system in a frame see the same values, whatever
order the systems were registered in.

## Module contents

### Structs
- [`Time`](struct.Time.md#rustdoc-item-4325) — Frame timing for the running project: how long the frame took, how much

### Constants
- [`MAXIMUM_DELTA_SECONDS`](constant.MAXIMUM_DELTA_SECONDS.md#rustdoc-item-9917) — Largest delta the clock will report, in seconds.
