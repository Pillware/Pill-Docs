<!-- This file is generated. Do not edit it directly. -->

<a id="rustdoc-item-418"></a>

# Type alias `pill_csharp_bridge::backend::CopySystemErrorMessageFn`

```rust
pub(in backend) type CopySystemErrorMessageFn = extern "System" fn (_: u32, _: *mut u8, _: u32) -> u8;
```

Visibility: `{'restricted': {'parent': 400, 'path': '::backend'}}` · Source: `csharp\pill_csharp_bridge\src\backend.rs:164`

Signature copying one system's last error message into a caller buffer.
