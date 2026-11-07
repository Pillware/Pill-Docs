<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5045"></a>

# Function `pill_engine_core::hot_patch::panic_into_failure`

```rust
pub fn panic_into_failure(name: &str, payload: Box<dyn Any + Send>) -> crate::error::SystemError;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:161`

Turns a caught panic payload into the system failure the engine records.

The payload comes from another artifact's copy of `std`, so only the two
shapes `panic!` produces are read: `&'static str` and `String`. Any other
payload still counts as a panic and is recorded as `non-string panic
payload`. Recording it here keeps attribution in one place: the dispatcher
knows the function's name, and the host only reads the reports.
