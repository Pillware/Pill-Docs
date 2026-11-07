<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-723"></a>

# Function `pill_csharp_bridge::commands::ffi_reserve_entity`

```rust
pub(crate) extern "C" fn ffi_reserve_entity(entity_output: *mut pill_engine::Entity) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\commands.rs:110`

Panic-guarded entry point for [`ffi_reserve_entity_guarded`](fn.ffi_reserve_entity_guarded.md#rustdoc-item-722).

A panic that crosses the `extern "C"` boundary would abort the process.
This catches it, logs it, and returns `6` instead, which the managed side
reports as a failure of the running system, so the host keeps running.
