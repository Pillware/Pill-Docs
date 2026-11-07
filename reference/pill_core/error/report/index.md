<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-718"></a>

# Module `pill_core::error::report`

Visibility: `{'restricted': {'parent': 612, 'path': '::error'}}` · Source: `engine\pill_core\src\error\report.rs:1`

Turns engine errors into miette reports that print their message with
terminal styling.

## Responsibilities

- Wrap one engine error so a miette report prints its message with terminal
  styling but still carries the error's codes, labels and sources.
- Install the engine's report handler as miette's process-wide hook.

## Design

An error's own `Display` stays plain text. [`engine_report`](fn.engine_report.md#rustdoc-item-761) adds the
styling through [`StyledDiagnosticProxy`](struct.StyledDiagnosticProxy.md#rustdoc-item-719), so an error type never needs to
know how it is printed.

## Module contents

### Structs
- [`EngineReportHandler`](struct.EngineReportHandler.md#rustdoc-item-762) — Prints a report in the terminal, using miette's graphical layout over the
- [`StyledDiagnosticProxy`](struct.StyledDiagnosticProxy.md#rustdoc-item-719) — Prints an engine error's message with terminal styling for a report.

### Functions
- [`engine_report`](fn.engine_report.md#rustdoc-item-761) — Turns one engine error into a miette report whose message is printed with
- [`install_engine_report_handler`](fn.install_engine_report_handler.md#rustdoc-item-790) — Installs the engine report handler as miette's process-wide hook.
