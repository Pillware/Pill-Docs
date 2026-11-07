<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-8663"></a>

# Module `pill_engine_core::world::ticks`

Visibility: `{'restricted': {'parent': 8658, 'path': '::world'}}` · Source: `engine\pill_engine_core\src\world\ticks.rs:1`

Change detection: the world's tick counter and each system's baseline.

## Responsibilities

- Owns the world tick counter that every component write is stamped with.
- Answers what "since my last run" means for the system that is running
  now: the baseline that `Changed<T>` and `Added<T>` compare against.

## Design

A component instance carries two ticks of its own, `added` and `changed`.
They are kept in a separate list beside the component's data, at the same
index as the entity's row. A write through a mutable query sets `changed`
to the tick of the current run. Nothing in this file keeps per-row
bookkeeping.

A filter therefore needs only two numbers: the tick of the current run,
and the tick at which the calling system last ran. The second one is the
baseline that `Changed<T>` and `Added<T>` compare against.

The baseline comes from one of two places. In sequential execution it is
the `system_last_run` field on `World`, which is set before each system
runs. Two systems running at the same time in a parallel batch need
different baselines, and one shared field would race, so the engine
installs the value in a thread-local before each system runs. Every
thread then reads the value installed for its own system, and no two
threads share a cell.

The tick is a `u32` that wraps: after `u32::MAX` the next one is 0.
Comparisons such as `Tick::is_newer_than` therefore measure the distance
between two ticks instead of their order, so a wrap changes nothing.
