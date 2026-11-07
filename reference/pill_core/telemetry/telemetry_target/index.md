<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1716"></a>

# Module `pill_core::telemetry::telemetry_target`

Source: `engine\pill_core\src\telemetry.rs:69`

Static `tracing` targets used by instrumentation callsites.

A callsite names one of these constants. The strings never change, so a log
filter can select a target by its name.

## Module contents

### Constants
- [`CSHARP`](constant.CSHARP.md#rustdoc-item-1713) — Lines forwarded from managed C# code through the bridge.
- [`ECS`](constant.ECS.md#rustdoc-item-1707) — ECS world and scheduler activity.
- [`EDITOR`](constant.EDITOR.md#rustdoc-item-1712) — The editor and its panels: the executable, its shared core and the
- [`ENGINE`](constant.ENGINE.md#rustdoc-item-1703) — The main engine lifecycle.
- [`HOT_RELOAD`](constant.HOT_RELOAD.md#rustdoc-item-1704) — Hot-reload coordination.
- [`INPUT`](constant.INPUT.md#rustdoc-item-1706) — Input handling.
- [`LINK`](constant.LINK.md#rustdoc-item-1705) — Startup of the statically linked project and its modules, which a
- [`PROFILE_COARSE`](constant.PROFILE_COARSE.md#rustdoc-item-1714) — The coarse profiling lane, for frame, system and pass zones.
- [`PROFILE_FINE`](constant.PROFILE_FINE.md#rustdoc-item-1715) — The fine profiling lane, for temporary deep investigation.
- [`RENDERING`](constant.RENDERING.md#rustdoc-item-1709) — Renderer activity.
- [`RESOURCES`](constant.RESOURCES.md#rustdoc-item-1711) — Resource loading and storage.
- [`SYSTEM`](constant.SYSTEM.md#rustdoc-item-1708) — Hardware detection and startup configuration reporting.
- [`UI`](constant.UI.md#rustdoc-item-1710) — The in-game UI, which mirrors textures and publishes draw lists.
