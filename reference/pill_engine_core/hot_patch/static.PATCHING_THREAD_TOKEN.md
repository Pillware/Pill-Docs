<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5209"></a>

# Static `pill_engine_core::hot_patch::PATCHING_THREAD_TOKEN`

```rust
pub(in hot_patch) static PATCHING_THREAD_TOKEN: std::sync::atomic::AtomicU64 = _;
```

Visibility: `{'restricted': {'parent': 5000, 'path': '::hot_patch'}}` · Source: `engine\pill_engine_core\src\hot_patch.rs:599`

The thread allowed to rewrite live code, declared by the host each frame.

Patching assumes no thread is executing inside the bytes being overwritten.
The host meets that by patching at a frame boundary with no system running,
but nothing enforces the rule if it is only written down. Recording the
thread makes it checkable: a second thread that attempts a patch is refused
instead of racing the first.
