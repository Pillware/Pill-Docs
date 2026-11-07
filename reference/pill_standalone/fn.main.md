<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-308"></a>

# Function `pill_standalone::main`

```rust
pub(crate) fn main() -> miette::Result<()>;
```

Visibility: `crate` · Source: `frontends\pill_standalone\src\main.rs:106`

Installs the report handler, runs the project, and turns a failure into a
report.

The telemetry stack is installed before the run loop starts, so a failure is
logged to the terminal and, when one is configured, to the log file.

## Errors

Returns the configuration failure as a report when the project's settings
are missing or invalid. Otherwise, returns the styled [`engine_report`] of
the failure that ended the run, after also logging that failure to the
tracing output, so it can be matched with the active spans and log files.
