<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6593"></a>

# Static `pill_engine_core::hot_reload::hot_patch::FLAKY_FUNCTION_COUNT`

```rust
pub(in hot_reload::hot_patch) static FLAKY_FUNCTION_COUNT: std::sync::atomic::AtomicUsize = _;
```

Visibility: `{'restricted': {'parent': 6553, 'path': '::hot_reload::hot_patch'}}` · Source: `engine\pill_engine_core\src\hot_reload\hot_patch.rs:96`

How many functions currently have a panic count above zero.
