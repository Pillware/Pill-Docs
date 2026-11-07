<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2129"></a>

# Macro `pill_core::dev_warn`

```rust
macro_rules! dev_warn {
    ($($arg:tt)*) => { ... };
}
```

Source: `engine\pill_core\src\lib.rs:148`

Writes a temporary developer warning at `WARN` level on the `engine::dev`
lane. Only available with the `dev-logs` feature.
