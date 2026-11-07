<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-4001"></a>

# Constant `pill_engine_core::diagnostics::DEFAULT_REPORT_INTERVAL`

```rust
pub const DEFAULT_REPORT_INTERVAL: std::time::Duration = _;
```

Source: `engine\pill_engine_core\src\diagnostics.rs:53`

How often the report prints when a project turns it on.

This is a wall-clock interval, not a frame count. A frame count would print
at whatever rate the project happens to run at, while a duration prints at
the same rate in every project. It is the interval
[`Engine::set_ecs_diagnostics_interval`] is normally given; the engine
itself registers nothing until that setter is called.

[`Engine::set_ecs_diagnostics_interval`]: ../engine/struct.Engine.md#rustdoc-item-4000
