<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1883"></a>

# Function `pill_csharp_bridge::queries::ffi_entity_count`

```rust
pub(crate) extern "C" fn ffi_entity_count(count_output: *mut u32) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\queries.rs:498`

Panic-guarded entry point for [`ffi_entity_count_guarded`](fn.ffi_entity_count_guarded.md#rustdoc-item-1882).

A panic that crosses the `extern "C"` boundary aborts the process. This
wrapper logs the panic and answers `5` instead, so the failure is recorded
against the running system and the host keeps running.
