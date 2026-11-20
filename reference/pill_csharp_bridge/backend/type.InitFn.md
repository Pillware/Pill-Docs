<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-407"></a>

# Type alias `pill_csharp_bridge::backend::InitFn`

```rust
pub(in backend) type InitFn = extern "System" fn (_: *const super::abi::CsEngineApi) -> u8;
```

Visibility: `{'restricted': {'parent': 403, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:133`

Signature of the managed runtime entry point that receives the API table.
