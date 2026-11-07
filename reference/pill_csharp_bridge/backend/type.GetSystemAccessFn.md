<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-415"></a>

# Type alias `pill_csharp_bridge::backend::GetSystemAccessFn`

```rust
pub(in backend) type GetSystemAccessFn = extern "System" fn (_: u32, _: u32, _: *mut super::abi::NativeSystemAccess) -> u8;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:155`

Signature copying one system's reflected accesses into a caller buffer.
