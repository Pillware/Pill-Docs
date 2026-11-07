<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-737"></a>

# Module `pill_player::system_specs`

Visibility: `crate` · Source: `hosting\pill_player\src\system_specs.rs:1`

The start-up report of the machine the engine runs on.
The start-up report of the machine the engine runs on.

## Responsibilities

- Reports CPU, memory, storage and OS through the telemetry stack when a
  [`crate::Runtime`](../runtime/struct.Runtime.md#rustdoc-item-235) is created.

## Design

The report lives in the player, which is linked into executables, and not
in the engine core. `sysinfo` reaches the system through the `windows`
crate, whose functions are `raw-dylib` imports naming about seventy system
DLLs (rustc creates the import library for each DLL when it links). A
shared `pill_engine_core.dll` that carried those imports would make every
hot patch generate an import library for each DLL.

## Module contents

### Functions
- [`format_uptime`](fn.format_uptime.md#rustdoc-item-742) — Formats a duration in whole seconds as a compact `Nd Nh Nm` string.
- [`os_pretty_name`](fn.os_pretty_name.md#rustdoc-item-743) — Returns the OS name and version with the build architecture.
- [`percent`](fn.percent.md#rustdoc-item-739) — `used` as a percentage of `total`, or `0.0` when there is nothing to divide
- [`report_machine_specs`](fn.report_machine_specs.md#rustdoc-item-738) — Reports the detected hardware through the telemetry stack.
- [`storage_report_lines`](fn.storage_report_lines.md#rustdoc-item-740) — Builds the `Storage` branch of the system report: one line per detected

### Constants
- [`BYTES_PER_GIBIBYTE`](constant.BYTES_PER_GIBIBYTE.md#rustdoc-item-736) — Bytes in one gibibyte, the unit every memory and storage figure is in.
