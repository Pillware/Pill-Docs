<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-748"></a>

# Module `pill_player::telemetry`

Visibility: `crate` · Source: `hosting\pill_player\src\telemetry.rs:1`

Application telemetry bootstrap for every frontend.
Application telemetry bootstrap for every frontend.

## Responsibilities

- Install the shared [`pill_core::telemetry`] subscriber stack - terminal,
  optional rolling file, optional console capture, optional Tracy - with
  the default engine filter.
- Apply a project's logging settings - the `logging:` section of its
  `project_settings.yaml` - over those defaults once the project is known
  ([`apply_logging_settings`](fn.apply_logging_settings.md#rustdoc-item-804)).
- Install the shared metrics recorder when the `metrics` feature is on.
- Report a frontend failure with its whole cause chain ([`report_failure`](fn.report_failure.md#rustdoc-item-805)).

## Design

Every executable links this crate, so it owns the telemetry entry point
that all frontends share. Logging verbosity (terminal and file) is
independent of Tracy: `profile::*` spans are routed only when the
`profiling` feature is active, and their filter never sees a terminal log
level.

Telemetry starts before the project's settings are read, so nothing logged
while finding the project is lost. The settings are applied afterwards and
reload the filters in place. They come in as [`LoggingSettings`](struct.LoggingSettings.md#rustdoc-item-698), already
checked: this crate reads no YAML, so the development host parses the
settings file and a shipping bundle carries them as text.

## Module contents

### Structs
- [`LoggingSettings`](struct.LoggingSettings.md#rustdoc-item-698) — A project's logging settings, read from the `logging:` section of its

### Functions
- [`apply_logging_settings`](fn.apply_logging_settings.md#rustdoc-item-804) — Applies a project's logging settings to the installed stack, both lanes.
- [`file_defaults`](fn.file_defaults.md#rustdoc-item-799) — Returns the file lane's filter before any project settings: the engine's,
- [`init_telemetry`](fn.init_telemetry.md#rustdoc-item-744) — Installs the engine telemetry stack and returns its reload handles.
- [`init_telemetry_with_capture`](fn.init_telemetry_with_capture.md#rustdoc-item-802) — Installs the telemetry stack like [`init_telemetry`], plus an optional
- [`report_failure`](fn.report_failure.md#rustdoc-item-805) — Reports a frontend failure to the engine's log, with its whole cause chain.
- [`terminal_defaults`](fn.terminal_defaults.md#rustdoc-item-798) — Returns the terminal lane's filter before any project settings.

### Statics
- [`TELEMETRY_HANDLES`](static.TELEMETRY_HANDLES.md#rustdoc-item-745) — The handles of the installed stack, kept so the project's settings can
