<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2131"></a>

# pill_core API reference

> Crate version: `0.1.0` · Rustdoc JSON format: `57` · Private items: included

Shared core definitions of the Pill engine: the one library every DLL links.

## Responsibilities

- Own the error types every workspace crate uses, built from one semantic
  message definition per leaf variant and rendered as plain or styled text.
- Own the telemetry foundation: the static log targets, the developer log
  macros, the terminal line formatter, the log subscriber builder and the
  metrics recorder.
- Own the platform layer ([`platform`](platform/index.md#rustdoc-item-1206)): clock, log output, futures and
  terminal styling, the only code that differs between native and the web.
- Own the Tracy profiling API (`profile_scope!` and the other `profile_*`
  macros), with its feature gates and no-op fallbacks.
- Own the state that must have one copy per process: the Rayon thread
  pool, the native buffer allocation service and the per-thread change
  ticks (counters that record when each system last ran).
- Provide the plain-data and helper types the DLLs share: inline strings,
  native-backed buffers, slot maps, `PillStyle`, color palettes, math
  aliases and small utilities.
- Re-export the `tracing` and `metrics` macros, so a caller imports every
  telemetry entry point from `pill_core` alone.

## Design

The crate builds both as a `dylib` and as an `rlib`. Every DLL links the
one shared copy, so process-global state has a single instance across the
DLL boundary. A monolithic release-profile build can link everything
statically instead.

The error system lives in [`error`]. A subsystem declares its errors with
`#[engine_error]`, and they combine into [`error::HostError`](error/host/enum.HostError.md#rustdoc-item-248) without
adding text of their own. A renderer turns one semantic message definition
into plain or styled output. The telemetry system lives in [`telemetry`](telemetry/index.md#rustdoc-item-1726)
and [`metrics`](metrics/index.md#rustdoc-item-945).

## Module contents

### Modules
- [`color`](color/index.md#rustdoc-item-4) — Color palettes for debug visualization.
- [`dynamic_buffer`](dynamic_buffer/index.md#rustdoc-item-6) — A growable run of plain (`Copy`) elements in engine-owned native memory.
- [`error`](error/index.md#rustdoc-item-612) — Semantic error system shared by every workspace crate.
- [`fixed_string`](fixed_string/index.md#rustdoc-item-798) — Inline, fixed-capacity strings for plain-data structs.
- [`math`](math/index.md#rustdoc-item-940) — Math type aliases over `glam` and the direction vocabulary.
- [`metrics`](metrics/index.md#rustdoc-item-945) — Metrics recording foundation, gated on the `metrics` feature.
- [`native_buffer`](native_buffer/index.md#rustdoc-item-139) — Engine-owned native buffer allocation, shared by every loaded DLL.
- [`platform`](platform/index.md#rustdoc-item-1206) — The platform layer: clock, log output, futures and terminal styling on
- [`profiling`](profiling/index.md#rustdoc-item-1361) — Tracy profiling API with feature gating and no-op fallbacks.
- [`slot_map`](slot_map/index.md#rustdoc-item-1490) — Generational slot arena for values addressed by stable handles.
- [`style`](style/index.md#rustdoc-item-1559) — `PillStyle` string-styling vocabulary for terminal output.
- [`system_ticks`](system_ticks/index.md#rustdoc-item-1563) — Per-thread change ticks of the system running on the current thread, shared
- [`telemetry`](telemetry/index.md#rustdoc-item-1726) — Telemetry foundation: the log targets, the log filter, the line formatter
- [`utils`](utils/index.md#rustdoc-item-2083) — Small general-purpose helpers shared by Pill crates.

### Macros
- [`define_slot_key`](macro.define_slot_key.md#rustdoc-item-1543) — Defines a typed handle over [`KeyData`], with its constructor, its accessor
- [`dev_error`](macro.dev_error.md#rustdoc-item-2130) — Writes a temporary developer error at `ERROR` level on the `engine::dev`
- [`dev_warn`](macro.dev_warn.md#rustdoc-item-2129) — Writes a temporary developer warning at `WARN` level on the `engine::dev`
- [`log`](macro.log.md#rustdoc-item-2128) — Writes a temporary developer log at `DEBUG` level on the `engine::dev`
- [`profile_error`](macro.profile_error.md#rustdoc-item-2126) — Emits an error message (red) at the current point in the trace.
- [`profile_frame_mark`](macro.profile_frame_mark.md#rustdoc-item-2119) — Marks the end of a frame. Call once per frame loop iteration.
- [`profile_init`](macro.profile_init.md#rustdoc-item-2116) — Creates the shared Tracy client handle. Safe to call more than once.
- [`profile_message`](macro.profile_message.md#rustdoc-item-2124) — Emits a diagnostic message (white) at the current point in the trace.
- [`profile_non_continuous_frame`](macro.profile_non_continuous_frame.md#rustdoc-item-2121) — Begins a non-continuous frame (a one-shot operation, not in a loop).
- [`profile_plot`](macro.profile_plot.md#rustdoc-item-2122) — Emits a data point on a named time-series plot.
- [`profile_plot_config`](macro.profile_plot_config.md#rustdoc-item-2123) — Configures how a plot appears in the Tracy profiler UI.
- [`profile_scope`](macro.profile_scope.md#rustdoc-item-2117) — Creates a scoped CPU profiling zone on the `profile::coarse` lane.
- [`profile_scope_fine`](macro.profile_scope_fine.md#rustdoc-item-2118) — Creates a fine-grained investigative CPU zone on the `profile::fine` lane.
- [`profile_secondary_frame_mark`](macro.profile_secondary_frame_mark.md#rustdoc-item-2120) — Marks the end of a secondary (named) continuous frame.
- [`profile_thread`](macro.profile_thread.md#rustdoc-item-2127) — Sets the display name of the current thread in Tracy.
- [`profile_warn`](macro.profile_warn.md#rustdoc-item-2125) — Emits a warning message (orange) at the current point in the trace.

## Re-exports

- [`pub use dynamic_buffer::DynamicBuffer;`](dynamic_buffer/struct.DynamicBuffer.md#rustdoc-item-9)
- [`pub use fixed_string::FixedString64;`](fixed_string/struct.FixedString64.md#rustdoc-item-795)
- [`pub use fixed_string::FIXED_STRING_64_CAPACITY;`](fixed_string/constant.FIXED_STRING_64_CAPACITY.md#rustdoc-item-796)
- [`pub use style::PillStyle;`](style/trait.PillStyle.md#rustdoc-item-694)
- `pub use tracing;`
- `pub use rayon;`
- `pub use tracing::debug;`
- `pub use tracing::error;`
- `pub use tracing::info;`
- `pub use tracing::span;`
- `pub use tracing::span;`
- `pub use tracing::trace;`
- `pub use tracing::trace_span;`
- `pub use tracing::warn;`
- `pub use ::metrics::counter;`
- `pub use ::metrics::gauge;`
- `pub use ::metrics::histogram;`
- `pub use tracy_client;`
