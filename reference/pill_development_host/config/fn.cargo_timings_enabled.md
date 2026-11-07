<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1260"></a>

# Function `pill_development_host::config::cargo_timings_enabled`

```rust
pub(crate) fn cargo_timings_enabled() -> bool;
```

Visibility: `crate` · Source: `hosting\pill_development_host\src\config.rs:1521`

Whether host-driven cargo builds should emit a timing report.

[`host_cargo_command`](fn.host_cargo_command.md#rustdoc-item-1259) reads the variable, and the analytics collector
reads the report cargo then writes, so the flag cannot be set on one side
and silently unread on the other.
