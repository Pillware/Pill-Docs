<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-3589"></a>

# Function `pill_engine_core::config::print_parallel_config`

```rust
pub fn print_parallel_config();
```

Source: `engine\pill_engine_core\src\config.rs:203`

Reports the active parallel-iterator settings through the telemetry stack.

The report lists the Rayon pool size, the work-group duration target, the
averaging window, the default slice size and the minimum slice size. It
goes to the `telemetry_target::SYSTEM` target, the same one the runtime's
hardware report uses.

Called during [`Engine::new`](../engine/struct.Engine.md#rustdoc-item-3588).
