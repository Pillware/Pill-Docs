<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2128"></a>

# Macro `pill_core::log`

```rust
macro_rules! log {
    ($($arg:tt)*) => { ... };
}
```

Source: `engine\pill_core\src\lib.rs:130`

Writes a temporary developer log at `DEBUG` level on the `engine::dev`
lane ([`DEV_LOG_TARGET`]).

Only available with the `dev-logs` feature. Without it the macro expands
to nothing. Use these macros for diagnostics while developing, never for
permanent telemetry.

[`DEV_LOG_TARGET`]: telemetry/constant.DEV_LOG_TARGET.md#rustdoc-item-1720
