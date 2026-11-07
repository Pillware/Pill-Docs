<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5044"></a>

# Function `pill_engine_core::hot_patch::record_panic`

```rust
pub fn record_panic(function: &str, message: &str);
```

Source: `engine\pill_engine_core\src\hot_patch.rs:108`

Counts one panicking invocation of `function`.

On the [`PANIC_ROLLBACK_FRAMES`](constant.PANIC_ROLLBACK_FRAMES.md#rustdoc-item-5005)-th panic in a row, the function is queued
once in a [`FaultReport`](struct.FaultReport.md#rustdoc-item-5008). Reporting stops at that number, so a host that
could not roll the function back is told once instead of every frame. Only
a call that does not panic (a rollback, or a fresh patch) clears the count
and lets a new report happen.
