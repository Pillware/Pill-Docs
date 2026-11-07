<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-728"></a>

# Function `pill_csharp_bridge::commands::ffi_queue_destroy`

```rust
pub(crate) extern "C" fn ffi_queue_destroy(entity: *const pill_engine::Entity) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\commands.rs:271`

Panic-guarded entry point for [`ffi_queue_destroy_guarded`](fn.ffi_queue_destroy_guarded.md#rustdoc-item-727).

A panic that crosses the `extern "C"` boundary would abort the process.
This catches it, logs it, and returns `6` instead, which the managed side
reports as a failure of the running system, so the host keeps running.
