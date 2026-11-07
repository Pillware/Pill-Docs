<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2121"></a>

# Macro `pill_core::profile_non_continuous_frame`

```rust
macro_rules! profile_non_continuous_frame {
    ($name:literal) => { ... };
}
```

Source: `engine\pill_core\src\profiling.rs:1140`

Begins a non-continuous frame (a one-shot operation, not in a loop).
Returns an RAII guard that ends the frame on drop.
Active under both `profiling` and `profiling-minimal`.
