<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5039"></a>

# Static `pill_engine_core::hot_patch::PANIC_STREAKS`

```rust
pub(in hot_patch) static PANIC_STREAKS: std::sync::Mutex<Option<std::collections::HashMap<String, (u32, String)>>> = _;
```

Visibility: `{'restricted': {'parent': 5000, 'path': '::hot_patch'}}` · Source: `engine\pill_engine_core\src\hot_patch.rs:93`

Consecutive panic count per function, with the last message seen.

This map is only locked while some function has panicked at least once, so a
process where nothing panics pays nothing for it but one relaxed load (see
[`record_success`](fn.record_success.md#rustdoc-item-5038)).
