<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-805"></a>

# Function `pill_player::telemetry::report_failure`

```rust
pub fn report_failure(failed_operation: &str, error: &dyn std::error::Error + 'static);
```

Source: `hosting\pill_player\src\telemetry.rs:336`

Reports a frontend failure to the engine's log, with its whole cause chain.

A frontend reports a failure where it happens rather than only returning
it: dropping a development run unmaps module images, so a report made
afterwards may never reach the console. `failed_operation` names the
operation that failed. The cause chain names the reason, since the outer
message names only the operation.
