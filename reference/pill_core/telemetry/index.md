<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1726"></a>

# Module `pill_core::telemetry`

Source: `engine\pill_core\src\telemetry.rs:1`

Telemetry foundation: the log targets, the log filter, the line formatter
and the subscriber builder.
One `tracing` system for the engine: three lanes of log targets feeding
configurable output layers.

## Responsibilities

- Define the static tracing targets: developer logs (`engine::dev`), engine
  logs (`engine::*`) and the profiling lanes (`profile::*`).
- Turn a [`LoggingConfig`] into a strict `EnvFilter`, and hand out reload
  handles so a filter can be replaced while the host runs.
- Own the [`EngineTerminalFormatter`], which decides how a line looks:
  level, target, message, fields, timestamp and source location.
- Hold the process-wide [`TimestampFormat`] and the source-location switch
  ([`set_show_source_location`]), so every DLL writes lines the same way.
- Assemble the subscriber stack (terminal, optional file, optional capture
  ring, optional Tracy) through [`TelemetryBuilder`], each layer filtered on
  its own.

## Design

The engine logs through `tracing`; each output layer decides where a line
goes and how it looks. A lane is a group of targets, and the three lanes
stay apart:

- `engine::dev` - scratch developer logs from `log!`/`dev_warn!`/`dev_error!`,
  feature-gated behind `dev-logs`.
- `engine::*` - permanent structured engine logs.
- `profile::*` - profiling spans. A `TracyZone` asks the Tracy layer's
  filter whether its target is enabled, independently of terminal verbosity.

## Module contents

### Modules
- [`capture`](capture/index.md#rustdoc-item-1605) — Bounded in-process log capture for the editor console.
- [`telemetry_target`](telemetry_target/index.md#rustdoc-item-1716) — Static `tracing` targets used by instrumentation callsites.

### Structs
- [`EngineTerminalFormatter`](struct.EngineTerminalFormatter.md#rustdoc-item-1817) — Line formatting layer for `tracing` events, used by the terminal and file
- [`LoggingConfig`](struct.LoggingConfig.md#rustdoc-item-1729) — Per-target logging levels expressed as strict `EnvFilter` directives.
- [`StyledFieldVisitor`](struct.StyledFieldVisitor.md#rustdoc-item-1861) — `tracing` visitor that collects the message and the structured fields
- [`TelemetryBuilder`](struct.TelemetryBuilder.md#rustdoc-item-1202) — Configures and installs the engine's telemetry subscriber stack.
- [`TelemetryHandles`](struct.TelemetryHandles.md#rustdoc-item-1921) — Handles returned by [`TelemetryBuilder::init`] for live configuration.

### Enums
- [`TelemetryError`](enum.TelemetryError.md#rustdoc-item-1737) — Configuration or installation failures of the telemetry stack.
- [`TimestampFormat`](enum.TimestampFormat.md#rustdoc-item-1770) — How the local time at the start of every log line is written.

### Functions
- [`log_block`](fn.log_block.md#rustdoc-item-2017) — Join a heading and its lines into one multi-line log message.
- [`log_block_colored`](fn.log_block_colored.md#rustdoc-item-1717) — Join a heading and its lines into one multi-line log message, where any
- [`paint`](fn.paint.md#rustdoc-item-2026) — Applies `style` to `text` when the writer accepts ANSI escapes, and returns
- [`reload_filter`](fn.reload_filter.md#rustdoc-item-2028) — Replace one layer's live filter, reporting a refused reload.
- [`set_show_source_location`](fn.set_show_source_location.md#rustdoc-item-1814) — Set whether every later log line ends with its source location.
- [`set_timestamp_format`](fn.set_timestamp_format.md#rustdoc-item-1769) — Set how every later log line writes its time.
- [`show_source_location`](fn.show_source_location.md#rustdoc-item-1815) — Whether log lines currently end with their source location.
- [`strip_color_codes`](fn.strip_color_codes.md#rustdoc-item-2019) — `text` without its ANSI escape sequences (`ESC [ ... letter`). A layer that
- [`styled_level`](fn.styled_level.md#rustdoc-item-2022) — Severity color mapping owned by the terminal formatter.
- [`styled_target`](fn.styled_target.md#rustdoc-item-2023) — Target styling owned by the terminal formatter.
- [`timestamp_format`](fn.timestamp_format.md#rustdoc-item-1811) — How log lines currently write their time.
- [`timestamp_format_from_discriminant`](fn.timestamp_format_from_discriminant.md#rustdoc-item-1810) — Decodes a stored discriminant; `None` for a byte no variant wrote.

### Type aliases
- [`FileLayer`](type.FileLayer.md#rustdoc-item-1902) — Concrete file layer type: the custom formatter over the platform's file writer.
- [`FileLayerArtifacts`](type.FileLayerArtifacts.md#rustdoc-item-1903) — The three values the optional file layer produces: its layer, the file
- [`TerminalLayer`](type.TerminalLayer.md#rustdoc-item-1894) — Concrete terminal layer type: the custom formatter over `Stdout`.
- [`TerminalStack`](type.TerminalStack.md#rustdoc-item-1900) — Registry type after the terminal layer is attached.

### Constants
- [`BLOCK_GUTTER`](constant.BLOCK_GUTTER.md#rustdoc-item-2020) — The prefix every body line of a block carries, drawn in the timestamp's color.
- [`DEV_LOG_TARGET`](constant.DEV_LOG_TARGET.md#rustdoc-item-1720) — Target of the simple developer logging macros (`log!`, `dev_warn!`, `dev_error!`).
- [`FIELD_SEPARATOR`](constant.FIELD_SEPARATOR.md#rustdoc-item-1723) — The text between a line's message and its fields.
- [`IGNORED_LOG_TARGETS`](constant.IGNORED_LOG_TARGETS.md#rustdoc-item-2025) — `log` targets the bridge drops, each with the reason it is noise.
- [`LEVEL_WIDTH`](constant.LEVEL_WIDTH.md#rustdoc-item-2021) — The column width of the level, padded to the widest name (`ERROR`, `DEBUG`).
- [`MODULE_FIELD_NAMES`](constant.MODULE_FIELD_NAMES.md#rustdoc-item-2024) — Field names whose value names a module. Such a value is highlighted so the
- [`PROFILE_COARSE_TARGET`](constant.PROFILE_COARSE_TARGET.md#rustdoc-item-1721) — The target of the coarse profiling lane.
- [`PROFILE_FINE_TARGET`](constant.PROFILE_FINE_TARGET.md#rustdoc-item-1722) — The target of the fine investigative profiling lane.

### Statics
- [`SHOW_SOURCE_LOCATION`](static.SHOW_SOURCE_LOCATION.md#rustdoc-item-1812) — Whether log lines end with the `file:line` that emitted them. Off by
- [`TIMESTAMP_FORMAT`](static.TIMESTAMP_FORMAT.md#rustdoc-item-1808) — The active [`TimestampFormat`], as the discriminant it declares.

## Re-exports

- `pub use colored::Colorize;`
