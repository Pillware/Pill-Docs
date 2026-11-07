<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1881"></a>

# Function `pill_csharp_bridge::queries::ffi_get_entity_chunk`

```rust
pub(crate) extern "C" fn ffi_get_entity_chunk(chunk_index: u32, chunk_output: *mut super::abi::ComponentChunk) -> u8;
```

Visibility: `crate` · Source: `csharp\pill_csharp_bridge\src\queries.rs:459`

Panic-guarded entry point for [`ffi_get_entity_chunk_guarded`](fn.ffi_get_entity_chunk_guarded.md#rustdoc-item-1880).

A panic that crosses the `extern "C"` boundary aborts the process. This
wrapper logs the panic and answers `5` instead, so the failure is recorded
against the running system and the host keeps running.
