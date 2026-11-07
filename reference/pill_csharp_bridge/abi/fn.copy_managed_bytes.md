<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-351"></a>

# Function `pill_csharp_bridge::abi::copy_managed_bytes`

```rust
pub(in abi) fn copy_managed_bytes(managed_buffer: *const u8, managed_buffer_length: u32) -> Vec<u8>;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:405`

Copies `managed_buffer_length` bytes of a managed buffer into an owned
vector.

A null buffer, or a length of zero, gives an empty vector.
