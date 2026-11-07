<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-354"></a>

# Function `pill_csharp_bridge::abi::ffi_csharp_zone_begin`

```rust
pub(in abi) extern "C" fn ffi_csharp_zone_begin(name: *const u8, name_len: u32) -> u64;
```

Visibility: `{'restricted': {'parent': 6, 'path': '::abi'}}` · Source: `csharp\pill_csharp_bridge\src\abi.rs:463`

Opens a dynamic managed Tracy zone and returns the token that names it.
