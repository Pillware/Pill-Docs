<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1563"></a>

# Module `pill_core::system_ticks`

Source: `engine\pill_core\src\system_ticks.rs:1`

Per-thread change ticks of the system running on the current thread, shared
by every loaded DLL.
Per-thread change ticks for the system running on the current thread.

## Responsibilities

- Hold, for each thread, the tick its system last ran at and the tick
  reserved for the current run. The engine installs both before it starts
  a system in a parallel batch.
- Let every DLL in the process read the same values.

## Design

The engine writes these values and the system's own code reads them.
`Query` is generic, so a tick read compiles into the project or extension
DLL. A thread-local defined in an rlib would then exist once per DLL, and
a module's system would never see the value the engine installed. These
values live in `pill_core`, which is loaded once per process, so every
DLL shares them, as they share the Rayon pool.

The values are raw `u32` ticks. The world wraps them in its `Tick` when it
reads them. Every accessor is `#[inline(never)]`, so the thread-local it
touches is always the one inside `pill_core.dll`, never a copy inlined
into a caller.

## Module contents

### Functions
- [`last_run_tick`](fn.last_run_tick.md#rustdoc-item-1565) — Returns the tick at which the system on this thread last ran.
- [`replace_last_run_tick`](fn.replace_last_run_tick.md#rustdoc-item-1566) — Replaces this thread's last-run tick and returns the previous value.
- [`replace_this_run_tick`](fn.replace_this_run_tick.md#rustdoc-item-1568) — Replaces this thread's reserved tick and returns the previous value.
- [`this_run_tick`](fn.this_run_tick.md#rustdoc-item-1567) — Returns the tick reserved for the system on this thread.

### Constants
- [`LAST_RUN_TICK`](constant.LAST_RUN_TICK.md#rustdoc-item-1560) — The tick at which the system on this thread last ran. `None` outside a
- [`THIS_RUN_TICK`](constant.THIS_RUN_TICK.md#rustdoc-item-1564) — The tick reserved for the system on this thread. `None` means the
