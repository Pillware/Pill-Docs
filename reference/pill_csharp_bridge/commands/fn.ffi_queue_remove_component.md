<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-732"></a>

# Function `pill_csharp_bridge::commands::ffi_queue_remove_component`

```rust
pub(crate) extern "C" fn ffi_queue_remove_component(entity: *const pill_engine::Entity, key_low: u64, key_high: u64) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\commands.rs:364`

Panic-guarded entry point for [`ffi_queue_remove_component_guarded`](fn.ffi_queue_remove_component_guarded.md#rustdoc-item-731).

A panic that crosses the `extern "C"` boundary would abort the process.
This catches it, logs it, and returns `6` instead, which the managed side
reports as a failure of the running system, so the host keeps running.
