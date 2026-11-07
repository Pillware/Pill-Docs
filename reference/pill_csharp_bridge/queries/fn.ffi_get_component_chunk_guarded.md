<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-1876"></a>

# Function `pill_csharp_bridge::queries::ffi_get_component_chunk_guarded`

```rust
pub(in queries) fn ffi_get_component_chunk_guarded(stable_id_low: u64, stable_id_high: u64, request_mode: u8, chunk_index: u32, chunk_output: *mut super::abi::ComponentChunk) -> u8;
```

Visibility: `{'restricted': {'parent': 1872, 'path': '::queries'}}` · Source: `csharp\pill_csharp_bridge\src\queries.rs:164`

Return a component chunk to managed code after checking the system's
declared access.

`Engine.TryGetChunk` on the managed side reads these status codes:

- `0`: nothing to serve, so iteration ends.
- `1`: the output holds a complete chunk.
- `2`: the component is unknown, or a module binding no longer matches the
  live column's element size.
- `3`: no managed system is running on this thread.
- `4`: the running system did not declare the requested access.
- `5`: the caller passed no output buffer. Managed code maps this to an
  `ArgumentException`, because its own call sites always pass a real one.
