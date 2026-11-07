<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1121"></a>

# Module `pill_core::platform::clock`

Source: `engine\pill_core\src\platform\clock.rs:1`

Monotonic time and wall-clock time.
Monotonic and wall-clock time on every target.

## Responsibilities

- Define [`Instant`](struct.Instant.md#rustdoc-item-1124), the engine's monotonic timestamp, with the subset of
  the `std::time::Instant` API the engine uses.
- Provide [`unix_time`], the wall-clock time since the Unix epoch.

On native both come from `std::time`. The `std` versions panic on
`wasm32-unknown-unknown`, so there both come from `web-time`, which reads
`performance.now()` and `Date.now()`.

[`Instant`](struct.Instant.md#rustdoc-item-1124) is a newtype, not a re-export. Clippy's `disallowed-types` lint
matches the type behind a name, so a re-export would still be
`std::time::Instant` and every use through it would be reported.

## Module contents

### Structs
- [`Instant`](struct.Instant.md#rustdoc-item-1124) — A monotonic timestamp that works on native and on the web.

### Functions
- [`unix_time`](fn.unix_time.md#rustdoc-item-1188) — The wall-clock time since the Unix epoch, zero if the clock is set before it.

### Type aliases
- [`PlatformInstant`](type.PlatformInstant.md#rustdoc-item-1119)
