<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2124"></a>

# Macro `pill_core::profile_message`

```rust
macro_rules! profile_message {
    ($($arg:tt)*) => { ... };
}
```

Source: `engine\pill_core\src\profiling.rs:1216`

Emits a diagnostic message (white) at the current point in the trace.
Only active under `profiling` (not `profiling-minimal`).
