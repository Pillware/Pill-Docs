<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-2130"></a>

# Macro `pill_core::dev_error`

```rust
macro_rules! dev_error {
    ($($arg:tt)*) => { ... };
}
```

Source: `engine\pill_core\src\lib.rs:166`

Writes a temporary developer error at `ERROR` level on the `engine::dev`
lane. Only available with the `dev-logs` feature.
