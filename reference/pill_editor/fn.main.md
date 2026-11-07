<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1596"></a>

# Function `pill_editor::main`

```rust
pub(crate) fn main() -> miette::Result<()>;
```

Visibility: `crate` · Source: `editor\pill_editor\src\main.rs:88`

Runs the editor and reports its final error once.

## Errors

Returns a styled report built by [`engine_report`] when the run ends with
an error. Before that, the failure is also sent to the log, so it appears
inside any active spans and in the log files.
