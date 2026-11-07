<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1605"></a>

# Module `pill_core::telemetry::capture`

Source: `engine\pill_core\src\telemetry\capture.rs:1`

Bounded in-process log capture for the editor console.
Bounded in-process log capture for the editor console.

## Responsibilities

- [`LogBuffer`]: a clonable handle to a bounded ring of owned log lines.
- [`CaptureLayer`]: a tracing layer that copies each event into the ring.

## Design

The ring is bounded by line count: once it is full, the oldest lines are
dropped first. Every line carries a sequence number that only goes up, so
a reader asks for just the lines it has not seen yet
([`LogBuffer::since`]). An event is formatted before it reaches the ring,
so no caller ever holds the lock while it formats text.

Every line holds owned strings, never anything borrowed from a loaded
module. That is what lets the editor shell - itself a reloadable module -
read lines that another module logged before it unloaded.

## Module contents

### Structs
- [`CaptureLayer`](struct.CaptureLayer.md#rustdoc-item-1672) — A tracing layer that copies events at or above a level into a
- [`LogBuffer`](struct.LogBuffer.md#rustdoc-item-1631) — A clonable handle to a bounded ring of captured log lines.
- [`LogLine`](struct.LogLine.md#rustdoc-item-1574) — One captured log line, with its own copy of every string.
- [`Ring`](struct.Ring.md#rustdoc-item-1609) — The ring's contents, guarded by the mutex inside the shared handle.

### Functions
- [`level_value`](fn.level_value.md#rustdoc-item-1702) — Returns the number [`LogLine::level`] stores for a logging level: 1 trace

### Constants
- [`DEFAULT_CAPTURE_CAPACITY`](constant.DEFAULT_CAPTURE_CAPACITY.md#rustdoc-item-1569) — The number of lines a ring keeps when the caller does not choose a size.
