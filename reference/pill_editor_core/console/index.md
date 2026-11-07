<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2194"></a>

# Module `pill_editor_core::console`

Source: `editor\pill_editor_core\src\console.rs:1`

The Console tab's history, channels and filters.
The Console tab's history and the filters that narrow it.

## Responsibilities

- Keep the lines the executable captures: owned strings, oldest first,
  capped at [`CONSOLE_LINES_MAX`].
- Sort every line into the engine channel or the game channel, so a
  project's own messages can be read apart from the engine's.
- Define the filter state (lowest level shown, search text, channel) that
  the shell's tab edits and the scripted channel also sets.

## Design

A world resource, filled by the executable each frame from the telemetry
capture ring and read by the shell's tab. Every string is owned: the
capture ring lives in `pill_core`, but the tab outlives any module image
that happened to log a line, and a borrowed target would dangle across a
reload.

## Module contents

### Structs
- [`ConsoleFilterSettings`](struct.ConsoleFilterSettings.md#rustdoc-item-2064) — The filters the Console tab edits.
- [`ConsoleLine`](struct.ConsoleLine.md#rustdoc-item-2013) — One console row, with owned strings.
- [`ConsoleState`](struct.ConsoleState.md#rustdoc-item-2059) — The console's history: the captured lines, the filters that narrow them,
- [`ConsoleView`](struct.ConsoleView.md#rustdoc-item-1960) — What the Console tab draws: the filters in force and the rows they leave.

### Enums
- [`ConsoleChannel`](enum.ConsoleChannel.md#rustdoc-item-1964) — Which side of the running program a line came from.

### Functions
- [`level_from_name`](fn.level_from_name.md#rustdoc-item-2193) — The capture level a name stands for, or `None` when the name is not one of
- [`level_name`](fn.level_name.md#rustdoc-item-2192) — The short name of a capture level: `trace`, `debug`, `info`, `warn` or

### Constants
- [`CONSOLE_LINES_MAX`](constant.CONSOLE_LINES_MAX.md#rustdoc-item-1958) — How many lines the history keeps; older ones drop off.
- [`CONSOLE_VIEW_ROWS`](constant.CONSOLE_VIEW_ROWS.md#rustdoc-item-1961) — How many rows a [`ConsoleView`] carries: the newest rows the filters leave.
- [`ENGINE_PREFIXES`](constant.ENGINE_PREFIXES.md#rustdoc-item-1959) — The prefixes the engine's own code logs under.
