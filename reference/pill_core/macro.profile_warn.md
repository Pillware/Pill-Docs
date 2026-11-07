<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2125"></a>

# Macro `pill_core::profile_warn`

```rust
macro_rules! profile_warn {
    ($($arg:tt)*) => { ... };
}
```

Source: `engine\pill_core\src\profiling.rs:1234`

Emits a warning message (orange) at the current point in the trace.
Only active under `profiling`.
