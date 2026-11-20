<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-9965"></a>

# Module `pill_engine_core::services`

Source: `engine\pill_engine_core\src\services\mod.rs:1`

The services group: the clock and the input the frame was given, the debug
drawing and the diagnostics a system reports with, and the profiling API.
Its modules keep their old crate-root paths through the re-exports below.
Services: what the engine reads from the outside world and offers to every
system.

## Responsibilities

- Hold the frame's inputs: the clock a frame measures itself with
  ([`time`](time/index.md#rustdoc-item-9918)), and the keys, buttons and gamepads the frame was given
  ([`input`](input/index.md#rustdoc-item-6020)).
- Hold the outputs a system draws with: immediate debug drawing
  ([`debug_draw`](debug_draw/index.md#rustdoc-item-8104)), the gizmo pass that draws on a component's behalf
  ([`gizmos`](gizmos/index.md#rustdoc-item-8697)) and the periodic ECS report ([`diagnostics`](diagnostics/index.md#rustdoc-item-8595)).
- Re-export the profiling API ([`profiling`](profiling/index.md#rustdoc-item-9915)).

## Design

Each module keeps its old crate-root path: the crate re-exports every one of
them (`pub use services::{time, …}` in `lib.rs`), so moving a file into this
group changes no caller - not the facade's glob re-export and not a
`crate::input::Input` path inside the crate.

A service is a resource or a free function, never state the engine owns
privately: a system reads the frame's time and input from the world, and
hands debug drawing to the world so whichever renderer runs can draw it.

## Module contents

### Modules
- [`debug_draw`](debug_draw/index.md#rustdoc-item-8104) — Immediate debug drawing: lines, shapes, labels and gizmo handles. Any
- [`diagnostics`](diagnostics/index.md#rustdoc-item-8595) — A periodic report of ECS state, switched on with
- [`gizmos`](gizmos/index.md#rustdoc-item-8697) — The pass that draws every component's own gizmo, together with the registry
- [`input`](input/index.md#rustdoc-item-6020) — Keyboard, mouse and gamepad state maintained by the engine and read through
- [`profiling`](profiling/index.md#rustdoc-item-9915) — Re-exports the profiling API from `pill_core`.
- [`time`](time/index.md#rustdoc-item-9918) — Frame timing maintained by the engine and read through `Res<Time>`.
