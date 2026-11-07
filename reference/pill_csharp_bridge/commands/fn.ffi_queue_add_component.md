<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-730"></a>

# Function `pill_csharp_bridge::commands::ffi_queue_add_component`

```rust
pub(crate) extern "C" fn ffi_queue_add_component(entity: *const pill_engine::Entity, key_low: u64, key_high: u64, blob_bytes: *const u8, blob_size: u32) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\commands.rs:321`

Panic-guarded entry point for [`ffi_queue_add_component_guarded`](fn.ffi_queue_add_component_guarded.md#rustdoc-item-729).

A panic that crosses the `extern "C"` boundary would abort the process.
This catches it, logs it, and returns `6` instead, which the managed side
reports as a failure of the running system, so the host keeps running.
