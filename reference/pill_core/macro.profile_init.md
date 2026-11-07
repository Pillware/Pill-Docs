<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2116"></a>

# Macro `pill_core::profile_init`

```rust
macro_rules! profile_init {
    () => { ... };
}
```

Source: `engine\pill_core\src\profiling.rs:907`

Creates the shared Tracy client handle. Safe to call more than once.
Active under both `profiling` and `profiling-minimal`.
