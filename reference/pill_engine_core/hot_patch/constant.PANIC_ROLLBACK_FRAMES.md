<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5005"></a>

# Constant `pill_engine_core::hot_patch::PANIC_ROLLBACK_FRAMES`

```rust
pub const PANIC_ROLLBACK_FRAMES: u32 = 3;
```

Source: `engine\pill_engine_core\src\hot_patch.rs:75`

Consecutive panicking invocations after which a patched function's host
rolls it back.

A system runs once per frame, so three panicking invocations in a row are
three panicking frames. This code counts invocations because it has no
frame counter of its own, and the dispatcher is the only place that knows
which function failed.
