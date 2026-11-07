<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-284"></a>

# Module `pill_player::runtime`

Visibility: `crate` · Source: `hosting\pill_player\src\runtime.rs:1`

Engine ownership and the frame every build runs.
Engine ownership and the frame every build runs.

## Responsibilities

- Own the [`Engine`] at a stable address, and whatever must outlive it.
- Start a statically linked project ([`setup`](fn.setup.md#rustdoc-item-314)).
- Mount a project's asset pack and index it ([`mount_asset_pack`](fn.mount_asset_pack.md#rustdoc-item-551)).
- Run one frame: systems, deferred commands, failure reporting, frame
  statistics ([`Runtime::run_frame_from`](struct.Runtime.md#rustdoc-item-320)).
- Define [`FrameDriver`](trait.FrameDriver.md#rustdoc-item-272), the interface a frontend's loop drives.

## Design

The development host wraps a [`Runtime`](struct.Runtime.md#rustdoc-item-235) and does its reload work around
the frame; a shipping build runs one itself, or the runtime wrapped by the
renderer when it draws. Both reach the same frame code, so a shipped game
runs its systems the same way the game did while it was developed.

## Module contents

### Structs
- [`FrameErrorEntry`](struct.FrameErrorEntry.md#rustdoc-item-383) — What the reporter remembers about one message.
- [`FrameErrorLine`](struct.FrameErrorLine.md#rustdoc-item-385) — One `frame error:` line the reporter decided to log.
- [`FrameErrorReporter`](struct.FrameErrorReporter.md#rustdoc-item-309) — Collapses repeated frame errors per message.
- [`FrameMetricHandles`](struct.FrameMetricHandles.md#rustdoc-item-313) — The two `metrics` handles a frame records through, resolved once.
- [`FrameStatistics`](struct.FrameStatistics.md#rustdoc-item-311) — The frame rate, measured over the window the frame loop reports at.
- [`Runtime`](struct.Runtime.md#rustdoc-item-235) — The engine and the frame state every build needs.

### Enums
- [`PackSource`](enum.PackSource.md#rustdoc-item-498) — Where a project's asset pack came from, which the mount logs.

### Traits
- [`FrameDriver`](trait.FrameDriver.md#rustdoc-item-272) — What a frontend's loop needs from whatever runs the game.
- [`WindowedFrameDriver`](trait.WindowedFrameDriver.md#rustdoc-item-275) — What a frontend needs from a driver that draws through a renderer.

### Functions
- [`insert_debug_resources`](fn.insert_debug_resources.md#rustdoc-item-549) — Insert the debug-drawing and picking resources into `world`, each only
- [`mount_asset_pack`](fn.mount_asset_pack.md#rustdoc-item-551) — Parses an asset pack and indexes every asset in it.
- [`set_surface_camera`](fn.set_surface_camera.md#rustdoc-item-547) — Writes `binding` for surface `id` into the world's
- [`setup`](fn.setup.md#rustdoc-item-314) — Create the engine and initialize a statically linked project, mounting the
- [`setup_with_asset_database`](fn.setup_with_asset_database.md#rustdoc-item-315) — Create the engine and initialize a statically linked project whose pack has

### Constants
- [`FRAME_ERROR_REPORT_INTERVAL`](constant.FRAME_ERROR_REPORT_INTERVAL.md#rustdoc-item-282) — Minimum interval between repeated frame-error reports.
- [`FRAME_REPORT_INTERVAL_SECONDS`](constant.FRAME_REPORT_INTERVAL_SECONDS.md#rustdoc-item-285) — How long one frame-statistics window lasts, in seconds.
