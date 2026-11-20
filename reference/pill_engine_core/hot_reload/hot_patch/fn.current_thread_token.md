<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-6763"></a>

# Function `pill_engine_core::hot_reload::hot_patch::current_thread_token`

```rust
pub(in hot_reload::hot_patch) fn current_thread_token() -> u64;
```

Visibility: `{'restricted': {'parent': 6553, 'path': '::hot_reload::hot_patch'}}` · Source: `engine\pill_engine_core\src\hot_reload\hot_patch.rs:606`

A numeric identity for the current thread.

`ThreadId` has no stable integer form on stable Rust, so the address of a
thread-local is used instead. It is different for each thread and stays the
same within one.
