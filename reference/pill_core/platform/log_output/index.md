<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1213"></a>

# Module `pill_core::platform::log_output`

Source: `engine\pill_core\src\platform\log_output.rs:1`

Where log output goes: terminal and file on native, the console on the web.
Where log output goes on every target.

## Responsibilities

- Provide the terminal writer: stdout on native, the browser console on the
  web.
- Start the file writer: on native, a log that goes to a new file each day,
  written by a background thread. The web has no filesystem, so it reports
  an error.

## Design

Only this module chooses the writer for each target.
[`TelemetryBuilder`](../../telemetry/struct.TelemetryBuilder.md#rustdoc-item-1212) builds the
subscriber from these items, so its own code is the same everywhere.

## Module contents

### Functions
- [`open_file_output`](fn.open_file_output.md#rustdoc-item-1210) — Opens the log file in `directory` and returns its writer and guard. Keep
- [`terminal_writer`](fn.terminal_writer.md#rustdoc-item-1209) — Returns stdout as the terminal writer.

### Type aliases
- [`FileGuard`](type.FileGuard.md#rustdoc-item-1207) — Keeps the file writer's background thread alive. Dropping it writes out the
- [`FileWriter`](type.FileWriter.md#rustdoc-item-1205) — The file writer on native: a non-blocking writer over a log that is split
- [`TerminalWriter`](type.TerminalWriter.md#rustdoc-item-1203) — The terminal writer on native: stdout.
