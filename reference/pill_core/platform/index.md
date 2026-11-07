<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1206"></a>

# Module `pill_core::platform`

Source: `engine\pill_core\src\platform\mod.rs:1`

The platform layer: clock, log output, futures and terminal styling on
native and on the web.
The platform layer: the only code in this crate that differs between native
and the web.

## Responsibilities

- Provide the monotonic clock ([`Instant`]) and the wall-clock time on
  native and on the web.
- Provide the log writers: terminal and file on native, the browser
  console on the web.
- Provide the calls that run a future: block on native, spawn on the web.
- Provide the terminal styling implementation for `&str`: colored on
  native, plain on the web.

## Design

This layer uses plain functions and types, not trait objects. The target is
fixed when the code is compiled, so there is nothing to pick at run time:
the compiler chooses the platform-specific parts.

All `cfg(target_arch = "wasm32")` checks are inside these submodules.
Code above this layer therefore reads the same on every target.

The workspace `clippy.toml` bans `std::time::Instant` (`disallowed-types`)
outside [`clock`]. `Instant::now()` panics on `wasm32-unknown-unknown`, so
code that compiles on native would fail only once the game runs in a
browser.

## Module contents

### Modules
- [`clock`](clock/index.md#rustdoc-item-1121) — Monotonic time and wall-clock time.
- [`futures`](futures/index.md#rustdoc-item-1192) — Running futures: block on native, spawn on the web.
- [`log_output`](log_output/index.md#rustdoc-item-1203) — Where log output goes: terminal and file on native, the console on the web.
- [`styling`](styling/index.md#rustdoc-item-1204) — Terminal styling: colored and bold on native, plain on the web.

## Re-exports

- [`pub use clock::Instant;`](clock/struct.Instant.md#rustdoc-item-1124)
