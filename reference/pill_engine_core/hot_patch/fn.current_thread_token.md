<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-5210"></a>

# Function `pill_engine_core::hot_patch::current_thread_token`

```rust
pub(in hot_patch) fn current_thread_token() -> u64;
```

Visibility: `{'restricted': {'parent': 5000, 'path': '::hot_patch'}}` · Source: `engine\pill_engine_core\src\hot_patch.rs:606`

A numeric identity for the current thread.

`ThreadId` has no stable integer form on stable Rust, so the address of a
thread-local is used instead. It is different for each thread and stays the
same within one.
