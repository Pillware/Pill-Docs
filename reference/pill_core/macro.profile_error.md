<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2126"></a>

# Macro `pill_core::profile_error`

```rust
macro_rules! profile_error {
    ($($arg:tt)*) => { ... };
}
```

Source: `engine\pill_core\src\profiling.rs:1252`

Emits an error message (red) at the current point in the trace.
Only active under `profiling`.
