<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-790"></a>

# Function `pill_core::error::report::install_engine_report_handler`

```rust
pub fn install_engine_report_handler();
```

Source: `engine\pill_core\src\error\report.rs:159`

Installs the engine report handler as miette's process-wide hook.

Call it once at the top-level reporting boundary, before anything prints a
report.
