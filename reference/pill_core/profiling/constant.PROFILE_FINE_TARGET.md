<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1372"></a>

# Constant `pill_core::profiling::PROFILE_FINE_TARGET`

```rust
pub const PROFILE_FINE_TARGET: &str = crate::telemetry::telemetry_target::PROFILE_FINE;
```

Source: `engine\pill_core\src\profiling.rs:48`

The `tracing` target that filters the fine investigative lane
(`profile::fine`).

It is turned on only when the telemetry builder was asked for fine
profiling. Fine zones change the timing they measure, so they stay off by
default.
